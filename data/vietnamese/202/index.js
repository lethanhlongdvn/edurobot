export const lesson202 = {
    "topic": "Tiếng Việt 5",
    "week": "29",
    "period": "202",
    "title": "VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH...",
    "desc": "Hướng dẫn học sinh tự đánh giá, phát hiện lỗi về bố cục, nội dung, diễn đạt và thực hành chỉnh sửa, bổ sung dẫn chứng để hoàn thiện bài viết.",
    "subject": "Viết",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/295-danhgia-chinhsua.mp3",
    "content": `
<div class="space-y-8 animate-in fade-in duration-1000 max-w-6xl mx-auto py-6">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
        <h3 class="text-2xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md text-xl md:text-2xl">🎯</span>
            Mục tiêu học tập
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-lg md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách lắng nghe nhận xét và tự đọc soát để phát hiện các lỗi về bố cục, nội dung, dùng từ, chính tả trong bài làm của mình.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Thực hành sửa lỗi và viết lại một số câu văn, đoạn văn cho đúng ngữ pháp và hay hơn.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết bổ sung các dẫn chứng sinh động, tiêu biểu để làm tăng tính thuyết phục cho đoạn văn.
            </li>
        </ul>
    </div>

    <!-- 📚 Bảng nhận diện lỗi thường gặp -->
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white border border-slate-100 space-y-8">
        <div class="border-b pb-4">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800">⚠️ Một số lỗi thường mắc</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <!-- Lỗi bố cục -->
            <div class="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-xl md:text-3xl font-black text-amber-900 flex items-center gap-2">
                    <span class="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm shadow-md">📋</span>
                    Lỗi về Bố cục
                </h4>
                <div class="text-base md:text-xl bg-white/80 p-4 rounded-xl border border-amber-150 font-bold space-y-2 text-amber-950">
                    <p>• Thiếu câu giới thiệu sự việc, hiện tượng.</p>
                    <p>• Không nêu rõ thái độ ý kiến của người viết.</p>
                    <p>• Cách sắp xếp lí do và dẫn chứng chưa phù hợp, lộn xộn.</p>
                </div>
            </div>

            <!-- Lỗi nội dung -->
            <div class="bg-red-50/50 border border-red-100 rounded-3xl p-6 space-y-3">
                <h4 class="text-xl md:text-3xl font-black text-red-900 flex items-center gap-2">
                    <span class="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm shadow-md">✍️</span>
                    Lỗi về Nội dung
                </h4>
                <div class="text-base md:text-xl bg-white/80 p-4 rounded-xl border border-red-150 font-bold space-y-2 text-red-950">
                    <p>• Ý kiến tán thành chưa được nêu một cách rõ ràng.</p>
                    <p>• Lí lẽ chưa thuyết phục, mang tính chung chung.</p>
                    <p>• Dẫn chứng chưa phù hợp, chưa làm sáng tỏ được lí lẽ đưa ra.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- BÀI TẬP 1: THAM KHẢO CÁC ĐOẠN VĂN MẪU ĐÃ CHỈNH SỬA HAY -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 1: Tham khảo cách bổ sung dẫn chứng sinh động</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Đọc các đoạn văn mẫu đã được chỉnh sửa bổ sung dẫn chứng và viết lại kết thúc dưới đây:</p>

        <!-- Tabs chọn đoạn mẫu -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onclick="showSample202(1)" id="btn-sample-1" class="p-6 bg-blue-50/50 border-2 border-blue-400 rounded-2xl text-left cursor-pointer transition-all">
                <h4 class="text-lg md:text-2xl font-black text-blue-950 mb-2">📚 Câu lạc bộ Đọc sách</h4>
                <p class="text-sm md:text-base text-slate-600 font-bold">Bổ sung dẫn chứng của Lâm Phong & Kết thúc của Quỳnh Anh</p>
            </button>
            <button onclick="showSample202(2)" id="btn-sample-2" class="p-6 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl text-left cursor-pointer transition-all">
                <h4 class="text-lg md:text-2xl font-black text-slate-800 mb-2">⚽ Thể dục, Thể thao</h4>
                <p class="text-sm md:text-base text-slate-600 font-bold">Bổ sung dẫn chứng của Minh Khôi & Kết thúc của Hữu Tùng</p>
            </button>
        </div>

        <!-- Khung hiển thị nội dung mẫu kèm hình ảnh -->
        <div id="sample-display-box" class="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-6">
            <div class="flex flex-col lg:flex-row gap-6 items-center">
                <div class="w-full lg:w-2/3 space-y-4 text-justify">
                    <h4 class="text-lg md:text-2xl font-black text-blue-600" id="sample-title">Ý kiến tán thành lập Câu lạc bộ Đọc sách</h4>
                    
                    <div class="serif-font p-6 bg-white border border-slate-200 rounded-2xl text-lg md:text-2xl font-bold text-slate-800 leading-relaxed italic" id="sample-body">
                        "Câu lạc bộ Đọc sách không chỉ là nơi chúng ta tìm kiếm tri thức mà còn là địa điểm để kết nối bạn bè. Mỗi cuốn sách sẽ trở nên thú vị hơn, ý nghĩa hơn khi có bạn cùng đọc. Qua hoạt động đọc sách, giới thiệu sách, thiết kế lại bìa sách hoặc viết bài cảm nhận về tác phẩm văn học,... chúng ta sẽ học hỏi được nhiều điều từ bạn bè. Tôi nghĩ rằng điều tuyệt vời ở Câu lạc bộ Đọc sách không chỉ là số lượng sách bạn đọc được mà còn là sự gắn kết của bạn với các thành viên." (Lâm Phong)
                    </div>

                    <div class="serif-font p-6 bg-white border border-slate-200 rounded-2xl text-lg md:text-2xl font-bold text-slate-800 leading-relaxed italic" id="sample-ending">
                        <strong>Phần kết đoạn viết lại:</strong> "Thành lập Câu lạc bộ Đọc sách trong trường học là một hoạt động vô cùng ý nghĩa, mang lại nhiều lợi ích cho học sinh. Tôi tin rằng một hoạt động bổ ích như vậy sẽ được nhân rộng ở nhiều trường học trên cả nước." (Quỳnh Anh)
                    </div>
                </div>
                <div class="w-full lg:w-1/3 text-center shrink-0">
                    <img src="assets/images/tiengviet_5_2/202/202-1.png" alt="Tranh minh họa" class="rounded-2xl border-4 border-white shadow-md max-w-full h-auto mx-auto" id="sample-img">
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 2: THỰC HÀNH CHỈNH SỬA BÀI VIẾT CỦA EM -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 2: Viết lại một câu văn/đoạn văn của em hay hơn</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Dựa trên các gợi ý, em hãy viết lại phần <strong>Dẫn chứng</strong> hoặc phần <strong>Kết thúc</strong> đoạn văn của em để câu văn thuyết phục và sinh động hơn:</p>

        <!-- Bộ chọn mục tiêu chỉnh sửa -->
        <div class="flex flex-wrap gap-3">
            <button onclick="setGoal202('clb-daitu', this)" class="goal-btn px-4 py-2 border-2 border-blue-500 bg-blue-50 text-blue-600 rounded-xl font-bold text-base md:text-xl cursor-pointer">Bổ sung dẫn chứng CLB Đọc sách</button>
            <button onclick="setGoal202('thethao-daitu', this)" class="goal-btn px-4 py-2 border-2 border-slate-200 bg-white text-slate-700 rounded-xl font-bold text-base md:text-xl cursor-pointer">Bổ sung dẫn chứng Thể thao</button>
            <button onclick="setGoal202('ketthuc', this)" class="goal-btn px-4 py-2 border-2 border-slate-200 bg-white text-slate-700 rounded-xl font-bold text-base md:text-xl cursor-pointer">Viết lại phần Kết thúc</button>
        </div>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
            <textarea id="essay-202" rows="5" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Nhập câu văn hoặc phần đoạn văn em đã chỉnh sửa..."></textarea>
            
            <div class="flex justify-center">
                <button onclick="check202EssayAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg uppercase tracking-wider cursor-pointer">
                    <span>🤖</span>
                    <span>Nộp cho Thầy E AI nhận xét bản sửa</span>
                </button>
            </div>
            <div id="fb-202-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: THỰC HÀNH ĐIỀN TỪ LIÊN KẾT ĐOẠN VĂN -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 3: Điền từ liên kết trong câu văn</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Điền từ ngữ nối thích hợp vào ô trống để hoàn thiện phần kết đoạn của bạn Quỳnh Anh:</p>

        <div class="serif-font p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg md:text-2xl font-bold text-slate-800 leading-relaxed text-justify flex flex-wrap items-center gap-2">
            <span>Thành lập Câu lạc bộ Đọc sách trong trường học là một hoạt động vô cùng ý nghĩa, mang lại nhiều lợi ích cho học sinh. Tôi tin</span>
            <select id="select-202-link" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                <option value="">-- Chọn từ --</option>
                <option value="rằng">rằng</option>
                <option value="nhưng">nhưng</option>
                <option value="nếu">nếu</option>
            </select>
            <span>một hoạt động bổ ích như vậy sẽ được nhân rộng ở nhiều trường học trên cả nước.</span>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check202Link()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Kiểm tra từ nối</button>
        </div>
        <div id="fb-202-link" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>
</div>

<script>
    let selectedGoal202 = 'clb-daitu';

    const samples202 = {
        1: {
            title: "Ý kiến tán thành lập Câu lạc bộ Đọc sách",
            body: '"Câu lạc bộ Đọc sách không chỉ là nơi chúng ta tìm kiếm tri thức mà còn là địa điểm để kết nối bạn bè. Mỗi cuốn sách sẽ trở nên thú vị hơn, ý nghĩa hơn khi có bạn cùng đọc. Qua hoạt động đọc sách, giới thiệu sách, thiết kế lại bìa sách hoặc viết bài cảm nhận về tác phẩm văn học,... chúng ta sẽ học hỏi được nhiều điều từ bạn bè. Tôi nghĩ rằng điều tuyệt vời ở Câu lạc bộ Đọc sách không chỉ là số lượng sách bạn đọc được mà còn là sự gắn kết của bạn với các thành viên." (Lâm Phong)',
            ending: '<strong>Phần kết đoạn viết lại:</strong> "Thành lập Câu lạc bộ Đọc sách trong trường học là một hoạt động vô cùng ý nghĩa, mang lại nhiều lợi ích cho học sinh. Tôi tin rằng một hoạt động bổ ích như vậy sẽ được nhân rộng ở nhiều trường học trên cả nước." (Quỳnh Anh)',
            img: "assets/images/tiengviet_5_2/202/202-1.png"
        },
        2: {
            title: "Ý kiến tán thành phát triển hoạt động Thể thao",
            body: '"Kéo co cũng là môn thể thao giúp bạn có kĩ năng hợp tác. Để giành được chiến thắng, mỗi cá nhân ngoài việc gắng hết sức kéo sợi dây về phía mình còn cần phải biết đồng lòng, đồng sức. Khi cùng nhau hô "1 - 2 - 3", chính là chúng ta đang khích lệ mình, khích lệ đồng đội tạo nên sức mạnh tổng hợp lớn nhất từ mỗi thành viên." (Minh Khôi)',
            ending: '<strong>Phần kết đoạn viết lại:</strong> "Những trải nghiệm của tôi về lợi ích của thể dục, thể thao càng khiến tôi tin tưởng vì sao cần phát triển hoạt động thể dục, thể thao trong nhà trường. Vậy thì, bạn ơi, sau khi hoàn thành nhiệm vụ học tập, hãy cầm trái bóng và bước ra sân cỏ nào!" (Hữu Tùng)',
            img: "assets/images/tiengviet_5_2/202/202-2.png"
        }
    };

    window.showSample202 = function(id) {
        const btn1 = document.getElementById('btn-sample-1');
        const btn2 = document.getElementById('btn-sample-2');
        
        if (id === 1) {
            btn1.className = 'p-6 bg-blue-50/50 border-2 border-blue-400 rounded-2xl text-left cursor-pointer transition-all';
            btn2.className = 'p-6 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl text-left cursor-pointer transition-all';
        } else {
            btn2.className = 'p-6 bg-blue-50/50 border-2 border-blue-400 rounded-2xl text-left cursor-pointer transition-all';
            btn1.className = 'p-6 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl text-left cursor-pointer transition-all';
        }

        document.getElementById('sample-title').textContent = samples202[id].title;
        document.getElementById('sample-body').textContent = samples202[id].body;
        document.getElementById('sample-ending').innerHTML = samples202[id].ending;
        document.getElementById('sample-img').src = samples202[id].img;
    };

    window.setGoal202 = function(goal, btn) {
        selectedGoal202 = goal;
        document.querySelectorAll('.goal-btn').forEach(el => {
            el.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-600');
            el.classList.add('border-slate-200', 'bg-white', 'text-slate-700');
        });
        btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-700');
        btn.classList.add('border-blue-500', 'bg-blue-50', 'text-blue-600');
    };

    // BÀI 2: CHẤM AI
    window.check202EssayAI = async function() {
        const text = document.getElementById('essay-202').value.trim();
        if (!text) {
            alert('Em hãy nhập phần câu viết lại cần chỉnh sửa nhé!');
            return;
        }

        const fb = document.getElementById('fb-202-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-2xl text-sky-900 animate-pulse text-center">Thầy E AI đang đọc bản sửa của em, chờ một chút nhé...</div>';

        let goalText = "";
        if (selectedGoal202 === 'clb-daitu') {
            goalText = "Bổ sung dẫn chứng sinh động cho việc thành lập Câu lạc bộ Đọc sách";
        } else if (selectedGoal202 === 'thethao-daitu') {
            goalText = "Bổ sung dẫn chứng thực tế cho việc phát triển Thể dục, Thể thao học đường";
        } else {
            goalText = "Viết lại phần Kết thúc đoạn văn để tạo ấn tượng mạnh mẽ, khích lệ";
        }

        const prompt = \`Học sinh lớp 5 thực hành sửa lại một phần bài viết của mình.
Mục tiêu sửa bài: "\${goalText}".
Đoạn văn/câu văn viết lại của học sinh: "\${text}"
Hãy đóng vai Thầy E, nhận xét bản sửa này: (1) Câu văn viết lại có đạt được mục tiêu chỉnh sửa đề ra không? (2) Nhận xét độ trôi chảy, từ ngữ hình ảnh, dẫn chứng cụ thể sinh động. (3) Khen ngợi và hướng dẫn cách hoàn thiện thêm nếu cần. Xưng hô Thầy và gọi học sinh là em.\`;

        await askAI('fb-202-ai', prompt, 'single', 'writing', 29, prompt);
    };

    // BÀI 3
    window.check202Link = function() {
        const val = document.getElementById('select-202-link').value;
        const fb = document.getElementById('fb-202-link');
        fb.classList.remove('hidden');

        if (!val) {
            fb.innerHTML = '⚠️ Em hãy chọn một từ để điền vào ô trống nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        if (val === 'rằng') {
            fb.innerHTML = '🎉 Chính xác! Từ liên kết "rằng" kết hợp với từ "tin" tạo thành cụm từ liên kết "tin rằng", giúp câu văn diễn đạt mạch lạc, liên kết chặt chẽ giữa niềm tin của người viết và nội dung phía sau.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Điền từ này câu văn chưa hợp nghĩa rồi. Em hãy đọc lại câu văn và thử chọn từ khác nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Mục tiêu chính của tiết học 'Đánh giá, chỉnh sửa đoạn văn nêu ý kiến tán thành' là gì?",
            "options": [
                "Viết một bài văn hoàn toàn mới về chủ đề khác",
                "Tự đọc soát, nhận diện lỗi và chỉnh sửa câu văn, đoạn văn cho hay hơn",
                "Đọc các tác phẩm văn học nước ngoài",
                "Học cách tổ chức một giải thi đấu kéo co"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi nào sau đây thuộc nhóm lỗi về bố cục?",
            "options": [
                "Lí lẽ đưa ra chưa đủ sức thuyết phục",
                "Không có câu giới thiệu sự việc và nêu ý kiến của người viết",
                "Viết sai chính tả tên riêng địa danh",
                "Sử dụng từ ngữ chưa trang trọng"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Lỗi nào dưới đây thuộc nhóm lỗi về nội dung?",
            "options": [
                "Lí do chưa thuyết phục, dẫn chứng chưa phù hợp làm sáng tỏ lí do",
                "Không chia đoạn văn làm 3 phần rõ rệt",
                "Viết lặp đi lặp lại một từ nhiều lần",
                "Thiếu dấu chấm câu ở cuối đoạn văn"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong đoạn văn của bạn Lâm Phong, điều tuyệt vời nhất ở Câu lạc bộ Đọc sách là gì?",
            "options": [
                "Số lượng sách khổng lồ trong thư viện",
                "Sự gắn kết của người đọc với các thành viên khác",
                "Được phần thưởng khi đọc xong một cuốn sách",
                "Thư viện được trang trí rất nhiều màu sắc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong đoạn văn của bạn Minh Khôi, trò chơi kéo co được đưa ra làm dẫn chứng cho kĩ năng nào?",
            "options": [
                "Kĩ năng thuyết trình trước đám đông",
                "Kĩ năng đọc sách nhanh",
                "Kĩ năng hợp tác và tinh thần đồng lòng đồng sức",
                "Kĩ năng giải quyết xung đột cá nhân"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Câu kết đoạn của Hữu Tùng: 'hãy cầm trái bóng và bước ra sân cỏ nào!' mang sắc thái gì?",
            "options": [
                "Cầu khiến, khích lệ và kêu gọi hành động đầy hào hứng",
                "Trầm lặng, suy tư và nhiều nuối tiếc",
                "Hỏi ý kiến xem mọi người có muốn đi đá bóng không",
                "Phản đối các hoạt động thể thao trong trường"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Khi soát lỗi chính tả và đặt câu, chúng ta cần sửa các lỗi nào?",
            "options": [
                "Viết hoa sai quy tắc, dùng từ lặp từ lủng củng và viết sai phụ âm đầu",
                "Viết đoạn văn quá ngắn dưới 10 câu",
                "Không đưa các câu thơ cổ vào bài viết",
                "Chỉ viết về Câu lạc bộ đọc sách"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'chỉnh sửa'?",
            "options": [
                "Giữ nguyên",
                "Tu sửa",
                "Phát triển",
                "Thay đổi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phát hiện lỗi sai trong câu: 'Trường em đang phát triển hoạt động thể dục thể thao rứt mạnh mẽ.'",
            "options": [
                "Sai chính tả từ phát triển",
                "Sai chính tả từ rứt (phải viết là rất)",
                "Thiếu từ liên kết",
                "Câu văn không có lỗi nào"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Em rứt tán thành việc lập Câu lạc bộ đọc sách.', từ 'rứt' mắc lỗi gì?",
            "options": [
                "Lỗi diễn đạt lủng củng",
                "Lỗi chính tả do viết sai phụ âm hoặc vần",
                "Lỗi lặp từ ngữ",
                "Lỗi cấu trúc câu chưa hoàn chỉnh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi sửa lỗi lặp từ trong câu, chúng ta nên làm gì?",
            "options": [
                "Xóa bỏ hoàn toàn câu văn đó đi",
                "Thay thế bằng các từ đồng nghĩa hoặc đại từ phù hợp để câu văn thanh thoát hơn",
                "Thêm nhiều từ lặp hơn nữa để nhấn mạnh",
                "Chuyển câu đó thành câu hỏi tu từ"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Mục đích chính của việc đưa dẫn chứng thực tế vào đoạn văn tán thành là gì?",
            "options": [
                "Làm cho đoạn văn dài ra để đủ số từ quy định",
                "Làm sáng tỏ lí lẽ và tăng sức thuyết phục, độ chân thực cho bài viết",
                "Để khoe khoang kiến thức xã hội rộng lớn của người viết",
                "Để bài viết sinh động giống như truyện cổ tích"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Đoạn văn kết bài của Quỳnh Anh: 'Tôi tin rằng một hoạt động bổ ích như vậy sẽ được nhân rộng...'. Từ nào là từ nối trong câu này?",
            "options": [
                "Hoạt động",
                "Nhân rộng",
                "Rằng",
                "Bổ ích"
            ],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Thành ngữ 'đồng lòng đồng sức' trong đoạn văn về kéo co có nghĩa là gì?",
            "options": [
                "Nhiều người có sức mạnh thể chất giống nhau",
                "Sự nhất trí, đoàn kết một lòng và cùng nhau hợp tác dốc hết sức để chiến thắng",
                "Chỉ tập trung kéo thừng về một phía duy nhất",
                "Không cần nỗ lực vẫn giành được chiến thắng"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Ý kiến tán thành trong đoạn văn cần được nêu rõ ràng ở phần nào của đoạn văn?",
            "options": [
                "Chỉ cần viết ở phần Triển khai",
                "Nêu ngay ở phần Mở đầu để định hướng toàn bộ bài viết",
                "Chỉ cần viết ở câu cuối cùng của phần Kết thúc",
                "Không cần nêu trực tiếp, chỉ cần ngụ ý"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};
