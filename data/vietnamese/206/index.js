export const lesson206 = {
    "topic": "Tiếng Việt 5",
    "week": "30",
    "period": "206",
    "title": "VIẾT: VIẾT ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH MỘT SỰ VIỆC, HIỆN TƯỢNG (Bài viết số 2)",
    "desc": "Thực hành viết đoạn văn bày tỏ ý kiến tán thành về hoạt động quyên góp giúp đỡ học sinh vùng thiên tai hoặc phong trào trồng cây xanh, tự đánh giá và trao đổi cùng bạn.",
    "subject": "Viết",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/303-viet-bai-so-2.mp3",
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
                Viết được đoạn văn hoàn chỉnh bày tỏ ý kiến tán thành về việc ủng hộ học sinh vùng thiên tai hoặc phong trào trồng cây xanh.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Sử dụng linh hoạt các từ ngữ bày tỏ sự tán thành (*tán thành, ủng hộ, hoàn toàn đồng ý, rất xác đáng*...).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết tự nhận xét, đánh giá bài làm dựa trên hệ thống tiêu chí chất lượng và trao đổi học tập cùng bạn bè.
            </li>
        </ul>
    </div>

    <!-- 📚 Ghi nhớ cách dùng từ bày tỏ sự tán thành -->
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl bg-white border border-slate-100 space-y-8">
        <div class="border-b pb-4">
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800">💡 Từ ngữ thể hiện ý kiến tán thành</h2>
        </div>

        <p class="text-lg md:text-2xl font-bold leading-relaxed text-slate-700">
            Để bài viết thêm tính thuyết phục và thể hiện rõ nét quan điểm ủng hộ, em nên sử dụng các từ ngữ sau ở phần Mở đầu hoặc liên kết câu:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-black">
            <div class="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border-2 border-emerald-100 text-base md:text-xl">tán thành</div>
            <div class="p-4 bg-blue-50 text-blue-600 rounded-2xl border-2 border-blue-100 text-base md:text-xl">ủng hộ quan điểm</div>
            <div class="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border-2 border-emerald-100 text-base md:text-xl">hoàn toàn đồng ý</div>
            <div class="p-4 bg-blue-50 text-blue-600 rounded-2xl border-2 border-blue-100 text-base md:text-xl">rất xác đáng</div>
            <div class="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border-2 border-emerald-100 text-base md:text-xl">hoàn toàn đồng tình</div>
        </div>
    </div>
</div>
`,
    "practice": (UI) => {
        return `
<div class="space-y-12 max-w-4xl mx-auto py-6">
    <!-- BÀI TẬP 1: CHỌN ĐỀ BÀI VÀ THAM KHẢO Ý TƯỞNG -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 1: Chọn đề bài và xem gợi ý dàn ý</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Chọn 1 trong 2 đề dưới đây để chuẩn bị viết đoạn văn:</p>

        <!-- Nút chọn đề -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onclick="selectTopic206(1)" id="btn-topic206-1" class="p-6 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl text-left transition-all cursor-pointer group">
                <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-black text-sm mb-3 group-hover:bg-blue-200">Đề 1</span>
                <p class="text-lg md:text-2xl font-bold text-slate-900 leading-snug">Viết đoạn văn nêu ý kiến tán thành hoạt động ủng hộ, giúp đỡ các bạn học sinh vùng thiên tai.</p>
            </button>
            <button onclick="selectTopic206(2)" id="btn-topic206-2" class="p-6 bg-slate-50 border-2 border-slate-200 hover:border-blue-400 rounded-2xl text-left transition-all cursor-pointer group">
                <span class="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg font-black text-sm mb-3 group-hover:bg-emerald-200">Đề 2</span>
                <p class="text-lg md:text-2xl font-bold text-slate-900 leading-snug">Viết đoạn văn nêu ý kiến tán thành phong trào trồng và bảo vệ cây xanh.</p>
            </button>
        </div>

        <!-- Khung hiển thị gợi ý dàn ý -->
        <div id="topic-outline-container206" class="hidden p-6 bg-amber-50/40 border-2 border-amber-100 rounded-3xl animate-in fade-in slide-in-from-top-4 duration-300">
            <h4 class="text-lg md:text-2xl font-black text-amber-900 mb-3" id="outline-title206">💡 Gợi ý dàn ý tham khảo</h4>
            <div class="text-base md:text-xl font-bold text-slate-700 space-y-4" id="outline-content206">
                <!-- Nội dung hiển thị tự động bằng JS -->
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 2: THỰC HÀNH VIẾT ĐOẠN VĂN VÀ CHẤM AI -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 2: Thực hành viết bài và chấm AI</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Dựa vào các từ ngữ tán thành gợi ý, hãy viết đoạn văn hoàn chỉnh (khoảng 150 - 200 từ) và nộp bài để nhận xét:</p>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
            <div class="text-base md:text-xl font-black text-slate-500 mb-2" id="selected-topic-label206">Chưa chọn đề bài</div>
            <textarea id="essay-206" rows="8" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-lg md:text-2xl font-bold leading-relaxed" placeholder="Nhập bài viết của em tại đây..."></textarea>
            
            <div class="flex justify-center">
                <button onclick="check206EssayAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg uppercase tracking-wider cursor-pointer">
                    <span>🤖</span>
                    <span>Nộp cho Thầy E AI nhận xét</span>
                </button>
            </div>
            <div id="fb-206-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: LỰA CHỌN TỪ NGỮ BÀY TỎ SỰ TÁN THÀNH -->
    <section class="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-xl md:text-3xl font-black text-blue-600">Bài tập 3: Lựa chọn từ bày tỏ ý kiến phù hợp</h3>
        </div>

        <p class="text-lg md:text-2xl font-bold text-slate-700">Điền từ ngữ bày tỏ sự tán thành phù hợp vào câu dưới đây:</p>

        <div class="serif-font p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg md:text-2xl font-bold text-slate-800 leading-relaxed text-justify flex flex-wrap items-center gap-2">
            <span>"Tôi hoàn toàn</span>
            <select id="select-205-opinion" class="p-2 border-2 border-slate-300 rounded-xl text-blue-600 font-black outline-none bg-white text-lg md:text-2xl">
                <option value="">-- Chọn từ --</option>
                <option value="phandoi">phản đối</option>
                <option value="nghingo">nghi ngờ</option>
                <option value="dongtinh">đồng tình với</option>
            </select>
            <span>phong trào quyên góp sách vở ủng hộ các bạn học sinh vùng lũ lụt thiên tai vừa qua."</span>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="check206Opinion()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-lg uppercase">Kiểm tra từ chọn</button>
        </div>
        <div id="fb-206-opinion" class="text-lg md:text-2xl font-black text-center hidden"></div>
    </section>
</div>

<script>
    let activeTopic206 = null;

    const outlines206 = {
        1: {
            title: "💡 Dàn ý Đề 1: Tán thành hoạt động ủng hộ các bạn vùng thiên tai",
            html: \`
                <p>• <strong>Mở đầu:</strong> Bày tỏ thái độ hoàn toàn ủng hộ và đồng tình với hoạt động quyên góp, giúp đỡ các bạn học sinh vùng thiên tai lũ lụt.</p>
                <p>• <strong>Triển khai:</strong></p>
                <p class="pl-4">- <em>Lí lẽ 1:</em> Thiên tai làm sách vở, quần áo, trường lớp của các bạn bị hư hỏng nặng nề, việc giúp đỡ giúp các bạn nhanh chóng quay lại trường học.</p>
                <p class="pl-4">- <em>Lí lẽ 2:</em> Quyên góp giúp đỡ chia sẻ gánh nặng tài chính phần nào cho gia đình các bạn gặp nạn.</p>
                <p class="pl-4">- <em>Lí lẽ 3:</em> Hoạt động rèn luyện tinh thần tương thân tương ái, lá lành đùm lá rách quý báu của dân tộc ta.</p>
                <p class="pl-4">- <em>Dẫn chứng:</em> Phong trào quyên góp sách vở 'Vòng tay bè bạn' của liên đội trường đã thu được hàng ngàn bộ sách vở gửi tặng các bạn vùng lũ miền Trung.</p>
                <p>• <strong>Kết thúc:</strong> Khẳng định lại ý nghĩa cao đẹp của hoạt động quyên góp và hứa sẽ tham gia đóng góp tích cực.</p>
            \`
        },
        2: {
            title: "💡 Dàn ý Đề 2: Tán thành phong trào trồng và bảo vệ cây xanh",
            html: \`
                <p>• <strong>Mở đầu:</strong> Nêu ý kiến hoàn toàn tán thành và ủng hộ phong trào trồng và bảo vệ cây xanh trong trường học cũng như khu dân cư.</p>
                <p>• <strong>Triển khai:</strong></p>
                <p class="pl-4">- <em>Lí lẽ 1:</em> Cây xanh cung cấp nguồn oxy dồi dào, lọc bụi bẩn làm cho không khí trường lớp trong lành, sạch sẽ hơn.</p>
                <p class="pl-4">- <em>Lí lẽ 2:</em> Trồng cây tạo bóng mát cho chúng em vui chơi trong những ngày hè oi bức, giúp giảm nhiệt độ khu trường học.</p>
                <p class="pl-4">- <em>Lí lẽ 3:</em> Tham gia trồng cây giúp rèn luyện tình yêu lao động và nâng cao ý thức trách nhiệm bảo vệ môi trường tự nhiên.</p>
                <p class="pl-4">- <em>Dẫn chứng:</em> Công trình măng non bồn hoa của lớp em sau 1 năm chăm sóc đã nở hoa rực rỡ, mang lại không gian xanh mát đáng tự hào.</p>
                <p>• <strong>Kết thúc:</strong> Khẳng định trồng và bảo vệ cây là nghĩa vụ thiết thực của mỗi học sinh để bảo vệ hành tinh xanh.</p>
            \`
        }
    };

    window.selectTopic206 = function(topicId) {
        activeTopic206 = topicId;
        
        // Cập nhật giao diện nút bấm
        const btn1 = document.getElementById('btn-topic206-1');
        const btn2 = document.getElementById('btn-topic206-2');
        
        if (topicId === 1) {
            btn1.classList.remove('bg-slate-50', 'border-slate-200');
            btn1.classList.add('bg-blue-50/50', 'border-blue-400');
            btn2.classList.remove('bg-emerald-50/50', 'border-emerald-400');
            btn2.classList.add('bg-slate-50', 'border-slate-200');
            document.getElementById('selected-topic-label206').textContent = 'Đề bài đang chọn: Đề 1 (Tán thành hoạt động giúp đỡ học sinh vùng thiên tai)';
        } else {
            btn2.classList.remove('bg-slate-50', 'border-slate-200');
            btn2.classList.add('bg-emerald-50/50', 'border-emerald-400');
            btn1.classList.remove('bg-blue-50/50', 'border-blue-400');
            btn1.classList.add('bg-slate-50', 'border-slate-200');
            document.getElementById('selected-topic-label206').textContent = 'Đề bài đang chọn: Đề 2 (Tán thành phong trào trồng và bảo vệ cây xanh)';
        }

        // Hiện dàn ý
        const outlineBox = document.getElementById('topic-outline-container206');
        outlineBox.classList.remove('hidden');
        document.getElementById('outline-title206').innerHTML = outlines206[topicId].title;
        document.getElementById('outline-content206').innerHTML = outlines206[topicId].html;
    };

    // BÀI 2: CHẤM AI
    window.check206EssayAI = async function() {
        if (!activeTopic206) {
            alert('Em hãy chọn một trong hai đề bài trước khi viết nhé!');
            return;
        }

        const text = document.getElementById('essay-206').value.trim();
        if (!text) {
            alert('Em hãy nhập bài viết trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-206-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-2xl text-sky-900 animate-pulse text-center">Thầy E AI đang đọc bài viết và kiểm tra các từ ngữ bày tỏ ý kiến của em, chờ một chút nhé...</div>';

        const topicText = activeTopic206 === 1 ? "Đề 1 (Ủng hộ học sinh vùng thiên tai)" : "Đề 2 (Phong trào trồng và bảo vệ cây xanh)";
        const prompt = \`Học sinh lớp 5 viết đoạn văn nêu ý kiến tán thành về đề bài: "\${topicText}".
Đoạn văn của học sinh: "\${text}"
Hãy đóng vai Thầy E, nhận xét chi tiết: (1) Đoạn văn đã sử dụng đúng các từ bày tỏ sự tán thành chưa (như: tán thành, ủng hộ quan điểm, hoàn toàn đồng ý, hoàn toàn đồng tình...)? (2) Phân tích xem lí lẽ và dẫn chứng đưa ra đã có tính thuyết phục chưa? (3) Nhận xét chung về bố cục và cách dùng từ, chính tả. (4) Cho điểm trên thang điểm 10. Xưng hô Thầy và em.\`;

        await askAI('fb-206-ai', prompt, 'single', 'writing', 30, prompt);
    };

    // BÀI 3: TRẮC NGHIỆM
    window.check206Opinion = function() {
        const val = document.getElementById('select-205-opinion').value;
        const fb = document.getElementById('fb-206-opinion');
        fb.classList.remove('hidden');

        if (!val) {
            fb.innerHTML = '⚠️ Em hãy chọn một từ ngữ để điền vào câu nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
            return;
        }

        if (val === 'dongtinh') {
            fb.innerHTML = '🎉 Chính xác! Từ "đồng tình với" biểu thị thái độ tán thành, ủng hộ mạnh mẽ của người viết đối với phong trào quyên góp đầy ý nghĩa, rất phù hợp với ngữ cảnh câu văn mở đầu.';
            fb.className = 'text-lg md:text-2xl font-black text-center text-emerald-600 mt-4';
        } else {
            fb.innerHTML = '⚠️ Điền từ ngữ này câu văn mang nét nghĩa ngược lại hoặc nghi ngại rồi. Em hãy chú ý chủ đề của bài học là viết ý kiến tán thành để chọn lại nhé!';
            fb.className = 'text-lg md:text-2xl font-black text-center text-amber-600 mt-4';
        }
    };
</script>
        `;
    },
    "quizPool": [
        {
            "question": "Trong các đề bài dưới đây, đề tài nào thuộc bài viết số 2 trong tiết học này?",
            "options": [
                "Bày tỏ ý kiến phản đối việc bỏ giờ ra chơi",
                "Nêu ý kiến tán thành hoạt động giúp đỡ học sinh vùng thiên tai hoặc phong trào trồng cây xanh",
                "Tả một người bạn thân thiết nhất của em",
                "Kể lại câu chuyện về danh y Tuệ Tĩnh"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào dưới đây KHÔNG dùng để biểu thị ý kiến tán thành?",
            "options": [
                "hoàn toàn nhất trí",
                "hoàn toàn bác bỏ",
                "hoàn toàn đồng tình",
                "tán thành quan điểm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết mở đầu cho đoạn văn ý kiến tán thành, người viết cần làm gì?",
            "options": [
                "Đưa ra luôn dẫn chứng số liệu quyên góp",
                "Giới thiệu sự việc hiện tượng và khẳng định rõ thái độ tán thành của mình",
                "Bày tỏ sự nghi ngờ về tính thiết thực của hoạt động",
                "Kể lại một câu chuyện không liên quan"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'rất xác đáng' dùng để đánh giá điều gì của ý kiến/sự việc được tán thành?",
            "options": [
                "Ý kiến đó hoàn toàn đúng đắn, hợp lý và có giá trị thiết thực",
                "Ý kiến đó chưa có căn cứ thuyết phục",
                "Ý kiến đó có phần sai lệch cần xem xét lại",
                "Ý kiến đó quá ngắn gọn không rõ ràng"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Đâu là dẫn chứng phù hợp nhất cho đề bài tán thành hoạt động giúp đỡ học sinh vùng thiên tai?",
            "options": [
                "Phong trào quyên góp sách vở 'Vòng tay bè bạn' của liên đội đã thu được hàng ngàn bộ sách vở gửi học sinh vùng lũ",
                "Trường em tổ chức hoạt động cắm trại dã ngoại cuối tuần rất vui",
                "Chúng em tích cực quét dọn bồn hoa và trồng thêm cây xanh",
                "Bóng đá là môn thể thao giúp rèn luyện thể chất dẻo dai"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Đâu là dẫn chứng phù hợp nhất cho đề bài tán thành phong trào trồng và bảo vệ cây xanh?",
            "options": [
                "Chúng em thường quyên góp quần áo cũ để ủng hộ người nghèo",
                "Mỗi tuần, lớp chúng em đều phân công tưới nước và chăm sóc công trình bòn hoa bồn cây của lớp luôn xanh tốt",
                "Thể thao học đường giúp nâng cao tình hữu nghị giữa các lớp",
                "Cụ Đồ Chiểu là một tấm gương sáng về y học và lòng yêu nước"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Việc sử dụng các từ ngữ như 'đồng tình', 'ủng hộ' ở đầu đoạn văn nhằm mục đích gì?",
            "options": [
                "Làm câu văn dài ra để đủ số dòng",
                "Định hình rõ quan điểm ủng hộ của người viết đối với vấn đề thảo luận",
                "Làm cho người đọc cảm thấy bối rối",
                "Tạo nhịp điệu giống như câu thơ ca"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sau khi hoàn thiện bài viết, quy trình tự nhận xét bài làm yêu cầu học sinh kiểm tra điều gì?",
            "options": [
                "Bài viết đã dùng từ bày tỏ sự tán thành chưa, lý lẽ có thuyết phục và dẫn chứng có phù hợp không",
                "Bài viết có được viết bằng bút mực màu tím hay không",
                "Đoạn văn có chứa các câu đối cổ hay không",
                "Độ dài bài viết có vượt quá 10 trang giấy không"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'ủng hộ'?",
            "options": [
                "Bác bỏ",
                "Tán thành",
                "Nghi ngờ",
                "Phản đối"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi soát lỗi lặp từ trong câu văn, phương án giải quyết tốt nhất là gì?",
            "options": [
                "Xóa bỏ hoàn toàn câu chứa từ lặp",
                "Sử dụng các từ đồng nghĩa thay thế hoặc cấu trúc lại câu văn cho tinh gọn",
                "Thêm nhiều từ khác lặp lại nhiều hơn nữa",
                "Bỏ qua vì lỗi lặp từ không ảnh hưởng đến nội dung"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Hoạt động mở rộng của bài viết số 2 yêu cầu học sinh tìm đọc gì?",
            "options": [
                "Các văn bản nghị luận về môi trường trên báo chí",
                "Các bài ca dao hoặc bài thơ về quê hương, đất nước",
                "Tác phẩm văn học nước ngoài nổi tiếng",
                "Sách khoa học tự nhiên về thế giới thực vật"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'thiên tai' trong đề 1 chỉ những hiện tượng nào?",
            "options": [
                "Binh biến, chiến tranh xảy ra do con người",
                "Các hiện tượng tự nhiên cực đoan gây thiệt hại lớn như lũ lụt, bão, hạn hán",
                "Việc học sinh bị ốm đau mù mắt",
                "Việc trường học bị xuống cấp do thời gian"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn tán thành một sự việc, hiện tượng thường bao gồm mấy phần chính?",
            "options": [
                "2 phần chính",
                "3 phần chính (Mở đầu, Triển khai, Kết thúc)",
                "4 phần chính",
                "Không chia phần, viết tự do"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Tôi hoàn toàn đồng tình với quan điểm trên.' Chủ ngữ là gì?",
            "options": [
                "Tôi hoàn toàn",
                "Tôi",
                "đồng tình với quan điểm trên",
                "quan điểm trên"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ ngữ nào biểu thị mức độ tán thành ở mức cao nhất?",
            "options": [
                "Tôi có nghe qua",
                "Tôi hoàn toàn đồng ý",
                "Tôi nửa tin nửa ngờ",
                "Tôi không có ý kiến gì"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};
