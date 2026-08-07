export const lesson80 = {
    "topic": "Tiếng Việt 5",
    "week": "12",
    "period": "80",
    "title": "Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện",
    "desc": "Bài học giúp học sinh nhận diện cấu trúc 3 phần (Mở đầu, Triển khai, Kết thúc) của một đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện thông qua câu chuyện 'Không nên phá tổ chim'.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-md relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận biết được cấu trúc 3 phần và đặc điểm nội dung của đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách tìm các từ ngữ, câu văn bộc lộ tình cảm, cảm xúc chân thực trong đoạn văn mẫu.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu và nắm vững các bước chuẩn bị cho việc tự lập dàn ý, tìm ý viết đoạn văn thể hiện tình cảm, cảm xúc ở tiết học sau.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Nhịp cầu cảm xúc</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Khi đọc xong một câu chuyện rất hay và có ý nghĩa nhân văn sâu sắc, em thường có những cảm xúc gì và muốn làm gì?</p>
        
        <div class="space-y-4 max-w-2xl mx-auto pt-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onclick="chonKhoiDong80(1)" id="kd-btn-1" class="p-4 text-left font-bold border border-gray-100 bg-gray-50 hover:bg-blue-50/40 rounded-2xl text-lg md:text-xl transition-all shadow-sm">
                    A. Cảm thấy xúc động, suy nghĩ mãi về bài học trong câu chuyện.
                </button>
                <button onclick="chonKhoiDong80(2)" id="kd-btn-2" class="p-4 text-left font-bold border border-gray-100 bg-gray-50 hover:bg-blue-50/40 rounded-2xl text-lg md:text-xl transition-all shadow-sm">
                    B. Muốn kể hoặc chia sẻ ngay câu chuyện với bạn bè, người thân.
                </button>
                <button onclick="chonKhoiDong80(3)" id="kd-btn-3" class="p-4 text-left font-bold border border-gray-100 bg-gray-50 hover:bg-blue-50/40 rounded-2xl text-lg md:text-xl transition-all shadow-sm">
                    C. Muốn viết nhật ký hoặc vẽ tranh để ghi lại cảm xúc sâu sắc đó.
                </button>
                <button onclick="chonKhoiDong80(4)" id="kd-btn-4" class="p-4 text-left font-bold border border-gray-100 bg-gray-50 hover:bg-blue-50/40 rounded-2xl text-lg md:text-xl transition-all shadow-sm">
                    D. Tất cả những cảm xúc và ý định tốt đẹp trên!
                </button>
            </div>
            <div id="fb-vn80-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 shadow-md"></div>
        </div>
    </div>

    <!-- 📋 BÀI TẬP 1: ĐỌC CÂU CHUYỆN "KHÔNG NÊN PHÁ TỔ CHIM" -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="relative z-10 space-y-6">
            <div class="flex items-start gap-3 border-b border-blue-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                    Đọc câu chuyện dưới đây và trao đổi với bạn.
                </h3>
            </div>

            <!-- Tích hợp audio phát đọc mẫu và câu chuyện -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div class="lg:col-span-8 space-y-4">
                    <div class="flex items-center gap-3">
                        <button onclick="window.playSegmentAudio('assets/audio/tiengviet/khong_nen_pha_to_chim.mp3')" class="px-4 py-2 bg-blue-600 hover:bg-blue-600 text-white rounded-xl font-bold text-base flex items-center gap-2 shadow transition-all active:scale-95">
                            🔊 <span>Nghe đọc mẫu</span>
                        </button>
                        <span class="text-sm font-bold text-gray-800">(Bấm loa để nghe giọng đọc mẫu của câu chuyện)</span>
                    </div>

                    <!-- Nội dung câu chuyện -->
                    <div class="bg-amber-50 bg-opacity-35 p-6 md:p-8 rounded-[32px] border border-amber-100 font-sans text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                        <h4 class="text-2xl md:text-3xl font-black text-center text-amber-900 mb-4">Không nên phá tổ chim</h4>
                        <p class="indent-8">Thấy trên cành cây có một tổ chim chích choè, ba con chim non mới nở, tôi liền trèo lên cây, bắt chim non xuống để chơi. Chị tôi thấy vậy, nhẹ nhàng bảo: “Chim non đang sống với mẹ, sao em nỡ bắt nó? Lát nữa chim mẹ về, không thấy con, sẽ buồn lắm đấy. Còn lũ chim non xa mẹ, chúng sẽ chết. Hãy đặt lại chim vào tổ. Sau này chim lớn, chim sẽ hát ca, bay lượn, ăn sâu bọ giúp ích con người.”</p>
                        
                        
                    </div>
                </div>

                <!-- 3 câu trắc nghiệm đọc hiểu nhỏ bên phải -->
                <div class="lg:col-span-4 space-y-4">
                    <div class="bg-blue-50/50 p-5 rounded-3xl border border-blue-100 space-y-4">
                        <span class="text-sm font-black text-blue-600 uppercase tracking-wider block">✍️ Câu hỏi Đọc hiểu</span>
                        
                        <!-- Câu a -->
                        <div class="space-y-2">
                            <p class="font-bold text-gray-800 text-base">a. Vì sao người chị khuyên em không nên bắt chim?</p>
                            <select id="q1-a-select" class="w-full p-2 border border-blue-100 rounded-xl font-bold bg-white text-sm">
                                <option value="">-- Chọn câu trả lời --</option>
                                <option value="sai1">Vì trèo cây rất nguy hiểm, dễ ngã</option>
                                <option value="dung">Vì chim mẹ sẽ buồn và chim non xa mẹ sẽ chết</option>
                                <option value="sai2">Vì sợ chim cắn vào tay em</option>
                            </select>
                        </div>

                        <!-- Câu b -->
                        <div class="space-y-2 pt-2 border-t border-blue-100">
                            <p class="font-bold text-gray-800 text-base">b. Theo người chị, loài chim có ích gì?</p>
                            <select id="q1-b-select" class="w-full p-2 border border-blue-100 rounded-xl font-bold bg-white text-sm">
                                <option value="">-- Chọn câu trả lời --</option>
                                <option value="dung">Hát ca, bay lượn và ăn sâu bọ giúp ích con người</option>
                                <option value="sai1">Giúp con người canh gác nhà cửa</option>
                                <option value="sai2">Giúp học sinh đưa thư liên lạc</option>
                            </select>
                        </div>

                        <!-- Câu c -->
                        <div class="space-y-2 pt-2 border-t border-blue-100">
                            <p class="font-bold text-gray-800 text-base">c. Câu chuyện giúp em nhận ra điều gì?</p>
                            <select id="q1-c-select" class="w-full p-2 border border-blue-100 rounded-xl font-bold bg-white text-sm">
                                <option value="">-- Chọn câu trả lời --</option>
                                <option value="sai1">Cần phải rèn luyện sức khỏe để trèo cây giỏi</option>
                                <option value="dung">Cần yêu quý, bảo vệ và trân trọng loài vật xung quanh</option>
                                <option value="sai2">Không nên chơi đùa cùng chị gái</option>
                            </select>
                        </div>

                        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau1_80();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                        <div id="fb-vn80-bt1" class="hidden p-3 rounded-xl text-xs font-bold text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 BÀI TẬP 2: ĐỌC ĐOẠN VĂN MẪU & PHÂN TÍCH CẤU TRÚC -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Đọc đoạn văn dưới đây và thực hiện các yêu cầu học tập.
            </h3>
        </div>

        <!-- Đoạn văn của Phan Nguyên -->
        <div class="p-6 md:p-8 rounded-[36px] bg-blue-50/20 border border-blue-100/60 font-sans text-xl md:text-2xl text-gray-800 leading-relaxed font-bold">
            <p class="indent-8 transition-all duration-380 rounded-2xl p-2" id="sample-text-block">
                <span id="para-mo-dau" class="transition-all duration-380 p-1 rounded">Không nên phá tổ chim là một câu chuyện giản dị nhưng lại mang đến cho tôi nhiều cảm xúc khó quên.</span>
                <span id="para-trien-khai" class="transition-all duration-380 p-1 rounded">Câu chuyện kể về một em nhỏ vì tò mò mà trèo lên cây, bắt ba con chim non xuống để chơi. Nhưng lời khuyên của chị gái đã làm cho em tỉnh ngộ. Chị đã nói về nỗi buồn của chim mẹ khi không tìm thấy con, số phận của những con chim non khi bị tách ra khỏi mẹ. Chị còn nói với em về lợi ích mà loài chim mang lại cho con người. Lời khuyên của chị thật nhẹ nhàng mà thấm thía. Nó giúp người em có một hành động đáng khen: đem những con chim non đặt lại tổ của chúng. Câu chuyện tuy ngắn nhưng thật xúc động bởi ý nghĩa nhân văn cao đẹp: Cuộc đời sẽ tốt đẹp hơn, hạnh phúc hơn nếu chúng ta biết yêu quý và trân trọng sự sống của muôn loài.</span>
                <span id="para-ket-thuc" class="transition-all duration-380 p-1 rounded">Gấp trang sách lại, hình ảnh những chú chim non bé bỏng quấn quýt bên mẹ vẫn in đậm trong tâm trí tôi.</span>
            </p>
            <p class="text-right text-base text-gray-800 font-bold italic mt-2">(Phan Nguyên)</p>
        </div>

        <!-- Yêu cầu a -->
        <div class="bg-gray-50 p-5 rounded-3xl border border-gray-100 space-y-3">
            <h4 class="font-black text-blue-600 text-xl md:text-2xl">a. Người viết muốn nói điều gì qua đoạn văn trên?</h4>
            <div class="grid grid-cols-1 gap-2.5 max-w-4xl">
                <label class="flex items-start gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                    <input type="radio" name="q2-a" value="sai1" class="w-5 h-5 text-blue-600 mt-1 shrink-0">
                    <span class="text-base font-bold text-gray-800">Người viết muốn kể lại toàn bộ câu chuyện và khuyên mọi người học cách trèo cây giỏi như người em.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                    <input type="radio" name="q2-a" value="dung" class="w-5 h-5 text-blue-600 mt-1 shrink-0">
                    <span class="text-base font-bold text-gray-800">Người viết muốn biểu lộ tình cảm, cảm xúc của mình về câu chuyện "Không nên phá tổ chim", đồng thời ca ngợi ý nghĩa nhân văn cao đẹp của tác phẩm.</span>
                </label>
                <label class="flex items-start gap-3 p-3 bg-white hover:bg-blue-50/20 rounded-2xl border border-gray-100 cursor-pointer transition-all">
                    <input type="radio" name="q2-a" value="sai2" class="w-5 h-5 text-blue-600 mt-1 shrink-0">
                    <span class="text-base font-bold text-gray-800">Người viết muốn giới thiệu về cuốn sách "Quốc văn giáo khoa thư" cho các bạn cùng tìm hiểu.</span>
                </label>
            </div>
        </div>

        <!-- Yêu cầu b (Interactive Highlight) -->
        <div class="bg-gray-50 p-5 rounded-3xl border border-gray-100 space-y-4">
            <h4 class="font-black text-blue-600 text-xl md:text-2xl">b. Nhấp chuột khám phá cấu trúc và nội dung tương ứng của mỗi phần:</h4>
            <p class="text-base font-bold text-gray-800 italic">👉 Hướng dẫn: Bấm vào 3 nút bên dưới để xem vị trí nổi bật tương ứng trong đoạn văn và nội dung cốt lõi của từng phần.</p>
            
            <div class="flex justify-end items-center gap-4"><button onclick="resetHighlight80()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button></div>

            <!-- Khung phản hồi thông tin chi tiết của phần được bấm -->
            <div id="h-info-box" class="hidden p-6 rounded-[2.5rem] border-2 transition-all duration-380">
                <h5 id="h-info-title" class="text-xl md:text-2xl font-black mb-2"></h5>
                <p id="h-info-desc" class="text-lg md:text-xl font-bold text-gray-800 leading-relaxed"></p>
            </div>
        </div>

        <!-- Yêu cầu c (Chọn từ bộc lộ cảm xúc) -->
        <div class="bg-gray-50 p-5 rounded-3xl border border-gray-100 space-y-4">
            <h4 class="font-black text-blue-600 text-xl md:text-2xl">c. Nhấp chọn các từ ngữ/câu văn biểu lộ tình cảm, cảm xúc của tác giả trong đoạn văn mẫu:</h4>
            <p class="text-base font-bold text-gray-800">👉 Hướng dẫn: Bấm trực tiếp vào các từ/cụm từ dưới đây. Từ được chọn sẽ đổi màu. Bấm nút E để chấm điểm.</p>
            
            <div class="flex flex-wrap gap-2 pt-2 max-w-4xl font-sans font-bold text-lg">
                <button id="w80-1" onclick="selectWord80(1)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">mang đến</button>
                <button id="w80-2" onclick="selectWord80(2)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">nhiều cảm xúc khó quên</button>
                <button id="w80-3" onclick="selectWord80(3)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">trèo lên cây</button>
                <button id="w80-4" onclick="selectWord80(4)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">thật nhẹ nhàng mà thấm thía</button>
                <button id="w80-5" onclick="selectWord80(5)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">đáng khen</button>
                <button id="w80-6" onclick="selectWord80(6)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">thật xúc động</button>
                <button id="w80-7" onclick="selectWord80(7)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">đóng vai</button>
                <button id="w80-8" onclick="selectWord80(8)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">ý nghĩa nhân văn cao đẹp</button>
                <button id="w80-9" onclick="selectWord80(9)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">yêu quý và trân trọng</button>
                <button id="w80-10" onclick="selectWord80(10)" class="px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none">in đậm trong tâm trí tôi</button>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="resetWord80()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="kiemTraCau2_80();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn80-bt2" class="hidden p-4 rounded-2xl text-base font-bold text-center mt-2 max-w-3xl mx-auto font-bold"></div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP 3 & GHI NHỚ: TRÒ CHƠI ĐIỀN KHUYẾT CỦNG CỐ CẤU TRÚC ĐOẠN VĂN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Ghi nhớ: Hoàn thành cấu trúc đoạn văn nêu tình cảm, cảm xúc về một câu chuyện.
            </h3>
        </div>

        <p class="text-lg md:text-xl text-gray-800 font-bold italic">👉 Hướng dẫn: Chọn các cụm từ thích hợp từ các ô thả để hoàn chỉnh các dòng ghi nhớ cấu trúc bên dưới:</p>

        <div class="space-y-6 max-w-4xl mx-auto pt-2">
            <!-- Dòng 1: Mở đầu -->
            <div class="p-5 bg-sky-50 bg-opacity-30 rounded-2xl border border-sky-100/70 flex flex-col md:flex-row md:items-center gap-3 text-lg md:text-xl font-bold text-gray-800">
                <span class="px-3 py-1 bg-sky-600 text-white rounded-lg text-sm font-black shrink-0 w-24 text-center">MỞ ĐẦU</span>
                <div class="flex flex-wrap items-center gap-2 leading-loose">
                    Giới thiệu 
                    <select id="gm-opt-1" class="p-1 border border-sky-100 rounded bg-white text-base font-black text-sky-800">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="ten-tg">tên câu chuyện, tên tác giả</option>
                        <option value="tom-tat">kể tóm tắt nội dung chính</option>
                        <option value="gia-tri">giá trị, ý nghĩa câu chuyện</option>
                    </select>
                    và nêu
                    <select id="gm-opt-2" class="p-1 border border-sky-100 rounded bg-white text-base font-black text-sky-800">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="an-tuong">ấn tượng chung</option>
                        <option value="chi-tiet">chi tiết yêu thích nhất</option>
                        <option value="tinh-cam">tình cảm sâu đậm nhất</option>
                    </select>
                    về câu chuyện đó.
                </div>
            </div>

            <!-- Dòng 2: Triển khai -->
            <div class="p-5 bg-emerald-50 bg-opacity-30 rounded-2xl border border-emerald-100/70 flex flex-col md:flex-row md:items-center gap-3 text-lg md:text-xl font-bold text-gray-800">
                <span class="px-3 py-1 bg-emerald-600 text-white rounded-lg text-sm font-black shrink-0 w-24 text-center">TRIỂN KHAI</span>
                <div class="flex flex-wrap items-center gap-2 leading-loose">
                    Kể
                    <select id="gm-opt-3" class="p-1 border border-emerald-100 rounded bg-white text-base font-black text-emerald-800">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="chi-tiet">chi tiết chi li từ đầu</option>
                        <option value="tom-tat">tóm tắt nội dung câu chuyện</option>
                        <option value="ket-cuc">kết thúc bất ngờ của truyện</option>
                    </select>
                    ; nêu những điều em
                    <select id="gm-opt-4" class="p-1 border border-emerald-100 rounded bg-white text-base font-black text-emerald-800">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="ghet">chưa hài lòng, chưa đồng ý</option>
                        <option value="yeu-thich">yêu thích ở câu chuyện</option>
                        <option value="bo-qua">muốn bỏ qua không kể tới</option>
                    </select>
                    và thể hiện
                    <select id="gm-opt-5" class="p-1 border border-emerald-100 rounded bg-white text-base font-black text-emerald-800">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="tinh-cam">tình cảm, cảm xúc của em</option>
                        <option value="nghi-van">câu hỏi nghi vấn thắc mắc</option>
                        <option value="so-sanh">sự so sánh với truyện khác</option>
                    </select>
                    đối với câu chuyện.
                </div>
            </div>

            <!-- Dòng 3: Kết thúc -->
            <div class="p-5 bg-amber-50 bg-opacity-30 rounded-2xl border border-amber-100/70 flex flex-col md:flex-row md:items-center gap-3 text-lg md:text-xl font-bold text-gray-800">
                <span class="px-3 py-1 bg-amber-500 text-white rounded-lg text-sm font-black shrink-0 w-24 text-center">KẾT THÚC</span>
                <div class="flex flex-wrap items-center gap-2 leading-loose">
                    Khẳng định một lần nữa
                    <select id="gm-opt-6" class="p-1 border border-amber-100 rounded bg-white text-base font-black text-amber-600">
                        <option value="">-- Chọn cụm từ --</option>
                        <option value="tg-sach">sách được in ở nhà xuất bản</option>
                        <option value="gia-tri">giá trị, ý nghĩa của câu chuyện</option>
                        <option value="nhan-vat">tên của tất cả nhân vật phụ</option>
                    </select>
                    hoặc nhấn mạnh tình cảm, cảm xúc đối với câu chuyện.
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraGhiNho80();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn80-gnh" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2"></div>
        </div>
    </section>

    <!-- 📋 BÀI TẬP VẬN DỤNG & TÌM Ý SƠ BỘ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-start gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">4</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Vận dụng: Chuẩn bị lựa chọn câu chuyện em yêu thích để thực hành viết ở tiết sau.
            </h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <p class="font-bold text-gray-800 text-lg md:text-xl">👉 Gợi ý: Hãy nhập tên câu chuyện và một số chi tiết, nhân vật hoặc bài học mà em thích nhất từ câu chuyện đó vào sổ tay dưới đây để chuẩn bị lập dàn ý nhé!</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="font-bold text-gray-800 text-base block">1. Tên câu chuyện em đã đọc / đã nghe:</label>
                    <input type="text" id="ans-story-name" placeholder="Ví dụ: Tấm Cám, Thạch Sanh, Người ăn xin, Ê-đi-sơn và bóng đèn..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-2">
                    <label class="font-bold text-gray-800 text-base block">2. Tên nhân vật hoặc chi tiết em ấn tượng nhất:</label>
                    <input type="text" id="ans-story-char" placeholder="Ví dụ: Sự vị tha của cô bé, tinh thần vượt khó của nhà bác học..." class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base">
                </div>
                <div class="space-y-2 md:col-span-2">
                    <label class="font-bold text-gray-800 text-base block">3. Cảm nghĩ, cảm xúc chung của em về câu chuyện này:</label>
                    <textarea id="ans-story-feel" rows="3" placeholder="Nhập cảm xúc của em (Ví dụ: Em rất xúc động trước tấm lòng nhân hậu của nhân vật chính...)" class="w-full p-3 border border-gray-100 rounded-xl font-bold bg-white text-base"></textarea>
                </div>
            </div>

            <div class="flex justify-center gap-3 pt-3">
                <button onclick="kiemTraVanDung80()" class="px-8 py-3 bg-amber-500 text-white font-black text-lg rounded-2xl shadow-md hover:bg-amber-500 active:scale-95 transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-amber-900 font-black text-xs shadow-sm">E</div> 
                    <span>GHI VÀO SỔ TAY</span>
                </button>
            </div>
            <div id="fb-vn80-vd" class="hidden p-5 rounded-2xl font-bold text-base max-w-3xl mx-auto text-center shadow-lg"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBai80Global()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện thường gồm mấy phần chính?",
            "options": [
                "2 phần: Mở đầu và Kết thúc",
                "3 phần: Mở đầu, Triển khai và Kết thúc",
                "4 phần: Mở đầu, Tóm tắt, Triển khai, Kết thúc",
                "Chỉ có 1 phần duy nhất tự do"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Nhiệm vụ chính của phần Mở đầu trong đoạn văn thể hiện cảm xúc là gì?",
            "options": [
                "Giới thiệu tên câu chuyện, tên tác giả và nêu ấn tượng chung về câu chuyện đó",
                "Kể lại từ đầu đến cuối diễn biến của câu chuyện",
                "Rút ra bài học và khẳng định giá trị sâu sắc của tác phẩm",
                "Kể về cuộc đời và sự nghiệp sáng tác của tác giả câu chuyện"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nội dung nào sau đây bắt buộc phải có trong phần Triển khai của đoạn văn?",
            "options": [
                "Thông tin nhà xuất bản và năm phát hành cuốn sách",
                "Tóm tắt ngắn gọn câu chuyện, nêu chi tiết/nhân vật yêu thích và bộc lộ cảm xúc",
                "Lời cảm ơn của người viết gửi tới tác giả câu chuyện",
                "Đề xuất viết tiếp một phần kết thúc khác cho câu chuyện"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Phần Kết thúc của đoạn văn thể hiện tình cảm, cảm xúc có vai trò gì?",
            "options": [
                "Khẳng định một lần nữa giá trị, ý nghĩa câu chuyện hoặc nhấn mạnh tình cảm đối với câu chuyện",
                "Bắt đầu kể một câu chuyện khác để so sánh đối chiếu",
                "Lập bảng phân tích các nhân vật chính diện và phản diện",
                "Nêu các lưu ý về lỗi chính tả và cách dùng dấu câu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong đoạn văn của Phan Nguyên, câu văn mở đầu thực hiện nhiệm vụ gì?",
            "options": [
                "Giới thiệu tên truyện 'Không nên phá tổ chim' và bày tỏ ấn tượng 'nhiều cảm xúc khó quên'",
                "Kể lại hành động cậu bé trèo lên cây bắt chim chích chòe",
                "Khen ngợi lời khuyên ngọt ngào, thấm thía của người chị",
                "Thể hiện ước mơ được bay lượn trên bầu trời của những chú chim"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thông điệp và ý nghĩa nhân văn cao đẹp nhất của câu chuyện 'Không nên phá tổ chim' là gì?",
            "options": [
                "Chúng ta cần biết yêu quý và trân trọng sự sống của muôn loài",
                "Luyện tập trèo cây là kỹ năng sinh tồn bổ ích cho học sinh",
                "Chim chích chòe là loài chim hát hay nhất trong các loài chim",
                "Không nên đi chơi xa nhà một mình khi không có người lớn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào trong các từ sau đây biểu lộ tình cảm, cảm xúc của người viết?",
            "options": [
                "trèo lên cây",
                "thật xúc động",
                "chích chòe",
                "chị gái"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Câu văn nào dưới đây thuộc phần Kết thúc của đoạn văn Phan Nguyên?",
            "options": [
                "Không nên phá tổ chim là một câu chuyện giản dị...",
                "Câu chuyện kể về một em nhỏ vì tò mò...",
                "Gấp trang sách lại, hình ảnh những chú chim non bé bỏng quấn quýt bên mẹ vẫn in đậm...",
                "Nó giúp người em có một hành động đáng khen..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tại sao khi viết đoạn văn thể hiện cảm xúc ta chỉ nên tóm tắt ngắn gọn câu chuyện chứ không kể toàn bộ chi tiết?",
            "options": [
                "Để tập trung thời lượng và không gian biểu lộ tình cảm, cảm xúc của bản thân đối với truyện",
                "Vì kể dài sẽ làm người đọc quên mất tên tác giả",
                "Vì sách giáo khoa không cho phép viết đoạn văn quá dài",
                "Để người đọc tự đoán phần còn lại của câu chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Câu văn nào sau đây biểu lộ rõ nét tình cảm yêu mến, kính trọng đối với nhân vật?",
            "options": [
                "Bác Hồ - người cha kính yêu của dân tộc - luôn sống mãi trong lòng chúng ta.",
                "Bác Hồ đã ra đi tìm đường cứu nước từ bến cảng Nhà Rồng.",
                "Bác Hồ thường dạy các cháu thiếu nhi chăm chỉ học tập, lao động.",
                "Hình ảnh Bác Hồ được in trên các tờ tiền Việt Nam."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Phương án nào nêu đúng các từ ngữ biểu lộ cảm xúc trong đoạn văn Phan Nguyên?",
            "options": [
                "nhiều cảm xúc khó quên, thật xúc động, thấm thía, đáng khen, yêu quý và trân trọng",
                "trèo lên cây, bắt ba con chim, chích chòe, bay lượn, ăn sâu bọ",
                "chị gái, người em, chim mẹ, chim non, tổ chim",
                "kể về, tỉnh ngộ, giúp người em, đặt lại vào tổ, gấp trang sách"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi viết đoạn văn thể hiện tình cảm về một sự việc hoặc câu chuyện, ta có thể thể hiện bằng những cách nào?",
            "options": [
                "Bộc lộ trực tiếp qua từ ngữ biểu cảm hoặc gián tiếp qua nét vẽ, lời kể sự việc ấn tượng",
                "Chỉ được viết thơ chứ không được viết thành văn xuôi",
                "Chỉ chép lại y nguyên lời thoại của nhân vật trong truyện",
                "Chỉ dùng các đại từ xưng hô đặc biệt của địa phương"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'thấm thía' trong câu 'Lời khuyên của chị thật nhẹ nhàng mà thấm thía' chỉ điều gì?",
            "options": [
                "Lời khuyên đi sâu vào tâm can, khiến người nghe nhận thức rõ ràng, xúc động sâu sắc",
                "Lời khuyên rất dài làm người nghe cảm thấy mệt mỏi",
                "Lời khuyên có chứa nhiều thuật ngữ khoa học khó hiểu",
                "Lời khuyên giống như nước mưa ngấm vào quần áo"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Chi tiết nào ở phần Triển khai đoạn văn Phan Nguyên thể hiện hành động đáng khen của người em?",
            "options": [
                "Trèo lên cây bắt ba con chim non xuống chơi",
                "Tự học cách bắt sâu bọ phụ giúp chim mẹ",
                "Đem những con chim non đặt lại vào tổ của chúng",
                "Hứa sau này lớn lên sẽ đi thám hiểm rừng xanh"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Viết đoạn văn thể hiện cảm xúc về câu chuyện giúp chúng ta phát triển năng lực gì?",
            "options": [
                "Năng lực cảm thụ văn học, tư duy cảm xúc chân thiện mỹ và kỹ năng trình bày ý kiến",
                "Kỹ năng hội họa và thiết kế sơ đồ tư duy trên máy tính",
                "Kỹ năng giao tiếp bằng tiếng nước ngoài với các nhà khoa học",
                "Năng lực làm toán ước lượng khoảng cách vị trí địa lý"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG ---
window.chonKhoiDong80 = function(idx) {
    const fb = document.getElementById('fb-vn80-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    // Reset styles
    for(let i=1; i<=4; i++) {
        const btn = document.getElementById(`kd-btn-${i}`);
        if (btn) btn.className = "p-4 text-left font-bold border border-gray-100 bg-gray-50 hover:bg-blue-50/40 rounded-2xl text-lg md:text-xl transition-all shadow-sm";
    }

    // High light selected
    const selBtn = document.getElementById(`kd-btn-${idx}`);
    if (selBtn) {
        selBtn.className = "p-4 text-left font-black border-2 border-blue-100 bg-blue-600 text-blue-600 rounded-2xl text-lg md:text-xl transition-all shadow-md scale-[1.02]";
    }

    fb.innerHTML = "🎉 Tuyệt vời! Cảm xúc của em rất tự nhiên và đáng quý. Dù là suy nghĩ sâu lắng hay mong muốn chia sẻ, viết đoạn văn thể hiện cảm xúc sẽ giúp em lưu giữ những ấn tượng đẹp ấy. Hãy cùng tìm hiểu bài học hôm nay nhé!";
    fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-4 bg-emerald-600 text-white shadow-md animate-in fade-in duration-380";
};

// --- BÀI TẬP 1: KIỂM TRA ĐỌC HIỂU ---
window.kiemTraCau1_80 = function() {
    const fb = document.getElementById('fb-vn80-bt1');
    if (!fb) return;
    fb.classList.remove('hidden');

    const a = document.getElementById('q1-a-select')?.value;
    const b = document.getElementById('q1-b-select')?.value;
    const c = document.getElementById('q1-c-select')?.value;

    if (!a || !b || !c) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án cho cả 3 câu hỏi đọc hiểu nhé!";
        fb.className = "p-3 rounded-xl text-sm font-bold text-center bg-amber-500 text-white mt-2 shadow";
        return;
    }

    if (a === 'dung' && b === 'dung' && c === 'dung') {
        fb.innerHTML = "🎉 Chính xác 180%! Em đã hiểu rất rõ diễn biến và thông điệp nhân văn đầy ý nghĩa của câu chuyện.";
        fb.className = "p-3 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có câu trả lời chưa chính xác. Em hãy đọc kỹ lại câu chuyện và chọn lại đáp án đúng nhé!";
        fb.className = "p-3 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 2: INTERACTIVE HIGHLIGHT & WORD SELECT ---
window.highlightPhan80 = function(phan) {
    const info = document.getElementById('h-info-box');
    const title = document.getElementById('h-info-title');
    const desc = document.getElementById('h-info-desc');
    if (!info || !title || !desc) return;

    info.classList.remove('hidden');

    // Reset highlights
    document.getElementById('para-mo-dau').className = "transition-all duration-380 p-1 rounded text-gray-800";
    document.getElementById('para-trien-khai').className = "transition-all duration-380 p-1 rounded text-gray-800";
    document.getElementById('para-ket-thuc').className = "transition-all duration-380 p-1 rounded text-gray-800";

    if (phan === 'mo-dau') {
        document.getElementById('para-mo-dau').className = "bg-sky-600 text-sky-900 font-black transition-all duration-380 p-1 rounded shadow-sm scale-105 inline-block";
        info.className = "p-6 rounded-[2.5rem] border-2 border-sky-100 bg-sky-50 bg-opacity-35 transition-all duration-380 shadow-md";
        title.innerText = "📘 Phần Mở đầu (Câu 1)";
        title.className = "text-xl md:text-2xl font-black text-sky-800 mb-2";
        desc.innerText = "Giới thiệu câu chuyện 'Không nên phá tổ chim' and bộc lộ ấn tượng ban đầu chung: đây là câu chuyện giản dị nhưng mang lại nhiều cảm xúc khó quên.";
    } else if (phan === 'trien-khai') {
        document.getElementById('para-trien-khai').className = "bg-emerald-600 text-emerald-900 font-black transition-all duration-380 p-1 rounded shadow-sm scale-[1.01] inline-block";
        info.className = "p-6 rounded-[2.5rem] border-2 border-emerald-100 bg-emerald-50 bg-opacity-35 transition-all duration-380 shadow-md";
        title.innerText = "🟢 Phần Triển khai (Câu 2 -> Câu 8)";
        title.className = "text-xl md:text-2xl font-black text-emerald-800 mb-2";
        desc.innerText = "Kể tóm tắt diễn biến truyện (em bé trèo cây bắt chim, lời khuyên và phân tích lợi ích của chị gái giúp em bé tỉnh ngộ đem chim đặt lại tổ); nêu chi tiết tâm đắc và bày tỏ cảm xúc trước bài học nhân văn cao đẹp của câu chuyện.";
    } else if (phan === 'ket-thuc') {
        document.getElementById('para-ket-thuc').className = "bg-amber-500 text-amber-900 font-black transition-all duration-380 p-1 rounded shadow-sm scale-105 inline-block";
        info.className = "p-6 rounded-[2.5rem] border-2 border-amber-100 bg-amber-50 bg-opacity-35 transition-all duration-380 shadow-md";
        title.innerText = "📙 Phần Kết thúc (Câu cuối cùng)";
        title.className = "text-xl md:text-2xl font-black text-amber-600 mb-2";
        desc.innerText = "Khẳng định lại giá trị, dư âm lâu bền của tác phẩm đối với người viết: hình ảnh chú chim non quấn quýt bên mẹ vẫn in đậm mãi trong tâm trí.";
    }
};

window.resetHighlight80 = function() {
    document.getElementById('para-mo-dau').className = "transition-all duration-380 p-1 rounded text-gray-800";
    document.getElementById('para-trien-khai').className = "transition-all duration-380 p-1 rounded text-gray-800";
    document.getElementById('para-ket-thuc').className = "transition-all duration-380 p-1 rounded text-gray-800";
    const info = document.getElementById('h-info-box');
    if (info) info.classList.add('hidden');
};

let userSelectedWords80 = [];
window.selectWord80 = function(idx) {
    const btn = document.getElementById(`w80-${idx}`);
    if (!btn) return;
    const pos = userSelectedWords80.indexOf(idx);
    if (pos > -1) {
        userSelectedWords80.splice(pos, 1);
        btn.className = "px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none";
    } else {
        userSelectedWords80.push(idx);
        btn.className = "px-3 py-1.5 bg-blue-600 text-white rounded-xl border border-blue-100 font-bold transition-all select-none shadow-sm";
    }
};

window.resetWord80 = function() {
    userSelectedWords80 = [];
    for(let i=1; i<=10; i++) {
        const btn = document.getElementById(`w80-${i}`);
        if (btn) btn.className = "px-3 py-1.5 bg-white border border-gray-100 rounded-xl hover:bg-blue-50/30 transition-all select-none";
    }
    const fb = document.getElementById('fb-vn80-bt2');
    if (fb) fb.classList.add('hidden');
};

window.kiemTraCau2_80 = function() {
    const fb = document.getElementById('fb-vn80-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (userSelectedWords80.length === 0) {
        fb.innerHTML = "⚠️ Em hãy click chọn các từ ngữ biểu lộ tình cảm, cảm xúc trong danh sách trên trước nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    // Đúng là: 2, 4, 5, 6, 8, 9, 10
    const correctAnswers = [2, 4, 5, 6, 8, 9, 10];
    const hasWrong = userSelectedWords80.some(w => !correctAnswers.includes(w));
    const missingAny = correctAnswers.some(w => !userSelectedWords80.includes(w));

    if (!hasWrong && !missingAny) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã tìm đúng toàn bộ các từ ngữ biểu lộ tình cảm cảm xúc của người viết đối với câu chuyện.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else if (hasWrong) {
        fb.innerHTML = "❌ Lựa chọn chưa chính xác rồi. Có những cụm từ chỉ kể lại hành động đơn thuần chứ không bộc lộ cảm xúc trực tiếp. Em hãy làm lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Em đã chọn đúng một số từ nhưng vẫn còn thiếu những từ ngữ bộc lộ cảm xúc khác. Hãy đọc kỹ lại và bổ sung nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
    }
};

// --- BÀI TẬP 3: KIỂM TRA GHI NHỚ ---
window.kiemTraGhiNho80 = function() {
    const fb = document.getElementById('fb-vn80-gnh');
    if (!fb) return;
    fb.classList.remove('hidden');

    const o1 = document.getElementById('gm-opt-1')?.value;
    const o2 = document.getElementById('gm-opt-2')?.value;
    const o3 = document.getElementById('gm-opt-3')?.value;
    const o4 = document.getElementById('gm-opt-4')?.value;
    const o5 = document.getElementById('gm-opt-5')?.value;
    const o6 = document.getElementById('gm-opt-6')?.value;

    if (!o1 || !o2 || !o3 || !o4 || !o5 || !o6) {
        fb.innerHTML = "⚠️ Em hãy chọn đáp án đầy đủ ở các ô thả để hoàn thành ghi nhớ nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2 shadow-sm";
        return;
    }

    if (o1 === 'ten-tg' && o2 === 'an-tuong' && o3 === 'tom-tat' && o4 === 'yeu-thich' && o5 === 'tinh-cam' && o6 === 'gia-tri') {
        fb.innerHTML = "🎉 Hoàn hảo! Em đã ghi nhớ xuất sắc cấu trúc 3 phần và nội dung chi tiết của một đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "❌ Có phương án điền khuyết chưa chính xác. Hãy nhớ lại bài phân tích đoạn văn mẫu ở Bài 2 để chỉnh lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- BÀI TẬP 4: VẬN DỤNG GHI SỔ TAY ---
window.kiemTraVanDung80 = function() {
    const name = document.getElementById('ans-story-name')?.value.trim();
    const char = document.getElementById('ans-story-char')?.value.trim();
    const feel = document.getElementById('ans-story-feel')?.value.trim();
    const fb = document.getElementById('fb-vn80-vd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!name || !char || !feel) {
        fb.innerHTML = "⚠️ Em hãy nhập đầy đủ thông tin chuẩn bị vào cả 3 ô trên nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    fb.innerHTML = `
        <div class="space-y-2 text-left">
            <span class="text-xs font-black text-emerald-800 block">🤖 SỔ TAY TÌM Ý CỦA EM ĐÃ LƯU:</span>
            <p class="text-sm font-bold"><strong class="text-emerald-800">📖 Câu chuyện:</strong> ${name}</p>
            <p class="text-sm font-bold"><strong class="text-emerald-800">✨ Ấn tượng:</strong> ${char}</p>
            <p class="text-sm font-bold"><strong class="text-emerald-800">💖 Cảm xúc:</strong> ${feel}</p>
            <div class="border-t border-emerald-100 pt-2 mt-2">
                <span class="text-xs font-black text-emerald-800">ĐÁNH GIÁ TỪ THẦY E:</span>
                <p class="text-base font-bold italic">"Ý tưởng chuẩn bị rất tuyệt vời! Đây sẽ là tư liệu vô cùng quý giá để em lập dàn ý chi tiết ở tiết sau."</p>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-380";
};

// --- HOÀN THÀNH TIẾT HỌC ---
window.nopBai80Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 81',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">📝</span><p class="text-2xl md:text-3xl font-bold text-blue-600">Chúc mừng em đã hoàn thành bài học hôm nay!</p><p class="text-lg text-gray-800 mt-3">Em đã nắm vững cấu trúc viết đoạn văn thể hiện tình cảm, cảm xúc rồi. Hãy sẵn sàng viết những dòng cảm xúc chân thực của riêng mình nhé.</p></div>'
        );
    }
};
