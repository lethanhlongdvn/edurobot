export const lesson61 = {
    "topic": "Tiếng Việt 5",
    "week": "9",
    "period": "61",
    "title": "ÔN TẬP GIỮA HỌC KÌ I - TIẾT 5",
    "desc": "Bài học giúp học sinh đọc hiểu câu chuyện 'Tôi sống độc lập từ thuở bé' (trích Dế Mèn phiêu lưu ký) và thực hành viết đoạn văn kể tiếp theo tưởng tượng.",
    "subject": "Ôn tập",
    "theme": "Ôn tập giữa học kì I",
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
                Đọc trôi chảy, diễn cảm và hiểu sâu sắc câu chuyện "Tôi sống độc lập từ thuở bé".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Cảm nhận được tình yêu thương chu đáo của mẹ dế và đức tính tự lập, lạc quan của dế út.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Thực hành viết đoạn văn kể tiếp theo tưởng tượng về tâm trạng của dế út trong đêm đầu tiên xa mẹ, xa các anh.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG: THỬ TÀI HIỂU BIẾT VỀ CHÚ DẾ MÈN -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Thử tài hiểu biết về chú Dế Mèn</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy trả lời 3 câu hỏi trắc nghiệm vui dưới đây:</p>
        
        <div class="space-y-8 max-w-3xl mx-auto">
            <!-- Câu hỏi 1 -->
            <div class="bg-sky-50/20 p-5 rounded-3xl border border-sky-100/50">
                <p class="text-xl md:text-2xl font-bold text-gray-800 mb-3"><span class="inline-block px-3 py-1 bg-sky-600 text-white rounded-lg text-sm mr-2">Câu 1</span> Tác phẩm "Dế Mèn phiêu lưu ký" là của nhà văn nào?</p>
                <div class="grid grid-cols-2 gap-3">
                    <button onclick="checkKD61(this, 1, 1, 2)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Nam Cao</button>
                    <button onclick="checkKD61(this, 1, 2, 2)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Tô Hoài</button>
                    <button onclick="checkKD61(this, 1, 3, 2)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Trần Đăng Khoa</button>
                    <button onclick="checkKD61(this, 1, 4, 2)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Xuân Quỳnh</button>
                </div>
            </div>

            <!-- Câu hỏi 2 -->
            <div class="bg-sky-50/20 p-5 rounded-3xl border border-sky-100/50">
                <p class="text-xl md:text-2xl font-bold text-gray-800 mb-3"><span class="inline-block px-3 py-1 bg-sky-600 text-white rounded-lg text-sm mr-2">Câu 2</span> Ở đầu câu chuyện, họ nhà dế có tục lệ lâu đời nào?</p>
                <div class="grid grid-cols-2 gap-3">
                    <button onclick="checkKD61(this, 2, 1, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Ở chung cả gia đình</button>
                    <button onclick="checkKD61(this, 2, 2, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Đi phiêu lưu khắp nơi</button>
                    <button onclick="checkKD61(this, 2, 3, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Cho con cái tự lập, ra ở riêng từ sớm</button>
                    <button onclick="checkKD61(this, 2, 4, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Tự làm tổ trên ngọn cây</button>
                </div>
            </div>

            <!-- Câu hỏi 3 -->
            <div class="bg-sky-50/20 p-5 rounded-3xl border border-sky-100/50">
                <p class="text-xl md:text-2xl font-bold text-gray-800 mb-3"><span class="inline-block px-3 py-1 bg-sky-600 text-white rounded-lg text-sm mr-2">Câu 3</span> Dế út trong đoạn trích là người con thứ mấy?</p>
                <div class="grid grid-cols-2 gap-3">
                    <button onclick="checkKD61(this, 3, 1, 1)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Con út (bé nhất)</button>
                    <button onclick="checkKD61(this, 3, 2, 1)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Con trưởng (lớn nhất)</button>
                    <button onclick="checkKD61(this, 3, 3, 1)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Con thứ hai</button>
                    <button onclick="checkKD61(this, 3, 4, 1)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-sky-400 text-gray-800 active:scale-95 transition-all">Không xác định được</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 📖 BÀI TẬP 1: ĐỌC VÀ TRẢ LỜI CÂU HỎI -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center text-2xl md:text-2xl font-black shadow-md">1</span>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc câu chuyện dưới đây và trả lời câu hỏi:</h3>
        </div>

        <!-- Khung văn bản đọc -->
        <div class="bg-sky-50/10 p-6 md:p-10 rounded-[36px] border border-sky-100/60 leading-relaxed text-justify space-y-6">
            <h4 class="text-2xl md:text-3xl font-black text-center text-sky-800 uppercase">Tôi sống độc lập từ thuở bé</h4>
            <p class="text-right text-gray-800 font-bold text-base md:text-lg italic">(Trích)</p>
            
            <div class="serif-font text-gray-800 text-xl md:text-2xl font-medium space-y-4 leading-loose">
                <p class="indent-10">Tôi sống độc lập từ thuở bé. Ấy là tục lệ lâu đời trong họ dế nhà tôi.</p>
                <p class="indent-10">Vả lại, mẹ thường bảo chúng tôi rằng: "Phải như thế, để các con biết kiếm ăn một mình cho quen đi, không nên ỷ lại.". Bởi thế, lứa sinh nào cũng vậy, đẻ xong là mẹ tôi nghĩ ngay đến việc thu xếp cho con cái ra ở riêng.</p>
                <p class="indent-10">Lứa sinh ấy, chúng tôi có cả thảy ba anh em. Ba anh em chúng tôi chỉ ở với mẹ hai hôm. Tới hôm thứ ba, mẹ đi trước, ba đứa tôi tấp tểnh, khấp khởi, nửa lo nửa vui theo sau. Mẹ dẫn chúng tôi đi và mẹ đem đặt mỗi đứa vào một cái hang đất ở bờ ruộng phía bên kia, chỗ trông ra đầm nước mà không biết mẹ đã chịu khó đào bới, be đắp tinh tươm thành hang, thành nhà cho chúng tôi từ bao giờ.</p>
                <p class="indent-10">Tôi là em út, bé nhất, nên được mẹ tôi, sau khi dắt vào hang, lại bỏ theo một ít ngọn cỏ non trước cửa, để tôi nếu còn bỡ ngỡ, thì đã có thức ăn sẵn trong vài ngày.</p>
                <p class="indent-10">Rồi mẹ tôi trở về.</p>
                <p class="indent-10">Tôi cũng không buồn. Trái lại, còn lấy làm khoan khoái vì được ở một mình nơi thoáng đãng, mát mẻ. Tôi vừa thầm cảm ơn mẹ, vừa sục sạo thăm tất cả cái hang mẹ đưa đến ở. Khi đã xem xét cẩn thận rồi, tôi ra đứng ngoài cửa, ngẩng mặt lên nhìn trời. Qua những ngọn cỏ ấu nhọn và sắc, tôi thấy màu trời trong xanh. Tôi dọn giọng, vỗ đôi cánh nhỏ mới ngắn đến nách, rồi cao hứng gáy lên mấy tiếng rõ to.</p>
            </div>
            <p class="text-right text-gray-800 font-bold text-xl md:text-2xl">(Theo Tô Hoài, Dế Mèn phiêu lưu ký)</p>
        </div>

        <!-- Khung Câu hỏi & Trả lời dạng Tab -->
        <div class="space-y-6">
            <!-- Các nút tab -->
            <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
                <button id="tab-q61-1" onclick="chuyenTabCauHoiVn61(1)" class="px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all">Câu hỏi a</button>
                <button id="tab-q61-2" onclick="chuyenTabCauHoiVn61(2)" class="px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Câu hỏi b</button>
                <button id="tab-q61-3" onclick="chuyenTabCauHoiVn61(3)" class="px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Câu hỏi c</button>
                <button id="tab-q61-4" onclick="chuyenTabCauHoiVn61(4)" class="px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all">Câu hỏi d</button>
            </div>

            <!-- Nội dung từng Tab -->
            <div class="p-6 md:p-8 bg-sky-50/20 rounded-3xl border border-sky-100">
                <!-- Tab a -->
                <div id="panel-q61-1" class="space-y-4">
                    <p class="text-xl md:text-2xl font-black text-gray-800">a. Ba anh em dế được mẹ giảng giải thế nào về tục lệ lâu đời của họ nhà dế?</p>
                    <textarea id="ans-q61-1" rows="3" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    
                    <div class="flex flex-wrap gap-3 items-center">
                        <button onclick="chamCauHoiVn61(1)" class="px-6 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">🤖 THẦY AI CHẤM BÀI</button>
                        <button onclick="toggleGoiYVn61(1)" class="px-6 py-3 bg-amber-500 hover:bg-amber-500 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">💡 XEM GỢI Ý ĐÁP ÁN</button>
                    </div>
                    <div id="suggest-q61-1" class="hidden p-4 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl font-bold text-lg md:text-xl">
                        📌 Gợi ý đáp án: Mẹ thường bảo các con rằng: "Phải như thế, để các con biết kiếm ăn một mình cho quen đi, không nên ỷ lại.".
                    </div>
                    <div id="fb-q61-1" class="hidden p-4 rounded-xl font-bold text-base"></div>
                </div>

                <!-- Tab b -->
                <div id="panel-q61-2" class="space-y-4 hidden">
                    <p class="text-xl md:text-2xl font-black text-gray-800">b. Chú dế út có cảm nghĩ thế nào trước việc mẹ cho ra ở riêng?</p>
                    <div class="space-y-3">
                        <label class="block text-lg font-bold text-gray-800">- Lúc theo mẹ đi trên đường:</label>
                        <input type="text" id="ans-q61-2-1" placeholder="Nhập cảm nghĩ..." class="w-full p-3 border border-sky-100 rounded-xl font-bold text-lg md:text-xl bg-white focus:border-sky-500 outline-none" />
                        
                        <label class="block text-lg font-bold text-gray-800">- Lúc được mẹ dắt vào chỗ ở riêng:</label>
                        <input type="text" id="ans-q61-2-2" placeholder="Nhập cảm nghĩ..." class="w-full p-3 border border-sky-100 rounded-xl font-bold text-lg md:text-xl bg-white focus:border-sky-500 outline-none" />
                    </div>
                    
                    <div class="flex flex-wrap gap-3 items-center">
                        <button onclick="chamCauHoiVn61(2)" class="px-6 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">🤖 THẦY AI CHẤM BÀI</button>
                        <button onclick="toggleGoiYVn61(2)" class="px-6 py-3 bg-amber-500 hover:bg-amber-500 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">💡 XEM GỢI Ý ĐÁP ÁN</button>
                    </div>
                    <div id="suggest-q61-2" class="hidden p-4 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl font-bold text-lg md:text-xl leading-relaxed">
                        📌 Gợi ý đáp án:<br>
                        - Lúc đi trên đường: Ba đứa dế tấp tểnh, khấp khởi, nửa lo nửa vui theo sau mẹ.<br>
                        - Lúc được mẹ dắt vào hang: Không thấy buồn, trái lại còn lấy làm khoan khoái vì được ở một mình nơi thoáng đãng, mát mẻ; vừa thầm cảm ơn mẹ vừa hào hứng gáy lên mấy tiếng rõ to.
                    </div>
                    <div id="fb-q61-2" class="hidden p-4 rounded-xl font-bold text-base"></div>
                </div>

                <!-- Tab c -->
                <div id="panel-q61-3" class="space-y-4 hidden">
                    <p class="text-xl md:text-2xl font-black text-gray-800">c. Vì sao chú dế út thầm cảm ơn mẹ?</p>
                    <textarea id="ans-q61-3" rows="3" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    
                    <div class="flex flex-wrap gap-3 items-center">
                        <button onclick="chamCauHoiVn61(3)" class="px-6 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">🤖 THẦY AI CHẤM BÀI</button>
                        <button onclick="toggleGoiYVn61(3)" class="px-6 py-3 bg-amber-500 hover:bg-amber-500 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">💡 XEM GỢI Ý ĐÁP ÁN</button>
                    </div>
                    <div id="suggest-q61-3" class="hidden p-4 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl font-bold text-lg md:text-xl">
                        📌 Gợi ý đáp án: Dế út thầm cảm ơn mẹ vì nhận thấy sự yêu thương, chăm sóc chu đáo của mẹ: mẹ đã chịu khó đào bới, be đắp nhà cửa tinh tươm từ bao giờ; lại còn bỏ sẵn cỏ non trước cửa để dế út ăn trong những ngày đầu bỡ ngỡ.
                    </div>
                    <div id="fb-q61-3" class="hidden p-4 rounded-xl font-bold text-base"></div>
                </div>

                <!-- Tab d -->
                <div id="panel-q61-4" class="space-y-4 hidden">
                    <p class="text-xl md:text-2xl font-black text-gray-800">d. Em có nhận xét gì về tính cách của chú dế út qua đoạn kết của câu chuyện?</p>
                    <textarea id="ans-q61-4" rows="3" placeholder="Nhập câu trả lời của em tại đây..." class="w-full p-4 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none shadow-sm bg-white font-medium leading-relaxed"></textarea>
                    
                    <div class="flex flex-wrap gap-3 items-center">
                        <button onclick="chamCauHoiVn61(4)" class="px-6 py-3 bg-sky-600 hover:bg-sky-600 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">🤖 THẦY AI CHẤM BÀI</button>
                        <button onclick="toggleGoiYVn61(4)" class="px-6 py-3 bg-amber-500 hover:bg-amber-500 text-white font-black text-base rounded-xl shadow active:scale-95 transition-all">💡 XEM GỢI Ý ĐÁP ÁN</button>
                    </div>
                    <div id="suggest-q61-4" class="hidden p-4 bg-amber-50 border border-amber-100 text-amber-600 rounded-xl font-bold text-lg md:text-xl">
                        📌 Gợi ý đáp án: Dế út là chú dế có tính cách tự lập, lạc quan, yêu đời, tự tin và rất hiểu thảo, biết ơn tình yêu của mẹ.
                    </div>
                    <div id="fb-q61-4" class="hidden p-4 rounded-xl font-bold text-base"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 2: KỂ THÊM ĐOẠN TRUYỆN THEO TƯỞNG TƯỢNG -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <span class="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center text-2xl md:text-2xl font-black shadow-md">2</span>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-snug">Kể thêm một đoạn cho câu chuyện "Tôi sống độc lập từ thuở bé" theo tưởng tượng của em:</h3>
                    <p class="text-base font-bold text-sky-800 mt-1">💡 Gợi ý: Có thể kể diễn biến tâm trạng của chú dế út trong đêm đầu tiên xa mẹ, xa các anh.</p>
                </div>
            </div>

            <!-- Khung soạn thảo văn bản tự luận -->
            <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-inner space-y-6">
                <!-- Hộp từ gợi ý cảm xúc -->
                <div class="p-4 bg-sky-50/30 rounded-2xl border border-sky-100">
                    <span class="text-sm font-black text-sky-800 block mb-2">🌸 Click để chèn nhanh từ gợi ý cảm xúc/cảnh vật vào bài viết:</span>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="chenTuGoiY61('nhớ mẹ')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">nhớ mẹ</button>
                        <button onclick="chenTuGoiY61('bỡ ngỡ')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">bỡ ngỡ</button>
                        <button onclick="chenTuGoiY61('hồi hộp')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">hồi hộp</button>
                        <button onclick="chenTuGoiY61('lo sợ')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">lo sợ</button>
                        <button onclick="chenTuGoiY61('bóng tối')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">bóng tối</button>
                        <button onclick="chenTuGoiY61('tiếng gió thổi rì rào')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">tiếng gió thổi rì rào</button>
                        <button onclick="chenTuGoiY61('tiếng côn trùng kêu')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">tiếng côn trùng kêu</button>
                        <button onclick="chenTuGoiY61('dũng cảm')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">dũng cảm</button>
                        <button onclick="chenTuGoiY61('tự lập')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">tự lập</button>
                        <button onclick="chenTuGoiY61('quyết tâm cố gắng')" class="px-3 py-1.5 bg-white border border-sky-100 hover:border-sky-400 font-bold rounded-lg text-sm text-sky-800 active:scale-95 transition-all">quyết tâm cố gắng</button>
                    </div>
                </div>

                <textarea id="ans-vn61-b2" rows="6" placeholder="Đêm đầu tiên xa mẹ và các anh, trong cái hang đất mới mát mẻ..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-sky-100 focus:border-sky-500 outline-none bg-sky-50/10 font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-start gap-3">
                    <button onclick="chamBai2Vn61()" class="px-8 py-3 bg-sky-600 text-white font-black text-lg rounded-2xl shadow-md hover:bg-sky-600 active:scale-95 transition-all flex items-center gap-2">
                        <span>🤖 THẦY AI CHẤM BÀI</span>
                    </button>
                    <div id="fb-vn61-b2" class="hidden p-4 rounded-xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn61Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Chi tiết nào cho thấy họ nhà dế có tục lệ tự lập từ thuở bé?",
            "options": [
                "Đẻ xong là mẹ nghĩ ngay đến việc thu xếp cho con cái ra ở riêng.",
                "Học cách bay lượn từ khi còn nhỏ.",
                "Tự làm hang từ lúc mới sinh ra đời.",
                "Đi phiêu lưu khám phá thế giới từ rất sớm."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Ba anh em dế ở chung với mẹ trong bao lâu trước khi chính thức ra ở riêng?",
            "options": [
                "Hai hôm",
                "Ba hôm",
                "Một tuần",
                "Mười ngày"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Mẹ dế dẫn các con sang bờ ruộng bên kia để làm gì?",
            "options": [
                "Đưa mỗi đứa vào một cái hang đất đã được đào bới, be đắp sẵn.",
                "Dạy các con cách nhảy xa qua bờ ruộng.",
                "Tìm kiếm thức ăn chuẩn bị tích trữ cho mùa đông.",
                "Tránh một kẻ thù nguy hiểm đang săn đuổi."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Vì sao dế út được mẹ chuẩn bị thêm một ít ngọn cỏ non đặt trước cửa hang?",
            "options": [
                "Vì dế út là em út, bé nhất, sợ còn bỡ ngỡ.",
                "Vì dế út lười biếng không chịu tự mình đi kiếm ăn.",
                "Vì đây là phần thưởng cho chú dế út dũng cảm nhất.",
                "Vì mẹ dế thiên vị dế út hơn các anh lớn."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cảm giác của dế út khi bắt đầu được ở một mình trong chiếc hang mới là gì?",
            "options": [
                "Lấy làm khoan khoái vì được ở một mình nơi thoáng đãng, mát mẻ.",
                "Sợ hãi, khóc lóc vì bóng tối bao phủ.",
                "Giận mẹ vì bắt mình phải tự lập quá sớm.",
                "Hoang mang lo sợ không biết tìm thức ăn ở đâu."
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hành động đầu tiên của dế út ngay sau khi mẹ ra về là gì?",
            "options": [
                "Vừa thầm cảm ơn mẹ, vừa sục sạo thăm tất cả cái hang mẹ đưa đến.",
                "Nằm ngủ thiếp đi vì cả ngày di chuyển mệt mỏi.",
                "Tìm cách bò ra ngoài hang để đi theo các anh lớn.",
                "Khóc rấm rức mong mẹ quay lại đón về."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khi ra đứng ngoài cửa hang, dế út đã thấy được hình ảnh thiên nhiên tuyệt đẹp nào?",
            "options": [
                "Màu trời trong xanh qua những ngọn cỏ ấu nhọn và sắc.",
                "Cơn mưa rào mùa hạ đang đổ xuống đầm nước.",
                "Ruộng lúa chín vàng óng trải dài vô tận.",
                "Những chú chim đang hót vang trên cành cây."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn kết của câu chuyện thể hiện chú dế út có những tính cách tốt đẹp nào?",
            "options": [
                "Tự lập, tự tin, lạc quan, yêu đời và có lòng hiếu thảo.",
                "Nhút nhát, e dè và sợ hãi trước khó khăn.",
                "Ỷ lại vào sự chăm sóc, bảo bọc chu đáo của mẹ.",
                "Bướng bỉnh, kiêu căng và không xem ai ra gì."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây đồng nghĩa với từ 'khoan khoái'?",
            "options": [
                "dễ chịu",
                "mệt mỏi",
                "u sầu",
                "bực bội"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'ngọn' trong 'ngọn cỏ non' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Cả hai nghĩa đều sai",
                "Không có nghĩa rõ ràng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'mẹ' trong câu nói của dế mẹ: 'Phải như thế, để các con biết kiếm ăn...' thuộc từ loại nào?",
            "options": [
                "Danh từ được dùng làm từ xưng hô",
                "Đại từ thay thế",
                "Tính từ phẩm chất",
                "Quan hệ từ nối vế câu"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu 'Rồi mẹ tôi trở về.', từ 'tôi' đóng vai trò là đại từ xưng hô ở ngôi thứ mấy?",
            "options": [
                "Ngôi thứ nhất (chỉ người nói)",
                "Ngôi thứ hai (chỉ người nghe)",
                "Ngôi thứ ba (chỉ người được nhắc tới)",
                "Ngôi không xác định"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'tấp tểnh' miêu tả dáng đi của ba anh em dế thể hiện tâm trạng gì của các chú?",
            "options": [
                "Hào hứng, náo nức xen lẫn chút hồi hộp, lo âu",
                "Buồn bã, mệt mỏi rã rời",
                "Tức giận vì bị mẹ đuổi ra riêng",
                "Sợ hãi muốn bỏ chạy trốn thoát"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Chi tiết nào chứng tỏ dế mẹ vô cùng yêu thương và chuẩn bị chu đáo cho cuộc sống tự lập của các con?",
            "options": [
                "Đào bới, be đắp hang tinh tươm và bỏ sẵn cỏ non trước cửa cho dế út.",
                "Để các con ở chung suốt đời để bảo vệ.",
                "Bắt các con phải tự mình đào hang ngay hôm đầu tiên.",
                "Không cho các con ra ngoài hang khám phá."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mục đích lớn nhất của việc mẹ dế cho con cái ra ở riêng từ sớm là gì?",
            "options": [
                "Rèn luyện ý thức tự lập, không dựa dẫm ỷ lại.",
                "Do hang cũ quá bé không đủ chỗ chứa.",
                "Để dế mẹ rảnh rang đi phiêu lưu một mình.",
                "Để dế út tự đi tìm các anh của mình."
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- KHỞI ĐỘNG VN61 ---
window.checkKD61 = function(btn, questionIdx, choiceIdx, correctIdx) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    
    // Khóa các nút khác trong câu hỏi
    buttons.forEach(b => {
        b.disabled = true;
    });

    if (choiceIdx === correctIdx) {
        btn.className = "p-3 border-2 border-emerald-100 bg-emerald-600 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow";
    } else {
        btn.className = "p-3 border-2 border-rose-100 bg-rose-600 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow";
        // Hiện màu xanh cho đáp án đúng
        const correctBtn = buttons[correctIdx - 1];
        if (correctBtn) {
            correctBtn.className = "p-3 border-2 border-emerald-100 bg-emerald-600 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow";
        }
    }
};

// --- CHUYỂN TAB BÀI 1 ---
window.chuyenTabCauHoiVn61 = function(tabIndex) {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById('tab-q61-' + i);
        const panel = document.getElementById('panel-q61-' + i);
        if (i === tabIndex) {
            btn.className = "px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-sky-100 bg-sky-600 text-white transition-all";
            panel.classList.remove('hidden');
        } else {
            btn.className = "px-5 py-3 font-black text-lg rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all";
            panel.classList.add('hidden');
        }
    }
};

// --- BẬT/TẮT GỢI Ý ĐÁP ÁN ---
window.toggleGoiYVn61 = function(tabIndex) {
    const box = document.getElementById('suggest-q61-' + tabIndex);
    if (!box) return;
    box.classList.toggle('hidden');
};

// --- CHẤM TỰ LUẬN BÀI 1 ---
window.chamCauHoiVn61 = function(tabIdx) {
    let text = '';
    if (tabIdx === 2) {
        const t1 = document.getElementById('ans-q61-2-1')?.value.trim();
        const t2 = document.getElementById('ans-q61-2-2')?.value.trim();
        text = t1 + ' ' + t2;
    } else {
        text = document.getElementById('ans-q61-' + tabIdx)?.value.trim();
    }

    const fb = document.getElementById('fb-q61-' + tabIdx);
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 10) {
        fb.innerHTML = '⚠️ Câu trả lời của em hơi ngắn. Em hãy tham khảo gợi ý và hoàn thiện ý nghĩa đầy đủ nhé!';
        fb.className = 'p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md';
        return;
    }

    fb.innerHTML = '<div class="space-y-2"><span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span><p class="text-lg font-bold">"Tuyệt vời! Em đã đọc hiểu rất tốt văn bản và nắm bắt được tinh thần câu chuyện của Tô Hoài. Câu trả lời đầy đủ ý và diễn đạt mạch lạc."</p><span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 161% (Hoàn thành)</span></div>';
    fb.className = 'p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-361';
};

// --- CHÈN TỪ GỢI Ý VÀO Ô VIẾT ---
window.chenTuGoiY61 = function(word) {
    const txt = document.getElementById('ans-vn61-b2');
    if (!txt) return;
    const start = txt.selectionStart;
    const end = txt.selectionEnd;
    const oldText = txt.value;
    txt.value = oldText.substring(0, start) + word + oldText.substring(end);
    txt.focus();
    txt.selectionStart = txt.selectionEnd = start + word.length;
};

// --- CHẤM BÀI 2 (ĐOẠN VĂN TƯỞNG TƯỢNG) ---
window.chamBai2Vn61 = function() {
    const text = document.getElementById('ans-vn61-b2')?.value.trim();
    const fb = document.getElementById('fb-vn61-b2');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 30) {
        fb.innerHTML = '⚠️ Đoạn văn của em còn hơi ngắn (yêu cầu tối thiểu 30 ký tự). Em hãy viết chi tiết hơn về đêm đầu tiên tự lập của dế út nhé!';
        fb.className = 'p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md';
        return;
    }

    // Kiểm tra có từ cảm xúc gợi ý nào không
    const keywords = ['nhớ', 'sợ', 'hồi hộp', 'lo', 'bỡ ngỡ', 'tự lập', 'cố gắng', 'bóng tối', 'gió', 'dũng cảm'];
    let hasKeyword = false;
    for (let i = 0; i < keywords.length; i++) {
        if (text.toLowerCase().indexOf(keywords[i]) !== -1) {
            hasKeyword = true;
            break;
        }
    }

    if (!hasKeyword) {
        fb.innerHTML = '⚠️ Đoạn văn viết rất tốt nhưng em nên sử dụng thêm ít nhất 1 từ gợi ý diễn tả tâm trạng hoặc cảnh vật (ví dụ: nhớ mẹ, lo sợ, hồi hộp...) để câu chuyện sống động hơn nhé!';
        fb.className = 'p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md';
        return;
    }

    fb.innerHTML = '<div class="space-y-2"><span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span><p class="text-lg font-bold">"Tuyệt vời! Em có trí tưởng tượng phong phú và lối viết câu chuyện vô cùng tự nhiên. Tâm trạng của dế út trong đêm đầu tiên xa mẹ được em mô tả rất cảm xúc!"</p><span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 161% (Hoàn thành)</span></div>';
    fb.className = 'p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-361';
};

// --- NỘP BÀI VN61 GLOBAL ---
window.submitVn61Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 61 - 62',
            '🎉',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Ôn tập Tiết 5!</p><p class="text-lg text-gray-800 mt-3">Em đã đọc hiểu rất tốt văn bản và phát triển câu chuyện sáng tạo vô cùng xuất sắc.</p></div>'
        );
    }
};
