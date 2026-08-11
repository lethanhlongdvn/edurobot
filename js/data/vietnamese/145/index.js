export const lesson145 = {
    "topic": "Tiếng Việt 5",
    "week": "21",
    "period": "144-145",
    "title": "ĐỌC: THƯ CỦA BỐ",
    "desc": "Bài thơ 'Thư của bố' của Thụy Anh thể hiện tình thương sâu sắc và sự thấu hiểu giữa người lính biển nơi đầu sóng ngọn gió với đứa con ở quê nhà.",
    "subject": "Đọc",
    "theme": "Vẻ đẹp cuộc sống",
    "audio": "assets/audio/tiengviet/144/144.mp3",
    "content": `
<div class="flex flex-col gap-10 max-w-6xl mx-auto animate-in fade-in duration-700">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
        <h3 class="text-3xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-850 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đọc trôi chảy, diễn cảm bài thơ "Thư của bố", biết nhấn giọng ở những từ ngữ gợi tả gợi cảm.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Cảm nhận được tình thương bao la, sự hi sinh thầm lặng của người chiến sĩ hải quân và sự thấu hiểu, lòng kính yêu của người con ở hậu phương.
            </li>
        </ul>
    </div>

    <!-- 📖 Phần bài đọc chính -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white/85 backdrop-blur-md border border-white/40">
            
            <!-- Tiêu đề & Nút nghe audio -->
            <div class="flex justify-between items-center border-b border-blue-100 pb-4 mb-6 flex-wrap gap-4">
                <span class="text-blue-600 font-black text-2xl md:text-4xl flex items-center gap-2">
                    <span>📖</span> Đọc bài thơ
                </span>
                <button onclick="window.playSegmentAudio && window.playSegmentAudio('assets/audio/tiengviet/144/144.mp3')" class="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 text-xl" title="Nghe đọc mẫu">
                    <span>🔊</span> Nghe bài thơ
                </button>
            </div>

            <!-- Hình ảnh minh họa bài thơ (Đưa lên trên bài đọc theo giao thức của người dùng) -->
            <div class="w-full max-w-3xl mx-auto rounded-[32px] overflow-hidden shadow-xl border-4 border-white/80 cursor-pointer transition-transform duration-500 hover:scale-[1.02] mb-8"
                 onclick="window.showMathFeedback('Thư của bố', '✉️', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_2/144/144.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Minh họa bài Thư của bố&quot;&gt;&lt;/div&gt;')">
                <img src="assets/images/tiengviet_5_2/144/144.png" alt="Hình ảnh minh họa bài thơ Thư của bố" class="w-full h-auto object-contain">
            </div>

            <!-- Nội dung bài thơ -->
            <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden bg-amber-50/15">
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>
                
                <div class="text-center font-black text-blue-600 text-3xl md:text-4xl mb-8 uppercase tracking-wide">
                    Thư của bố
                </div>

                <div class="serif-font text-gray-800 text-2xl md:text-3xl leading-relaxed relative reading-content space-y-8 flex flex-col items-center">
                    
                    <div class="space-y-2 w-full max-w-2xl text-left pl-6 md:pl-16">
                        <p>Con lớn lên, quen vắng bố trong nhà</p>
                        <p>Hai mẹ con, nhà một phòng cũng trống</p>
                        <p>Chỉ mong đợi những lá thư gió lộng</p>
                        <p>Và mặn mòi hương biển xa xôi...</p>
                        <p>Nghe êm đềm sóng lặng lững lờ trôi,</p>
                        <p>Thấy đàn cá heo giỡn đùa mặt nước.</p>
                    </div>

                    <div class="space-y-2 w-full max-w-2xl text-left pl-6 md:pl-16">
                        <p>Thư không kể về cơn bão chờ phía trước,</p>
                        <p>Dải đá ngầm, thăm thẳm nước đen.</p>
                        <p>Nhịp bước khẩn trương khi khẩu lệnh vang lên,</p>
                        <p>Mắt dõi theo vệt ra-đa rà quét,</p>
                        <p>Áo đọng muối khô, da nhận mùi nắng khét,...</p>
                        <p>Thư chỉ nói về nỗi nhớ với thương yêu...</p>
                    </div>

                    <div class="space-y-2 w-full max-w-2xl text-left pl-6 md:pl-16">
                        <p>Con đã lớn khôn, đọc được cả những điều</p>
                        <p>Chưa được viết trong thư người lính biển</p>
                        <p>Nơi đầu sóng, sẵn sàng nghênh chiến</p>
                        <p>Vẫn dịu dàng, êm ái lá thư xanh...</p>
                    </div>

                    <div class="w-full max-w-2xl text-right pr-6 md:pr-16 italic text-gray-600 text-xl font-bold mt-4">
                        (Thụy Anh)
                    </div>
                </div>
            </div>
            
            <!-- Chú thích từ ngữ -->
            <div class="mt-8 bg-amber-50/70 p-6 md:p-8 rounded-[2rem] border border-amber-100 shadow-md">
                <h4 class="text-2xl md:text-3xl font-black text-amber-905 mb-4 flex items-center gap-2">
                    <span>💡</span> Giải nghĩa từ ngữ
                </h4>
                <ul class="space-y-3 text-xl md:text-2xl text-amber-800 font-bold leading-relaxed ml-2">
                    <li>
                        <strong>• Khẩu lệnh:</strong> lệnh hô trong luyện tập hoặc chiến đấu.
                    </li>
                    <li>
                        <strong>• Nghênh chiến:</strong> đón đánh trực tiếp, mặt đối mặt.
                    </li>
                </ul>
            </div>

        </div>
    </section>
</div>
`,
    "practice": `
<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100/50 bg-white/60 max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
    
    <!-- 🔎 PHẦN 1: TÌM HIỂU BÀI ĐỌC -->
    <section class="space-y-6">
<div class="grid grid-cols-1 gap-6">
            
            <details class="group bg-white/95 rounded-[2rem] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">1. Ở khổ thơ thứ nhất, bạn nhỏ đã chia sẻ điều gì?</span>
                    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-6 bg-blue-50/20 text-xl md:text-2xl font-bold space-y-2">
                    Bạn nhỏ chia sẻ về hoàn cảnh sống ở nhà khi <strong class="text-blue-600">quen với việc vắng bóng bố</strong>. Ngôi nhà chỉ có hai mẹ con nên cảm thấy trống trải (dù chỉ có một phòng). Vì vậy, mẹ con lúc nào cũng thiết tha mong đợi những lá thư tràn đầy hơi thở của biển cả xa xôi từ bố.
                </div>
            </details>

            <details class="group bg-white/95 rounded-[2rem] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">2. Những chi tiết nào cho thấy bố bạn nhỏ phải vượt qua nhiều khó khăn, vất vả để bảo vệ biển đảo của Tổ quốc?</span>
                    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-6 bg-blue-50/20 text-xl md:text-2xl font-bold space-y-3">
                    Những chi tiết miêu tả gian lao nguy hiểm của người chiến sĩ lính biển:
                    <ul class="list-disc ml-6 space-y-1 font-bold text-gray-700 text-lg md:text-xl">
                        <li>Đối mặt với thiên tai, thời tiết hiểm nguy: <strong class="text-blue-950">cơn bão chờ phía trước</strong>, <strong class="text-blue-950">dải đá ngầm</strong>, <strong class="text-blue-950">thăm thẳm nước đen</strong>.</li>
                        <li>Nhiệm vụ huấn luyện và canh gác khẩn trương: <strong class="text-blue-950">nhịp bước khẩn trương khi khẩu lệnh vang lên</strong>, <strong class="text-blue-950">mắt dõi theo vệt ra-đa rà quét</strong>.</li>
                        <li>Sự khắc nghiệt tàn phá ngoại hình, quần áo: <strong class="text-blue-950">áo đọng muối khô</strong>, <strong class="text-blue-950">da nhận mùi nắng khét</strong>.</li>
                    </ul>
                </div>
            </details>

            <details class="group bg-white/95 rounded-[2rem] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">3. Theo em, vì sao trong thư bố bạn nhỏ không kể về những khó khăn, vất vả của mình?</span>
                    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-6 bg-blue-50/20 text-xl md:text-2xl font-bold space-y-2">
                    Bố không muốn kể những khó khăn nguy hiểm trong thư vì <strong class="text-blue-955">bố lo lắng cho hậu phương ở nhà</strong>. Bố muốn gia đình yên tâm, vui vẻ và giữ gìn trọn vẹn sự ngọt ngào, ấm áp trong thư chỉ ngập tràn nỗi nhớ cùng tình thương yêu nồng cháy của người bố gửi về cho vợ con.
                </div>
            </details>

            <details class="group bg-white/95 rounded-[2rem] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">4. Bạn nhỏ đã thể hiện tình cảm của mình đối với bố qua những hành động, việc làm nào? Em chọn ý nào dưới đây? Vì sao?</span>
                    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-6 bg-blue-50/20 text-xl md:text-2xl font-bold space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-lg">
                        <div class="bg-blue-50/50 border border-blue-200 p-4 rounded-xl text-center">
                            <span class="text-blue-600 font-extrabold block mb-2">Ý A</span>
                            Làm quen với cuộc sống vắng bố.
                        </div>
                        <div class="bg-emerald-50/50 border border-emerald-200 p-4 rounded-xl text-center">
                            <span class="text-emerald-950 font-extrabold block mb-2">Ý B</span>
                            Mong đợi những lá thư của bố.
                        </div>
                        <div class="bg-amber-50/50 border border-amber-200 p-4 rounded-xl text-center border-2 shadow-inner">
                            <span class="text-amber-955 font-extrabold block mb-2">💡 Ý C (Khuyên chọn)</span>
                            Hiểu được cả những điều bố chưa viết trong thư.
                        </div>
                    </div>
                    <p class="mt-4">
                        ✔️ <strong>Giải thích lý do:</strong> Chọn <strong>Ý C</strong> là trọn vẹn nhất vì đó là biểu hiện của sự trưởng thành và thấu hiểu sâu sắc. Bạn nhỏ cảm nhận được tình thương từ bố, hiểu được sự cống hiến âm thầm và những gian lao mà bố giấu đi, từ đó càng yêu thương, tự hào về người bố lính biển của mình hơn.
                    </p>
                </div>
            </details>

            <details class="group bg-white/95 rounded-[2rem] border-2 border-blue-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-blue-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">5. Hai dòng thơ “Nơi đầu sóng, sẵn sàng nghênh chiến / Vẫn dịu dàng, êm ái lá thư xanh...” cho em hiểu điều gì về người lính biển?</span>
                    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-blue-50 pt-6 bg-blue-50/20 text-xl md:text-2xl font-bold space-y-2">
                    Hai dòng thơ vẽ nên bức chân dung vô cùng cao đẹp của người lính hải quân:
                    <ul class="list-disc ml-6 space-y-2 font-medium text-gray-700 text-xl">
                        <li><strong>Dũng cảm, kiên cường:</strong> Ở nơi "đầu sóng" gió lạnh hiểm nguy, họ luôn trong trạng thái tinh thần thép, sẵn sàng bảo vệ chủ quyền biển đảo quê hương.</li>
                        <li><strong>Ấm áp, dạt dào tình cảm:</strong> Giữa tiếng gầm rú của sóng gió, giữa súng đạn chiến đấu, họ vẫn giữ một tâm hồn nhạy cảm, ấm áp qua nét chữ hiền lành, yêu thương trong những lá thư xanh gửi về gia đình.</li>
                    </ul>
                </div>
            </details>

        </div>
    </section>

    <!-- ✍️ PHẦN 2: LUYỆN TỪ VÀ CÂU (TỪ SGK TRANG TIẾP THEO) -->
    <section class="space-y-8 border-t-4 border-dashed border-blue-100 pt-10">
        <div class="flex items-center space-x-4 mb-6 justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">Luyện từ và câu</h2>
        </div>

        <div class="grid grid-cols-1 gap-6">
            
            <!-- Bài tập 1 LTVC -->
            <details class="group bg-white/95 rounded-[2rem] border-2 border-emerald-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-emerald-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">1. Xếp các từ in đậm trong đoạn thơ vào nhóm thích hợp (Động từ / Tính từ).</span>
                    <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-emerald-50 pt-6 bg-emerald-50/20 text-xl md:text-2xl font-bold space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white p-5 rounded-2xl border-2 border-orange-200">
                            <span class="text-orange-600 font-extrabold text-lg md:text-2xl block border-b border-orange-100 pb-2 mb-3">🟠 Nhóm ĐỘNG TỪ:</span>
                            <ul class="list-disc ml-6 space-y-1 font-black text-gray-850">
                                <li>mong đợi</li>
                                <li>giỡn đùa</li>
                            </ul>
                        </div>
                        <div class="bg-white p-5 rounded-2xl border-2 border-sky-200">
                            <span class="text-sky-600 font-extrabold text-lg md:text-2xl block border-b border-sky-100 pb-2 mb-3">🔵 Nhóm TÍNH TỪ:</span>
                            <ul class="list-disc ml-6 space-y-1 font-black text-gray-850">
                                <li>trống</li>
                                <li>xa xôi</li>
                                <li>êm đềm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </details>

            <!-- Bài tập 2 LTVC -->
            <details class="group bg-white/95 rounded-[2rem] border-2 border-emerald-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-emerald-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">2. Tìm từ đồng nghĩa với mỗi từ in đậm ở bài tập 1.</span>
                    <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-emerald-50 pt-6 bg-emerald-50/20 text-xl md:text-2xl font-bold space-y-4">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-emerald-600 text-white font-extrabold text-xl md:text-2xl">
                                    <th class="p-4 rounded-tl-xl">Từ in đậm</th>
                                    <th class="p-4 rounded-tr-xl">Từ đồng nghĩa gợi ý</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-emerald-100 text-lg md:text-xl">
                                <tr class="hover:bg-white/40">
                                    <td class="p-4 font-black text-emerald-900">trống</td>
                                    <td class="p-4">trống trải, trống rỗng, vắng vẻ, trống trơn...</td>
                                </tr>
                                <tr class="hover:bg-white/40">
                                    <td class="p-4 font-black text-emerald-900">mong đợi</td>
                                    <td class="p-4">chờ mong, chờ đợi, ngóng chờ, trông ngóng, hi vọng...</td>
                                </tr>
                                <tr class="hover:bg-white/40">
                                    <td class="p-4 font-black text-emerald-900">xa xôi</td>
                                    <td class="p-4">xa xăm, xa tít, xa thẳm, tít tắp...</td>
                                </tr>
                                <tr class="hover:bg-white/40">
                                    <td class="p-4 font-black text-emerald-900">êm đềm</td>
                                    <td class="p-4">êm ả, bình yên, dịu êm, lặng lẽ, yên tĩnh...</td>
                                </tr>
                                <tr class="hover:bg-white/40">
                                    <td class="p-4 font-black text-emerald-900">giỡn đùa</td>
                                    <td class="p-4">đùa giỡn, nô đùa, đùa nghịch, chơi đùa...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </details>

            <!-- Bài tập 3 LTVC - Viết câu ghép và kiểm tra -->
            <details class="group bg-white/95 rounded-[2rem] border-2 border-emerald-100 shadow-sm transition-all hover:shadow-xl overflow-hidden">
                <summary class="w-full p-6 md:p-8 text-left flex justify-between items-center cursor-pointer list-none bg-white hover:bg-emerald-50/50 transition-colors">
                    <span class="font-black text-gray-800 text-2xl md:text-3xl leading-tight">3. Viết 1 – 2 câu ghép về bạn nhỏ trong bài thơ Thư của bố, sử dụng kết từ nối các vế câu.</span>
                    <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                        <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </summary>
                <div class="px-8 pb-8 text-gray-700 leading-relaxed border-t-2 border-emerald-50 pt-6 bg-emerald-50/20 text-xl md:text-2xl font-bold space-y-4">
                    <p class="text-blue-600 font-bold leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-dashed border-blue-200">
                        📝 <strong>Yêu cầu:</strong> Viết câu ghép có hai vế câu biểu thị quan hệ ý nghĩa (nguyên nhân - kết quả, tương phản, giả thiết - kết quả,...) được nối bằng từ nối (kết từ như: <em>nhưng, tuy... nhưng, vì... nên...</em>).
                    </p>

                    <!-- Khung viết câu ghép -->
                    <div class="space-y-4">
                        <textarea id="area-viet145" rows="4" oninput="capNhatDem145()" placeholder="Nhập câu ghép của em vào đây (Ví dụ: Tuy bố ở đảo xa nhưng bạn nhỏ vẫn cảm thấy ấm áp qua những cánh thư...)" class="w-full p-5 border-2 border-emerald-150 rounded-2xl font-bold bg-white text-gray-800 focus:border-emerald-500 outline-none text-xl resize-none shadow-sm"></textarea>
                        <div class="flex justify-between items-center text-lg font-bold text-gray-500">
                            <span id="char-count-145">Độ dài: 0 ký tự (Đảm bảo tối thiểu 15 ký tự cho 1 câu ghép hoàn chỉnh)</span>
                        </div>
                        
                        <div class="flex justify-end items-center gap-4"><button onclick="nopCauGhep145();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    </div>
                </div>
            </details>

        </div>
    </section>
</div>

<script>
window.capNhatDem145 = function() {
    const txt = document.getElementById('area-viet145').value;
    const counter = document.getElementById('char-count-145');
    if (counter) {
        counter.innerHTML = "Độ dài: " + txt.length + " ký tự (Đảm bảo tối thiểu 15 ký tự)";
    }
};

window.nopCauGhep145 = function() {
    const txt = document.getElementById('area-viet145').value.trim();
    if (txt.length < 15) {
        UI.showToast("Câu ghép của em còn ngắn quá hoặc chưa đầy đủ ý nghĩa!", "error");
    } else {
        UI.showToast("Rất tốt! Hệ thống đã ghi nhận câu ghép của em.", "success");
    }
};
</script>
`,
    "quizPool": [
        {
            "question": "Bài thơ 'Thư của bố' do ai sáng tác?",
            "options": [
                "Trần Nhuận Minh",
                "Thụy Anh",
                "Bùi Hiển",
                "Lê Văn Trường"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài thơ, người bố đang làm nhiệm vụ ở địa điểm nào?",
            "options": [
                "Nơi biên giới vùng cao miền núi phía Bắc",
                "Nơi đảo xa bảo vệ biển đảo của Tổ quốc",
                "Trong thành phố đông đúc ở thủ đô",
                "Trong một nhà máy dệt lớn ở miền Nam"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ở khổ thơ thứ nhất, ngôi nhà của hai mẹ con được miêu tả như thế nào?",
            "options": [
                "Rất nhộn nhịp, vui vẻ vì có nhiều người đến chơi",
                "Nhà một phòng rộng rãi và lúc nào cũng bật nhạc rộn ràng",
                "Nhà một phòng nhưng vẫn trống trải vì quen vắng bố",
                "Nhà cao cửa rộng nhưng cũ kỹ và vắng người"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Những lá thư của bố được miêu tả mang theo hương vị đặc trưng nào?",
            "options": [
                "Mùi thơm ngào ngạt của hoa nhài mùa hạ",
                "Hương cốm mới dịu ngọt nơi đồng quê",
                "Sự mặn mòi của hương biển xa xôi cùng gió lộng",
                "Mùi của sách vở thơm tho những ngày khai trường"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Con vật nào giỡn đùa trên mặt nước biển được nhắc đến ở khổ thơ thứ nhất?",
            "options": [
                "Đàn chim hải âu",
                "Đàn cá heo",
                "Đàn rùa biển lớn",
                "Con cá voi khổng lồ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào miêu tả sự khắc nghiệt của thời tiết nguy hiểm nơi đảo xa?",
            "options": [
                "áo đọng muối khô, da nhận mùi nắng khét",
                "cơn bão chờ phía trước, dải đá ngầm, nước đen thăm thẳm",
                "nhịp bước khẩn trương khi khẩu lệnh vang lên",
                "mắt dõi theo vệt ra-đa rà quét"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tại sao người bố không kể về những gian nan vất vả của mình trong thư?",
            "options": [
                "Vì bố không nhớ bất cứ chi tiết nào về những khó khăn đó",
                "Vì bố muốn gia đình yên lòng, thư chỉ ngập tràn nỗi nhớ thương yêu",
                "Vì bố bận quá không có thời gian viết dài dòng",
                "Vì bố muốn giữ bí mật quân sự tuyệt đối"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cụm từ 'lá thư xanh' ở khổ cuối thể hiện điều gì?",
            "options": [
                "Lá thư viết trên giấy màu xanh lam đậm",
                "Lá thư mang niềm tin yêu, hi vọng ấm áp dịu dàng từ đảo xa",
                "Lá thư bị dính màu mực xanh lá cây",
                "Lá thư làm bằng vỏ cây tre xanh ngoài vườn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hai dòng thơ 'Nơi đầu sóng, sẵn sàng nghênh chiến / Vẫn dịu dàng, êm ái lá thư xanh...' ca ngợi đặc điểm gì của người lính biển?",
            "options": [
                "Vừa dũng cảm sẵn sàng bảo vệ Tổ quốc, vừa ấm áp giàu tình cảm gia đình",
                "Rất thích viết thư cho con vào những buổi tối nhiều mây",
                "Khả năng học thuộc lòng nhanh các khẩu lệnh trên biển",
                "Sở thích vẽ tranh phong cảnh màu xanh mát rượi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ in đậm 'mong đợi' trong khổ thơ 1 thuộc từ loại nào?",
            "options": [
                "Tính từ",
                "Động từ",
                "Danh từ",
                "Quan hệ từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ in đậm 'xa xôi' trong câu 'Và mặn mòi hương biển xa xôi...' thuộc từ loại nào?",
            "options": [
                "Động từ chỉ trạng thái",
                "Danh từ riêng chỉ địa danh",
                "Tính từ chỉ đặc điểm khoảng cách",
                "Kết từ liên kết các vế câu"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ in đậm 'êm đềm' trong câu 'Nghe êm đềm sóng lặng lững lờ trôi' thuộc nhóm từ loại nào?",
            "options": [
                "Động từ",
                "Danh từ",
                "Tính từ",
                "Đại từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ in đậm 'giỡn đùa' trong câu 'Thấy đàn cá heo giỡn đùa mặt nước' là từ loại gì?",
            "options": [
                "Danh từ",
                "Tính từ",
                "Động từ",
                "Trợ từ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'mong đợi'?",
            "options": [
                "mong ngóng",
                "quên lãng",
                "trốn chạy",
                "khẩn trương"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào sau đây đồng nghĩa với từ 'êm đềm'?",
            "options": [
                "ồn ã",
                "êm ả",
                "khét lẹt",
                "đậm đà"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ in đậm 'trống' trong dòng thơ 'Hai mẹ con, nhà một phòng cũng trống' thuộc từ loại nào?",
            "options": [
                "Động từ",
                "Danh từ",
                "Tính từ",
                "Từ láy"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Dòng thơ nào giải thích rõ nhất thói quen dũng cảm vượt nắng gió của người lính biển?",
            "options": [
                "Con lớn lên, quen vắng bố trong nhà",
                "Nghe êm đềm sóng lặng lững lờ trôi",
                "Áo đọng muối khô, da nhận mùi nắng khét",
                "Vẫn dịu dàng, êm ái lá thư xanh"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};