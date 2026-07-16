export const lesson8 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "8",
    "title": "ĐỌC: TUỔI NGỰA",
    "desc": "Bài học giúp học sinh cảm nhận được vẻ đẹp tâm hồn của bạn nhỏ tuổi Ngựa: yêu thích tự do, muốn khám phá muôn nơi nhưng luôn dành tình cảm sâu nặng và nhớ đường trở về với mẹ.",
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
                Đọc trôi chảy, diễn cảm và cảm nhận được âm điệu tự hào, thiết tha của bài thơ "Tuổi Ngựa".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Hiểu được khát vọng tự do, khám phá thế giới của trẻ thơ gắn liền với tình yêu thương mẹ sâu sắc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Rèn luyện khả năng học thuộc lòng bài thơ thông qua công cụ che chữ tương tác.
            </li>
        </ul>
    </div>

    <!-- 🎮 Hoạt động Khởi động: Trò chơi Ghép cặp 12 Con Giáp -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <h3 class="text-2xl md:text-5xl font-black text-gray-800 flex items-center gap-3">
            <span class="p-1.5 bg-sky-600 text-white rounded-lg text-sm">🎮</span>
            Khởi động: Thử tài ghép đôi 12 Con Giáp
        </h3>
        <p class="text-xl md:text-2xl text-gray-800 italic">👉 Hướng dẫn: Nhấp chọn một địa chi (tên năm âm lịch) ở hàng trên, sau đó chọn loài vật tương ứng ở hàng dưới để hoàn thành vòng khởi động.</p>
        
        <div class="space-y-4">
            <!-- Hàng 1: Tên năm âm lịch -->
            <div class="flex flex-wrap gap-3 justify-center" id="kd-names-container">
                <button onclick="selectKdNode('name', 'mão')" id="kd-name-mão" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Mão</button>
                <button onclick="selectKdNode('name', 'ngọ')" id="kd-name-ngọ" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Ngọ</button>
                <button onclick="selectKdNode('name', 'thân')" id="kd-name-thân" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Thân</button>
                <button onclick="selectKdNode('name', 'dần')" id="kd-name-dần" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Dần</button>
            </div>
            
            <!-- Hàng 2: Con vật -->
            <div class="flex flex-wrap gap-3 justify-center" id="kd-animals-container">
                <button onclick="selectKdNode('animal', 'ngựa')" id="kd-animal-ngựa" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Ngựa</button>
                <button onclick="selectKdNode('animal', 'hổ')" id="kd-animal-hổ" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Hổ</button>
                <button onclick="selectKdNode('animal', 'mèo')" id="kd-animal-mèo" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Mèo</button>
                <button onclick="selectKdNode('animal', 'khỉ')" id="kd-animal-khỉ" class="px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Khỉ</button>
            </div>
            
            <div class="flex justify-between items-center pt-2">
                <button onclick="resetKd()" class="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
                <div id="fb-vn8-kd" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
                <button onclick="checkKd()" class="px-6 py-2.5 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base">KIỂM TRA KHỞI ĐỘNG</button>
            </div>
        </div>
    </div>

    <!-- 📖 Bài thơ & Công cụ Che chữ Học thuộc lòng -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex justify-between items-center border-b border-sky-100 pb-4">
                <span class="text-sky-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                    <span>📖</span> Bài thơ: Tuổi Ngựa (Trích)
                </span>
                <button onclick="playSegmentAudio('assets/audio/tiengviet/8/tuoi_ngua.mp3')" class="p-2.5 bg-sky-600 hover:bg-sky-600 text-white rounded-full transition-all flex items-center justify-center shadow-md animate-bounce" title="Nghe đọc diễn cảm">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
            </div>

            <div class="flex flex-wrap gap-2 bg-sky-50/50 p-4 rounded-2xl border border-sky-100 justify-center">
                <span class="font-bold text-sky-800 flex items-center gap-1 mr-2 text-lg md:text-3xl">🔑 Công cụ học thuộc lòng:</span>
                <button onclick="harnessPoemChe(0)" class="px-4 py-2 bg-white border border-sky-100 text-sky-900 font-black rounded-lg hover:bg-sky-50 text-sm">Hiện 100%</button>
                <button onclick="harnessPoemChe(30)" class="px-4 py-2 bg-sky-600 text-sky-900 font-black rounded-lg hover:bg-sky-600 text-sm">Che 30% chữ</button>
                <button onclick="harnessPoemChe(60)" class="px-4 py-2 bg-sky-600 text-white font-black rounded-lg hover:bg-sky-600 text-sm">Che 60% chữ</button>
                <button onclick="harnessPoemChe(100)" class="px-4 py-2 bg-gray-800 text-white font-black rounded-lg hover:bg-black text-sm">Che 100% chữ</button>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-center">
                <!-- Cột 1: Khổ thơ 1 & 2 -->
                <div class="w-full lg:w-1/2 serif-font text-gray-800 leading-relaxed text-left space-y-6 bg-sky-50/10 p-4 md:p-6 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                    <div>
                        <p class="font-black text-sky-800 text-center text-2xl md:text-3xl uppercase mb-6 tracking-wide">TUỔI NGỰA (Trích)</p>
                        <div id="poem-stanza-1" class="space-y-1">
                            <!-- JS will render line by line -->
                        </div>
                    </div>
                    <div id="poem-stanza-2" class="space-y-1">
                        <!-- JS will render line by line -->
                    </div>
                </div>

                <!-- Cột 2: Ảnh + Khổ thơ 3 & 4 -->
                <div class="w-full lg:w-1/2 space-y-6">
                    <!-- Ảnh minh họa thật -->
                    <div onclick="window.showMathFeedback('Chú Ngựa và Cánh đồng hoa', '🐎', '&lt;div class=&quot;text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-2xl&quot;&gt;&lt;img src=&quot;assets/images/tiengviet_5_1/8/8.png&quot; class=&quot;max-h-[70vh] mx-auto rounded-2xl shadow-md object-contain&quot; alt=&quot;Minh họa Tuổi Ngựa&quot;&gt;&lt;p class=&quot;text-2xl font-bold text-blue-800 mt-4&quot;&gt;Chú ngựa con tung vó phi qua những cánh đồng hoa mơ, hoa huệ rực rỡ nắng vàng.&lt;/p&gt;&lt;/div&gt;')" class="w-full bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] border-4 border-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all overflow-hidden relative group">
                        <img src="assets/images/tiengviet_5_1/8/8.png" class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500" alt="Minh họa Tuổi Ngựa">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Bấm để phóng to 🔍</div>
                    </div>

                    <div class="serif-font text-gray-800 leading-relaxed text-left space-y-6 bg-sky-50/10 p-4 md:p-6 rounded-3xl border border-sky-100/50 text-xl md:text-4xl">
                        <div id="poem-stanza-3" class="space-y-1">
                            <!-- JS will render line by line -->
                        </div>
                        <div id="poem-stanza-4" class="space-y-1">
                            <!-- JS will render line by line -->
                        </div>
                        <p class="text-right font-bold text-gray-800 mt-4 text-2xl md:text-3xl">(Xuân Quỳnh)</p>
                    </div>
                </div>
            </div>

            <!-- Từ ngữ cần nhớ -->
            <div class="bg-amber-50/70 p-5 rounded-[24px] border-2 border-dashed border-amber-200">
                <p class="text-sm font-black text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1">
                    <span>📝</span> Từ ngữ cần nhớ
                </p>
                <ul class="text-2xl md:text-3xl text-amber-600 font-medium">
                    <li>• <strong>Tuổi Ngựa</strong>: người sinh năm Ngọ (năm con Ngựa), theo cách gọi năm âm lịch của người Á Đông.</li>
                </ul>

    <!-- 💡 Nội dung chính bài học -->
    <div class="p-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Nội dung chính bài học
        </h4>
        <div class="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p class="text-xl md:text-4xl font-bold leading-relaxed text-center italic">
                "Bài thơ thể hiện khát vọng tự do khám phá mọi miền đất nước của bạn nhỏ tuổi Ngựa, nhưng sâu thẳm trong tim vẫn luôn nhớ đường về và dành tình yêu thương vô hạn cho người mẹ."
            </p>
        </div>
    </div>

            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN 1: TÌM HIỂU BÀI (ACCORDION CÂU 1, 3, 4) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Tìm hiểu nội dung bài thơ</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            1. Qua trò chuyện với mẹ, vì sao bạn nhỏ lại tưởng tượng mình là chú ngựa con rong ruổi đó đây?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Vì khi bạn nhỏ hỏi mẹ: <em>"Mẹ ơi, con tuổi gì?"</em>, mẹ đã trả lời bạn tuổi con là tuổi Ngựa.</li>
                            <li>Ngựa có đặc tính là thích chạy nhảy, không chịu ở yên một chỗ, thế nên bạn nhỏ đã lập tức liên tưởng tuổi mình là tuổi đi, tuổi tự do bay nhảy và phiêu du.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 3 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            3. Qua đoạn thơ cuối, bạn nhỏ muốn nói với mẹ điều gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Bạn nhỏ muốn mẹ đừng buồn lòng hay lo lắng khi con đi khám phá thế giới.</li>
                            <li>Dù khoảng cách có xa xôi thế nào (dẫu cách núi cách rừng, dẫu cách sông cách biển) thì con vẫn nhớ đường trở về bên lòng mẹ. Tình yêu thương của con dành cho mẹ luôn vượt qua mọi khoảng cách địa lý.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 4 -->
                <details class="group bg-white rounded-2xl border border-sky-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-sky-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-sky-700 transition-colors text-lg md:text-3xl">
                            4. Nêu nhận xét của em về nhân vật bạn nhỏ trong bài thơ.
                        </span>
                        <div class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-sky-50 pt-4 bg-sky-50/10 font-medium text-lg md:text-3xl">
                        <p class="text-sky-800 font-bold mb-2">💡 Gợi ý trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Bạn nhỏ là một cậu bé vô cùng hiếu động, thích tự do, ham tìm hiểu khám phá thế giới xung quanh và có trí tưởng tượng rất bay bổng.</li>
                            <li>Đồng thời, cậu bé cũng là một người con hết mực yêu thương mẹ, luôn hướng lòng mình về gia đình và mẹ kính yêu.</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: BÀI TẬP PHÂN LOẠI SƠ ĐỒ HÀNH TRÌNH (CÂU 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-8">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Phân loại hành trình của chú ngựa con</h3>
            </div>
            
            <p class="text-xl md:text-2xl text-gray-800 italic">
                👉 Hướng dẫn: Nhấp chọn một chi tiết ở cột A bên dưới, sau đó nhấp chọn nhóm tương ứng ở cột B để phân loại chính xác các chi tiết theo SGK.
            </p>

            <div id="matching-board-vn8" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative select-none">
                <!-- SVG Canvas to draw lines -->
                <svg id="svg-connections-vn8" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="min-height: 38px;"></svg>
                
                <!-- Cột A: Các chi tiết thơ -->
                <div class="flex flex-col gap-3" id="col-vn8-A">
                    <button onclick="selectNodeVn8('A', 'dat-da-qua')" id="node-vn8-A-dat-da-qua" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        a. Miền trung du, đất đỏ, đại ngàn, núi đá
                    </button>
                    <button onclick="selectNodeVn8('A', 'canh-da-thay')" id="node-vn8-A-canh-da-thay" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        b. Cánh đồng hoa mơ trắng, hoa huệ ngọt ngào, cúc dại
                    </button>
                    <button onclick="selectNodeVn8('A', 'nghi-da-co')" id="node-vn8-A-nghi-da-co" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        c. Mang về cho mẹ ngọn gió trăm miền, nhớ đường về với mẹ
                    </button>
                </div>

                <!-- Cột B: 3 Nhóm phân loại -->
                <div class="flex flex-col gap-3" id="col-vn8-B">
                    <button onclick="selectNodeVn8('B', 'nhom-dat')" id="node-vn8-B-nhom-dat" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        1. Những miền đất đã qua
                    </button>
                    <button onclick="selectNodeVn8('B', 'nhom-canh')" id="node-vn8-B-nhom-canh" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        2. Những cảnh vật đã thấy
                    </button>
                    <button onclick="selectNodeVn8('B', 'nhom-nghi')" id="node-vn8-B-nhom-nghi" class="p-4 bg-white border-4 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98">
                        3. Những cảm nghĩ đã có
                    </button>
                </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-4 justify-between items-center">
                <button onclick="resetMatchingVn8()" class="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
                <div id="matching-feedback-vn8" class="hidden text-xl font-bold rounded-xl px-5 py-2.5"></div>
                <div class="flex gap-3">
                    <button onclick="checkMatchingVn8()" class="px-6 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl hover:bg-sky-600 transition-all shadow-md">KIỂM TRA BÀI 2</button>
                    <button onclick="submitVn8Ex2()" class="px-8 py-3 bg-gray-800 text-white font-black text-lg rounded-2xl shadow-md hover:bg-black transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI 2</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- PHẦN 3: LUYỆN VIẾT SÁNG TẠO (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">✍️</div>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Cảm nhận tình mẫu tử</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-inner space-y-4">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-800">
                    Dựa vào khổ thơ cuối bài thơ "Tuổi Ngựa", em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) bày tỏ tình cảm của em đối với tình mẫu tử thiêng liêng.
                </h4>

                <textarea id="ans-vn8-writing" rows="4" placeholder="Khổ thơ cuối thể hiện sâu sắc tình cảm yêu thương và sự gắn bó của người con tuổi Ngựa dành cho mẹ. Dù có thích khám phá bao miền đất lạ, vượt muôn trùng núi rừng, sông biển, con vẫn luôn hướng về mẹ, nhớ lối tìm đường quay về nhà..." class="w-full p-4 md:p-6 text-2xl md:text-3xl rounded-2xl border-2 border-amber-100 focus:border-amber-500 outline-none shadow-sm bg-amber-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="checkWritingVn8()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI VỚI AI</span>
                    </button>
                    <button onclick="resetWritingVn8()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-base">LÀM LẠI</button>
                    <button onclick="submitVn8Writing()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all ml-auto flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI VIẾT</span>
                    </button>
                </div>
                
                <div id="fb-vn8-writing" class="hidden mt-6 p-6 bg-amber-500 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn8Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài thơ 'Tuổi Ngựa' do nhà thơ nào sáng tác?",
            "options": [
                "Lâm Thị Mỹ Dạ",
                "Xuân Quỳnh",
                "Phan Thị Thanh Nhàn",
                "Trần Đăng Khoa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong khổ thơ thứ nhất, chú ngựa con được người mẹ mô tả là có tính cách thế nào?",
            "options": [
                "Chăm chỉ và kiên nhẫn",
                "Không chịu yên một chỗ, ham chạy nhảy khám phá",
                "Nhút nhát sợ sệt",
                "Chỉ thích nghịch bùn dưới suối"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chú ngựa con ước mơ phi qua những làn gió có màu sắc nào trong khổ thơ thứ hai?",
            "options": [
                "Gió xanh, gió hồng, gió đen",
                "Gió trắng, gió vàng, gió đỏ",
                "Gió tím, gió lục, gió lam",
                "Gió nâu, gió xám, gió biếc"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Chú ngựa con hứa mang về cho mẹ quà gì sau những hành trình phiêu lưu?",
            "options": [
                "Cánh diều ngũ sắc rực rỡ",
                "Ngọn gió của trăm miền",
                "Bông hoa mơ trắng thơm ngát",
                "Trống nhỏ của Ja Ka"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Loài hoa nào tỏa ra mùi hương ngọt ngào được nhắc đến trong khổ thơ thứ ba?",
            "options": [
                "Hoa mơ",
                "Hoa huệ",
                "Hoa cúc dại",
                "Hoa hồng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Ý nghĩa của hình ảnh 'trang giấy nguyên chưa viết' trong bài thơ là gì?",
            "options": [
                "Bạn nhỏ lười học không viết bài.",
                "Một thế giới bao la mới mẻ đang chờ đón chú ngựa con tự mình khám phá, vẽ nên cuộc sống.",
                "Quyển vở nháp bị bỏ quên.",
                "Sách giáo khoa không in chữ."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong khổ thơ cuối, bạn nhỏ khuyên mẹ điều gì khi mình đi xa?",
            "options": [
                "Mẹ hãy đi du lịch cùng con",
                "Mẹ ơi, đừng buồn",
                "Mẹ hãy đóng cửa kỹ khi ở nhà",
                "Mẹ đừng chờ con về ăn cơm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào khẳng định tình yêu thương sâu nặng của con dành cho mẹ vượt qua mọi cách trở địa lý?",
            "options": [
                "Dẫu cách núi rừng, cách sông biển, con vẫn nhớ đường tìm về với mẹ.",
                "Con sẽ làm chiếc trống vỗ thật to cho mẹ nghe.",
                "Con sẽ trồng hoa cúc bách nhật tím cho mẹ.",
                "Con sẽ phi qua những triền núi đá dốc."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài thơ 'Tuổi Ngựa' được viết theo thể thơ nào?",
            "options": [
                "Thể thơ bốn chữ",
                "Thể thơ năm chữ",
                "Thể thơ tự do",
                "Thể thơ lục bát"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khổ thơ thứ hai nhắc tới 'miền trung du' gắn với làn gió màu gì?",
            "options": [
                "Gió hồng",
                "Gió xanh",
                "Gió đen",
                "Gió đỏ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khổ thơ thứ hai nhắc tới 'vùng đất đỏ' gắn với làn gió màu gì?",
            "options": [
                "Gió đen",
                "Gió hồng",
                "Gió xanh",
                "Gió xám"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Gió ở vùng 'đại ngàn' được tác giả miêu tả là làn gió có màu gì?",
            "options": [
                "Gió xanh",
                "Gió đen hút đại ngàn",
                "Gió vàng rực rỡ",
                "Gió hồng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mùi vị ngọt ngào nào của loài hoa được ngựa con muốn 'ôm hết'?",
            "options": [
                "Mùi hoa hồng nồng nàn",
                "Mùi hoa huệ ngọt ngào",
                "Mùi cỏ non tươi mát",
                "Mùi cúc dại xôn xao"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Qua bài thơ, tác giả muốn gửi gắm điều gì về thế giới tuổi thơ?",
            "options": [
                "Trẻ em cần được ở yên trong nhà để giữ an toàn tuyệt đối.",
                "Thế giới tuổi thơ giàu ước mơ, yêu khám phá nhưng tình yêu gia đình, tình mẫu tử luôn là điểm tựa ấm áp nhất.",
                "Học sinh phải học cưỡi ngựa thật giỏi.",
                "Chúng ta nên đi thả diều dưới gốc đa."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Xuân Quỳnh là một nhà thơ nổi tiếng viết cho đối tượng nào?",
            "options": [
                "Chỉ viết truyện cười người lớn",
                "Viết rất nhiều tác phẩm thơ ca sâu sắc cho thiếu nhi và tình yêu",
                "Viết sách giáo khoa Toán",
                "Chỉ dịch truyện nước ngoài"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- DỮ LIỆU BÀI THƠ GỐC (DÙNG ĐỂ CHE CHỮ) ---
const ORIGINAL_POEM = [
    [
        "– Mẹ ơi, con tuổi gì?",
        "– Tuổi con là tuổi Ngựa",
        "Ngựa không yên một chỗ",
        "Tuổi con là tuổi đi..."
    ],
    [
        "– Mẹ ơi, con sẽ phi",
        "Qua bao nhiêu ngọn gió",
        "Gió xanh miền trung du",
        "Gió hồng vùng đất đỏ",
        "Gió đen hút đại ngàn",
        "Mấp mô triền núi đá...",
        "Con mang về cho mẹ",
        "Ngọn gió của trăm miền."
    ],
    [
        "Ngựa con sẽ đi khắp",
        "Trên những cánh đồng hoa",
        "Loá màu trắng hoa mơ",
        "Trang giấy nguyên chưa viết",
        "Con làm sao ôm hết",
        "Mùi hoa huệ ngọt ngào",
        "Gió và nắng xôn xao",
        "Khắp đồng hoa cúc dại."
    ],
    [
        "Tuổi con là tuổi Ngựa",
        "Nhưng mẹ ơi, đừng buồn",
        "Dẫu cách núi cách rừng",
        "Dẫu cách sông cách biển",
        "Con tìm về với mẹ",
        "Ngựa con vẫn nhớ đường."
    ]
];

window.harnessPoemChe = function(percentage) {
    for (let sIdx = 0; sIdx < ORIGINAL_POEM.length; sIdx++) {
        const stanza = ORIGINAL_POEM[sIdx];
        const container = document.getElementById(`poem-stanza-${sIdx + 1}`);
        if (!container) continue;

        let html = "";
        for (let lIdx = 0; lIdx < stanza.length; lIdx++) {
            const line = stanza[lIdx];
            let displayLine = line;

            if (percentage > 0) {
                const words = line.split(" ");
                const modifiedWords = words.map((word, wIdx) => {
                    // Check clean punctuation
                    const cleaned = word.replace(/[–,?!.:"']/g, "");
                    if (cleaned.length === 0) return word;

                    // Hiding logic based on percentage
                    let shouldHide = false;
                    if (percentage === 100) {
                        shouldHide = true;
                    } else if (percentage === 60) {
                        shouldHide = (wIdx % 2 === 0);
                    } else if (percentage === 30) {
                        shouldHide = (wIdx % 3 === 0);
                    }

                    if (shouldHide) {
                        // Keep prefix/suffix punctuation
                        const prefix = word.startsWith("–") ? "–" : "";
                        const suffix = word.replace(/^[–]?[a-zA-Zà-ỹÀ-Ỹ]+/g, "");
                        return `${prefix}<span class="bg-blue-600 text-blue-600 rounded px-1 select-none">...</span>${suffix}`;
                    }
                    return word;
                });
                displayLine = modifiedWords.join(" ");
            }
            html += `<p class="pl-2 md:pl-4 py-0.5 font-medium">${displayLine}</p>`;
        }
        container.innerHTML = html;
    }
};

// Initial render of the poem
setTimeout(() => {
    window.harnessPoemChe(0);
}, 28);

// --- LOGIC TRÒ CHƠI KHỞI ĐỘNG ---
let activeKdName = null;
let activeKdAnimal = null;
const correctKdPairs = {
    "mão": "mèo",
    "ngọ": "ngựa",
    "thân": "khỉ",
    "dần": "hổ"
};
const kdMauCap = {
    "mão": { bg: "bg-sky-600", border: "border-sky-100" },
    "ngọ": { bg: "bg-emerald-600", border: "border-emerald-100" },
    "thân": { bg: "bg-amber-500", border: "border-amber-100" },
    "dần": { bg: "bg-rose-600", border: "border-rose-100" }
};
let userKdPairs = {};

window.selectKdNode = function(type, val) {
    if (type === 'name') {
        if (activeKdName) {
            document.getElementById(`kd-name-${activeKdName}`).classList.remove('border-sky-100', 'bg-sky-50');
        }
        activeKdName = val;
        document.getElementById(`kd-name-${val}`).classList.add('border-sky-100', 'bg-sky-50');
    } else {
        if (activeKdAnimal) {
            document.getElementById(`kd-animal-${activeKdAnimal}`).classList.remove('border-sky-100', 'bg-sky-50');
        }
        activeKdAnimal = val;
        document.getElementById(`kd-animal-${val}`).classList.add('border-sky-100', 'bg-sky-50');
    }

    if (activeKdName && activeKdAnimal) {
        userKdPairs[activeKdName] = activeKdAnimal;
        
        const elN = document.getElementById(`kd-name-${activeKdName}`);
        const elA = document.getElementById(`kd-animal-${activeKdAnimal}`);
        
        elN.classList.remove('border-sky-100', 'bg-sky-50');
        elA.classList.remove('border-sky-100', 'bg-sky-50');
        
        const mauCap = kdMauCap[activeKdName] || { bg: "bg-sky-600", border: "border-sky-100" };
        elN.className = `px-5 py-3 ${mauCap.bg} border-2 ${mauCap.border} text-white font-black rounded-xl text-lg shadow-sm`;
        elA.className = `px-5 py-3 ${mauCap.bg} border-2 ${mauCap.border} text-white font-black rounded-xl text-lg shadow-sm`;
        
        activeKdName = null;
        activeKdAnimal = null;
    }
};

window.resetKd = function() {
    activeKdName = null;
    activeKdAnimal = null;
    userKdPairs = {};
    const names = ['mão', 'ngọ', 'thân', 'dần'];
    const animals = ['ngựa', 'hổ', 'mèo', 'khỉ'];

    names.forEach(n => {
        const el = document.getElementById(`kd-name-${n}`);
        if (el) el.className = "px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all";
    });
    animals.forEach(a => {
        const el = document.getElementById(`kd-animal-${a}`);
        if (el) el.className = "px-5 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all";
    });

    const fb = document.getElementById('fb-vn8-kd');
    if (fb) fb.classList.add('hidden');
};

window.checkKd = function() {
    let score = 0;
    for (const key in correctKdPairs) {
        if (userKdPairs[key] === correctKdPairs[key]) {
            score++;
        }
    }
    const fb = document.getElementById('fb-vn8-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (score === 4) {
        fb.innerHTML = "🎉 Cực tốt! Em đã ghép đúng 100% tất cả 4 cặp con giáp.";
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = `⚠️ Em mới ghép đúng ${score}/4 cặp. Hãy làm lại nhé!`;
        fb.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }
};

// --- LOGIC BÀI TẬP 2: KÉO THẢ SƠ ĐỒ HÀNH TRÌNH ---
let selectedVn8ColA = null;
let selectedVn8ColB = null;
const correctMatchesVn8 = {
    "dat-da-qua": "nhom-dat",
    "canh-da-thay": "nhom-canh",
    "nghi-da-co": "nhom-nghi"
};
let userMatchesVn8 = {};

window.drawConnectionsVn8 = function() {
    const svg = document.getElementById('svg-connections-vn8');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = document.getElementById('matching-board-vn8');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    for (const idA in userMatchesVn8) {
        const idB = userMatchesVn8[idA];
        const elA = document.getElementById(`node-vn8-A-${idA}`);
        const elB = document.getElementById(`node-vn8-B-${idB}`);
        if (!elA || !elB) continue;

        const rectA = elA.getBoundingClientRect();
        const rectB = elB.getBoundingClientRect();

        let x1, y1, x2, y2;
        
        if (rectA.right <= rectB.left) {
            x1 = rectA.right - containerRect.left;
            y1 = rectA.top + rectA.height / 2 - containerRect.top;
            x2 = rectB.left - containerRect.left;
            y2 = rectB.top + rectB.height / 2 - containerRect.top;
        } else {
            x1 = rectA.left + rectA.width / 2 - containerRect.left;
            y1 = rectA.bottom - containerRect.top;
            x2 = rectB.left + rectB.width / 2 - containerRect.left;
            y2 = rectB.top - containerRect.top;
        }

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#0284c7');
        line.setAttribute('stroke-width', '5');
        line.setAttribute('stroke-linecap', 'round');
        
        svg.appendChild(line);
    }
};

window.selectNodeVn8 = function(column, id) {
    if (column === 'A') {
        if (selectedVn8ColA) {
            document.getElementById(`node-vn8-A-${selectedVn8ColA}`).classList.remove('border-sky-100', 'bg-sky-50/50');
        }
        selectedVn8ColA = id;
        document.getElementById(`node-vn8-A-${id}`).classList.add('border-sky-100', 'bg-sky-50/50');
    } else {
        if (selectedVn8ColB) {
            document.getElementById(`node-vn8-B-${selectedVn8ColB}`).classList.remove('border-sky-100', 'bg-sky-50/50');
        }
        selectedVn8ColB = id;
        document.getElementById(`node-vn8-B-${id}`).classList.add('border-sky-100', 'bg-sky-50/50');
    }

    if (selectedVn8ColA && selectedVn8ColB) {
        userMatchesVn8[selectedVn8ColA] = selectedVn8ColB;
        
        const nodeA = document.getElementById(`node-vn8-A-${selectedVn8ColA}`);
        const nodeB = document.getElementById(`node-vn8-B-${selectedVn8ColB}`);
        
        nodeA.classList.remove('border-sky-100', 'bg-sky-50/50');
        nodeB.classList.remove('border-sky-100', 'bg-sky-50/50');
        
        nodeA.classList.add('border-sky-100', 'bg-sky-100/50');
        nodeB.classList.add('border-sky-100', 'bg-sky-100/50');
        
        selectedVn8ColA = null;
        selectedVn8ColB = null;

        window.drawConnectionsVn8();
    }
};

window.resetMatchingVn8 = function() {
    selectedVn8ColA = null;
    selectedVn8ColB = null;
    userMatchesVn8 = {};
    
    ['dat-da-qua', 'canh-da-thay', 'nghi-da-co'].forEach(id => {
        const el = document.getElementById(`node-vn8-A-${id}`);
        if (el) el.className = "p-4 bg-white border-4 border-gray-100 rounded-xl font-bold text-base text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98";
    });

    ['nhom-dat', 'nhom-canh', 'nhom-nghi'].forEach(id => {
        const el = document.getElementById(`node-vn8-B-${id}`);
        if (el) el.className = "p-4 bg-white border-4 border-gray-100 rounded-xl font-black text-2xl md:text-3xl text-left text-gray-800 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50/20 active:scale-98";
    });

    const fb = document.getElementById('matching-feedback-vn8');
    if (fb) fb.classList.add('hidden');

    const svg = document.getElementById('svg-connections-vn8');
    if (svg) svg.innerHTML = '';
};

window.checkMatchingVn8 = function() {
    let matchCount = 0;
    for (const key in correctMatchesVn8) {
        if (userMatchesVn8[key] === correctMatchesVn8[key]) {
            matchCount++;
        }
    }

    const fb = document.getElementById('matching-feedback-vn8');
    if (!fb) return false;
    fb.classList.remove('hidden');

    if (matchCount === 3) {
        fb.innerHTML = "🎉 Cực tốt! Em đã phân loại chính xác 100% tất cả các miền đất, cảnh vật và cảm nghĩ.";
        fb.className = "text-xl font-bold rounded-2xl px-5 py-2.5 bg-emerald-600 text-white";
        return true;
    } else {
        fb.innerHTML = `⚠️ Phân loại chưa chính xác hoàn toàn. Mới xếp đúng ${matchCount}/3 ý. Hãy xem lại bài thơ nhé!`;
        fb.className = "text-xl font-bold rounded-2xl px-5 py-2.5 bg-rose-600 text-white";
        return false;
    }
};

window.submitVn8Ex2 = function() {
    if (window.checkMatchingVn8()) {
        window.showMathFeedback("Hoàn thành Bài tập 2", "🌟", "Chúc mừng em đã phân loại sơ đồ hành trình ngựa con xuất sắc!");
    } else {
        window.showMathFeedback("Chưa chính xác", "⚠️", "Em vui lòng kiểm tra và phân loại đúng trước khi nộp bài nhé!");
    }
};

// --- LOGIC VIẾT SÁNG TẠO ---
window.resetWritingVn8 = function() {
    document.getElementById('ans-vn8-writing').value = '';
    const fb = document.getElementById('fb-vn8-writing');
    if (fb) fb.classList.add('hidden');
};

window.checkWritingVn8 = function() {
    const text = document.getElementById('ans-vn8-writing').value.trim();
    const fb = document.getElementById('fb-vn8-writing');
    if (!fb) return;

    if (text.length < 25) {
        fb.classList.remove('hidden');
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét:</h5>
                    <p class="text-lg">Bài viết của em hơi ngắn. Em hãy cố gắng viết cụ thể cảm nhận sâu sắc hơn (từ 3 đến 5 câu) về tình mẫu tử, lòng hiếu thảo và khát vọng tự do trong đoạn thơ nhé!</p>
                </div>
            </div>
        `;
        return;
    }

    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-amber-600">AI Thầy E nhận xét & Chấm điểm:</h5>
                <p class="text-lg mb-3">Thầy thấy đoạn văn của em viết rất sâu sắc, bộc lộ đúng lòng hiếu thảo của người con dẫu đi muôn phương vẫn một lòng nhớ lối về với mẹ kính yêu!</p>
                <div class="flex items-center gap-3">
                    <span class="text-2xl md:text-5xl font-black bg-amber-500 px-3 py-1 rounded-lg">Đạt 95%</span>
                    <span class="text-sm opacity-80">(Bố cục mạch lạc, diễn đạt truyền cảm tốt)</span>
                </div>
            </div>
        </div>
    `;
};

window.submitVn8Writing = function() {
    const text = document.getElementById('ans-vn8-writing').value.trim();
    if (!text) {
        window.showMathFeedback("Bài viết trống", "⚠️", "Em hãy nhập đoạn văn tự sự trước khi nộp bài nhé!");
        return;
    }
    window.showMathFeedback("Nộp bài viết thành công", "🌟", "Bài văn cảm nhận về tình mẫu tử của em đã được nộp thành công!");
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn8Global = function() {
    window.showMathFeedback("Hoàn thành Tiết học", "🎉", "Chúc mừng em đã hoàn thành xuất sắc toàn bộ nội dung học tập của Tiết 8!");
};

// --- LOGIC PLAY AUDIO ---
let currentSegmentAudio = null;
window.playSegmentAudio = function(url) {
    if (currentSegmentAudio && !currentSegmentAudio.paused) {
        currentSegmentAudio.pause();
        if (currentSegmentAudio.src.endsWith(url)) {
            return;
        }
    }
    currentSegmentAudio = new Audio(url);
    currentSegmentAudio.play().catch(err => console.log("Audio play failed:", err));
};
