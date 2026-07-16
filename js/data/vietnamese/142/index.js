export const lesson142 = {
    "topic": "Tiếng Việt 5",
    "week": "21",
    "period": "142",
    "title": "LTVC: CÁCH NỐI CÁC VẾ CÂU GHÉP (TIẾP THEO)",
    "desc": "Tìm hiểu cách nối các vế câu ghép bằng cặp kết từ hoặc cặp từ hô ứng và thực hành làm các bài tập.",
    "subject": "LTVC",
    "theme": "Vẻ đẹp cuộc sống",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-3xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Nhận biết được cách nối các vế câu ghép bằng các cặp kết từ hoặc cặp từ hô ứng.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách sử dụng các cặp từ thích hợp để tạo lập câu ghép mạch lạc, đúng ngữ pháp.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-3xl md:text-4xl font-black text-gray-800">Khởi động: Nhận diện cặp từ nối</h3>
        </div>
        <p class="text-2xl md:text-3xl text-gray-800 font-bold italic">👉 Theo em, trong các câu ghép dưới đây, câu nào sử dụng cặp từ hô ứng?</p>
        
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="chonKhoiDong142(this, false)" class="p-5 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 rounded-2xl font-bold text-xl md:text-2xl text-gray-700 transition-all text-left">
                    A. Vì trời mưa to nên đường trơn.
                </button>
                <button onclick="chonKhoiDong142(this, true)" class="p-5 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 rounded-2xl font-bold text-xl md:text-2xl text-gray-700 transition-all text-left">
                    B. Trời càng mưa to, đường càng trơn.
                </button>
            </div>
            <div id="fb-kd142" class="hidden p-5 rounded-xl text-xl md:text-2xl font-bold text-center mt-2"></div>
        </div>
    </div>

    <!-- 📌 GHI NHỚ SGK -->
    <section class="w-full">
        <div class="bg-gradient-to-br from-amber-50 to-orange-100 rounded-[40px] p-8 md:p-12 border-2 border-amber-200/60 shadow-xl relative overflow-hidden">
            <div class="absolute right-0 top-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
            <div class="flex items-start gap-6 relative z-10">
                <div class="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shadow-amber-200 shrink-0">📌</div>
                <div class="space-y-6 w-full">
                    <h3 class="text-3xl md:text-4xl font-black text-amber-950 uppercase tracking-wider">Ghi nhớ</h3>
                    <div class="text-2xl md:text-3xl font-bold text-amber-900 space-y-4 leading-relaxed">
                        <p class="font-black text-amber-950">Các vế của câu ghép có thể nối với nhau bằng các cặp từ:</p>
                        <ul class="list-disc ml-6 space-y-3 text-gray-800 font-bold text-xl md:text-2xl">
                            <li>
                                <strong class="text-orange-950">Các cặp kết từ:</strong> <em>vì ... nên ...; bởi ... nên ...; nhờ ... nên (mà) ...; nếu ... thì ...; hễ ... thì ...; giá ... thì ...; tuy ... nhưng ...; mặc dù ... nhưng ...; dù ... nhưng ...; chẳng những ... mà ...; không chỉ ... mà ...;...</em>
                            </li>
                            <li>
                                <strong class="text-orange-950">Các cặp từ hô ứng:</strong> <em>vừa ... đã ...; chưa ... đã ...; càng ... càng ...; đâu ... đó ...; bao nhiêu ... bấy nhiêu ...;...</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
window.chonKhoiDong142 = function(btn, isCorrect) {
    const fb = document.getElementById('fb-kd142');
    if (!fb) return;
    
    // Reset buttons
    btn.parentNode.querySelectorAll('button').forEach(b => {
        b.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-rose-500', 'bg-rose-50');
    });

    if (isCorrect) {
        btn.classList.add('border-emerald-500', 'bg-emerald-50');
        fb.className = "p-5 rounded-xl text-xl md:text-2xl font-bold text-center mt-2 bg-emerald-100 text-emerald-800";
        fb.innerHTML = "✨ Chính xác! Cặp từ 'càng ... càng ...' là cặp từ hô ứng dùng để nối các vế câu ghép.";
        if (window.UI && window.UI.showToast) {
            window.UI.showToast("Đúng rồi! Cực giỏi!", "success");
        }
    } else {
        btn.classList.add('border-rose-500', 'bg-rose-50');
        fb.className = "p-5 rounded-xl text-xl md:text-2xl font-bold text-center mt-2 bg-rose-100 text-rose-800";
        fb.innerHTML = "❌ Chưa đúng rồi! Cặp từ 'Vì ... nên ...' là cặp kết từ (chỉ nguyên nhân - kết quả), không phải từ hô ứng.";
        if (window.UI && window.UI.showToast) {
            window.UI.showToast("Thử lại xem nào!", "error");
        }
    }
    fb.classList.remove('hidden');
};
</script>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: TÌM CẶP KẾT TỪ (CÂU 1 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800">Bài tập 1: Tìm cặp kết từ nối các vế câu trong mỗi câu ghép</h3>
            </div>
            
            <p class="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                👉 Em hãy đọc kỹ các câu ghép dưới đây và chọn đúng cặp kết từ được sử dụng:
            </p>

            <div class="space-y-6">
                <!-- Câu a -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed bg-gray-50 p-6 rounded-2xl italic border border-gray-150">
                        a) "Bởi tôi ăn uống điều độ và làm việc có chừng mực nên tôi chóng lớn lắm." <span class="font-sans text-lg text-gray-500 font-normal">(Tô Hoài)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <label class="text-2xl md:text-3xl font-bold text-gray-700">Cặp kết từ nối là:</label>
                        <select id="sel-142-1a" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl min-w-[240px]">
                            <option value="">-- Chọn cặp từ --</option>
                            <option value="bởi... nên...">bởi ... nên ...</option>
                            <option value="và... có...">và ... có ...</option>
                            <option value="nên... lắm...">nên ... lắm ...</option>
                        </select>
                        <button id="btn-check-142-1a" onclick="checkBt1a()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed bg-gray-50 p-6 rounded-2xl italic border border-gray-150">
                        b) "Mặc dù chúng tôi vẫn chơi với nhau nhưng thời gian Pam dành cho tôi không còn nhiều như trước." <span class="font-sans text-lg text-gray-500 font-normal">(Theo Minh Hương)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <label class="text-2xl md:text-3xl font-bold text-gray-700">Cặp kết từ nối là:</label>
                        <select id="sel-142-1b" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl min-w-[240px]">
                            <option value="">-- Chọn cặp từ --</option>
                            <option value="mặc dù... vẫn...">mặc dù ... vẫn ...</option>
                            <option value="mặc dù... nhưng...">mặc dù ... nhưng ...</option>
                            <option value="vẫn... không...">vẫn ... không ...</option>
                        </select>
                        <button id="btn-check-142-1b" onclick="checkBt1b()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed bg-gray-50 p-6 rounded-2xl italic border border-gray-150">
                        c) "Nếu hoa mua có màu tím hồng thì hoa sim tím nhạt, phơn phớt như má con gái." <span class="font-sans text-lg text-gray-500 font-normal">(Băng Sơn)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <label class="text-2xl md:text-3xl font-bold text-gray-700">Cặp kết từ nối là:</label>
                        <select id="sel-142-1c" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl min-w-[240px]">
                            <option value="">-- Chọn cặp từ --</option>
                            <option value="có... thì...">có ... thì ...</option>
                            <option value="nếu... thì...">nếu ... thì ...</option>
                            <option value="thì... như...">thì ... như ...</option>
                        </select>
                        <button id="btn-check-142-1c" onclick="checkBt1c()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 2: CHỌN CẶP TỪ HÔ ỨNG THAY CHO BÔNG HOA (CÂU 2 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800">Bài tập 2: Chọn cặp từ hô ứng thích hợp điền vào chỗ trống</h3>
            </div>
            <p class="text-2xl md:text-3xl font-bold text-gray-700">
                👉 Chọn cặp từ thích hợp trong ngoặc <strong class="text-blue-950">(đâu ... đó ...; chưa ... đã ...; bao nhiêu ... bấy nhiêu ...)</strong> thay cho các bông hoa 🌸:
            </p>

            <div class="space-y-6">
                <!-- Câu a -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        a) Ngày <span class="text-blue-600">🌸 (1)</span> tắt hẳn, trăng <span class="text-blue-600">🌸 (2)</span> lên rồi. <span class="font-sans text-lg text-gray-500 font-normal">(Theo Thạch Lam)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <select id="sel-142-2a" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl">
                            <option value="">-- Chọn cặp từ hô ứng --</option>
                            <option value="chưa... đã...">chưa ... đã ...</option>
                            <option value="đâu... đó...">đâu ... đó ...</option>
                            <option value="bao nhiêu... bấy nhiêu...">bao nhiêu ... bấy nhiêu ...</option>
                        </select>
                        <button id="btn-check-142-2a" onclick="checkBt2a()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        b) Trăng đi đến <span class="text-blue-600">🌸 (1)</span>, luỹ tre được tắm đẫm màu sữa đến <span class="text-blue-600">🌸 (2)</span>. <span class="font-sans text-lg text-gray-500 font-normal">(Theo Phan Sĩ Châu)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <select id="sel-142-2b" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl">
                            <option value="">-- Chọn cặp từ hô ứng --</option>
                            <option value="chưa... đã...">chưa ... đã ...</option>
                            <option value="đâu... đó...">đâu ... đó ...</option>
                            <option value="bao nhiêu... bấy nhiêu...">bao nhiêu ... bấy nhiêu ...</option>
                        </select>
                        <button id="btn-check-142-2b" onclick="checkBt2b()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-4">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        c) Nước dâng lên cao <span class="text-blue-600">🌸 (1)</span>, Sơn Tinh lại làm cho đồi, núi mọc cao lên <span class="text-blue-600">🌸 (2)</span>. <span class="font-sans text-lg text-gray-500 font-normal">(Truyện Sơn Tinh, Thuỷ Tinh)</span>
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <select id="sel-142-2c" class="p-3 bg-blue-50 border-2 border-blue-200 rounded-xl outline-none font-bold text-blue-600 text-xl md:text-2xl">
                            <option value="">-- Chọn cặp từ hô ứng --</option>
                            <option value="chưa... đã...">chưa ... đã ...</option>
                            <option value="đâu... đó...">đâu ... đó ...</option>
                            <option value="bao nhiêu... bấy nhiêu...">bao nhiêu ... bấy nhiêu ...</option>
                        </select>
                        <button id="btn-check-142-2c" onclick="checkBt2c()" class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl active:scale-95 transition-all text-xl md:text-3xl flex items-center justify-center">E</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 3: THÊM VẾ CÂU GHÉP (CÂU 3 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800">Bài tập 3: Tìm vế câu thích hợp thay cho bông hoa để tạo câu ghép</h3>
            </div>
            <p class="text-2xl md:text-3xl font-bold text-gray-700">
                👉 Em hãy điền thêm một vế câu có đầy đủ Chủ ngữ - Vị ngữ thích hợp để hoàn thiện câu ghép:
            </p>

            <div class="space-y-6">
                <!-- Câu a -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        a) Vào dịp lễ Mừng xuân, chẳng những trẻ em được vui đùa thoả thích mà <span class="text-blue-600">🌸</span>.
                    </p>
                    <input type="text" id="inp-142-3a" placeholder="Ví dụ: người lớn cũng vô cùng háo hức tham gia." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl">
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-3a" onclick="checkBt3a()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        b) Mặc dù thiên nhiên khắc nghiệt nhưng <span class="text-blue-600">🌸</span>.
                    </p>
                    <input type="text" id="inp-142-3b" placeholder="Ví dụ: cây cối ở đây vẫn luôn xanh tốt." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl">
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-3b" onclick="checkBt3b()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        c) Nhờ bố kể những câu chuyện cổ tích mà <span class="text-blue-600">🌸</span>.
                    </p>
                    <input type="text" id="inp-142-3c" placeholder="Ví dụ: em hiểu thêm được nhiều bài học sâu sắc." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl">
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-3c" onclick="checkBt3c()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 4: ĐẶT CÂU GHÉP (CÂU 4 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">4</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800">Bài tập 4: Đặt câu ghép theo yêu cầu</h3>
            </div>
            <p class="text-2xl md:text-3xl font-bold text-gray-700">
                👉 Em hãy tự đặt các câu ghép tương ứng với yêu cầu cấu trúc dưới đây:
            </p>

            <div class="space-y-6">
                <!-- Câu a -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        a) Một câu ghép sử dụng một trong các cặp kết từ: <strong class="text-blue-600">vì ... nên ..., bởi ... nên ..., nhờ ... nên (mà) ...</strong>
                    </p>
                    <textarea id="txt-142-4a" rows="2" placeholder="Ví dụ: Nhờ bạn Nam giúp đỡ nhiệt tình nên em đã tiến bộ hơn trong học tập." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl resize-none"></textarea>
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-4a" onclick="checkBt4a()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu b -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        b) Một câu ghép sử dụng một trong các cặp kết từ: <strong class="text-blue-600">nếu ... thì ..., hễ ... thì ..., giá ... thì ...</strong>
                    </p>
                    <textarea id="txt-142-4b" rows="2" placeholder="Ví dụ: Nếu cuối tuần trời nắng đẹp thì chúng em sẽ đi cắm trại ở công viên." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl resize-none"></textarea>
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-4b" onclick="checkBt4b()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>

                <!-- Câu c -->
                <div class="bg-white p-6 rounded-3xl border border-gray-150 space-y-3">
                    <p class="text-2xl md:text-3xl text-gray-800 font-bold leading-relaxed">
                        c) Một câu ghép sử dụng một trong các cặp từ hô ứng: <strong class="text-blue-600">vừa ... đã ..., càng ... càng ...</strong>
                    </p>
                    <textarea id="txt-142-4c" rows="2" placeholder="Ví dụ: Gió càng thổi mạnh, những cánh diều trên bầu trời càng bay cao." class="w-full p-4 border border-gray-300 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl md:text-2xl resize-none"></textarea>
                    <div class="flex justify-end pt-2">
                        <button id="btn-check-142-4c" onclick="checkBt4c()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl active:scale-95 transition-all text-2xl md:text-4xl flex items-center justify-center">E</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
// Logic kiểm tra bài 1
window.checkBt1a = function() {
    const val = document.getElementById('sel-142-1a').value;
    if (val === 'bởi... nên...') {
        UI.showToast("Đúng rồi! Cặp kết từ là 'bởi... nên...'", "success");
    } else {
        UI.showToast("Chưa đúng! Gợi ý: 'Bởi tôi ăn uống... nên tôi chóng lớn...'", "error");
    }
};

window.checkBt1b = function() {
    const val = document.getElementById('sel-142-1b').value;
    if (val === 'mặc dù... nhưng...') {
        UI.showToast("Tuyệt vời! Cặp kết từ tương phản là 'mặc dù... nhưng...'", "success");
    } else {
        UI.showToast("Chưa đúng! Hãy chọn cặp kết từ nối hai vế câu này.", "error");
    }
};

window.checkBt1c = function() {
    const val = document.getElementById('sel-142-1c').value;
    if (val === 'nếu... thì...') {
        UI.showToast("Chính xác! Cặp kết từ giả thiết - kết quả là 'nếu... thì...'", "success");
    } else {
        UI.showToast("Chưa đúng! Hãy tìm từ đứng ở đầu mỗi vế câu.", "error");
    }
};

// Logic kiểm tra bài 2
window.checkBt2a = function() {
    const val = document.getElementById('sel-142-2a').value;
    if (val === 'chưa... đã...') {
        UI.showToast("Đúng rồi! 'Ngày chưa tắt hẳn, trăng đã lên rồi.'", "success");
    } else {
        UI.showToast("Sai rồi! Điền cặp từ thích hợp chỉ sự liên tiếp nhanh chóng.", "error");
    }
};

window.checkBt2b = function() {
    const val = document.getElementById('sel-142-2b').value;
    if (val === 'đâu... đó...') {
        UI.showToast("Chính xác! 'Trăng đi đến đâu, luỹ tre được tắm đẫm... đến đó.'", "success");
    } else {
        UI.showToast("Chưa đúng! Cặp từ chỉ vị trí tương ứng.", "error");
    }
};

window.checkBt2c = function() {
    const val = document.getElementById('sel-142-2c').value;
    if (val === 'bao nhiêu... bấy nhiêu...') {
        UI.showToast("Xuất sắc! 'Nước dâng lên cao bao nhiêu, Sơn Tinh... cao lên bấy nhiêu.'", "success");
    } else {
        UI.showToast("Chưa đúng! Điền cặp từ thể hiện mức độ tương xứng.", "error");
    }
};

// Logic bài 3: Kiểm tra nhập liệu
window.checkBt3a = function() {
    const txt = document.getElementById('inp-142-3a').value.trim();
    if (txt.length < 5) {
        UI.showToast("Vui lòng điền đầy đủ vế câu của em nhé!", "error");
    } else {
        UI.showToast("Hoàn tất! Thầy Cô sẽ đánh giá thêm vế câu này của em nhé.", "success");
    }
};

window.checkBt3b = function() {
    const txt = document.getElementById('inp-142-3b').value.trim();
    if (txt.length < 5) {
        UI.showToast("Vui lòng điền đầy đủ vế câu của em nhé!", "error");
    } else {
        UI.showToast("Hoàn tất! Vế câu của em rất có ý nghĩa.", "success");
    }
};

window.checkBt3c = function() {
    const txt = document.getElementById('inp-142-3c').value.trim();
    if (txt.length < 5) {
        UI.showToast("Vui lòng điền đầy đủ vế câu của em nhé!", "error");
    } else {
        UI.showToast("Hoàn tất! Câu ghép của em nghe rất mượt mà.", "success");
    }
};

// Logic bài 4: Đặt câu
window.checkBt4a = function() {
    const val = document.getElementById('txt-142-4a').value.trim();
    if (val.length < 10) {
        UI.showToast("Hãy đặt câu ghép có độ dài đầy đủ nhé!", "error");
    } else {
        UI.showToast("Hoàn thành! Bạn đã đặt câu có cặp kết từ.", "success");
    }
};

window.checkBt4b = function() {
    const val = document.getElementById('txt-142-4b').value.trim();
    if (val.length < 10) {
        UI.showToast("Hãy đặt câu ghép có độ dài đầy đủ nhé!", "error");
    } else {
        UI.showToast("Hoàn thành! Câu của bạn biểu thị quan hệ điều kiện/giả thiết.", "success");
    }
};

window.checkBt4c = function() {
    const val = document.getElementById('txt-142-4c').value.trim();
    if (val.length < 10) {
        UI.showToast("Hãy đặt câu ghép có độ dài đầy đủ nhé!", "error");
    } else {
        UI.showToast("Hoàn thành! Câu của bạn sử dụng cặp từ hô ứng thành công.", "success");
    }
};
</script>
`,
    "quizPool": [
        {
            "question": "Cặp kết từ nào nối các vế câu trong câu: \"Bởi tôi ăn uống điều độ và làm việc có chừng mực nên tôi chóng lớn lắm.\"? (Tô Hoài)",
            "options": [
                "bởi ... nên ...",
                "và ... có ...",
                "bởi ... và ...",
                "nên ... lắm ..."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào nối các vế câu trong câu ghép: \"Mặc dù chúng tôi vẫn chơi với nhau nhưng thời gian Pam dành cho tôi không còn nhiều như trước.\"? (Theo Minh Hương)",
            "options": [
                "vẫn ... không ...",
                "mặc dù ... vẫn ...",
                "mặc dù ... nhưng ...",
                "chúng tôi ... thời gian ..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào được dùng để nối các vế câu trong câu: \"Nếu hoa mua có màu tím hồng thì hoa sim tím nhạt, phơn phớt như má con gái.\"? (Băng Sơn)",
            "options": [
                "có ... thì ...",
                "nếu ... thì ...",
                "thì ... như ...",
                "nhạt ... phơn phớt ..."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền cặp từ hô ứng thích hợp vào câu: \"Ngày ... tắt hẳn, trăng ... lên rồi.\" (Theo Thạch Lam)",
            "options": [
                "vừa ... đã ...",
                "đâu ... đó ...",
                "chưa ... đã ...",
                "bao nhiêu ... bấy nhiêu ..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Điền cặp từ hô ứng thích hợp vào câu: \"Trăng đi đến ..., luỹ tre được tắm đẫm màu sữa đến ...\" (Theo Phan Sĩ Châu)",
            "options": [
                "chưa ... đã ...",
                "đâu ... đó ...",
                "càng ... càng ...",
                "bao nhiêu ... bấy nhiêu ..."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điền cặp từ hô ứng thích hợp vào câu: \"Nước dâng lên cao ..., Sơn Tinh lại làm cho đồi, núi mọc cao lên ...\" (Truyện Sơn Tinh, Thuỷ Tinh)",
            "options": [
                "chưa ... đã ...",
                "đâu ... đó ...",
                "càng ... càng ...",
                "bao nhiêu ... bấy nhiêu ..."
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Cặp kết từ \"bởi ... nên ...\" trong câu \"Bởi tôi ăn uống điều độ và làm việc có chừng mực nên tôi chóng lớn lắm.\" biểu thị quan hệ gì?",
            "options": [
                "Quan hệ nguyên nhân - kết quả",
                "Quan hệ điều kiện - kết quả",
                "Quan hệ tương phản",
                "Quan hệ tăng tiến"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp kết từ \"nếu ... thì ...\" biểu thị quan hệ gì giữa các vế của câu ghép?",
            "options": [
                "Quan hệ nguyên nhân - kết quả",
                "Quan hệ giả thiết (điều kiện) - kết quả",
                "Quan hệ tương phản",
                "Quan hệ tăng tiến"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào dưới đây biểu thị quan hệ tương phản?",
            "options": [
                "vì ... nên ...",
                "nếu ... thì ...",
                "mặc dù ... nhưng ...",
                "chẳng những ... mà ..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cặp kết từ nào dưới đây biểu thị quan hệ tăng tiến?",
            "options": [
                "tuy ... nhưng ...",
                "hễ ... thì ...",
                "chẳng những ... mà ...",
                "nhờ ... nên ..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Câu ghép nào dưới đây sử dụng cặp từ hô ứng?",
            "options": [
                "Nếu trời mưa thì chúng ta sẽ nghỉ học thể dục.",
                "Gió càng thổi mạnh, những lá phong càng rơi rụng nhiều.",
                "Vì Nam chăm chỉ nên bạn ấy đạt học sinh xuất sắc.",
                "Tuy gia đình khó khăn nhưng Lan vẫn vươn lên học giỏi."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ loại nào dùng để biểu thị mối quan hệ tương ứng, đồng thời liên tiếp về mức độ hoặc thời gian giữa các vế trong câu ghép?",
            "options": [
                "Cặp từ hô ứng",
                "Đại từ xưng hô",
                "Thán từ",
                "Trợ từ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Điền vế câu thích hợp vào câu sau: \"Mặc dù thời tiết rất lạnh nhưng...\"",
            "options": [
                "mọi người vẫn đi tập thể dục sáng đều đặn.",
                "chúng ta phải mặc quần áo thật ấm.",
                "trời rét căm căm buốt giá.",
                "gió đông thổi hun hút qua khe cửa."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Vế câu nào thích hợp để điền vào chỗ trống: \"Nhờ mọi người cùng nhau chung tay dọn dẹp vệ sinh mà...\"",
            "options": [
                "khu phố nhà em lúc nào cũng bẩn thỉu.",
                "khu phố nhà em đã trở nên xanh, sạch, đẹp.",
                "mọi người không ai muốn tham gia dọn dẹp.",
                "trời bỗng nhiên đổ cơn mưa to."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong các câu dưới đây, đâu là câu ghép sử dụng cặp từ hô ứng?",
            "options": [
                "Học sinh vừa bước vào lớp thì trống trường đã vang lên báo hiệu giờ học bắt đầu.",
                "Tôi ăn uống điều độ nên tôi chóng lớn lắm.",
                "Vì trời mưa nên sân trường ướt sũng.",
                "Tuy hoa sim có màu tím nhạt nhưng nhìn rất thơ mộng."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dòng nào dưới đây chỉ gồm các cặp từ hô ứng?",
            "options": [
                "vì... nên..., tuy... nhưng..., hễ... thì...",
                "nếu... thì..., hễ... thì..., nhờ... mà...",
                "vừa... đã..., chưa... đã..., đâu... đó..., càng... càng...",
                "chẳng những... mà..., không chỉ... mà..., tuy... nhưng..."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cặp từ hô ứng \"đâu ... đó ...\" biểu thị sự tương ứng về mặt nào?",
            "options": [
                "Thời gian",
                "Địa điểm (vị trí)",
                "Mức độ",
                "Nguyên nhân"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};