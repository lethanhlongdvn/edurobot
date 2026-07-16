export const lesson108 = {
    "topic": "Tiếng Việt 5",
    "week": "16",
    "period": "108",
    "title": "VIẾT: GIỚI THIỆU NHÂN VẬT TRONG PHIM HOẠT HÌNH",
    "desc": "Bài học giúp học sinh phân tích cấu trúc đoạn văn giới thiệu nhân vật phim hoạt hình, thực hành lập sơ đồ đặc điểm ngoại hình, tính cách và viết bài cảm thụ sáng tạo.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nắm vững cấu trúc 3 phần (Mở đầu, Triển khai, Kết thúc) của đoạn văn giới thiệu nhân vật phim hoạt hình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết lập sơ đồ tư duy phân tích đặc điểm ngoại hình, tính cách kèm dẫn chứng cụ thể trong phim.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thực hành viết đoạn văn giới thiệu nhân vật sinh động, giàu cảm xúc và kĩ xảo điện ảnh.
            </li>
        </ul>
    </div>

    <!-- 📖 Kiến thức Ghi nhớ -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <h3 class="text-2xl md:text-3xl font-black text-emerald-950 flex items-center gap-2">
                📌 Gấu trúc đoạn văn giới thiệu nhân vật
            </h3>
            
            <div class="bg-gradient-to-r from-emerald-700 to-teal-600 text-white rounded-[32px] p-6 md:p-8 shadow-md space-y-4">
                <p class="text-lg md:text-xl font-bold leading-relaxed">
                    Một đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình thường có 3 phần:
                </p>
                <ul class="list-disc ml-6 space-y-3 text-base md:text-lg font-bold text-emerald-100">
                    <li><strong class="text-yellow-300">Mở đầu:</strong> Giới thiệu tên bộ phim, tên nhân vật, ấn tượng chung...</li>
                    <li><strong class="text-yellow-300">Triển khai:</strong> Nêu những đặc điểm nổi bật về ngoại hình, hoạt động, tính cách,... của nhân vật. (Lưu ý: Nên đưa dẫn chứng về chi tiết trong phim như hình ảnh, âm thanh để làm nổi bật đặc điểm nhân vật).</li>
                    <li><strong class="text-yellow-300">Kết thúc:</strong> Nêu cảm nghĩ về nhân vật và ý nghĩa, giá trị của bộ phim.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: TƯƠNG TÁC TÔ MÀU BỐ CỤC 3 PHẦN (CÂU 1B SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chọn màu và tô màu bố cục 3 phần của đoạn văn mẫu dưới đây:</h3>
            </div>
            
            <!-- Hướng dẫn và chọn cọ tô màu -->
            <div class="flex flex-wrap gap-4 mb-6 justify-center select-none">
                <button onclick="selectColorBrush('intro')" id="brush-intro" class="px-5 py-3 bg-yellow-400 text-gray-900 font-black text-base md:text-lg rounded-2xl border-4 border-yellow-500 shadow-md transition-all active:scale-95 flex items-center gap-2">
                    🎨 Cọ Mở đầu (Màu vàng)
                </button>
                <button onclick="selectColorBrush('body')" id="brush-body" class="px-5 py-3 bg-sky-400 text-gray-900 font-black text-base md:text-lg rounded-2xl border-4 border-sky-100 shadow-md transition-all active:scale-95 flex items-center gap-2">
                    🎨 Cọ Triển khai (Màu xanh)
                </button>
                <button onclick="selectColorBrush('conclusion')" id="brush-conclusion" class="px-5 py-3 bg-rose-400 text-gray-900 font-black text-base md:text-lg rounded-2xl border-4 border-rose-100 shadow-md transition-all active:scale-95 flex items-center gap-2">
                    🎨 Cọ Kết thúc (Màu đỏ)
                </button>
            </div>

            <!-- Đoạn văn cho học sinh click tô màu -->
            <div class="bg-white p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-inner space-y-4 select-none mb-6">
                <p class="serif-font text-lg md:text-2xl leading-relaxed text-justify text-gray-800">
                    <span id="seg-1" onclick="applyHighlight('seg-1')" class="cursor-pointer p-1 rounded-lg transition-all hover:bg-gray-100">
                        Chú thỏ trắng trong bộ phim hoạt hình Dưới một mái nhà của đạo diễn Phan Trung được khán giả rất yêu thích. Với kĩ thuật vi tính hiện đại, hình ảnh chú thỏ được tái hiện thật sinh động trên màn ảnh.
                    </span>
                    <span id="seg-2" onclick="applyHighlight('seg-2')" class="cursor-pointer p-1 rounded-lg transition-all hover:bg-gray-100">
                        Đó là một chú thỏ có bộ lông trắng muốt, đôi mắt to tròn, tinh anh, đôi tai dài, cái đuôi ngắn ngủn, xinh xinh và giọng nói ấm áp. Sự vui vẻ, cởi mở khiến thỏ càng thêm đáng yêu. Câu nói hồn nhiên: “Tớ thì lại khoái nhất món này!” và tiếng cười giòn tan của chú khiến người xem vô cùng thích thú. Tuy nhiên, điều đáng quý nhất ở thỏ trắng là sự tốt bụng và lòng bao dung. Biết tin nhà nhím bị đổ, thỏ vội vã đến giúp đỡ. Hình ảnh chú thỏ chạy như bay trong cơn giông bão, giữa tiếng gió ù ù thật xúc động! Thấy nhím run cầm cập vì đói rét, thỏ đưa bạn về nhà, tận tình chăm sóc, giúp bạn mau chóng khoẻ lại. Thỏ sẵn lòng san sẻ với bạn thức ăn, chỗ ở, cùng bạn vượt qua mùa đông giá rét. Khi nhím giận dỗi bỏ đi vì hiểu nhầm thỏ, thỏ không những không giận nhím mà còn tất tả đi tìm bạn trong đêm.
                    </span>
                    <span id="seg-3" onclick="applyHighlight('seg-3')" class="cursor-pointer p-1 rounded-lg transition-all hover:bg-gray-100">
                        Câu chuyện về chú thỏ trắng đã cho chúng ta bài học ý nghĩa về lòng tốt, niềm tin, sự chân thành, bao dung trong tình bạn.
                    </span>
                </p>
                <div class="text-right text-sm font-bold text-gray-500 mt-2">(Gia Hân - Hà Phương)</div>
            </div>

            <!-- Nút kiểm tra -->
            <div class="flex items-center gap-4">
                <button id="btn-check-108-1" onclick="window.checkParagraphHighlight()" class="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[1.2rem] font-black text-xl md:text-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center">E</button>
                <button onclick="window.resetHighlights()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-lg">LÀM LẠI</button>
            </div>
            <div id="highlight-feedback" class="hidden mt-4 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- BÀI TẬP 2: KÉO THẢ SƠ ĐỒ TƯ DUY (CÂU 1C SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Kéo các nhãn thông tin vào đúng nhánh Ngoại hình hay Tính cách của Thỏ trắng:</h3>
            </div>

            <p class="text-base md:text-lg text-gray-700 font-bold mb-6 italic">
                👉 Hướng dẫn: Kéo các nhãn màu vàng ở trên và thả vào vùng chấm nét tương ứng bên dưới.
            </p>

            <!-- Kho nhãn (Drag source) -->
            <div class="flex flex-wrap gap-4 mb-8 justify-center select-none" id="mindmap-source-container">
                <div class="px-5 py-2.5 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl font-bold text-base md:text-lg cursor-grab hover:scale-105 transition-all shadow-md" draggable="true" ondragstart="handleMindmapDragStart(event)" id="card-long">bộ lông trắng muốt</div>
                <div class="px-5 py-2.5 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl font-bold text-base md:text-lg cursor-grab hover:scale-105 transition-all shadow-md" draggable="true" ondragstart="handleMindmapDragStart(event)" id="card-mat">đôi mắt to tròn, tinh anh</div>
                <div class="px-5 py-2.5 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl font-bold text-base md:text-lg cursor-grab hover:scale-105 transition-all shadow-md" draggable="true" ondragstart="handleMindmapDragStart(event)" id="card-cuimo">vui vẻ, cởi mở</div>
                <div class="px-5 py-2.5 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl font-bold text-base md:text-lg cursor-grab hover:scale-105 transition-all shadow-md" draggable="true" ondragstart="handleMindmapDragStart(event)" id="card-totbung">tốt bụng</div>
                <div class="px-5 py-2.5 bg-yellow-400 text-gray-900 border-2 border-yellow-500 rounded-xl font-bold text-base md:text-lg cursor-grab hover:scale-105 transition-all shadow-md" draggable="true" ondragstart="handleMindmapDragStart(event)" id="card-baodung">bao dung</div>
            </div>

            <!-- Sơ đồ tư duy dạng cột (Drop target) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-base md:text-lg">
                <!-- Cột Ngoại hình -->
                <div class="bg-white p-6 rounded-[32px] border-2 border-sky-200 shadow-md">
                    <h4 class="text-xl md:text-2xl font-black text-sky-800 mb-4 text-center pb-2 border-b-2 border-sky-100">👁️ NGOẠI HÌNH</h4>
                    <div class="space-y-4">
                        <div class="p-4 bg-sky-50/50 rounded-xl border border-sky-100 font-bold">1. Bộ lông: <span class="inline-block w-48 h-8 border-2 border-dashed border-sky-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map" ondragover="allowMindmapDrop(event)" ondrop="handleMindmapDrop(event, 'drop-long')" id="drop-long">🌸</span></div>
                        <div class="p-4 bg-sky-50/50 rounded-xl border border-sky-100 font-bold">2. Đôi mắt: <span class="inline-block w-48 h-8 border-2 border-dashed border-sky-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map" ondragover="allowMindmapDrop(event)" ondrop="handleMindmapDrop(event, 'drop-mat')" id="drop-mat">🌸</span></div>
                    </div>
                </div>

                <!-- Cột Tính cách -->
                <div class="bg-white p-6 rounded-[32px] border-2 border-emerald-200 shadow-md">
                    <h4 class="text-xl md:text-2xl font-black text-emerald-800 mb-4 text-center pb-2 border-b-2 border-emerald-100">❤️ TÍNH CÁCH</h4>
                    <div class="space-y-4">
                        <div class="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 font-bold">1. Với mọi người: <span class="inline-block w-48 h-8 border-2 border-dashed border-emerald-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map" ondragover="allowMindmapDrop(event)" ondrop="handleMindmapDrop(event, 'drop-cuimo')" id="drop-cuimo">🌸</span></div>
                        <div class="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 font-bold">2. Khi nhím gặp nạn: <span class="inline-block w-48 h-8 border-2 border-dashed border-emerald-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map" ondragover="allowMindmapDrop(event)" ondrop="handleMindmapDrop(event, 'drop-totbung')" id="drop-totbung">🌸</span></div>
                        <div class="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 font-bold">3. Khi nhím bỏ đi: <span class="inline-block w-48 h-8 border-2 border-dashed border-emerald-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map" ondragover="allowMindmapDrop(event)" ondrop="handleMindmapDrop(event, 'drop-baodung')" id="drop-baodung">🌸</span></div>
                    </div>
                </div>
            </div>

            <!-- Nút kiểm tra kéo thả sơ đồ -->
            <div class="mt-8 flex justify-center gap-4">
                <button id="btn-check-108-2" onclick="window.checkMindmapVn108()" class="w-14 h-14 md:w-24 md:h-24 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-2xl md:text-5xl shadow-xl transition-all active:scale-95 flex items-center justify-center">E</button>
                <button onclick="window.resetMindmapVn108()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all text-lg">LÀM LẠI</button>
            </div>
            <div id="mindmap-feedback" class="hidden mt-6 p-4 rounded-xl font-bold text-lg text-center animate-in fade-in duration-300"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: CÂU HỎI TÌM HIỂU KHÁC (CÂU 1D, 1E, 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">📖</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thảo luận về cách viết đoạn văn</h3>
            </div>

            <div class="space-y-4">
                <!-- Câu 1d -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-xl">
                            d. Những chi tiết nào trong đoạn văn giúp em nhận ra đây là nhân vật trong phim hoạt hình?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 text-lg md:text-xl font-medium">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li>Giới thiệu rõ xuất xứ: <em>"trong bộ phim hoạt hình Dưới một mái nhà của đạo diễn Phan Trung"</em>.</li>
                            <li>Đề cập tới kĩ thuật phim ảnh: <em>"Với kĩ thuật vi tính hiện đại, hình ảnh chú thỏ được tái hiện thật sinh động trên màn ảnh"</em>.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 1e -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-xl">
                            e. Những từ ngữ nào thể hiện suy nghĩ, cảm xúc của người xem đối với nhân vật và bộ phim?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 text-lg md:text-xl font-medium">
                        <p class="text-emerald-800 font-bold mb-2">💡 Trả lời:</p>
                        <ul class="list-disc ml-6 space-y-2">
                            <li><em>"Được khán giả rất yêu thích"</em>.</li>
                            <li><em>"Khiến người xem vô cùng thích thú"</em>.</li>
                            <li><em>"Thật xúc động!"</em>.</li>
                            <li><em>"Bài học ý nghĩa"</em>.</li>
                        </ul>
                    </div>
                </details>

                <!-- Câu 2 -->
                <details class="group bg-white rounded-2xl border border-emerald-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-emerald-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors text-lg md:text-xl">
                            2. Những điểm cần lưu ý khi viết đoạn văn giới thiệu nhân vật phim hoạt hình?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-emerald-50 pt-4 bg-emerald-50/10 text-lg md:text-xl font-medium">
                        <ul class="list-disc ml-6 space-y-3">
                            <li>Cần dựa vào **ngoại hình** (hình dáng, gương mặt, màu sắc, trang phục...) và **hoạt động** (lời nói, hành động, cử chỉ...) để mô tả nhân vật.</li>
                            <li>Nêu được các kĩ xảo điện ảnh đặc trưng của phim hoạt hình (công nghệ 3D, âm thanh tiếng động, giọng nói lồng tiếng, kỹ thuật dựng hình trên màn ảnh).</li>
                            <li>Đưa ra cảm nhận cá nhân, bài học giáo dục rút ra từ câu chuyện của nhân vật đó.</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP VẬN DỤNG THỰC HÀNH VIẾT (AI THẦY E) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-yellow-50">
        <div class="p-6 md:p-8 bg-yellow-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-yellow-500 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">✏️</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết bài giới thiệu nhân vật hoạt hình</h3>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-yellow-100 shadow-inner">
                <h4 class="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span class="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">3</span>
                    <div>
                        <span>Hãy thử viết 3-4 câu giới thiệu một nhân vật hoạt hình mà em yêu thích (Doraemon, Conan, Mickey, Elsa...). Chú ý ghi rõ tên phim và đặc điểm của nhân vật.</span>
                        <button onclick="window.toggleSpeechRecVn108()" class="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all text-sm shadow-sm ml-2" title="Nhập bằng giọng nói">🎙️</button>
                    </div>
                </h4>
                
                <textarea id="ans-vn108-writing" rows="4" placeholder="Ví dụ: Em rất thích chú mèo máy Doraemon trong bộ phim hoạt hình cùng tên. Chú mèo máy có thân hình tròn mập mạp, màu xanh dương và không có tai..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-yellow-100 focus:border-yellow-500 outline-none shadow-sm bg-yellow-50/10 mb-6 font-medium leading-relaxed"></textarea>
                
                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="window.checkWritingVn108()" class="px-8 py-3 bg-yellow-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-yellow-600 active:scale-95 transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-yellow-900 font-black text-xs shadow-sm">E</div> 
                        <span>CHẤM BÀI</span>
                    </button>
                    <button onclick="window.resetWritingVn108()" class="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                </div>
                
                <div id="fb-vn108-writing" class="hidden mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500">
                    <!-- AI Feedback -->
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="window.nopBaiVn108()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-950 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Đoạn văn mẫu trong bài giới thiệu về nhân vật hoạt hình nào?",
            "options": [
                "Chú thỏ trắng trong phim Dưới một mái nhà",
                "Chú nhím xù trong cơn bão",
                "Chú mèo con ngộ nghĩnh",
                "Chú ngựa thần kì"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhân vật thỏ trắng xuất hiện trong bộ phim hoạt hình nào?",
            "options": [
                "Dưới một mái nhà",
                "Bên kia sông chơi",
                "Thanh âm của gió",
                "Đồng cỏ tuổi thơ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đạo diễn của bộ phim hoạt hình \"Dưới một mái nhà\" là ai?",
            "options": [
                "Đạo diễn Phan Trung",
                "Họa sĩ Trần Văn Cẩn",
                "Tác giả Tô Hoài",
                "Họa sĩ Bùi Xuân Phái"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn mẫu có cấu trúc gồm mấy phần chính?",
            "options": [
                "2 phần",
                "3 phần",
                "4 phần",
                "5 phần"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đặc điểm ngoại hình nổi bật nào của thỏ trắng được nhắc tới trong bài?",
            "options": [
                "Bộ lông trắng muốt, đôi mắt to tròn tinh anh",
                "Cái đuôi dài thướt tha, sặc sỡ",
                "Đôi tai ngắn và nhỏ xíu",
                "Bộ lông màu nâu có nhiều gai nhọn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Giọng nói của chú thỏ trắng trong phim được miêu tả thế nào?",
            "options": [
                "Giọng nói ấm áp",
                "Giọng nói thét lớn, giận dữ",
                "Giọng nói nhút nhát, lí nhí",
                "Giọng nói trầm đục, khó nghe"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tính cách tốt đẹp đáng quý nhất ở thỏ trắng là gì?",
            "options": [
                "Sự tốt bụng và lòng bao dung",
                "Sự dũng cảm đấu tranh chống kẻ xấu",
                "Sự thông minh giải mã các bài toán",
                "Sự nhanh nhẹn chạy thi với trâu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi biết tin nhà nhím bị đổ, thỏ trắng đã làm gì?",
            "options": [
                "Vội vã chạy đến giúp đỡ nhím trong cơn giông bão",
                "Bỏ đi vì sợ bão cuốn trôi",
                "Gọi các bạn khác đến giúp thay mình",
                "Ngồi im dưới mái nhà an toàn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thỏ trắng đã chia sẻ những gì với nhím khi nhím gặp khó khăn?",
            "options": [
                "Thức ăn, chỗ ở và cùng vượt qua mùa đông",
                "Tiền bạc và những viên đá đẹp",
                "Đôi cánh thần kì do nhà khoa học gắn",
                "Lời khuyên về cách tự dựng lại nhà"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi nhím hiểu nhầm và bỏ đi, thỏ trắng đã có hành động như thế nào?",
            "options": [
                "Không giận nhím mà tất tả đi tìm nhím trong đêm",
                "Giận dỗi và không bao giờ chơi với nhím nữa",
                "Quên luôn nhím và đi tìm bạn thỏ khác",
                "Nhờ bác ngựa đuổi theo bắt nhím lại"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần mở đầu của đoạn văn mẫu thực hiện nhiệm vụ gì?",
            "options": [
                "Giới thiệu tên bộ phim, tên nhân vật và ấn tượng chung",
                "Liệt kê tất cả hoạt động, tính cách của nhân vật",
                "Rút ra bài học đạo đức ý nghĩa trong tình bạn",
                "Kể lại toàn bộ diễn biến kết thúc của câu chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phần kết thúc của đoạn văn mẫu nói về điều gì?",
            "options": [
                "Nêu cảm nghĩ về nhân vật và ý nghĩa, bài học của bộ phim",
                "Giới thiệu hình ảnh chú thỏ trắng sinh động trên màn ảnh",
                "Phân tích kĩ thuật đồ họa 3D của nhà làm phim",
                "Mô tả cái đuôi ngắn ngủn đáng yêu của thỏ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào trong đoạn văn mẫu thể hiện sự đánh giá tích cực của người xem?",
            "options": [
                "Rất yêu thích / Vô cùng thích thú / Thật xúc động / Ý nghĩa",
                "Trắng muốt / Ngắn ngủn / To tròn / Tinh anh",
                "Chạy như bay / Run cầm cập / Tất tả / Chăm sóc",
                "Bão giông / Đêm tối / Gió ù ù / Mùa đông"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao nên đưa dẫn chứng về kĩ xảo, âm thanh vào đoạn văn giới thiệu nhân vật phim hoạt hình?",
            "options": [
                "Để làm nổi bật đặc trưng của nhân vật bước ra từ màn ảnh",
                "Để đoạn văn dài hơn và đủ số chữ quy định",
                "Để người đọc biết đạo diễn là ai và phim được chiếu ở đâu",
                "Để giải thích vì sao nhân vật lại biết nói tiếng người"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu chuyện thỏ trắng đem lại bài học ý nghĩa nào cho chúng ta?",
            "options": [
                "Lòng tốt, niềm tin, sự chân thành, bao dung trong tình bạn",
                "Cách làm nhà kiên cố để tránh giông bão đổ vỡ",
                "Kỹ năng sinh tồn ngoài trời trong đêm lạnh giá",
                "Sự quan trọng của việc luyện tập chạy nhanh"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 108 ---
// 1. Logic tô màu đoạn văn (Câu 1b)
let selectedBrushColor = null;
let segmentColors = {
    'seg-1': null,
    'seg-2': null,
    'seg-3': null
};

window.selectColorBrush = function(brushType) {
    selectedBrushColor = brushType;
    // Reset brush buttons visual active status
    ['intro', 'body', 'conclusion'].forEach(b => {
        const btn = document.getElementById(`brush-${b}`);
        if (btn) btn.className = btn.className.replace('border-emerald-600', 'border-gray-300').replace('scale-105', '');
    });
    
    const activeBtn = document.getElementById(`brush-${brushType}`);
    if (activeBtn) {
        activeBtn.className += ' border-emerald-600 scale-105';
    }
};

window.applyHighlight = function(segmentId) {
    if (!selectedBrushColor) {
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Hãy chọn một chiếc cọ màu phía trên trước nhé!", "error", 3000);
        }
        return;
    }

    const seg = document.getElementById(segmentId);
    if (!seg) return;

    // Reset old colors
    seg.classList.remove('bg-yellow-200', 'bg-sky-200', 'bg-rose-200');

    // Apply color class
    if (selectedBrushColor === 'intro') {
        seg.classList.add('bg-yellow-200');
        segmentColors[segmentId] = 'intro';
    } else if (selectedBrushColor === 'body') {
        seg.classList.add('bg-sky-200');
        segmentColors[segmentId] = 'body';
    } else if (selectedBrushColor === 'conclusion') {
        seg.classList.add('bg-rose-200');
        segmentColors[segmentId] = 'conclusion';
    }
};

window.checkParagraphHighlight = function() {
    const feedback = document.getElementById('highlight-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    const score1 = (segmentColors['seg-1'] === 'intro');
    const score2 = (segmentColors['seg-2'] === 'body');
    const score3 = (segmentColors['seg-3'] === 'conclusion');

    if (score1 && score2 && score3) {
        feedback.innerHTML = "🎉 Tuyệt vời! Em đã phân tích chính xác bố cục 3 phần của đoạn văn mẫu giới thiệu nhân vật rồi!";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Phân tích bố cục chính xác!", "success", 3000);
        }
    } else {
        feedback.innerHTML = "❌ Còn phần tô màu chưa khớp. Hãy nhớ: Mở đầu là màu Vàng, Triển khai màu Xanh và Kết thúc màu Đỏ nhé!";
        feedback.className = "mt-4 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Tô màu chưa chính xác!", "error", 4000);
        }
    }
};

window.resetHighlights = function() {
    ['seg-1', 'seg-2', 'seg-3'].forEach(sId => {
        const seg = document.getElementById(sId);
        if (seg) {
            seg.classList.remove('bg-yellow-200', 'bg-sky-200', 'bg-rose-200');
        }
        segmentColors[sId] = null;
    });
    selectedBrushColor = null;
    ['intro', 'body', 'conclusion'].forEach(b => {
        const btn = document.getElementById(`brush-${b}`);
        if (btn) btn.className = btn.className.replace('border-emerald-600', 'border-gray-300');
    });
    const fb = document.getElementById('highlight-feedback');
    if (fb) fb.classList.add('hidden');
};

// 2. Logic Kéo thả Sơ đồ tư duy (Câu 1c)
let dragMindmapDataVn108 = null;

window.handleMindmapDragStart = function(event) {
    dragMindmapDataVn108 = {
        id: event.target.id,
        text: event.target.innerText
    };
    event.dataTransfer.setData("text", event.target.innerText);
};

window.allowMindmapDrop = function(event) {
    event.preventDefault();
};

window.handleMindmapDrop = function(event, dropZoneId) {
    event.preventDefault();
    if (!dragMindmapDataVn108) return;

    const targetZone = document.getElementById(dropZoneId);
    if (targetZone) {
        targetZone.innerText = dragMindmapDataVn108.text;
        targetZone.setAttribute('data-ans', dragMindmapDataVn108.id);
        targetZone.className = "inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-xl align-middle text-center font-bold text-sm mx-2 border-2 border-yellow-500 shadow-sm";
    }
};

window.checkMindmapVn108 = function() {
    const ansLong = document.getElementById('drop-long')?.getAttribute('data-ans');
    const ansMat = document.getElementById('drop-mat')?.getAttribute('data-ans');
    const ansCuiMo = document.getElementById('drop-cuimo')?.getAttribute('data-ans');
    const ansTotBung = document.getElementById('drop-totbung')?.getAttribute('data-ans');
    const ansBaoDung = document.getElementById('drop-baodung')?.getAttribute('data-ans');

    const feedback = document.getElementById('mindmap-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');

    // Correct groups:
    // Ngoại hình: card-long (bộ lông trắng muốt), card-mat (đôi mắt to tròn, tinh anh)
    // Tính cách: card-cuimo (vui vẻ, cởi mở), card-totbung (tốt bụng), card-baodung (bao dung)
    const scoreLong = (ansLong === 'card-long' || ansLong === 'card-mat');
    const scoreMat = (ansMat === 'card-long' || ansMat === 'card-mat') && (ansMat !== ansLong);
    
    const scoreCuiMo = (ansCuiMo === 'card-cuimo' || ansCuiMo === 'card-totbung' || ansCuiMo === 'card-baodung');
    const scoreTotBung = (ansTotBung === 'card-cuimo' || ansTotBung === 'card-totbung' || ansTotBung === 'card-baodung') && (ansTotBung !== ansCuiMo);
    const scoreBaoDung = (ansBaoDung === 'card-cuimo' || ansBaoDung === 'card-totbung' || ansBaoDung === 'card-baodung') && (ansBaoDung !== ansCuiMo) && (ansBaoDung !== ansTotBung);

    if (scoreLong && scoreMat && scoreCuiMo && scoreTotBung && scoreBaoDung) {
        feedback.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành sơ đồ tư duy phân biệt đặc điểm Ngoại hình và Tính cách xuất sắc!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-emerald-600 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Hoàn thành sơ đồ tư duy!", "success", 3000);
        }
    } else {
        feedback.innerHTML = "❌ Còn một vài ô thông tin xếp chưa đúng nhánh hoặc còn trống. Hãy xếp lại nhé!";
        feedback.className = "mt-6 p-4 rounded-xl font-bold text-lg bg-red-500 text-white text-center shadow-lg animate-fade-in";
        if (typeof window.UI?.showToast === 'function') {
            window.UI.showToast("Xếp sơ đồ chưa chính xác!", "error", 4000);
        }
    }
};

window.resetMindmapVn108 = function() {
    const zones = ['drop-long', 'drop-mat', 'drop-cuimo', 'drop-totbung', 'drop-baodung'];
    zones.forEach(zId => {
        const zone = document.getElementById(zId);
        if (zone) {
            zone.innerText = "🌸";
            zone.removeAttribute('data-ans');
            
            // Reapply specific border color depending on parent category
            if (zId.includes('long') || zId.includes('mat')) {
                zone.className = "inline-block w-48 h-8 border-2 border-dashed border-sky-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map";
            } else {
                zone.className = "inline-block w-48 h-8 border-2 border-dashed border-emerald-400 rounded-lg align-middle text-center text-sm font-medium drop-zone-map";
            }
        }
    });
    const fb = document.getElementById('mindmap-feedback');
    if (fb) fb.classList.add('hidden');
};

// 3. Logic viết bài cảm thụ tự luận (Câu 3)
window.checkWritingVn108 = function() {
    const text = document.getElementById('ans-vn108-writing')?.value.trim();
    const fb = document.getElementById('fb-vn108-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 15) {
        fb.innerHTML = "⚠️ Đoạn văn giới thiệu của em hơi ngắn. Hãy viết ít nhất 3-4 câu để giới thiệu rõ nhân vật nhé!";
        fb.className = "mt-6 p-6 bg-yellow-600 text-white rounded-2xl shadow-xl font-bold text-lg";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-yellow-300 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Rất hay! Em đã viết được đoạn giới thiệu đầy đủ tên bộ phim, mô tả sinh động ngoại hình và tính cách tiêu biểu của nhân vật hoạt hình mình thích. Ý văn mạch lạc và giàu sức truyền cảm."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-600 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 100% (Hoàn thành tốt)</span>
        </div>
    `;
    fb.className = "mt-6 p-6 bg-emerald-600 text-white rounded-2xl shadow-xl animate-in slide-in-from-top-10 duration-500";
};

window.resetWritingVn108 = function() {
    const txt = document.getElementById('ans-vn108-writing');
    if (txt) txt.value = "";
    const fb = document.getElementById('fb-vn108-writing');
    if (fb) fb.classList.add('hidden');
};

window.nopBaiVn108 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 108', 
            '🐰', 
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🐰</span><p class="text-xl md:text-3xl font-bold text-emerald-950">Chúc mừng em đã nắm vững cách giới thiệu nhân vật phim hoạt hình!</p><p class="text-lg text-gray-600 mt-3">Hành trang cấu trúc 3 phần và sơ đồ tư duy sẽ giúp em viết bài tập làm văn thật xuất sắc.</p></div>'
        );
    }
};

window.toggleSpeechRecVn108 = function() {
    const txt = document.getElementById('ans-vn108-writing');
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
        txt.placeholder = "Nhập bài giới thiệu của con...";
    };
    rec.onerror = () => {
        txt.placeholder = "Nhập bài giới thiệu của con...";
    };
    rec.start();
};
