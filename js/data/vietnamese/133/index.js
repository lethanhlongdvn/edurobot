export const lesson133 = {
    "topic": "Tiếng Việt 5",
    "week": "19",
    "period": "133",
    "title": "ĐỌC MỞ RỘNG: ĐỌC SÁCH BÁO VỀ NGƯỜI TỐT, VIỆC TỐT",
    "desc": "Tìm đọc sách báo viết về người tốt, việc tốt và thực hành viết phiếu đọc sách.",
    "subject": "Đọc mở rộng",
    "theme": "Vẻ đẹp cuộc sống",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700">
    <!-- 1. KHÁM PHÁ NGỮ LIỆU SGK -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white/60">
            <div class="flex items-center space-x-6 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">Gợi ý tác phẩm người tốt, việc tốt</h2>
            </div>

            <!-- Tab Headers -->
            <div class="flex flex-wrap gap-4 border-b border-gray-150 pb-4 mb-6">
                <button onclick="switchTabVn133(0)" id="vn133-tab-0" class="px-6 py-3 rounded-2xl font-black text-xl md:text-2xl transition-all bg-emerald-600 text-white shadow-md">
                    Mẫu 1: Hà Trung Tuấn
                </button>
                <button onclick="switchTabVn133(1)" id="vn133-tab-1" class="px-6 py-3 rounded-2xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Mẫu 2: Cõng bạn đi học
                </button>
            </div>

            <!-- Tab Contents -->
            <div class="space-y-6">
                <!-- Tác phẩm 1: Bài báo -->
                <div id="vn133-tab-content-0" class="bg-emerald-50/40 border-2 border-emerald-100 rounded-[32px] p-6 md:p-8 space-y-6 flex flex-col justify-between animate-in fade-in duration-300">
                    <div class="space-y-4">
                        <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xl md:text-2xl font-bold rounded-lg">📰 Bài báo mẫu (SGK trang 16)</span>
                        <h3 class="text-3xl md:text-4xl font-black text-emerald-950 leading-tight">
                            Cậu học sinh nghèo trả lại 20 triệu đồng nhặt được
                        </h3>
                        <div class="text-2xl md:text-3xl text-gray-700 leading-relaxed space-y-4 font-medium">
                            <p class="indent-6">
                                Đây là câu chuyện có thật, được đăng trên báo <strong class="text-emerald-900">Tiền phong</strong> ngày 15 tháng 3 năm 2015.
                            </p>
                            <p class="indent-6">
                                Truyện kể về em <strong class="text-emerald-900">Hà Trung Tuấn</strong>, học sinh lớp 7B Trường Trung học cơ sở Lâm Sơn, xã Nghĩa Lâm, huyện Nghĩa Đàn, tỉnh Nghệ An.
                            </p>
                            <p class="indent-6">
                                Trên đường cùng mẹ từ chợ về nhà, em nhặt được một chiếc ví tiền. Ngay sau đó, em đã nhờ người liên hệ trả lại chiếc ví cho người bị mất.
                            </p>
                        </div>
                    </div>
                    <div class="bg-white/80 p-6 rounded-2xl border border-emerald-100 text-xl md:text-2xl text-emerald-850 font-bold">
                        💡 <strong class="text-emerald-900">Thông điệp:</strong> Đức tính thật thà, nhặt được của rơi trả lại người mất là nét đẹp đạo đức cần lan tỏa.
                    </div>
                </div>

                <!-- Tác phẩm 2: Cuốn sách -->
                <div id="vn133-tab-content-1" class="hidden bg-amber-50/40 border-2 border-amber-100 rounded-[32px] p-6 md:p-8 space-y-6 flex flex-col justify-between animate-in fade-in duration-300">
                    <div class="space-y-4">
                        <span class="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xl md:text-2xl font-bold rounded-lg">📖 Bộ sách mẫu (SGK trang 16)</span>
                        <h3 class="text-3xl md:text-4xl font-black text-amber-950 leading-tight">
                            Gương thiếu nhi làm theo lời Bác: "Cõng bạn đi học"
                        </h3>
                        <div class="text-2xl md:text-3xl text-gray-700 leading-relaxed space-y-4 font-medium">
                            <p class="indent-6">
                                Bộ sách được phát hành nhân dịp kỉ niệm 80 năm ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh.
                            </p>
                            <p class="indent-6">
                                Bộ sách gồm nhiều truyện, mỗi truyện kể về một tấm gương thiếu nhi làm việc tốt như: <strong class="text-amber-900">Cõng bạn đi học</strong>, <strong class="text-amber-900">Cậu bé mồ côi ham học</strong>,...
                            </p>
                            <p class="indent-6">
                                Những câu chuyện chân thực này giúp các bạn nhỏ có thêm động lực học tập, rèn luyện và biết yêu thương giúp đỡ mọi người xung quanh.
                            </p>
                        </div>
                    </div>
                    <div class="bg-white/80 p-6 rounded-2xl border border-amber-100 text-xl md:text-2xl text-amber-850 font-bold">
                        💡 <strong class="text-amber-900">Thông điệp:</strong> Tình bạn gắn bó, tinh thần tương thân tương ái, giúp đỡ bạn bè vượt qua khó khăn để cùng tiến bộ.
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: VIẾT PHIẾU ĐỌC SÁCH -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-blue-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-4 border-b border-blue-100 pb-4">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Ghi chép Phiếu đọc sách tương tác</h3>
                </div>
                <!-- Nút tự điền mẫu nhanh -->
                <div class="flex gap-2">
                    <button onclick="dienMauPhieu133('tuan')" class="px-4 py-2 bg-emerald-600 text-white text-md font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md">
                        Mẫu 1: Hà Trung Tuấn
                    </button>
                    <button onclick="dienMauPhieu133('cong_ban')" class="px-4 py-2 bg-amber-600 text-white text-md font-bold rounded-xl hover:bg-amber-700 transition-all shadow-md">
                        Mẫu 2: Cõng bạn đi học
                    </button>
                </div>
            </div>

            <p class="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
                Em hãy đọc một cuốn sách hoặc bài báo về tấm gương người tốt, việc tốt và ghi lại thông tin vào phiếu đọc sách dưới đây:
            </p>

            <!-- Phiếu đọc sách Layout -->
            <div class="bg-white p-6 md:p-8 rounded-3xl border-2 border-blue-100 shadow-inner space-y-6">
                <h4 class="text-2xl md:text-3xl font-black text-blue-600 text-center uppercase tracking-tight mb-6">Phiếu đọc sách</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="space-y-2">
                        <label class="text-lg md:text-xl font-bold text-gray-700">Tên sách, báo:</label>
                        <input id="dt-vn133-tensach" type="text" placeholder="Ví dụ: Báo Tiền phong..." class="w-full p-3 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-bold text-lg text-gray-800">
                    </div>
                    <div class="space-y-2">
                        <label class="text-lg md:text-xl font-bold text-gray-700">Tác giả:</label>
                        <input id="dt-vn133-tacgia" type="text" placeholder="Ví dụ: Trần Vân, Sưu tầm..." class="w-full p-3 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-bold text-lg text-gray-800">
                    </div>
                    <div class="space-y-2">
                        <label class="text-lg md:text-xl font-bold text-gray-700">Ngày đọc:</label>
                        <input id="dt-vn133-ngaydoc" type="text" placeholder="Ví dụ: 16/06/2026..." class="w-full p-3 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-bold text-lg text-gray-800">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <label class="text-lg md:text-xl font-bold text-gray-700">Người làm việc tốt:</label>
                        <input id="dt-vn133-nguoitot" type="text" placeholder="Tên của nhân vật..." class="w-full p-3 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-bold text-lg text-gray-800">
                    </div>
                    <div class="space-y-2">
                        <label class="text-lg md:text-xl font-bold text-gray-700">Những việc tốt được kể:</label>
                        <input id="dt-vn133-viectot" type="text" placeholder="Nhặt được ví tiền, cõng bạn đi học..." class="w-full p-3 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-bold text-lg text-gray-800">
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700">Ý nghĩa, sự lan toả của việc tốt đối với cộng đồng:</label>
                    <textarea id="dt-vn133-ynghia" rows="2" placeholder="Việc tốt đó giúp ích gì cho xã hội, cộng đồng..." class="w-full p-4 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-medium text-lg text-gray-800"></textarea>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700">Bài học rút ra từ việc tốt hoặc cảm nghĩ về người làm việc tốt:</label>
                    <textarea id="dt-vn133-baihoc" rows="2" placeholder="Em học tập được điều gì, cảm xúc của em thế nào..." class="w-full p-4 bg-gray-50 border border-gray-250 rounded-xl outline-none focus:border-blue-500 font-medium text-lg text-gray-800"></textarea>
                </div>

                <!-- Rating 5 sao -->
                <div class="flex items-center gap-4 py-2 border-t border-gray-100">
                    <span class="text-lg md:text-xl font-bold text-gray-700">Mức độ yêu thích:</span>
                    <div class="flex gap-2">
                        <span onclick="setRating133(1)" id="star-133-1" class="text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors">☆</span>
                        <span onclick="setRating133(2)" id="star-133-2" class="text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors">☆</span>
                        <span onclick="setRating133(3)" id="star-133-3" class="text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors">☆</span>
                        <span onclick="setRating133(4)" id="star-133-4" class="text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors">☆</span>
                        <span onclick="setRating133(5)" id="star-133-5" class="text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors">☆</span>
                    </div>
                    <span id="rating-text-133" class="text-lg md:text-xl font-bold text-amber-600 hidden"></span>
                </div>
            </div>

            <!-- Nút nộp phiếu -->
            <div class="mt-8 flex justify-center">
                <button onclick="nopPhieuDocSach133()" class="px-8 py-4 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all">
                    Nộp phiếu đọc sách
                </button>
            </div>
            <div id="result-phieu-133" class="mt-6 p-6 bg-white rounded-2xl border border-gray-150 font-bold text-xl md:text-2xl hidden text-gray-800"></div>
        </div>
    </section>

    <!-- BÀI TẬP 2: CHIA SẺ VỚI NGƯỜI THÂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-blue-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chia sẻ việc tốt em đã làm hoặc mong muốn làm</h3>
            </div>

            <p class="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
                Hãy viết 2-3 câu chia sẻ với người thân hoặc bạn bè về một việc tốt em đã làm, hoặc một việc tốt em mong muốn được đóng góp cho cộng đồng:
            </p>

            <textarea id="dt-vn133-chiase" rows="4" placeholder="Nhập chia sẻ của em tại đây (ít nhất 15 từ)..." class="w-full p-6 bg-white border-2 border-amber-100 rounded-3xl outline-none focus:border-amber-500 font-medium text-xl md:text-2xl text-gray-800 shadow-inner"></textarea>
            
            <div class="flex justify-end">
                <button onclick="nopChiaSe133()" class="px-8 py-4 bg-amber-600 text-white font-black text-xl rounded-2xl hover:bg-amber-700 shadow-lg shadow-amber-200 active:scale-95 transition-all">
                    Gửi chia sẻ
                </button>
            </div>
            <div id="result-chiase-133" class="mt-4 p-6 bg-white rounded-2xl border border-emerald-250 font-bold text-xl md:text-2xl hidden text-emerald-800"></div>
        </div>
    </section>
</div>

<script>
    let currentRating133 = 0;

    function setRating133(stars) {
        currentRating133 = stars;
        [1, 2, 3, 4, 5].forEach(i => {
            const starEl = document.getElementById('star-133-' + i);
            if (starEl) {
                if (i <= stars) {
                    starEl.innerText = '★';
                    starEl.className = 'text-3xl md:text-4xl cursor-pointer text-amber-500 transition-colors';
                } else {
                    starEl.innerText = '☆';
                    starEl.className = 'text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors';
                }
            }
        });
        const textEl = document.getElementById('rating-text-133');
        textEl.classList.remove('hidden');
        textEl.innerText = stars + ' / 5 sao (' + (stars >= 4 ? 'Cực kỳ yêu thích' : 'Yêu thích') + ')';
    }

    // Fix bug hiển thị chữ Pass ở ngôi sao thứ 4 do lỗi gõ nhầm từ gốc
    document.addEventListener("DOMContentLoaded", function() {
        const star4 = document.getElementById('star-133-4');
        if (star4 && star4.innerText === 'Pass') {
            star4.innerText = '☆';
        }
    });
    // Gọi ngay đề phòng DOMContentLoaded đã chạy
    (function() {
        const star4 = document.getElementById('star-133-4');
        if (star4 && star4.innerText === 'Pass') {
            star4.innerText = '☆';
        }
    })();

    function dienMauPhieu133(type) {
        if (type === 'tuan') {
            document.getElementById('dt-vn133-tensach').value = 'Báo Tiền phong';
            document.getElementById('dt-vn133-tacgia').value = 'Phóng viên Tiền phong';
            document.getElementById('dt-vn133-ngaydoc').value = '15/03/2015';
            document.getElementById('dt-vn133-nguoitot').value = 'Hà Trung Tuấn (Lớp 7B)';
            document.getElementById('dt-vn133-viectot').value = 'Nhặt được ví tiền có 20 triệu đồng trên đường từ chợ về và trả lại ngay cho người đánh mất.';
            document.getElementById('dt-vn133-ynghia').value = 'Lan tỏa lối sống trung thực, thật thà trong lứa tuổi học sinh và tạo dựng niềm tin tốt đẹp trong xã hội.';
            document.getElementById('dt-vn133-baihoc').value = 'Em học được đức tính nhặt được của rơi trả lại người mất, không tham lam của cải của người khác.';
            setRating133(5);
        } else if (type === 'cong_ban') {
            document.getElementById('dt-vn133-tensach').value = 'Bộ sách Gương thiếu nhi làm theo lời Bác';
            document.getElementById('dt-vn133-tacgia').value = 'Nhiều tác giả (NXB Kim Đồng)';
            document.getElementById('dt-vn133-ngaydoc').value = '16/06/2026';
            document.getElementById('dt-vn133-nguoitot').value = 'Các gương thiếu nhi (ví dụ như đôi bạn cõng nhau đi học)';
            document.getElementById('dt-vn133-viectot').value = 'Không ngại khó khăn, cõng người bạn bị khuyết tật chân đến trường mỗi ngày để cùng học tập.';
            document.getElementById('dt-vn133-ynghia').value = 'Giúp bạn có cơ hội đi học, nhân rộng tình thương yêu, sự sẻ chia và gắn kết bạn bè trong nhà trường.';
            document.getElementById('dt-vn133-baihoc').value = 'Cần biết đồng cảm, giúp đỡ bạn bè gặp khó khăn bằng những hành động thiết thực của mình.';
            setRating133(5);
        }
    }

    function nopPhieuDocSach133() {
        const tensach = document.getElementById('dt-vn133-tensach').value.trim();
        const tacgia = document.getElementById('dt-vn133-tacgia').value.trim();
        const ngaydoc = document.getElementById('dt-vn133-ngaydoc').value.trim();
        const nguoitot = document.getElementById('dt-vn133-nguoitot').value.trim();
        const viectot = document.getElementById('dt-vn133-viectot').value.trim();
        const ynghia = document.getElementById('dt-vn133-ynghia').value.trim();
        const baihoc = document.getElementById('dt-vn133-baihoc').value.trim();

        const resEl = document.getElementById('result-phieu-133');
        resEl.classList.remove('hidden');

        if (!tensach || !nguoitot || !viectot || !ynghia || !baihoc) {
            resEl.className = "mt-6 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
            resEl.innerText = "⚠️ Em hãy điền đầy đủ các thông tin chính của Phiếu đọc sách trước khi nộp bài nhé!";
            return;
        }

        if (currentRating133 === 0) {
            resEl.className = "mt-6 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
            resEl.innerText = "⚠️ Đừng quên bấm chọn mức độ yêu thích bằng các ngôi sao ở dưới nhé!";
            return;
        }

        resEl.className = "mt-6 p-6 bg-white rounded-2xl border border-emerald-200 font-bold text-xl md:text-2xl text-emerald-850 whitespace-pre-line";
        resEl.innerText = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc Phiếu đọc sách cho tác phẩm: \\"" + tensach + "\\".\\n" +
            "• Nhân vật chính: " + nguoitot + "\\n" +
            "• Việc tốt nổi bật: " + viectot + "\\n" +
            "• Đánh giá yêu thích: " + currentRating133 + " sao.\\n\\n" +
            "👉 Chúc mừng em đã có thêm một bài học ý nghĩa về lòng nhân ái và sự sẻ chia!";
    }

    function nopChiaSe133() {
        const text = document.getElementById('dt-vn133-chiase').value.trim();
        const resEl = document.getElementById('result-chiase-133');
        resEl.classList.remove('hidden');

        if (!text) {
            resEl.className = "mt-4 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
            resEl.innerText = "⚠️ Hãy điền chia sẻ của em trước khi gửi nhé!";
            return;
        }

        const words = text.split(/\\s+/);
        if (words.length < 15) {
            resEl.className = "mt-4 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
            resEl.innerText = "⚠️ Chia sẻ hơi ngắn một chút (hiện tại có " + words.length + " từ). Em hãy viết chi tiết hơn (tối thiểu 15 từ) để cảm xúc trọn vẹn hơn nhé!";
            return;
        }

        resEl.className = "mt-4 p-6 bg-white rounded-2xl border border-emerald-200 font-bold text-xl md:text-2xl text-emerald-800 whitespace-pre-line";
        resEl.innerText = "🌟 **Cảm nghĩ của em về việc làm tốt thật ấm áp và ý nghĩa!**\\n\\n" +
            "• Số từ: " + words.length + " từ.\\n" +
            "• Ý kiến phản hồi: Em đã thể hiện tinh thần sẻ chia rất cao. Những việc làm dù nhỏ bé như giúp bạn học bài, quét dọn ngõ phố hay giúp đỡ cha mẹ đều mang lại niềm vui lớn cho cộng đồng. Hãy tiếp tục phát huy tinh thần tốt đẹp này nhé!";
    }

    window.switchTabVn133 = function(idx) {
        const tab0 = document.getElementById('vn133-tab-0');
        const tab1 = document.getElementById('vn133-tab-1');
        const content0 = document.getElementById('vn133-tab-content-0');
        const content1 = document.getElementById('vn133-tab-content-1');
        
        if (idx === 0) {
            tab0.className = "px-6 py-3 rounded-2xl font-black text-xl md:text-2xl transition-all bg-emerald-600 text-white shadow-md";
            tab1.className = "px-6 py-3 rounded-2xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            content0.classList.remove('hidden');
            content1.classList.add('hidden');
        } else {
            tab0.className = "px-6 py-3 rounded-2xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            tab1.className = "px-6 py-3 rounded-2xl font-black text-xl md:text-2xl transition-all bg-amber-600 text-white shadow-md";
            content0.classList.add('hidden');
            content1.classList.remove('hidden');
        }
    };
</script>
`,
    "quizPool": [
        {
            "question": "Chuyện kể về bạn Hà Trung Tuấn trả lại chiếc ví nhặt được đăng trên tờ báo nào?",
            "options": [
                "Báo Nhi đồng",
                "Báo Tiền phong",
                "Báo Nhân dân",
                "Báo Tuổi trẻ"
            ],
            "answer": "Báo Tiền phong",
            "explain": "Theo nội dung bài viết, câu chuyện về Hà Trung Tuấn được đăng trên báo Tiền phong ngày 15 tháng 3 năm 2015."
        },
        {
            "question": "Bạn Hà Trung Tuấn là học sinh của ngôi trường nào?",
            "options": [
                "Trường THCS Lâm Sơn",
                "Trường THCS Nghĩa Lâm",
                "Trường THCS Nghĩa Đàn",
                "Trường THCS Nghệ An"
            ],
            "answer": "Trường THCS Lâm Sơn",
            "explain": "Bài đọc nêu rõ bạn Hà Trung Tuấn là học sinh lớp 7B Trường Trung học cơ sở Lâm Sơn."
        },
        {
            "question": "Bạn Hà Trung Tuấn đã nhặt được chiếc ví tiền trong hoàn cảnh nào?",
            "options": [
                "Khi đi tham quan cùng trường lớp",
                "Trên đường cùng mẹ đi từ chợ về nhà",
                "Khi đang vui chơi tại sân trường",
                "Khi đi chăn trâu ngoài đồng cỏ"
            ],
            "answer": "Trên đường cùng mẹ đi từ chợ về nhà",
            "explain": "Đoạn văn nêu: 'Trên đường cùng mẹ từ chợ về nhà, em nhặt được một chiếc ví tiền.'"
        },
        {
            "question": "Hà Trung Tuấn đã làm gì ngay sau khi nhặt được chiếc ví?",
            "options": [
                "Giữ lại chiếc ví để mua đồ dùng học tập",
                "Nhờ người liên hệ trả lại chiếc ví cho người bị mất",
                "Đưa chiếc ví cho các bạn cùng lớp xem",
                "Đợi người mất quay lại tìm ở chợ"
            ],
            "answer": "Nhờ người liên hệ trả lại chiếc ví cho người bị mất",
            "explain": "Hành động ngay sau đó của Tuấn là nhờ người lớn liên hệ trả lại ví tiền cho người mất."
        },
        {
            "question": "Bộ sách 'Gương thiếu nhi làm theo lời Bác' được phát hành nhân dịp kỉ niệm ngày thành lập tổ chức nào?",
            "options": [
                "Đội Thiếu niên Tiền phong Hồ Chí Minh",
                "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
                "Hội Sinh viên Việt Nam",
                "Đội Nhi đồng cứu quốc"
            ],
            "answer": "Đội Thiếu niên Tiền phong Hồ Chí Minh",
            "explain": "Bộ sách phát hành nhân kỷ niệm 80 năm ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh."
        },
        {
            "question": "Cuốn sách nào sau đây thuộc bộ sách 'Gương thiếu nhi làm theo lời Bác'?",
            "options": [
                "Dế Mèn phiêu lưu kí",
                "Cõng bạn đi học",
                "Không gia đình",
                "Đất rừng phương Nam"
            ],
            "answer": "Cõng bạn đi học",
            "explain": "Sách 'Cõng bạn đi học' là một trong những câu chuyện tiêu biểu thuộc bộ sách Gương thiếu nhi làm theo lời Bác."
        },
        {
            "question": "Mục đích chính của việc lập 'Phiếu đọc sách' sau khi đọc xong tác phẩm là gì?",
            "options": [
                "Để thầy cô chấm điểm thi học kỳ",
                "Ghi chép lại những thông tin cốt lõi, bài học và cảm xúc để tích luỹ kiến thức",
                "Để làm bằng chứng cho thấy mình đã đọc sách",
                "Để bán lại cuốn sách đó cho người khác"
            ],
            "answer": "Ghi chép lại những thông tin cốt lõi, bài học và cảm xúc để tích luỹ kiến thức",
            "explain": "Phiếu đọc sách là công cụ học tập hữu ích giúp ghi nhớ nội dung chính và những bài học bổ ích từ việc đọc sách."
        },
        {
            "question": "Trong các thông tin sau, thông tin nào KHÔNG thuộc biểu mẫu Phiếu đọc sách theo SGK trang 16?",
            "options": [
                "Tên sách báo, tác giả",
                "Địa chỉ nhà riêng của người đọc sách",
                "Người làm việc tốt, những việc tốt được kể",
                "Ý nghĩa, sự lan toả của việc tốt đối với cộng đồng"
            ],
            "answer": "Địa chỉ nhà riêng của người đọc sách",
            "explain": "Phiếu đọc sách tập trung vào thông tin tác phẩm, ý nghĩa việc tốt và bài học rút ra, không yêu cầu địa chỉ nhà riêng."
        },
        {
            "question": "Đức tính tốt đẹp nào được ca ngợi nhiều nhất qua câu chuyện của Hà Trung Tuấn?",
            "options": [
                "Lòng trung thực, nhặt được của rơi trả lại người mất",
                "Sự dũng cảm đối mặt hiểm nguy",
                "Tinh thần kiên trì học tập vượt khó",
                "Lòng hiếu thảo với cha mẹ"
            ],
            "answer": "Lòng trung thực, nhặt được của rơi trả lại người mất",
            "explain": "Hành động tự giác trả lại số tiền lớn (20 triệu đồng) thể hiện đức tính thật thà, trung thực đáng quý của Hà Trung Tuấn."
        },
        {
            "question": "Câu chuyện 'Cõng bạn đi học' đề cao tinh thần nào trong đời sống học sinh?",
            "options": [
                "Lòng tự trọng cao độ",
                "Tình bạn gắn kết, sự sẻ chia và tương thân tương ái",
                "Ý thức giữ gìn vệ sinh trường lớp",
                "Tinh thần tiết kiệm tiền bạc"
            ],
            "answer": "Tình bạn gắn kết, sự sẻ chia và tương thân tương ái",
            "explain": "Hành động cõng bạn khuyết tật đến lớp là biểu tượng của tình bạn đẹp, tinh thần đùm bọc, giúp đỡ bạn vượt qua nghịch cảnh."
        },
        {
            "question": "Ý nghĩa lớn nhất của những việc làm tốt đối với cộng đồng là gì?",
            "options": [
                "Để được lên tivi và nhận nhiều phần thưởng giá trị",
                "Góp phần nhân rộng lòng tốt, xây dựng xã hội ấm áp, thân thiện và hạnh phúc hơn",
                "Giúp bản thân trở nên nổi tiếng hơn những người khác",
                "Để mọi người phải kính nể và sợ mình"
            ],
            "answer": "Góp phần nhân rộng lòng tốt, xây dựng xã hội ấm áp, thân thiện và hạnh phúc hơn",
            "explain": "Việc tốt tạo ra sự lan tỏa mạnh mẽ, giúp mọi người có niềm tin vào cuộc sống và kết nối cộng đồng gần nhau hơn."
        },
        {
            "question": "Khi ghi chép cảm nghĩ của mình trong Phiếu đọc sách, em nên viết như thế nào?",
            "options": [
                "Sao chép y nguyên mục lục của cuốn sách",
                "Viết chân thật cảm xúc, suy nghĩ và những bài học tâm đắc của bản thân",
                "Viết vài câu chữ vô nghĩa cho đầy trang giấy",
                "Liệt kê tên tất cả các bạn học trong lớp"
            ],
            "answer": "Viết chân thật cảm xúc, suy nghĩ và những bài học tâm đắc của bản thân",
            "explain": "Phần cảm nghĩ cần phản ánh đúng tư duy và bài học thực tế mà chính học sinh rút ra sau khi đọc."
        },
        {
            "question": "Em nhặt được chiếc bút mực của bạn làm rơi ở lớp học. Hành động nào sau đây là đúng đắn?",
            "options": [
                "Cất luôn vào hộp bút của mình để sử dụng",
                "Đưa cho bạn bên cạnh sử dụng chung",
                "Gửi lại cho thầy cô giáo hoặc thông báo trả lại cho bạn bị mất",
                "Vứt chiếc bút đi vì không phải của mình"
            ],
            "answer": "Gửi lại cho thầy cô giáo hoặc thông báo trả lại cho bạn bị mất",
            "explain": "Khi nhặt được đồ dùng của bạn, học sinh cần có ý thức trả lại bạn hoặc nhờ thầy cô trả giúp."
        },
        {
            "question": "Tại sao chúng ta nên chia sẻ những việc tốt với người thân hoặc bạn bè?",
            "options": [
                "Để khoe khoang thành tích bản thân",
                "Để nhận tiền thưởng từ gia đình",
                "Để lan toả năng lượng tích cực, khích lệ mọi người cùng làm việc tốt",
                "Để chứng tỏ mình giỏi hơn người khác"
            ],
            "answer": "Để lan toả năng lượng tích cực, khích lệ mọi người cùng làm việc tốt",
            "explain": "Chia sẻ việc tốt giúp truyền cảm hứng cho mọi người xung quanh cùng chung tay xây dựng cuộc sống tươi đẹp."
        },
        {
            "question": "Từ nào thích hợp điền vào chỗ trống: 'Nhặt được của rơi, ... trả lại'?",
            "options": [
                "không bao giờ",
                "bắt buộc phải lấy",
                "quyết tâm tìm cách",
                "đem giấu đi"
            ],
            "answer": "quyết tâm tìm cách",
            "explain": "'Nhặt được của rơi, quyết tâm tìm cách trả lại' là câu nói nhắc nhở về lòng trung thực, tự giác tìm kiếm người đánh mất để hoàn trả."
        }
    ]
};

// --- LOGIC TƯƠNG TÁC TIẾT 133 ---
let currentRating133 = 0;

window.setRating133 = function(stars) {
    currentRating133 = stars;
    [1, 2, 3, 4, 5].forEach(i => {
        const starEl = document.getElementById('star-133-' + i);
        if (starEl) {
            if (i <= stars) {
                starEl.innerText = '★';
                starEl.className = 'text-3xl md:text-4xl cursor-pointer text-amber-500 transition-colors';
            } else {
                starEl.innerText = '☆';
                starEl.className = 'text-3xl md:text-4xl cursor-pointer text-gray-300 transition-colors';
            }
        }
    });
    const textEl = document.getElementById('rating-text-133');
    if (textEl) {
        textEl.classList.remove('hidden');
        textEl.innerText = stars + ' / 5 sao (' + (stars >= 4 ? 'Cực kỳ yêu thích' : 'Yêu thích') + ')';
    }
};

window.dienMauPhieu133 = function(type) {
    if (type === 'tuan') {
        document.getElementById('dt-vn133-tensach').value = 'Báo Tiền phong';
        document.getElementById('dt-vn133-tacgia').value = 'Phóng viên Tiền phong';
        document.getElementById('dt-vn133-ngaydoc').value = '15/03/2015';
        document.getElementById('dt-vn133-nguoitot').value = 'Hà Trung Tuấn (Lớp 7B)';
        document.getElementById('dt-vn133-viectot').value = 'Nhặt được ví tiền có 20 triệu đồng trên đường từ chợ về và trả lại ngay cho người đánh mất.';
        document.getElementById('dt-vn133-ynghia').value = 'Lan tỏa lối sống trung thực, thật thà trong lứa tuổi học sinh và tạo dựng niềm tin tốt đẹp trong xã hội.';
        document.getElementById('dt-vn133-baihoc').value = 'Em học được đức tính nhặt được của rơi trả lại người mất, không tham lam của cải của người khác.';
        window.setRating133(5);
    } else if (type === 'cong_ban') {
        document.getElementById('dt-vn133-tensach').value = 'Bộ sách Gương thiếu nhi làm theo lời Bác';
        document.getElementById('dt-vn133-tacgia').value = 'Nhiều tác giả (NXB Kim Đồng)';
        document.getElementById('dt-vn133-ngaydoc').value = '16/06/2026';
        document.getElementById('dt-vn133-nguoitot').value = 'Các gương thiếu nhi (ví dụ như đôi bạn cõng nhau đi học)';
        document.getElementById('dt-vn133-viectot').value = 'Không ngại khó khăn, cõng người bạn bị khuyết tật chân đến trường mỗi ngày để cùng học tập.';
        document.getElementById('dt-vn133-ynghia').value = 'Giúp bạn có cơ hội đi học, nhân rộng tình thương yêu, sự sẻ chia và gắn kết bạn bè trong nhà trường.';
        document.getElementById('dt-vn133-baihoc').value = 'Cần biết đồng cảm, giúp đỡ bạn bè gặp khó khăn bằng những hành động thiết thực của mình.';
        window.setRating133(5);
    }
};

window.nopPhieuDocSach133 = function() {
    const tensach = document.getElementById('dt-vn133-tensach')?.value.trim();
    const tacgia = document.getElementById('dt-vn133-tacgia')?.value.trim();
    const ngaydoc = document.getElementById('dt-vn133-ngaydoc')?.value.trim();
    const nguoitot = document.getElementById('dt-vn133-nguoitot')?.value.trim();
    const viectot = document.getElementById('dt-vn133-viectot')?.value.trim();
    const ynghia = document.getElementById('dt-vn133-ynghia')?.value.trim();
    const baihoc = document.getElementById('dt-vn133-baihoc')?.value.trim();
    const fb = document.getElementById('result-phieu-133');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!tensach || !nguoitot || !viectot || !ynghia || !baihoc) {
        fb.className = "mt-6 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
        fb.innerText = "⚠️ Em hãy điền đầy đủ các thông tin chính của Phiếu đọc sách trước khi nộp bài nhé!";
        return;
    }

    if (currentRating133 === 0) {
        fb.className = "mt-6 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
        fb.innerText = "⚠️ Đừng quên bấm chọn mức độ yêu thích bằng các ngôi sao ở dưới nhé!";
        return;
    }

    fb.className = "mt-6 p-6 bg-white rounded-2xl border border-emerald-250 font-bold text-xl md:text-2xl text-emerald-850 whitespace-pre-line";
    fb.innerText = "🎉 Tuyệt vời! Em đã hoàn thành xuất sắc Phiếu đọc sách cho tác phẩm: \"" + tensach + "\".\n" +
        "• Nhân vật chính: " + nguoitot + "\n" +
        "• Việc tốt nổi bật: " + viectot + "\n" +
        "• Đánh giá yêu thích: " + currentRating133 + " sao.\n\n" +
        "👉 Chúc mừng em đã có thêm một bài học ý nghĩa về lòng nhân ái và sự sẻ chia!";
};

window.nopChiaSe133 = function() {
    const text = document.getElementById('dt-vn133-chiase')?.value.trim();
    const fb = document.getElementById('result-chiase-133');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.className = "mt-4 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
        fb.innerText = "⚠️ Hãy điền chia sẻ của em trước khi gửi nhé!";
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 15) {
        fb.className = "mt-4 p-6 bg-white rounded-2xl border border-amber-200 font-bold text-xl md:text-2xl text-amber-600";
        fb.innerText = "⚠️ Chia sẻ hơi ngắn một chút (hiện tại có " + words.length + " từ). Em hãy viết chi tiết hơn (tối thiểu 15 từ) để cảm xúc trọn vẹn hơn nhé!";
        return;
    }

    fb.className = "mt-4 p-6 bg-white rounded-2xl border border-emerald-200 font-bold text-xl md:text-2xl text-emerald-800 whitespace-pre-line";
    fb.innerText = "🌟 **Cảm nghĩ của em về việc làm tốt thật ấm áp và ý nghĩa!**\n\n" +
        "• Số từ: " + words.length + " từ.\n" +
        "• Ý kiến phản hồi: Em đã thể hiện tinh thần sẻ chia rất cao. Những việc làm dù nhỏ bé như giúp bạn học bài, quét dọn ngõ phố hay giúp đỡ cha mẹ đều mang lại niềm vui lớn cho cộng đồng. Hãy tiếp tục phát huy tinh thần tốt đẹp này nhé!";
};

window.switchTabVn133 = function(idx) {
    const tab0 = document.getElementById('vn133-tab-0');
    const tab1 = document.getElementById('vn133-tab-1');
    const content0 = document.getElementById('vn133-tab-content-0');
    const content1 = document.getElementById('vn133-tab-content-1');
    
    if (idx === 0) {
        tab0.className = "px-6 py-3 rounded-2xl font-black text-xl md:text-2xl transition-all bg-emerald-600 text-white shadow-md";
        tab1.className = "px-6 py-3 rounded-2xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
        content0.classList.remove('hidden');
        content1.classList.add('hidden');
    } else {
        tab0.className = "px-6 py-3 rounded-2xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
        tab1.className = "px-6 py-3 rounded-2xl font-black text-xl md:text-2xl transition-all bg-amber-600 text-white shadow-md";
        content0.classList.add('hidden');
        content1.classList.remove('hidden');
    }
};

// Gọi ngay để đề phòng
(function() {
    const star4 = document.getElementById('star-133-4');
    if (star4 && star4.innerText === 'Pass') {
        star4.innerText = '☆';
    }
})();