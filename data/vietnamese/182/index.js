export const lesson182 = {
    "topic": "Tiếng Việt 5",
    "week": "26",
    "period": "182",
    "title": "NÓI VÀ NGHE: SẢN VẬT ĐỊA PHƯƠNG",
    "desc": "Học sinh chuẩn bị bài nói giới thiệu về một sản vật độc đáo của địa phương (món ăn, sản phẩm thủ công, trang phục, nhạc cụ...), đóng vai hướng dẫn viên du lịch trình bày tự tin và tương tác đóng góp ý kiến.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách thu thập thông tin, lập dàn ý giới thiệu một sản vật đặc sắc của quê hương hoặc một địa phương.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Rèn luyện phong thái tự tin, đóng vai hướng dẫn viên du lịch kết hợp cử chỉ, điệu bộ và phương tiện hỗ trợ khi thuyết trình.
            </li>
        </ul>
    </div>

    <!-- 🌟 THẺ GỢI Ý CÁC SẢN VẬT ĐỘC ĐÁO -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="text-center">
                <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-black text-xs uppercase tracking-widest mb-2">Ý tưởng</span>
                <h2 class="text-2xl md:text-4xl font-black text-emerald-900 uppercase">Sản vật địa phương nổi bật</h2>
                <p class="text-gray-500 font-bold text-lg md:text-xl mt-1">Nhấp vào từng thẻ dưới đây để xem thông tin gợi ý chi tiết:</p>
            </div>

            <!-- Grid 1-column stack style, but presented as visual cards -->
            <div class="space-y-4">
                <!-- Card 1: Bún bò Huế -->
                <div class="border border-slate-150 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all overflow-hidden">
                    <button onclick="toggleSpecialtyCard(1)" class="w-full p-5 flex items-center justify-between text-left font-black text-gray-800 text-xl md:text-2xl">
                        <span class="flex items-center gap-3">🍜 <span>Món ăn: Bún bò Huế (Thừa Thiên Huế)</span></span>
                        <span id="card-arrow-1" class="text-gray-400">▼</span>
                    </button>
                    <div id="card-content-1" class="hidden p-5 border-t border-slate-200 bg-white text-lg md:text-xl text-gray-700 space-y-2">
                        <p><strong>📍 Nguồn gốc:</strong> Cố đô Huế miền Trung nắng gió.</p>
                        <p><strong>⭐ Đặc điểm độc đáo:</strong> Nước dùng ngọt đậm đà từ xương ống, dậy mùi thơm của sả và mắm ruốc đặc trưng của Huế. Sợi bún to, đi kèm giò heo, thịt bò nạm, chả cua và rau sống tươi ngon.</p>
                        <p><strong>😋 Hương vị:</strong> Sự kết hợp tinh tế giữa vị cay nồng, ngọt thanh và đậm đà khó quên.</p>
                    </div>
                </div>

                <!-- Card 2: Trang phục H'Mông -->
                <div class="border border-slate-150 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all overflow-hidden">
                    <button onclick="toggleSpecialtyCard(2)" class="w-full p-5 flex items-center justify-between text-left font-black text-gray-800 text-xl md:text-2xl">
                        <span class="flex items-center gap-3">👗 <span>Trang phục: Váy hoa người H'Mông (Tây Bắc)</span></span>
                        <span id="card-arrow-2" class="text-gray-400">▼</span>
                    </button>
                    <div id="card-content-2" class="hidden p-5 border-t border-slate-200 bg-white text-lg md:text-xl text-gray-700 space-y-2">
                        <p><strong>📍 Nguồn gốc:</strong> Đồng bào dân tộc H'Mông ở các tỉnh miền núi phía Bắc (Lào Cai, Hà Giang, Sơn La...).</p>
                        <p><strong>⭐ Đặc điểm độc đáo:</strong> Váy xòe rộng xếp nếp, thêu tay thủ công tỉ mỉ bằng các sợi chỉ màu rực rỡ (đỏ, vàng, xanh). Họa tiết trang trí thường là các hình học đối xứng, hoa lá núi rừng kết hợp hạt cườm lấp lánh.</p>
                        <p><strong>🎨 Ý nghĩa:</strong> Thể hiện bàn tay khéo léo của người phụ nữ và bản sắc văn hóa đặc sắc của núi rừng Tây Bắc.</p>
                    </div>
                </div>

                <!-- Card 3: Đàn T'rưng -->
                <div class="border border-slate-150 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all overflow-hidden">
                    <button onclick="toggleSpecialtyCard(3)" class="w-full p-5 flex items-center justify-between text-left font-black text-gray-800 text-xl md:text-2xl">
                        <span class="flex items-center gap-3">🎋 <span>Nhạc cụ: Đàn T'rưng (Tây Nguyên)</span></span>
                        <span id="card-arrow-3" class="text-gray-400">▼</span>
                    </button>
                    <div id="card-content-3" class="hidden p-5 border-t border-slate-200 bg-white text-lg md:text-xl text-gray-700 space-y-2">
                        <p><strong>📍 Nguồn gốc:</strong> Các buôn làng của người Ba Na, Gia Rai vùng đất đỏ Tây Nguyên.</p>
                        <p><strong>⭐ Đặc điểm độc đáo:</strong> Làm từ nhiều ống tre, nứa có kích thước dài ngắn khác nhau ghép lại. Khi gõ bằng dùi gỗ, đàn phát ra âm thanh vang dội, trong trẻo như tiếng suối chảy, tiếng thác đổ.</p>
                        <p><strong>🎶 Ý nghĩa:</strong> Nhạc cụ truyền thống dùng trong các lễ hội đâm trâu, mừng lúa mới và sinh hoạt cộng đồng.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 📝 BƯỚC 1: LẬP DÀN Ý BÀI GIỚI THIỆU -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-slate-100 text-slate-700 rounded-lg">1</span>
                Bước 1: Chuẩn bị dàn ý nói
            </h3>

            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="text-lg md:text-xl font-bold text-gray-700 block mb-1">Tên sản vật:</label>
                        <input type="text" id="talk-item-name" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Ví dụ: Gốm Bát Tràng, Bánh đậu xanh Hải Dương...">
                    </div>
                    <div>
                        <label class="text-lg md:text-xl font-bold text-gray-700 block mb-1">Địa phương:</label>
                        <input type="text" id="talk-item-loc" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Ví dụ: Hà Nội, Hải Dương...">
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Lời chào mừng và giới thiệu sản vật (Mở đầu):</label>
                    <textarea id="talk-intro" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Xin chào các bạn, hôm nay mình rất vui được đóng vai hướng dẫn viên giới thiệu đến mọi người món..."></textarea>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Đặc điểm độc đáo, quy trình làm ra sản vật (Nội dung chính):</label>
                    <textarea id="talk-body" rows="3" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Sản vật này có đặc điểm rất đặc sắc như... Quy trình sản xuất đòi hỏi sự khéo léo của người thợ..."></textarea>
                </div>

                <div class="space-y-2">
                    <label class="text-lg md:text-xl font-bold text-gray-700 block">Cách thưởng thức, sử dụng hoặc ý nghĩa văn hóa (Kết thúc):</label>
                    <textarea id="talk-end" rows="2" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg" placeholder="Sản vật này thường được dùng để... Nếu có dịp ghé thăm nơi đây, các bạn đừng quên thử nhé!..."></textarea>
                </div>
            </div>
        </div>
    </section>

    <!-- 🎙️ BƯỚC 2: WIDGET THU ÂM THỬ GIỌNG (PREMIUM RECORDER) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-rose-100 text-rose-700 rounded-lg">2</span>
                Bước 2: Luyện nói (Thu âm và nghe lại)
            </h3>

            <p class="text-lg font-bold text-gray-600">Hãy nhấn nút bên dưới để bắt đầu thu âm thử bài nói của mình, sau đó phát lại để kiểm tra giọng điệu biểu cảm:</p>

            <div class="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-[24px] border border-slate-200 gap-4">
                <!-- Mic Status & Visualization -->
                <div class="flex items-center gap-3">
                    <div id="record-indicator" class="w-4 h-4 rounded-full bg-slate-300"></div>
                    <span id="record-status-text" class="text-lg font-black text-slate-600">Sẵn sàng thu âm</span>
                </div>
                <div id="recording-timer" class="text-3xl md:text-4xl font-mono font-black text-gray-800">00:00</div>

                <!-- Action Buttons -->
                <div class="flex justify-end items-center gap-4">
                    <button id="btn-start-record" onclick="startSpeechRecording()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center gap-2">
                        🎤 Bắt đầu thu
                    </button>
                    <button id="btn-stop-record" onclick="stopSpeechRecording()" class="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center gap-2" disabled>
                        ⏹️ Dừng thu
                    </button>
                    <button id="btn-play-record" onclick="playSpeechRecording()" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center gap-2" disabled>
                        ▶️ Nghe lại
                    </button>
                </div>

                <div id="audio-playback-container" class="hidden w-full max-w-md mt-4">
                    <audio id="audio-player" controls class="w-full"></audio>
                </div>
            </div>
        </div>
    </section>

    <!-- 👥 BƯỚC 3: ĐÁNH GIÁ VÀ GÓP Ý ĐỒNG ĐẲNG -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 class="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-3">
                <span class="p-2 bg-amber-100 text-amber-700 rounded-lg">3</span>
                Bước 3: Đánh giá và góp ý
            </h3>

            <div class="space-y-4">
                <p class="text-lg md:text-xl font-bold text-gray-700">Khi nghe bạn trình bày, hãy đánh giá bài nói theo các tiêu chí sau:</p>
                
                <div class="p-6 bg-amber-50/20 rounded-2xl border border-amber-200 space-y-4">
                    <!-- Tiêu chí 1 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <span class="text-lg font-bold text-gray-800">1. Nội dung giới thiệu đầy đủ, cụ thể, thú vị:</span>
                        <div class="flex gap-2">
                            <button onclick="ratePeer(1, 1)" class="star-btn-1 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(1, 2)" class="star-btn-1 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(1, 3)" class="star-btn-1 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(1, 4)" class="star-btn-1 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(1, 5)" class="star-btn-1 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                        </div>
                    </div>

                    <!-- Tiêu chí 2 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-amber-100 pt-4">
                        <span class="text-lg font-bold text-gray-800">2. Cách giới thiệu rõ ràng, hấp dẫn, có cảm xúc:</span>
                        <div class="flex gap-2">
                            <button onclick="ratePeer(2, 1)" class="star-btn-2 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(2, 2)" class="star-btn-2 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(2, 3)" class="star-btn-2 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(2, 4)" class="star-btn-2 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(2, 5)" class="star-btn-2 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                        </div>
                    </div>

                    <!-- Tiêu chí 3 -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-amber-100 pt-4">
                        <span class="text-lg font-bold text-gray-800">3. Sử dụng hiệu quả cử chỉ, điệu bộ, hình ảnh phụ trợ:</span>
                        <div class="flex gap-2">
                            <button onclick="ratePeer(3, 1)" class="star-btn-3 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(3, 2)" class="star-btn-3 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(3, 3)" class="star-btn-3 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(3, 4)" class="star-btn-3 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                            <button onclick="ratePeer(3, 5)" class="star-btn-3 text-2xl md:text-3xl text-slate-300 hover:text-amber-400">★</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Specialty Cards toggle
            window.toggleSpecialtyCard = function(num) {
                const content = document.getElementById('card-content-' + num);
                const arrow = document.getElementById('card-arrow-' + num);
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    arrow.innerHTML = '▲';
                } else {
                    content.classList.add('hidden');
                    arrow.innerHTML = '▼';
                }
            };

            // Peer Rating Stars
            window.ratePeer = function(criteriaNum, rating) {
                const buttons = document.querySelectorAll('.star-btn-' + criteriaNum);
                buttons.forEach((btn, i) => {
                    if (i < rating) {
                        btn.classList.add('text-amber-400');
                        btn.classList.remove('text-slate-300');
                    } else {
                        btn.classList.remove('text-amber-400');
                        btn.classList.add('text-slate-300');
                    }
                });
            };

            // Web Audio Recording Simulation & Actual Capability
            let recMediaRecorder;
            let recAudioChunks = [];
            let recInterval;
            let recSeconds = 0;
            let recordedAudioUrl = null;

            window.startSpeechRecording = async function() {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    recMediaRecorder = new MediaRecorder(stream);
                    recAudioChunks = [];
                    
                    recMediaRecorder.ondataavailable = function(e) {
                        recAudioChunks.push(e.data);
                    };

                    recMediaRecorder.onstop = function() {
                        const audioBlob = new Blob(recAudioChunks, { type: 'audio/wav' });
                        recordedAudioUrl = URL.createObjectURL(audioBlob);
                        const player = document.getElementById('audio-player');
                        player.src = recordedAudioUrl;
                        document.getElementById('audio-playback-container').classList.remove('hidden');
                        document.getElementById('btn-play-record').removeAttribute('disabled');
                    };

                    recMediaRecorder.start();
                    
                    // Update UI states
                    document.getElementById('btn-start-record').setAttribute('disabled', 'true');
                    document.getElementById('btn-stop-record').removeAttribute('disabled');
                    document.getElementById('record-indicator').className = "w-4 h-4 rounded-full bg-red-600 animate-ping";
                    document.getElementById('record-status-text').innerHTML = "Đang ghi âm...";
                    document.getElementById('record-status-text').className = "text-lg font-black text-red-600";
                    
                    recSeconds = 0;
                    document.getElementById('recording-timer').innerHTML = "00:00";
                    recInterval = setInterval(() => {
                        recSeconds++;
                        const mins = Math.floor(recSeconds / 60).toString().padStart(2, '0');
                        const secs = (recSeconds % 60).toString().padStart(2, '0');
                        document.getElementById('recording-timer').innerHTML = \`\${mins}:\${secs}\`;
                    }, 1000);

                } catch (err) {
                    // Fallback to Simulation if browser block or lacks support
                    console.warn("Lacks micro permission, falling back to simulated recorder");
                    document.getElementById('btn-start-record').setAttribute('disabled', 'true');
                    document.getElementById('btn-stop-record').removeAttribute('disabled');
                    document.getElementById('record-indicator').className = "w-4 h-4 rounded-full bg-red-600 animate-ping";
                    document.getElementById('record-status-text').innerHTML = "Đang ghi âm (Mô phỏng)...";
                    document.getElementById('record-status-text').className = "text-lg font-black text-red-600";
                    
                    recSeconds = 0;
                    recInterval = setInterval(() => {
                        recSeconds++;
                        const mins = Math.floor(recSeconds / 60).toString().padStart(2, '0');
                        const secs = (recSeconds % 60).toString().padStart(2, '0');
                        document.getElementById('recording-timer').innerHTML = \`\${mins}:\${secs}\`;
                    }, 1000);
                }
            };

            window.stopSpeechRecording = function() {
                clearInterval(recInterval);
                if (recMediaRecorder && recMediaRecorder.state !== 'inactive') {
                    recMediaRecorder.stop();
                } else {
                    // Simulated Stop
                    document.getElementById('btn-play-record').removeAttribute('disabled');
                    alert("Đã hoàn thành luyện bài nói! Nhấp vào 'Nghe lại' để mô phỏng phát nhạc.");
                }
                
                document.getElementById('btn-start-record').removeAttribute('disabled');
                document.getElementById('btn-stop-record').setAttribute('disabled', 'true');
                document.getElementById('record-indicator').className = "w-4 h-4 rounded-full bg-emerald-500";
                document.getElementById('record-status-text').innerHTML = "Hoàn thành thu âm";
                document.getElementById('record-status-text').className = "text-lg font-black text-emerald-600";
            };

            window.playSpeechRecording = function() {
                const player = document.getElementById('audio-player');
                if (player.src) {
                    player.play();
                } else {
                    alert("🔊 Phát lại giọng nói mô phỏng: Bài trình bày sản vật rất truyền cảm và rõ ràng!");
                }
            };
        </script>
    </section>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Sản vật địa phương là gì?",
                "options": [
                    "Sản phẩm nhập khẩu từ nước ngoài",
                    "Sản phẩm, món ăn độc đáo đặc trưng do chính địa phương đó sản xuất hoặc làm ra",
                    "Đồ dùng gia đình thông dụng mua ở siêu thị nào cũng có",
                    "Một loại tài nguyên khoáng sản thô chưa chế biến"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Món ăn nào dưới đây là sản vật nổi tiếng của thành phố Huế?",
                "options": ["Bún chả", "Bún bò Huế", "Mì Quảng", "Cơm tấm"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Khi đóng vai hướng dẫn viên du lịch giới thiệu sản vật, em nên xưng hô như thế nào cho phù hợp?",
                "options": [
                    "Xưng hô thân thiện như 'mình' hoặc 'em' và gọi người nghe là 'các bạn/quý khách'",
                    "Không thèm chào hỏi, vào thẳng bài đọc luôn",
                    "Xưng hô trịnh trọng kiểu 'ta' và gọi người nghe là 'các người'",
                    "Nói thầm thì không để ai nghe thấy"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Nhạc cụ Đàn T'rưng truyền thống của vùng nào trên nước ta?",
                "options": ["Đồng bằng Bắc Bộ", "Đồng bằng sông Cửu Long", "Tây Nguyên", "Duyên hải miền Trung"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Để bài giới thiệu về sản vật địa phương thêm sinh động, người nói cần kết hợp điều gì?",
                "options": [
                    "Giọng nói truyền cảm, nét mặt tươi cười và sử dụng tranh ảnh/vật thật",
                    "Đọc y nguyên bài viết trong vở không ngẩng đầu lên",
                    "Nói thật nhanh để mau kết thúc bài trình bày",
                    "Hạn chế nhìn vào người nghe và đứng yên như tượng"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Đặc điểm nổi bật nào giúp phân biệt váy hoa người H'Mông với trang phục các dân tộc khác?",
                "options": [
                    "Váy xòe xếp nếp thêu họa tiết rực rỡ và đính cườm thủ công",
                    "Làm hoàn toàn từ vải da trơn một màu đen duy nhất",
                    "Váy ngắn ôm sát phong cách phương Tây",
                    "Làm bằng kim loại lấp lánh"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Khi bạn trong lớp đang trình bày bài nói, em nên làm gì với tư cách là người nghe?",
                "options": [
                    "Tập trung lắng nghe, ghi chép ý kiến hay để trao đổi, góp ý sau đó",
                    "Nói chuyện riêng hoặc làm bài tập môn khác",
                    "Cắt ngang lời bạn khi bạn đang nói để sửa bài giúp bạn",
                    "Bỏ ra ngoài lớp chơi"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Đâu là câu hỏi gợi ý phù hợp nhất khi tìm hiểu thông tin về một sản vật?",
                "options": [
                    "Sản vật đó có đặc điểm gì độc đáo và được sử dụng như thế nào?",
                    "Sản vật đó có giá tiền bao nhiêu đô-la Mỹ?",
                    "Sản vật đó có được bán ở nước ngoài không?",
                    "Sản vật đó được phát minh vào năm nào ở Châu Âu?"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Sản phẩm làng nghề gốm Bát Tràng nổi tiếng ở địa phương nào?",
                "options": ["Hà Nội", "Hải Phòng", "Thành phố Hồ Chí Minh", "Cần Thơ"],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Mục nào KHÔNG bắt buộc có trong phần lập dàn ý bài giới thiệu sản vật?",
                "options": [
                    "Bảng thống kê dân số của tỉnh thành đó",
                    "Tên gọi và nguồn gốc xuất xứ của sản vật",
                    "Đặc điểm độc đáo và hương vị/cách dùng của sản vật",
                    "Tình cảm, niềm tự hào của em về sản vật đó"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Âm thanh của đàn T'rưng được mô tả gần giống với âm thanh tự nhiên nào?",
                "options": ["Tiếng gió bão rít gầm", "Tiếng sấm chớp nổ đùng đoàng", "Tiếng suối chảy, tiếng thác Tây Nguyên đổ rì rào", "Tiếng động cơ máy bay vang dội"],
                "answer": 2,
                "level": 2
            },
            {
                "question": "Tiêu chí nào dùng để đánh giá phần trao đổi, góp ý bài nói của học sinh?",
                "options": [
                    "Ý kiến nhận xét cụ thể, chân thành, xây dựng về cả nội dung và phong thái nói",
                    "Khen ngợi bạn 100% không chỉ ra lỗi",
                    "Chê bai giọng nói của bạn trước lớp",
                    "Đánh giá thời lượng nói của bạn có đúng 5 phút không"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Bánh đậu xanh rồng vàng là sản vật nổi tiếng ở tỉnh nào?",
                "options": ["Hải Dương", "Hải Phòng", "Nam Định", "Thanh Hóa"],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Việc luyện nói trước gương hoặc ghi âm nghe lại giúp ích gì cho học sinh?",
                "options": [
                    "Giúp tự sửa phát âm, tốc độ nói và cử chỉ điệu bộ tốt hơn",
                    "Không giúp ích gì vì làm mất thời gian",
                    "Để khoe giọng hát với gia đình",
                    "Chỉ để thỏa mãn sở thích cá nhân"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Sản vật nào sau đây là sản phẩm làng nghề thủ công?",
                "options": ["Nón lá làng Chuông", "Bánh chưng ngày Tết", "Quả sầu riêng Ri6", "Nước ngọt có ga"],
                "answer": 0,
                "level": 1
            }
        ]
    }
};
