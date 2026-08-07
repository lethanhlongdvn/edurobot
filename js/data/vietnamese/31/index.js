export const lesson31 = {
    "topic": "Tiếng Việt 5",
    "week": "5",
    "period": "31",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN TẢ PHONG CẢNH",
    "desc": "Bài học giúp học sinh phân tích cấu trúc bài văn tả phong cảnh qua bài mẫu 'Đà Lạt', hiểu trình tự miêu tả, cách lựa chọn hình ảnh tiêu biểu, từ đó rút ra dàn ý và lưu ý quan trọng khi viết văn tả phong cảnh.",
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
                Hiểu được cấu trúc 3 phần (Mở bài, Thân bài, Kết bài) của một bài văn tả phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết được các trình tự miêu tả khác nhau và cách lựa chọn các cảnh vật, hình ảnh tiêu biểu để làm nổi bật vẻ đẹp của phong cảnh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết cách sử dụng các từ ngữ gợi tả, các biện pháp so sánh, nhân hóa để tăng sức hấp dẫn cho bài viết.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Đoán địa danh</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy quan sát bức ảnh và các gợi ý để đoán xem đây là thành phố nào của nước ta:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div class="relative rounded-3xl overflow-hidden shadow-lg border border-sky-100 group">
                <div class="aspect-video w-full bg-gradient-to-tr from-sky-600 to-emerald-500 flex items-center justify-center text-white text-xl font-black">
                    🏔️ Thành phố ngàn hoa và sương mù
                </div>
            </div>
            <div class="space-y-4">
                <div class="p-4 bg-sky-50 rounded-2xl border border-sky-100 font-bold text-sky-800 text-lg md:text-xl space-y-2">
                    <p>💡 <strong>Gợi ý 1:</strong> Nằm trên cao nguyên Lâm Viên, có khí hậu mát mẻ quanh năm.</p>
                    <p>💡 <strong>Gợi ý 2:</strong> Nổi tiếng với Thung lũng Tình yêu, Hồ Xuân Hương, Thác Cam Ly.</p>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <button onclick="checkVn31Kd(this, false)" class="p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl text-gray-800 transition-all active:scale-95">Sa Pa</button>
                    <button onclick="checkVn31Kd(this, true)" class="p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl text-gray-800 transition-all active:scale-95">Đà Lạt</button>
                    <button onclick="checkVn31Kd(this, false)" class="p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl text-gray-800 transition-all active:scale-95">Nha Trang</button>
                    <button onclick="checkVn31Kd(this, false)" class="p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl text-gray-800 transition-all active:scale-95">Tam Đảo</button>
                </div>
                <div id="fb-vn31-kd" class="hidden p-4 rounded-2xl text-lg font-black text-center transition-all duration-331"></div>
            </div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ (BÀI TẬP 1) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-sky-100 pb-4">
            <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Đọc văn bản phân tích
            </span>
            <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/31/tiet31_da_lat.mp3')" class="px-4 py-2 bg-sky-600 hover:bg-sky-600 text-sky-800 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 text-lg">
                🔊 Nghe đọc mẫu
            </button>
        </div>

        <!-- Nội dung văn bản đọc mẫu -->
        <div class="bg-sky-50/10 p-6 md:p-10 rounded-3xl border border-sky-100 max-w-4xl mx-auto space-y-6">
            <h4 class="text-2xl md:text-3xl font-black text-center text-gray-800">Đà Lạt</h4>
            <div class="serif-font text-gray-800 text-xl md:text-2xl leading-relaxed text-justify space-y-4">
                <p>Đà Lạt là thành phố ngàn hoa, nổi tiếng với hồ trong xanh và thông mơ màng.</p>
                <p>Nằm trên độ cao 1531 mét so với mặt nước biển, Đà Lạt có khí hậu mát mẻ quanh năm. Đây là nơi nghỉ mát lí tưởng của du khách chẳng những vì không khí mát lành mà còn bởi những cảnh đẹp đến nao lòng.</p>
                <p>Thác Cam Ly như một dải lụa, trắng sáng như gương, tô điểm cho thành phố vẻ hùng vĩ và nên thơ. Suối Vàng có cột nước quanh năm suốt tháng đổ xuống ào ào. Suối Vàng chia nước cho các con suối nhỏ rì rào, chảy mãi vào những nẻo nào trong lòng các rừng thông cây mọc thẳng tắp, ngút ngàn.</p>
                <p>Trong nắng ấm, bầu trời Đà Lạt không chút gợn mây, luôn thẳm xanh một màu ngọc bích. Cái màu xanh của tầng không càng thêm lung linh biến ảo khi phản chiếu xuống những mặt hồ trong suốt như pha lê.</p>
                <p>Cảnh sắc thiên nhiên của Đà Lạt vốn dĩ đã đẹp, lại được con người ra công tô điểm. Những vườn rau xanh tươi và những vườn hoa muôn hồng nghìn tía như khoác cho thành phố xinh đẹp này một chiếc áo lụa rực rỡ. Hương hoa hoà với hương ngàn thông làm cho không khí Đà Lạt dễ chịu vô cùng.</p>
                <p>Thật không ngoa khi ca ngợi Đà Lạt là chốn “bồng lai tiên cảnh”.</p>
                <p class="text-right italic font-sans text-base text-gray-800">(Theo Ay Dun và Lê Tấn)</p>
            </div>
            
            <!-- Từ ngữ -->
            <div class="mt-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 text-lg md:text-xl font-semibold text-amber-600">
                👉 <strong>Từ ngữ:</strong> <em>Bồng lai tiên cảnh:</em> nơi có cảnh đẹp và cuộc sống hạnh phúc như thế giới thần tiên.
            </div>
        </div>

        <!-- Accordion trả lời các câu hỏi -->
        <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        a. Bài văn trên tả gì?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold">
                    Bài văn tả vẻ đẹp tự nhiên và vẻ đẹp do con người tạo nên của thành phố Đà Lạt.
                </div>
            </details>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        b. Tìm phần mở bài, thân bài và kết bài của bài văn. Nêu nội dung chính của mỗi phần.
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold space-y-4">
                    <p>✔️ <strong>Mở bài (Đoạn 1):</strong> Giới thiệu khái quát về thành phố Đà Lạt (thành phố ngàn hoa, nổi tiếng với hồ trong xanh và thông mơ màng).</p>
                    <p>✔️ <strong>Thân bài (Đoạn 2, 3, 4, 5):</strong> Miêu tả cụ thể vẻ đẹp của Đà Lạt:
                        <br>– Đoạn 2: Tả vị trí địa lí và khí hậu mát mẻ.
                        <br>– Đoạn 3: Tả vẻ đẹp của thác Cam Ly, suối Vàng và những rừng thông.
                        <br>– Đoạn 4: Tả bầu trời nắng ấm và mặt hồ trong suốt.
                        <br>– Đoạn 5: Tả vườn rau xanh tươi và vườn hoa muôn màu rực rỡ do con người tô điểm.
                    </p>
                    <p>✔️ <strong>Kết bài (Đoạn cuối):</strong> Nêu lời ca ngợi, cảm nghĩ về Đà Lạt (chốn “bồng lai tiên cảnh”).</p>
                </div>
            </details>

            <!-- c. Sơ đồ tương tác -->
            <div class="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 space-y-6">
                <h4 class="font-black text-gray-800 text-xl md:text-2xl">
                    c. Hoàn thành sơ đồ tư duy phân tích trình tự miêu tả và từ ngữ làm nổi bật vẻ đẹp của Đà Lạt:
                </h4>
                
                <div class="bg-sky-50/20 p-6 rounded-3xl border border-sky-100 space-y-6 overflow-x-auto">
                    <!-- Sơ đồ tư duy dạng cột/nhánh đẹp mắt -->
                    <div class="min-w-[731px] space-y-6 font-bold text-gray-800 text-lg md:text-xl">
                        
                        <!-- Root -->
                        <div class="flex justify-end items-center gap-4">
                            <div class="px-6 py-3 bg-sky-600 text-white rounded-2xl shadow-md text-xl font-black">Phong cảnh Đà Lạt</div>
                            <div class="w-10 h-0.5 bg-sky-600"></div>
                            <div class="space-y-6">
                                
                                <!-- Nhánh 1: Vẻ đẹp do thiên nhiên ưu đãi -->
                                <div class="flex items-start gap-4">
                                    <div class="px-5 py-2.5 bg-emerald-600 border-2 border-emerald-100 text-emerald-800 rounded-xl">Vẻ đẹp do thiên nhiên ưu đãi</div>
                                    <div class="w-6 h-0.5 bg-emerald-600 mt-5"></div>
                                    <div class="space-y-4">
                                        <!-- Vị trí địa lí -->
                                        <div class="flex items-center gap-3">
                                            <span class="text-gray-800">📍 Vị trí địa lí:</span>
                                            <div id="box-vt" class="px-4 py-2 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500" onclick="showChoiceVn31('vt')">❓ [Chọn chi tiết]</div>
                                        </div>
                                        <!-- Khí hậu -->
                                        <div class="flex items-center gap-3">
                                            <span class="text-gray-800">🌤️ Khí hậu:</span>
                                            <div id="box-kh" class="px-4 py-2 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500" onclick="showChoiceVn31('kh')">❓ [Chọn chi tiết]</div>
                                        </div>
                                        <!-- Cảnh vật -->
                                        <div class="space-y-2 pl-4 border-l-2 border-emerald-100">
                                            <div class="text-gray-800">🌿 Cảnh vật:</div>
                                            <div class="pl-4 space-y-2">
                                                <div class="flex items-center gap-2">
                                                    <span>• Thác nước (Thác Cam Ly):</span>
                                                    <span class="bg-gray-800 px-3 py-1 rounded text-sm text-gray-800">như một dải lụa, trắng sáng như gương</span>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span>• Dòng suối (Suối Vàng):</span>
                                                    <div id="box-ds" class="px-3 py-1.5 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500 text-sm" onclick="showChoiceVn31('ds')">❓ [Chọn chi tiết]</div>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span>• Bầu trời, mặt hồ:</span>
                                                    <div id="box-bm" class="px-3 py-1.5 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500 text-sm" onclick="showChoiceVn31('bm')">❓ [Chọn chi tiết]</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Nhánh 2: Vẻ đẹp do con người tạo nên -->
                                <div class="flex items-start gap-4">
                                    <div class="px-5 py-2.5 bg-blue-600 border-2 border-blue-100 text-blue-600 rounded-xl">Vẻ đẹp do con người tạo nên</div>
                                    <div class="w-6 h-0.5 bg-blue-600 mt-5"></div>
                                    <div class="space-y-4">
                                        <!-- Vườn hoa -->
                                        <div class="flex items-center gap-3">
                                            <span class="text-gray-800">🌸 Vườn hoa:</span>
                                            <div id="box-vh" class="px-4 py-2 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500" onclick="showChoiceVn31('vh')">❓ [Chọn chi tiết]</div>
                                        </div>
                                        <!-- Vườn rau -->
                                        <div class="flex items-center gap-3">
                                            <span class="text-gray-800">🥬 Vườn rau:</span>
                                            <div id="box-vr" class="px-4 py-2 bg-amber-50 border border-dashed border-amber-200 rounded-lg text-amber-600 cursor-pointer hover:bg-amber-500" onclick="showChoiceVn31('vr')">❓ [Chọn chi tiết]</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <!-- Khu vực hiển thị bảng chọn lựa chọn khi click ❓ -->
                <div id="choices-panel-31" class="hidden p-6 bg-sky-50 border border-sky-100 rounded-3xl space-y-4">
                    <h5 id="choices-title-31" class="font-black text-sky-800 text-lg">Lựa chọn chi tiết phù hợp:</h5>
                    <div id="choices-buttons-31" class="flex flex-wrap gap-3"></div>
                </div>
                <div id="fb-vn31-diagram" class="hidden p-4 rounded-xl text-lg font-black text-center"></div>
            </div>

            <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                    <span class="font-black text-gray-800 group-hover:text-sky-700 transition-colors text-xl md:text-2xl">
                        d. Tình cảm của người viết đối với phong cảnh được thể hiện qua những chi tiết nào?
                    </span>
                    <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 text-xl md:text-2xl font-bold space-y-2">
                    <p>Tình cảm yêu mến, tự hào và ngưỡng mộ của người viết được thể hiện qua:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Cách dùng các từ ngữ gợi tả đầy cảm xúc: <em>thông mơ màng, cảnh đẹp đến nao lòng, vẻ hùng vĩ và nên thơ, trong suốt như pha lê, áo lụa rực rỡ</em>.</li>
                        <li>Sự cảm nhận tinh tế về không khí, hương hoa kết hợp với hương ngàn thông dễ chịu vô cùng.</li>
                        <li>Lời khẳng định, ca ngợi ở phần kết bài: <em>Thật không ngoa khi ca ngợi Đà Lạt là chốn “bồng lai tiên cảnh”.</em></li>
                    </ul>
                </div>
            </details>
        </div>
    </div>

    <!-- 📋 PHẦN 2: LƯU Ý KHI VIẾT VĂN TẢ PHONG CẢNH -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">📋</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">2. Những điểm cần lưu ý khi viết bài văn tả phong cảnh</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Trao đổi và hoàn thành bảng ghi nhớ các lưu ý quan trọng bằng cách chọn đáp án thích hợp điền vào bảng:</p>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-sky-100 text-lg md:text-xl font-bold">
                <thead>
                    <tr class="bg-sky-600 text-white">
                        <th class="border border-sky-100 p-4 w-1/4 text-center">Nội dung lưu ý</th>
                        <th class="border border-sky-100 p-4 text-center">Đặc điểm cần lưu ý</th>
                    </tr>
                </thead>
                <tbody class="text-gray-800">
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Phong cảnh được miêu tả</td>
                        <td class="border border-sky-100 p-4">Cảnh tự nhiên (sông, suối, hồ, biển, núi, rừng,...) hoặc cảnh do con người tác động, tạo dựng (đường phố, công viên, trường học, vườn hoa,...).</td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Bố cục bài văn</td>
                        <td class="border border-sky-100 p-4 flex items-center gap-3">
                            <span>Gồm 3 phần:</span>
                            <div id="table-bc" class="px-3 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500" onclick="showTableChoice31('bc')">❓ [Chọn đáp án]</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Trình tự miêu tả</td>
                        <td class="border border-sky-100 p-4 flex items-center gap-3">
                            <span>Có thể tả theo:</span>
                            <div id="table-tt" class="px-3 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500" onclick="showTableChoice31('tt')">❓ [Chọn đáp án]</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Cách lựa chọn cảnh vật để miêu tả</td>
                        <td class="border border-sky-100 p-4 flex items-center gap-3">
                            <span>Nên lựa chọn miêu tả những:</span>
                            <div id="table-cv" class="px-3 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500" onclick="showTableChoice31('cv')">❓ [Chọn đáp án]</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-100 p-4 bg-sky-50/50 text-center font-black">Cách làm nổi bật đặc điểm của phong cảnh</td>
                        <td class="border border-sky-100 p-4 flex items-center gap-3">
                            <span>Sử dụng các:</span>
                            <div id="table-nb" class="px-3 py-1 bg-amber-50 border border-dashed border-amber-200 rounded cursor-pointer hover:bg-amber-500" onclick="showTableChoice31('nb')">❓ [Chọn đáp án]</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Bảng lựa chọn cho bài 2 -->
        <div id="table-choices-panel-31" class="hidden p-6 bg-sky-50 border border-sky-100 rounded-3xl space-y-4">
            <h5 id="table-choices-title-31" class="font-black text-sky-800 text-lg">Lựa chọn nội dung điền vào bảng:</h5>
            <div id="table-choices-buttons-31" class="flex flex-wrap gap-3"></div>
        </div>
        <div id="fb-vn31-table" class="hidden p-4 rounded-xl text-lg font-black text-center"></div>

        <!-- Khung Ghi nhớ Vàng -->
        <div class="bg-amber-50 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-md">
            <h3 class="text-2xl md:text-3xl font-black text-amber-600 mb-3 flex items-center gap-2">
                <span>📌</span> Ghi nhớ
            </h3>
            <div class="space-y-3 text-xl md:text-2xl text-amber-600 font-bold leading-relaxed ml-2">
                <p>Bài văn tả phong cảnh thường có 3 phần:</p>
                <ul class="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Mở bài:</strong> Giới thiệu khái quát về phong cảnh.</li>
                    <li><strong>Thân bài:</strong> Tả lần lượt từng phần hoặc từng vẻ đẹp của phong cảnh.</li>
                    <li><strong>Kết bài:</strong> Nêu nhận xét hoặc cảm nghĩ về phong cảnh.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- LUYỆN TẬP 1 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập 1: Sưu tầm bài văn tả phong cảnh</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Sưu tầm đoạn văn hoặc bài văn tả phong cảnh sông suối, ao hồ, biển đảo...</p>
            </div>
        </div>

        <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-4 font-bold">
            <p class="text-xl md:text-2xl text-sky-800">💡 Thầy E giới thiệu một đoạn văn tả cảnh biển rất hay để em tham khảo:</p>
            <div class="serif-font text-gray-800 text-lg md:text-xl leading-relaxed text-justify p-4 bg-white rounded-2xl border border-sky-100">
                “Biển luôn thay đổi màu tuỳ theo sắc mây trời. Trời xanh thẳm, biển cũng thẳm xanh, như dâng cao lên, chắc nịch. Trời rải mây trắng nhạt, biển mơ màng dịu hơi sương. Trời âm u mây mưa, biển xám xịt, nặng nề. Trời ầm ầm giông gió, biển đục ngầu, giận dữ,... Như một con người biết buồn thương, biết giận dữ, biển lúc tẻ nhạt, lúc lạnh lùng, lúc sôi nổi, hả hê, lúc đăm chiêu, gắt gỏng.”
                <br><span class="block text-right font-sans text-sm text-gray-800 font-semibold mt-2">(Vũ Tú Nam)</span>
            </div>
            <div class="space-y-2">
                <label class="text-gray-800 text-base block">✍️ Ghi lại tên đoạn văn hoặc bài văn tả phong cảnh em sưu tầm được:</label>
                <input type="text" id="vn31-input-suutam" placeholder="Ví dụ: Đoạn văn tả cảnh Vịnh Hạ Long của tác giả..." class="w-full p-4 border border-gray-100 rounded-2xl font-bold bg-white text-xl md:text-2xl">
            </div>
        </div>
    </section>

    <!-- LUYỆN TẬP 2 -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Luyện tập 2: Tìm đọc sách báo động vật hoang dã</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Tìm đọc sách báo khoa học viết về động vật hoang dã.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-sky-800">
            <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                <span class="block text-emerald-900 font-black text-lg">📚 Các cuốn sách gợi ý:</span>
                <ul class="list-disc list-inside space-y-2 text-base md:text-lg">
                    <li>“Từ điển động vật hoang dã bằng tranh”</li>
                    <li>“Mười vạn câu hỏi vì sao - Thế giới động vật”</li>
                    <li>“Cuộc sống hoang dã của các loài thú”</li>
                </ul>
            </div>
            <div class="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-3">
                <span class="block text-blue-600 font-black text-lg">📺 Các kênh khoa học hữu ích:</span>
                <ul class="list-disc list-inside space-y-2 text-base md:text-lg">
                    <li>Kênh truyền hình Discovery Channel</li>
                    <li>Kênh National Geographic Wild</li>
                    <li>Chương trình Thế giới động vật (VTV2)</li>
                </ul>
            </div>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3 font-bold">
            <label class="text-gray-800 text-base block">✍️ Ghi chép nhanh 1-2 thông tin thú vị em đọc được về một loài động vật hoang dã:</label>
            <textarea id="vn31-input-dongvat" rows="3" placeholder="Ví dụ: Báo săn (Cheetah) là loài động vật chạy nhanh nhất trên mặt đất với tốc độ tối đa lên tới 131 km/h..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl"></textarea>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="nopLuyenTapVn31();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn31-lt" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-331"></div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn31Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài văn tả phong cảnh thường có bố cục gồm mấy phần?",
            "options": [
                "2 phần",
                "3 phần",
                "4 phần",
                "5 phần"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nội dung chính của phần Mở bài trong bài văn tả phong cảnh là gì?",
            "options": [
                "Tả chi tiết từng vẻ đẹp của phong cảnh",
                "Nêu nhận xét hoặc cảm nghĩ về phong cảnh",
                "Giới thiệu khái quát về phong cảnh",
                "Kể một câu chuyện liên quan đến phong cảnh"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Nội dung chính của phần Thân bài trong bài văn tả phong cảnh là gì?",
            "options": [
                "Nêu cảm nghĩ sâu sắc nhất về cảnh vật",
                "Tả lần lượt từng phần hoặc từng vẻ đẹp của phong cảnh",
                "Giới thiệu địa điểm, thời gian xuất hiện phong cảnh",
                "Kêu gọi mọi người bảo vệ phong cảnh"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nội dung chính của phần Kết bài trong bài văn tả phong cảnh là gì?",
            "options": [
                "Nêu nhận xét hoặc cảm nghĩ về phong cảnh",
                "Tả chi tiết sự thay đổi của cảnh vật theo thời gian",
                "Kể lại hành trình đi đến địa điểm đó",
                "Liệt kê các loài hoa có ở phong cảnh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Văn bản mẫu 'Đà Lạt' giới thiệu Đà Lạt nổi tiếng với những nét đặc trưng nào đầu tiên?",
            "options": [
                "Thành phố ngàn hoa, hồ trong xanh và thông mơ màng",
                "Thành phố biển đầy nắng gió và cát trắng",
                "Thành phố cổ kính với những mái ngói rêu phong",
                "Vùng đất biên cương hùng vĩ với ruộng bậc thang"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đà Lạt nằm ở độ cao bao nhiêu mét so với mặt nước biển?",
            "options": [
                "531 mét",
                "1031 mét",
                "1531 mét",
                "2031 mét"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Trong bài văn mẫu, vẻ đẹp của thác Cam Ly được so sánh với hình ảnh nào?",
            "options": [
                "Như dải lụa, trắng sáng như gương",
                "Như một bức tường thành khổng lồ",
                "Như con rồng uốn lượn giữa núi rừng",
                "Như một bức tranh sơn dầu đầy màu sắc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng suối nào ở Đà Lạt được miêu tả có cột nước quanh năm suốt tháng đổ xuống ào ào?",
            "options": [
                "Suối Mơ",
                "Suối Bạc",
                "Suối Vàng",
                "Suối Tiên"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Bầu trời Đà Lạt trong nắng ấm được miêu tả có màu gì?",
            "options": [
                "Màu xanh ngọc bích",
                "Màu xanh lam nhạt",
                "Màu vàng óng ả",
                "Màu xám sương mù"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh nào sau đây được so sánh như 'khoác cho thành phố một chiếc áo lụa rực rỡ'?",
            "options": [
                "Những đồi thông mơ màng trong sương sớm",
                "Những vườn rau xanh tươi và vườn hoa muôn hồng nghìn tía",
                "Những con đường đèo quanh co uốn lượn",
                "Những hồ nước trong xanh như pha lê"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào được sử dụng ở kết bài để ngợi ca vẻ đẹp của Đà Lạt?",
            "options": [
                "Non xanh nước biếc",
                "Bồng lai tiên cảnh",
                "Sơn thủy hữu tình",
                "Thiên đường mặt đất"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trình tự miêu tả nào được sử dụng chủ yếu trong phần thân bài của bài văn mẫu 'Đà Lạt'?",
            "options": [
                "Miêu tả theo trình tự thời gian (sáng, trưa, chiều, tối)",
                "Miêu tả theo trình tự không gian kết hợp tả từng bộ phận của cảnh",
                "Miêu tả theo cảm xúc thay đổi của người viết",
                "Miêu tả ngẫu nhiên không theo trình tự nào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết bài văn tả phong cảnh, việc lựa chọn cảnh vật để miêu tả cần lưu ý điều gì?",
            "options": [
                "Tả tất cả mọi thứ nhìn thấy không bỏ sót chi tiết nào",
                "Chỉ tả những cảnh vật do con người tạo nên",
                "Lựa chọn những cảnh vật, hình ảnh tiêu biểu, đặc trưng của phong cảnh đó",
                "Chỉ tả những bông hoa có màu đỏ và màu vàng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Biện pháp nghệ thuật nào nổi bật giúp các cảnh vật trong bài Đà Lạt hiện lên sinh động?",
            "options": [
                "So sánh và sử dụng từ ngữ gợi tả màu sắc, âm thanh",
                "Điệp từ và điệp ngữ liên tục",
                "Nói giảm nói tránh",
                "Sử dụng nhiều từ mượn tiếng nước ngoài"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'mơ màng' trong cụm từ 'thông mơ màng' gợi tả nét đẹp gì của đồi thông Đà Lạt?",
            "options": [
                "Vẻ đẹp huyền ảo, nhẹ nhàng ẩn hiện trong sương",
                "Vẻ xơ xác, khô héo của cây cối mùa đông",
                "Vẻ ồn ào náo nhiệt của khu rừng",
                "Vẻ u ám tăm tối của rừng sâu"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC CHO SƠ ĐỒ TƯ DUY TƯƠNG TÁC (CÂU C) ---
let diagramAnswers31 = {
    vt: { correct: "nằm trên độ cao 1531 mét so với mặt nước biển", current: "" },
    kh: { correct: "mát mẻ quanh năm, nơi nghỉ mát lí tưởng", current: "" },
    ds: { correct: "cột nước đổ xuống ào ào, chia nước cho các con suối nhỏ rì rào", current: "" },
    bm: { correct: "bầu trời thẳm xanh ngọc bích, mặt hồ trong suốt như pha lê", current: "" },
    vh: { correct: "muôn hồng nghìn tía như khoác chiếc áo lụa rực rỡ", current: "" },
    vr: { correct: "xanh tươi", current: "" }
};

let currentTargetNode31 = "";

window.showChoiceVn31 = function(nodeId) {
    currentTargetNode31 = nodeId;
    const panel = document.getElementById("choices-panel-31");
    const title = document.getElementById("choices-title-31");
    const buttonsContainer = document.getElementById("choices-buttons-31");
    if (!panel || !title || !buttonsContainer) return;

    panel.classList.remove("hidden");

    let choices = [];
    if (nodeId === "vt") {
        title.innerHTML = "📍 Chọn chi tiết tả Vị trí địa lí của Đà Lạt:";
        choices = [
            "nằm trên độ cao 1531 mét so với mặt nước biển",
            "nằm ở đồng bằng sông Hồng bằng phẳng",
            "nằm trên ngọn núi tuyết phủ quanh năm"
        ];
    } else if (nodeId === "kh") {
        title.innerHTML = "🌤️ Chọn chi tiết tả Khí hậu Đà Lạt:";
        choices = [
            "nóng ẩm mưa nhiều, bốn mùa oi bức",
            "mát mẻ quanh năm, nơi nghỉ mát lí tưởng",
            "khô hanh, gió thổi cát bay"
        ];
    } else if (nodeId === "ds") {
        title.innerHTML = "💧 Chọn chi tiết tả dòng suối (Suối Vàng):";
        choices = [
            "nước chảy xiết cuồn cuộn đỏ ngầu phù sa",
            "cột nước đổ xuống ào ào, chia nước cho các con suối nhỏ rì rào",
            "dòng suối khô cạn trơ sỏi đá"
        ];
    } else if (nodeId === "bm") {
        title.innerHTML = "🌌 Chọn chi tiết tả bầu trời và mặt hồ Đà Lạt:";
        choices = [
            "bầu trời âm u đầy mây xám, mặt hồ gợn sóng đục",
            "bầu trời thẳm xanh ngọc bích, mặt hồ trong suốt như pha lê",
            "bầu trời đầy sương muối dày đặc không nhìn thấy mặt hồ"
        ];
    } else if (nodeId === "vh") {
        title.innerHTML = "🌸 Chọn chi tiết tả vườn hoa do con người tạo nên:";
        choices = [
            "muôn hồng nghìn tía như khoác chiếc áo lụa rực rỡ",
            "chỉ có hoa cúc vàng nở lác đác",
            "các luống hoa tiêu điều sau trận bão"
        ];
    } else if (nodeId === "vr") {
        title.innerHTML = "🥬 Chọn chi tiết tả vườn rau Đà Lạt:";
        choices = [
            "ngập úng hư hỏng",
            "xơ xác héo hon",
            "xanh tươi"
        ];
    }

    buttonsContainer.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "px-4 py-2 bg-white hover:bg-sky-600 text-gray-800 border-2 border-gray-100 rounded-xl font-bold text-sm transition-all active:scale-95";
        btn.innerHTML = choice;
        btn.onclick = () => selectChoiceVn31(choice);
        buttonsContainer.appendChild(btn);
    });
};

function selectChoiceVn31(choice) {
    if (!currentTargetNode31) return;
    const targetBox = document.getElementById(`box-${currentTargetNode31}`);
    const panel = document.getElementById("choices-panel-31");
    if (!targetBox || !panel) return;

    diagramAnswers31[currentTargetNode31].current = choice;
    targetBox.innerHTML = choice;

    if (choice === diagramAnswers31[currentTargetNode31].correct) {
        targetBox.className = "px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm transition-all scale-95 font-bold cursor-default";
    } else {
        targetBox.className = "px-4 py-2 bg-rose-600 text-white rounded-lg text-sm transition-all scale-95 font-bold cursor-default";
    }

    panel.classList.add("hidden");
    checkDiagramGlobal31();
}

function checkDiagramGlobal31() {
    const keys = Object.keys(diagramAnswers31);
    const fb = document.getElementById("fb-vn31-diagram");
    if (!fb) return;

    let correctCount = 0;
    let attemptedCount = 0;

    keys.forEach(k => {
        if (diagramAnswers31[k].current !== "") {
            attemptedCount++;
            if (diagramAnswers31[k].current === diagramAnswers31[k].correct) {
                correctCount++;
            }
        }
    });

    if (attemptedCount === keys.length) {
        fb.classList.remove("hidden");
        if (correctCount === keys.length) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác tất cả các nhánh chi tiết của sơ đồ tư duy phong cảnh Đà Lạt!";
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Sơ đồ hoàn thành", "🌟", "Em đã phân tích và điền hoàn chỉnh sơ đồ tư duy Đà Lạt!");
            }
        } else {
            fb.innerHTML = `⚠️ Có ${keys.length - correctCount} nhánh chưa điền đúng chi tiết trong bài văn Đà Lạt. Hãy nhấp lại vào nhánh màu đỏ để sửa nhé!`;
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-amber-50 text-amber-600 border border-amber-100 mt-4";
        }
    }
}


// --- LOGIC CHO BẢNG LƯU Ý (BÀI 2) ---
let tableAnswers31 = {
    bc: { correct: "Mở bài (Giới thiệu chung), Thân bài (Tả chi tiết), Kết bài (Cảm nghĩ)", current: "" },
    tt: { correct: "Trình tự không gian (từ xa đến gần, từ cao xuống thấp) hoặc trình tự thời gian (các buổi trong ngày, các mùa trong năm)", current: "" },
    cv: { correct: "Cảnh vật, hình ảnh tiêu biểu, đặc trưng làm nên nét riêng của phong cảnh", current: "" },
    nb: { correct: "Từ ngữ gợi tả (màu sắc, âm thanh, hình ảnh), biện pháp so sánh, nhân hóa để tăng tính sinh động", current: "" }
};

let currentTargetTable31 = "";

window.showTableChoice31 = function(fieldId) {
    currentTargetTable31 = fieldId;
    const panel = document.getElementById("table-choices-panel-31");
    const title = document.getElementById("table-choices-title-31");
    const buttonsContainer = document.getElementById("table-choices-buttons-31");
    if (!panel || !title || !buttonsContainer) return;

    panel.classList.remove("hidden");

    let choices = [];
    if (fieldId === "bc") {
        title.innerHTML = "📋 Chọn Bố cục bài văn tả phong cảnh phù hợp:";
        choices = [
            "Mở bài (Giới thiệu chung), Thân bài (Tả chi tiết), Kết bài (Cảm nghĩ)",
            "Chỉ có phần Thân bài tả từ đầu đến cuối",
            "Mở bài tả chi tiết, Thân bài giới thiệu chung, Kết bài kêu gọi bảo vệ"
        ];
    } else if (fieldId === "tt") {
        title.innerHTML = "📋 Chọn Trình tự miêu tả phong cảnh:";
        choices = [
            "Tả lung tung gặp gì tả đó không cần sắp xếp",
            "Trình tự không gian (từ xa đến gần, từ cao xuống thấp) hoặc trình tự thời gian (các buổi trong ngày, các mùa trong năm)",
            "Chỉ được tả từ ngoài vào trong nhà"
        ];
    } else if (fieldId === "cv") {
        title.innerHTML = "📋 Chọn cách lựa chọn cảnh vật miêu tả:";
        choices = [
            "Tả tất cả các loài cỏ dại mọc ven đường",
            "Cảnh vật, hình ảnh tiêu biểu, đặc trưng làm nên nét riêng của phong cảnh",
            "Chỉ chọn cảnh vật do du khách mang tới"
        ];
    } else if (fieldId === "nb") {
        title.innerHTML = "📋 Chọn cách làm nổi bật đặc điểm của phong cảnh:";
        choices = [
            "Từ ngữ gợi tả (màu sắc, âm thanh, hình ảnh), biện pháp so sánh, nhân hóa để tăng tính sinh động",
            "Tránh dùng từ ngữ chỉ màu sắc để bài văn ngắn gọn",
            "Sử dụng các số liệu đo đạc chính xác của địa hình học"
        ];
    }

    buttonsContainer.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "px-4 py-2 bg-white hover:bg-sky-600 text-gray-800 border-2 border-gray-100 rounded-xl font-bold text-sm transition-all active:scale-95";
        btn.innerHTML = choice;
        btn.onclick = () => selectTableChoice31(choice);
        buttonsContainer.appendChild(btn);
    });
};

function selectTableChoice31(choice) {
    if (!currentTargetTable31) return;
    const targetBox = document.getElementById(`table-${currentTargetTable31}`);
    const panel = document.getElementById("table-choices-panel-31");
    if (!targetBox || !panel) return;

    tableAnswers31[currentTargetTable31].current = choice;
    targetBox.innerHTML = choice;

    if (choice === tableAnswers31[currentTargetTable31].correct) {
        targetBox.className = "px-3 py-1 bg-emerald-600 text-white rounded font-bold cursor-default text-sm transition-all scale-95";
    } else {
        targetBox.className = "px-3 py-1 bg-rose-600 text-white rounded font-bold cursor-default text-sm transition-all scale-95";
    }

    panel.classList.add("hidden");
    checkTableGlobal31();
}

function checkTableGlobal31() {
    const keys = Object.keys(tableAnswers31);
    const fb = document.getElementById("fb-vn31-table");
    if (!fb) return;

    let correctCount = 0;
    let attemptedCount = 0;

    keys.forEach(k => {
        if (tableAnswers31[k].current !== "") {
            attemptedCount++;
            if (tableAnswers31[k].current === tableAnswers31[k].correct) {
                correctCount++;
            }
        }
    });

    if (attemptedCount === keys.length) {
        fb.classList.remove("hidden");
        if (correctCount === keys.length) {
            fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành bảng lưu ý các nguyên tắc viết văn tả phong cảnh vô cùng chuẩn xác!";
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Bảng hoàn thành", "📋", "Chúc mừng em đã thuộc lòng các lưu ý viết văn tả phong cảnh!");
            }
        } else {
            fb.innerHTML = `⚠️ Có ${keys.length - correctCount} mục lưu ý chưa chính xác. Em hãy bấm chọn lại nhé!`;
            fb.className = "p-4 rounded-xl text-lg font-black text-center bg-amber-50 text-amber-600 border border-amber-100 mt-4";
        }
    }
}


// --- NỘP LUYỆN TẬP ---
window.nopLuyenTapVn31 = function() {
    const suutam = document.getElementById("vn31-input-suutam").value.trim();
    const dongvat = document.getElementById("vn31-input-dongvat").value.trim();
    const fb = document.getElementById("fb-vn31-lt");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (suutam.length < 5 || dongvat.length < 10) {
        fb.innerHTML = "⚠️ Em hãy điền đầy đủ thông tin sưu tầm bài văn và ghi chép thông tin động vật hoang dã trước khi nộp bài nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-331";
        return;
    }

    fb.innerHTML = "🎉 Bài luyện tập của em đã được gửi thành công đến AI Thầy E! Thầy E đánh giá cao tinh thần chủ động tìm hiểu tư liệu và ghi chép khoa học của em. Hãy tiếp tục phát huy nhé!";
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-331";
};

// --- HOÀN THÀNH TIẾT HỌC TOÀN CỤC ---
window.submitVn31Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 31',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 31: Tìm hiểu cách viết bài văn tả phong cảnh!</p><p class="text-2xl md:text-3xl text-gray-800 mt-3">Giờ đây em đã nắm rõ bố cục, cách chọn lọc cảnh vật tiêu biểu và sử dụng từ ngữ sinh động để chuẩn bị tự mình viết những bài văn tả cảnh tuyệt đẹp.</p></div>'
        );
    }
};

// --- LOGIC CHO PHẦN KHỞI ĐỘNG ---
let kdAttempted = false;
window.checkVn31Kd = function(btn, isCorrect) {
    if (kdAttempted) return;
    const fb = document.getElementById("fb-vn31-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-4 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-lg md:text-xl transition-all cursor-default";
        fb.innerHTML = "🎉 Chính xác! Đó chính là Đà Lạt - thành phố sương mù xinh đẹp với ngàn hoa khoe sắc!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
        kdAttempted = true;
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Chính xác", "🏔️", "Đà Lạt là câu trả lời hoàn toàn chính xác!");
        }
    } else {
        btn.className = "p-4 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl font-black text-lg md:text-xl transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa đúng rồi! Hãy nhớ lại xem hồ Xuân Hương và thác Cam Ly ở đâu nhé!";
        fb.className = "p-4 rounded-2xl text-lg font-black text-center bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-4 bg-gray-50 hover:bg-sky-50 border-2 border-gray-100 rounded-2xl font-black text-lg md:text-xl text-gray-800 transition-all active:scale-95";
            fb.classList.add("hidden");
        }, 2031);
    }
};
