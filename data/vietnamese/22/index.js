export const lesson22 = {
    "topic": "Tiếng Việt 5",
    "week": "4",
    "period": "22",
    "title": "ĐỌC: BỘ SƯU TẬP ĐỘC ĐÁO",
    "desc": "Bài học giúp học sinh hiểu về ý nghĩa của tình bạn và những món quà tinh thần vô giá thông qua câu chuyện sưu tầm giọng nói của Loan cho buổi triển lãm lớp học.",
    "subject": "Đọc",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đọc diễn cảm bài đọc "Bộ sưu tập độc đáo", cảm nhận được tình bạn ấm áp, thiêng liêng của tuổi học trò trước khi chuyển cấp.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu ý nghĩa sâu sắc của những món quà tinh thần so với những món quà vật chất.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: ĐOÁN NỘI DUNG CÂU CHUYỆN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động: Dự đoán nội dung câu chuyện</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Dựa vào nhan đề "Bộ sưu tập độc đáo" và bức tranh minh họa các bạn nhỏ đang tổ chức triển lãm ở lớp học (trang 36), em hãy đoán xem câu chuyện sẽ nói về bộ sưu tập món đồ gì:</p>
        
        <div class="space-y-4">
            <textarea id="ans-vn22-kd" rows="3" placeholder="Nhập dự đoán của em tại đây (Ví dụ: Em đoán các bạn nhỏ sẽ cùng nhau mang đến lớp những bộ sưu tập đồ chơi hoặc những món đồ tự làm có ý nghĩa...)" class="w-full p-4 border-2 border-sky-100 rounded-2xl outline-none focus:border-sky-500 font-bold bg-sky-50/10 text-2xl md:text-3xl"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="checkKD22();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn22-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center"></div>
        </div>
    </div>

    <!-- 📖 BÀI ĐỌC: BỘ SƯU TẬP ĐỘC ĐÁO -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Bộ sưu tập độc đáo
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/22/bo_suu_tap_doc_dao.mp3')" class="p-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md animate-bounce" title="Nghe đọc diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <!-- Nội dung bài đọc -->
            <div class="serif-font text-gray-900 leading-relaxed text-justify space-y-5 bg-sky-50/10 p-6 md:p-8 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                <!-- Minh họa SGK (Góc trên bên phải, bấm vào phóng to) -->
                <div onclick="window.showMathFeedback('Bộ sưu tập độc đáo', '📻', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-teal-50 rounded-[32px] border-4 border-white shadow-xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/22/22.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Bộ sưu tập độc đáo&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-sky-800 mt-4&quot;&gt;Loan cùng các bạn nhỏ tổ chức buổi triển lãm lớp học vui nhộn, chia sẻ những lời chúc qua đài cassette.&lt;/p&gt;&lt;/div&gt;')" class="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-full md:w-80 bg-gradient-to-br from-sky-50 to-teal-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                    <img src="assets/images/tiengviet_5_1/22/22.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Bộ sưu tập độc đáo">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                </div>

                <p class="indent-8 font-medium">Vào một buổi học dịp gần Tết, thầy Dương nói:</p>
                <p class="indent-4 font-semibold">– Sắp nghỉ Tết, thầy muốn lớp có một hoạt động vui và ý nghĩa. Mỗi bạn sẽ sưu tầm một món đồ. Ra Tết, chúng ta tổ chức triển lãm.</p>
                <p class="indent-8 font-medium">Cả lớp ồ lên. Long cười rất “oách” vì cậu ấy là “vua” tem trong lớp. Khánh cũng đắc ý vì cậu ấy chuyên sưu tầm kẹp sách. Còn Loan hơi lo vì chưa biết sưu tầm gì. Thầy bảo:</p>
                <p class="indent-4 font-semibold">– Quan trọng là ý nghĩa chứ đừng chú trọng giá trị vật chất của món đồ.</p>
                <p class="indent-8 font-medium">Về nhà, Loan cứ nghĩ mãi: “Sưu tầm cái gì thật ý nghĩa được nhỉ?”. Thấy bố, vốn là một giáo viên, nghe lại băng ghi âm các bài giảng, Loan chợt nảy ra ý tưởng sưu tầm giọng nói của cả lớp. Loan mượn bố chiếc máy ghi âm. Gặp bạn nào, Loan cũng bảo:</p>
                <p class="indent-4 font-semibold">– Cậu nói một câu chúc lớp mình đi!</p>
                <p class="indent-4 font-semibold">– Chúc gì được chứ?</p>
                <p class="indent-4 font-semibold">– Gì cũng được. Chúng mình sắp chuyển cấp rồi.</p>
                <p class="indent-8 font-medium">Thế là mỗi bạn một câu. Trong vài ngày, Loan đã ghi âm xong.</p>
                <p class="indent-8 font-medium">Ngày triển lãm, lớp học như một cửa hiệu tạp hoá vui nhộn. Đến lượt mình, Loan trịnh trọng cắm máy ghi âm vào loa rồi hồi hộp bật lên. Cả lớp tò mò nhìn chiếc loa.</p>
                <p class="indent-4 font-semibold text-sky-800">– Chúc tình bạn của chúng mình thật lâu bền!</p>
                <p class="indent-8 font-medium">Phượng giật mình. Chính là giọng của bạn ấy. Giọng Phượng mềm mại như phát thanh viên. Cả lớp vỗ tay như pháo ran. Vài bạn chồm hẳn người lên. Ai cũng háo hức chờ đến mình.</p>
                <p class="indent-4 font-semibold text-amber-600">– Chúc ai có tật thì sửa, không có thì bỏ qua.</p>
                <p class="indent-8 font-medium">Cả lớp cười lăn. Long – chủ nhân của giọng nói liền thoắng vừa vang lên – cũng ôm bụng cười. Cứ thế, mỗi giọng nói cất lên đều thật thân thương và quen thuộc. Ai đi qua lớp Loan cũng ngạc nhiên vì những tiếng vỗ tay liên tiếp vọng ra. Thỉnh thoảng, lại có tràng cười lớn, xen lẫn tiếng thầy Dương:</p>
                <p class="indent-4 font-black text-emerald-800">– Độc đáo quá, ý nghĩa quá!</p>
                
            </div>

            <!-- Từ ngữ khó -->
            <div class="bg-amber-50/70 p-6 rounded-[28px] border-2 border-dashed border-amber-200">
                <p class="text-xs font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <span>📝</span> Từ ngữ
                </p>
                <ul class="space-y-2 text-2xl md:text-3xl text-amber-600 font-semibold">
                    <li>• <strong>Triển lãm</strong>: trưng bày sản phẩm để mọi người xem.</li>
                    <li>• <strong>Phát thanh viên</strong>: người đọc tin, bài trên đài phát thanh, đài truyền hình.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-sky-600 to-teal-500 text-white shadow-xl relative overflow-hidden mt-6">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Câu chuyện ngợi ca tình cảm bạn bè trong sáng, thiêng liêng tuổi học trò và khẳng định giá trị to lớn của những món quà tinh thần lưu giữ kỉ niệm thân thương so với những món quà vật chất đơn thuần."
            </p>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📻 MÁY GHI ÂM TƯƠNG TÁC CỦA LOAN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📻</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Bộ sưu tập giọng nói của Loan</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Bấm vào cuộn băng của từng bạn để nghe giọng chúc mừng của họ vọng ra từ loa</p>
                </div>
            </div>

            <!-- Thiết kế chiếc máy cassette/đài ghi âm Premium -->
            <div class="bg-slate-600 p-6 md:p-8 rounded-[40px] border-8 border-slate-100 shadow-2xl max-w-2xl mx-auto text-white space-y-6 relative">
                <!-- Loa đài -->
                <div class="flex justify-between items-center px-4">
                    <div class="w-14 h-14 rounded-full bg-slate-600 border-4 border-slate-100 flex items-center justify-center text-xl animate-pulse">🔊</div>
                    <div class="font-mono text-center">
                        <span class="text-xs text-slate-800 block tracking-widest">CASSETTE RECORDER</span>
                        <span class="text-xl md:text-2xl font-black text-emerald-800 tracking-wider">PLAYING...</span>
                    </div>
                    <div class="w-14 h-14 rounded-full bg-slate-600 border-4 border-slate-100 flex items-center justify-center text-xl animate-pulse">🔊</div>
                </div>

                <!-- Băng Cassette -->
                <div class="bg-slate-600 p-4 rounded-3xl border-4 border-slate-100 flex justify-around items-center h-28 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-full border-8 border-slate-100 animate-spin"></div>
                    <div class="w-24 h-8 bg-slate-600 border border-slate-100 rounded text-center font-mono text-xs pt-1.5 text-slate-800">LOAN'S TAPE</div>
                    <div class="w-12 h-12 rounded-full border-8 border-slate-100 animate-spin"></div>
                </div>

                <!-- Các nút chọn băng (Phượng, Long, Chiến, Nam) -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <button onclick="playTape22('phuong')" class="py-3 bg-amber-500 hover:bg-amber-500 text-slate-900 font-black rounded-xl text-sm transition-all shadow-md active:scale-95">
                        📼 Băng Phượng
                    </button>
                    <button onclick="playTape22('long')" class="py-3 bg-sky-600 hover:bg-sky-600 text-slate-900 font-black rounded-xl text-sm transition-all shadow-md active:scale-95">
                        📼 Băng Long
                    </button>
                    <button onclick="playTape22('chien')" class="py-3 bg-emerald-600 hover:bg-emerald-600 text-slate-900 font-black rounded-xl text-sm transition-all shadow-md active:scale-95">
                        📼 Băng Chiến
                    </button>
                    <button onclick="playTape22('nam')" class="py-3 bg-rose-600 hover:bg-rose-600 text-slate-900 font-black rounded-xl text-sm transition-all shadow-md active:scale-95">
                        📼 Băng Nam
                    </button>
                </div>
            </div>

            <!-- Bong bóng chat lời chúc hiện ra -->
            <div id="fb-tape-voice" class="hidden max-w-xl mx-auto p-5 rounded-2xl text-center shadow-lg border animate-in slide-in-from-bottom-2 duration-322"></div>
        </div>
    </section>

    <!-- 🧩 SẮP XẾP QUY TRÌNH ĐÓNG VAI LOAN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🧩</div>
                <div>
                    <h3 class="text-2xl md:text-5xl font-black text-gray-800">Quy trình thực hiện bộ sưu tập của Loan</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Hãy đóng vai Loan, sắp xếp 4 bước dưới đây theo đúng thứ tự thời gian em đã thực hiện ý tưởng</p>
                </div>
            </div>

            <!-- Bộ kéo/thả hoặc chọn số sắp xếp -->
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="bg-white p-4 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
                    <p class="text-xs font-black text-sky-800">BƯỚC A</p>
                    <p class="text-sm font-bold text-gray-800">Mượn bố chiếc máy ghi âm học tập</p>
                    <select id="vn22-step-a" class="w-full p-2 border border-sky-100 rounded-lg text-xs font-semibold">
                        <option value="">Chọn thứ tự...</option>
                        <option value="1">Bước 1</option>
                        <option value="2">Bước 2</option>
                        <option value="3">Bước 3</option>
                        <option value="4">Bước 4</option>
                    </select>
                </div>

                <div class="bg-white p-4 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
                    <p class="text-xs font-black text-sky-800">BƯỚC B</p>
                    <p class="text-sm font-bold text-gray-800">Nảy ra ý tưởng sau khi thấy bố nghe lại băng bài giảng</p>
                    <select id="vn22-step-b" class="w-full p-2 border border-sky-100 rounded-lg text-xs font-semibold">
                        <option value="">Chọn thứ tự...</option>
                        <option value="1">Bước 1</option>
                        <option value="2">Bước 2</option>
                        <option value="3">Bước 3</option>
                        <option value="4">Bước 4</option>
                    </select>
                </div>

                <div class="bg-white p-4 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
                    <p class="text-xs font-black text-sky-800">BƯỚC C</p>
                    <p class="text-sm font-bold text-gray-800">Cắm máy ghi âm vào loa phát trong ngày triển lãm</p>
                    <select id="vn22-step-c" class="w-full p-2 border border-sky-100 rounded-lg text-xs font-semibold">
                        <option value="">Chọn thứ tự...</option>
                        <option value="1">Bước 1</option>
                        <option value="2">Bước 2</option>
                        <option value="3">Bước 3</option>
                        <option value="4">Bước 4</option>
                    </select>
                </div>

                <div class="bg-white p-4 rounded-2xl border border-sky-100 text-center space-y-2 shadow-sm">
                    <p class="text-xs font-black text-sky-800">BƯỚC D</p>
                    <p class="text-sm font-bold text-gray-800">Gặp từng bạn trong lớp để ghi âm lời chúc</p>
                    <select id="vn22-step-d" class="w-full p-2 border border-sky-100 rounded-lg text-xs font-semibold">
                        <option value="">Chọn thứ tự...</option>
                        <option value="1">Bước 1</option>
                        <option value="2">Bước 2</option>
                        <option value="3">Bước 3</option>
                        <option value="4">Bước 4</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkSteps22();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn22-steps" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg text-center"></div>
        </div>
    </section>

    <!-- ❓ TRẢ LỜI CÂU HỎI ĐỌC HIỂU (ACCORDION) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">❓</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Trả lời câu hỏi đọc hiểu</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Thầy Dương muốn cả lớp thực hiện hoạt động gì? Các bạn trong lớp có thái độ như thế nào với hoạt động ấy?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p>• <strong>Hoạt động</strong>: Thầy Dương muốn mỗi bạn sưu tầm một món đồ có ý nghĩa để tổ chức triển lãm vào dịp ra Tết.</p>
                        <p>• <strong>Thái độ</strong>: Cả lớp đều ồ lên thích thú và đắc ý (Long cười oách vì là vua tem, Khánh đắc ý vì có kẹp sách), riêng Loan có chút lo lắng vì chưa nghĩ ra món đồ nào.</p>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Các bạn cảm thấy thế nào về bộ sưu tập của Loan?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p>Các bạn trong lớp cảm thấy vô cùng tò mò, háo hức, bất ngờ và thích thú. Mọi người vỗ tay như pháo ran, chồm hẳn người lên chờ đợi giọng nói của mình vang lên, có lúc cười lăn và ngập tràn xúc động ấm áp khi nghe lại giọng nói thân thương của nhau.</p>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Theo em, vì sao thầy Dương cho rằng bộ sưu tập đó rất độc đáo?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p>Thầy Dương khen ngợi bộ sưu tập của Loan độc đáo vì:</p>
                        <p>• Thay vì sưu tầm hiện vật vật chất, Loan sưu tầm một thứ vô hình nhưng đong đầy cảm xúc: giọng nói và lời chúc của tập thể.</p>
                        <p>• Nó lưu giữ kỷ niệm tình bạn quý báu của cả lớp trước lúc sắp chuyển cấp học – một giá trị tinh thần vô giá mà tiền bạc không mua được.</p>
                    </div>
                </details>

                <!-- Câu 5 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            5. Nếu lớp em cũng tổ chức một buổi triển lãm giống lớp của Loan, em sẽ sưu tầm món đồ gì? Vì sao?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium space-y-2 text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold">💡 Gợi ý suy nghĩ:</p>
                        <p>Học sinh có thể chọn các món đồ ý nghĩa như: cuốn sổ lưu bút viết tay của cả lớp, album hình ảnh kỷ niệm những ngày đi dã ngoại, chiếc vòng tay bằng chỉ màu tự đan tặng nhau, hay những bức vẽ chân dung ngộ nghĩnh của các bạn trong lớp... để lưu giữ dấu ấn học trò sâu sắc.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 3: LUYỆN VIẾT CẢM THỤ (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận tình bạn</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                    Qua câu chuyện "Bộ sưu tập độc đáo", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) chia sẻ cảm nghĩ của em về ý nghĩa bộ sưu tập giọng nói của bạn Loan.
                </h4>

                <textarea id="ans-vn22-writing" rows="4" placeholder="Nhập cảm nhận của em..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-end items-center gap-4"><button onclick="resetWritingVn22()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="checkWritingVn22();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                
                <div id="fb-vn22-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn22()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Thầy Dương muốn cả lớp thực hiện hoạt động sưu tầm vào thời điểm nào?",
            "options": [
                "Vào kỳ nghỉ hè",
                "Vào dịp gần Tết và tổ chức triển lãm ra Tết",
                "Vào ngày khai trường",
                "Vào cuối năm học lớp 5"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ai trong lớp được mệnh danh là 'vua' tem?",
            "options": [
                "Khánh",
                "Long",
                "Loan",
                "Phượng"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bạn Khánh đắc ý vì chuyên sưu tầm món đồ gì?",
            "options": [
                "Đá cuội màu sắc",
                "Kẹp sách (bookmark)",
                "Nhãn vở cổ điển",
                "Vỏ sò bãi biển"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ý kiến của thầy Dương về món đồ cần sưu tầm là gì?",
            "options": [
                "Phải là món đồ thật đắt tiền và sang trọng",
                "Quan trọng là ý nghĩa chứ đừng chú trọng giá trị vật chất",
                "Bắt buộc phải sưu tầm được tem thư",
                "Chỉ chấp nhận các món đồ do học sinh tự vẽ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Loan đã nảy ra ý tưởng độc đáo của mình khi thấy bố làm việc gì?",
            "options": [
                "Bố ngồi nghe lại băng ghi âm các bài giảng",
                "Bố sửa lại chiếc đài cũ",
                "Bố dọn dẹp các bức ảnh gia đình",
                "Bố cất những cuốn sách cổ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Loan đã mượn bố thiết bị gì để thực hiện bộ sưu tập của mình?",
            "options": [
                "Máy ảnh cơ",
                "Máy ghi âm",
                "Điện thoại di động",
                "Đĩa CD"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Tại sao Loan lại muốn sưu tầm giọng nói của các bạn học sinh trong lớp?",
            "options": [
                "Vì các bạn hát rất hay",
                "Vì cả lớp sắp chuyển cấp học nên Loan muốn giữ lại kỷ niệm",
                "Vì bài tập thầy giao bắt buộc phải ghi âm",
                "Vì Loan muốn trở thành phát thanh viên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhận xét nào đúng về giọng nói của bạn Phượng khi phát qua loa?",
            "options": [
                "Khàn khàn khó nghe",
                "Mềm mại như phát thanh viên",
                "Lanh lảnh đinh tai",
                "Liền thoắng rất nhanh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ai là chủ nhân của câu chúc hài hước 'Chúc ai có tật thì sửa, không có thì bỏ qua'?",
            "options": [
                "Khánh",
                "Long",
                "Chiến",
                "Nam"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thái độ của tập thể lớp khi nghe các giọng nói của các bạn vang lên là gì?",
            "options": [
                "Ồn ào cãi vã lớn tiếng",
                "Thờ ơ không ai chú ý lắng nghe",
                "Tò mò, vỗ tay như pháo ran, cười lớn và cảm thấy thân thương",
                "Mọi người cùng im lặng bỏ về"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Thầy Dương đã nhận xét thế nào về bộ sưu tập giọng nói của Loan?",
            "options": [
                "Tốn thời gian và không cần thiết",
                "Không hợp lệ vì không có hiện vật trưng bày",
                "Độc đáo quá, ý nghĩa quá!",
                "Cần phải sửa đổi thêm"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Ý nghĩa chính của từ ngữ 'Triển lãm' theo chú thích ở SGK là gì?",
            "options": [
                "Bán các món đồ thủ công lấy tiền",
                "Trưng bày sản phẩm để mọi người xem",
                "Thiết kế tranh vẽ trên tường",
                "Tổ chức hội thảo chuyên đề"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ ngữ 'Phát thanh viên' được định nghĩa thế nào ở SGK?",
            "options": [
                "Người thiết kế các chương trình ca nhạc",
                "Người đọc tin, bài trên đài phát thanh, đài truyền hình",
                "Người biểu diễn nhạc cụ trên sân khấu lớn",
                "Thầy giáo giảng dạy trực tuyến"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Giá trị của bộ sưu tập giọng nói của Loan là gì?",
            "options": [
                "Giá trị vật chất rất cao",
                "Giá trị tinh thần vô giá, đong đầy kỷ niệm tình bạn ấm áp",
                "Giúp Loan kiếm được nhiều tiền từ triển lãm",
                "Giúp Loan học giỏi môn Toán hơn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ câu chuyện 'Bộ sưu tập độc đáo', chúng ta rút ra được bài học gì về những món quà?",
            "options": [
                "Quà tặng đắt tiền nhất luôn là món quà duy nhất có ý nghĩa",
                "Những món quà tinh thần đong đầy tình cảm chân thành đôi khi còn quý giá và đáng trân trọng hơn vật chất",
                "Không nên tặng quà cho người khác",
                "Món quà nào cũng cần phải trưng bày ở triển lãm"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- KIỂM TRA KHỞI ĐỘNG VN22 ---
window.checkKD22 = function() {
    const text = document.getElementById('ans-vn22-kd')?.value.trim();
    const fb = document.getElementById('fb-vn22-kd');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = "⚠️ Em hãy nhập dự đoán của mình trước khi gửi nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    fb.innerHTML = "🎉 Cảm ơn dự đoán của em! Ý kiến rất thú vị, hãy cùng đọc nội dung truyện dưới đây để xem suy đoán của em chính xác không nhé.";
    fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2";
};

// --- PHÁT CASSETTE TƯƠNG TÁC ---
window.playTape22 = function(name) {
    const fb = document.getElementById('fb-tape-voice');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (name === 'phuong') {
        fb.innerHTML = `
            <div class="space-y-1">
                <span class="text-xs font-black text-amber-600 block">🎤 LỜI CHÚC CỦA PHƯỢNG (Giọng mềm mại):</span>
                <p class="text-xl font-bold text-gray-800">"Chúc tình bạn của chúng mình thật lâu bền!"</p>
                <p class="text-xs text-gray-800 italic mt-2">👏 Cả lớp vỗ tay rào rào, vô cùng xúc động và háo hức chờ đến lượt mình.</p>
            </div>
        `;
        fb.className = "max-w-xl mx-auto p-5 rounded-2xl text-center shadow-lg border-2 border-amber-100 bg-amber-50/50 animate-in slide-in-from-bottom-2 duration-322";
    } else if (name === 'long') {
        fb.innerHTML = `
            <div class="space-y-1">
                <span class="text-xs font-black text-sky-800 block">🎤 LỜI CHÚC CỦA LONG (Giọng liền thoắng tinh nghịch):</span>
                <p class="text-xl font-bold text-gray-800">"Chúc ai có tật thì sửa, không có thì bỏ qua."</p>
                <p class="text-xs text-gray-800 italic mt-2">😆 Cả lớp ôm bụng cười lăn, bản thân Long cũng ôm bụng cười theo.</p>
            </div>
        `;
        fb.className = "max-w-xl mx-auto p-5 rounded-2xl text-center shadow-lg border-2 border-sky-100 bg-sky-50/50 animate-in slide-in-from-bottom-2 duration-322";
    } else if (name === 'chien') {
        fb.innerHTML = `
            <div class="space-y-1">
                <span class="text-xs font-black text-emerald-800 block">🎤 LỜI CHÚC CỦA CHIẾN (Giọng to rõ hào sảng):</span>
                <p class="text-xl font-bold text-gray-800">"Chúc lớp mình tất cả đều đỗ vào trường điểm THCS!"</p>
                <p class="text-xs text-gray-800 italic mt-2">🌟 Cả lớp cùng đồng thanh reo hò quyết tâm.</p>
            </div>
        `;
        fb.className = "max-w-xl mx-auto p-5 rounded-2xl text-center shadow-lg border-2 border-emerald-100 bg-emerald-50/50 animate-in slide-in-from-bottom-2 duration-322";
    } else if (name === 'nam') {
        fb.innerHTML = `
            <div class="space-y-1">
                <span class="text-xs font-black text-rose-800 block">🎤 LỜI CHÚC CỦA NAM (Giọng ấm áp):</span>
                <p class="text-xl font-bold text-gray-800">"Chúc thầy Dương luôn mạnh khỏe, chúc cả lớp mình mãi là một gia đình!"</p>
                <p class="text-xs text-gray-800 italic mt-2">❤️ Thầy Dương mỉm cười xoa đầu Nam, cả lớp vỗ tay không ngớt.</p>
            </div>
        `;
        fb.className = "max-w-xl mx-auto p-5 rounded-2xl text-center shadow-lg border-2 border-rose-100 bg-rose-50/50 animate-in slide-in-from-bottom-2 duration-322";
    }
};

// --- KIỂM TRA SẮP XẾP BƯỚC ĐÓNG VAI LOAN ---
window.checkSteps22 = function() {
    const stepA = document.getElementById('vn22-step-a')?.value;
    const stepB = document.getElementById('vn22-step-b')?.value;
    const stepC = document.getElementById('vn22-step-c')?.value;
    const stepD = document.getElementById('vn22-step-d')?.value;
    const fb = document.getElementById('fb-vn22-steps');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!stepA || !stepB || !stepC || !stepD) {
        fb.innerHTML = "⚠️ Em hãy chọn thứ tự cho tất cả 4 bước nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-white mt-2";
        return;
    }

    // Thứ tự đúng:
    // Bước B: nảy ra ý tưởng -> Bước 1
    // Bước A: mượn máy ghi âm -> Bước 2
    // Bước D: gặp từng bạn ghi âm -> Bước 3
    // Bước C: cắm vào loa ở triển lãm -> Bước 4
    const dung = stepB === '1' && stepA === '2' && stepD === '3' && stepC === '4';

    if (dung) {
        fb.innerHTML = "🎉 Chính xác! Em đã sắp xếp đúng quy trình Loan thực hiện bộ sưu tập giọng nói độc đáo.";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white mt-2";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy nhớ lại câu chuyện xem Loan làm việc gì trước, việc gì sau để chọn lại nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white mt-2";
    }
};

// --- LOGIC BÀI TẬP CẢM THỤ TỰ LUẬN VN22 ---
window.checkWritingVn22 = function() {
    const text = document.getElementById('ans-vn22-writing')?.value.trim();
    const fb = document.getElementById('fb-vn22-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn của em hơi ngắn hoặc chưa nhập gì. Hãy cố gắng viết ít nhất 3 câu để bày tỏ cảm thụ nhé!";
        fb.className = "mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl font-bold text-lg";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-amber-600 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Tuyệt vời! Em đã cảm nhận rất sâu sắc giá trị tinh thần to lớn của bộ sưu tập giọng nói mà Loan sưu tầm. Món quà giản dị nhưng lưu giữ trọn vẹn những kỉ niệm thân thương, tiếng cười và tình bạn gắn kết trước khi chuyển cấp."</p>
            <span class="inline-block px-3 py-1 bg-white text-amber-600 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm: 122% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn22 = function() {
    const txt = document.getElementById('ans-vn22-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn22-writing');
    if (fb) fb.classList.add('hidden');
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBaiVn22 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback('Hoàn thành Tiết 22', '📻', '<div class="text-center p-6"><span class="text-7xl block mb-4">📻</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài đọc Bộ sưu tập độc đáo!</p><p class="text-lg text-gray-800 mt-3">Hãy luôn trân trọng tình cảm bạn bè và những giá trị kỷ niệm tinh thần quý giá xung quanh chúng ta.</p></div>');
    }
};
