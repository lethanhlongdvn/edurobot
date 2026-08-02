export const lesson153 = {
    "topic": "Viết",
    "week": "22",
    "period": "153",
    "title": "VIẾT: VIẾT BÀI VĂN TẢ NGƯỜI (BÀI VIẾT SỐ 2)",
    "desc": "Bài học thực hành viết bài văn tả người hoàn chỉnh dựa trên dàn ý gợi ý cho một trong hai đề bài sáng tạo: tả người gặp một vài lần hoặc nhân vật chính trong phim, vở kịch.",
    "subject": "Viết",
    "theme": "Vẻ đẹp cuộc sống",
    "content": `
<div class="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600 pb-12">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
        <h3 class="text-3xl md:text-4xl font-black text-blue-600 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Thực hành viết bài văn tả người (Bài viết số 2) hoàn chỉnh theo đúng cấu trúc 3 phần, lời văn tự nhiên, sinh động.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách lập dàn ý chi tiết bám sát đặc điểm nổi bật của đối tượng miêu tả (người chỉ gặp vài lần hoặc nhân vật hư cấu trong phim/kịch).
            </li>
        </ul>
    </div>

    <!-- 📑 CHỌN ĐỀ BÀI TẬP LÀM VĂN -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-3xl md:text-4xl font-black text-gray-800 flex items-center gap-2 border-b-2 border-blue-100 pb-4">
            <span>📑</span> Chọn 1 trong 2 đề bài làm văn dưới đây:
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <!-- Đề 1 -->
            <button onclick="selectDe153(1)" id="de153-btn-1" class="p-6 bg-blue-50/40 rounded-3xl border-2 border-blue-200 hover:border-blue-600 hover:bg-blue-50 text-left transition-all active:scale-[0.98] shadow-md group">
                <div class="flex items-center gap-3 mb-3">
                    <span class="text-white bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</span>
                    <span class="text-lg md:text-2xl font-black text-blue-950 group-hover:text-blue-650">Đề bài 1</span>
                </div>
                <p class="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed">
                    Viết bài văn tả một người em chỉ gặp một vài lần nhưng nhớ mãi.
                </p>
            </button>

            <!-- Đề 2 -->
            <button onclick="selectDe153(2)" id="de153-btn-2" class="p-6 bg-emerald-50/40 rounded-3xl border-2 border-emerald-250 hover:border-emerald-600 hover:bg-emerald-50 text-left transition-all active:scale-[0.98] shadow-md group">
                <div class="flex items-center gap-3 mb-3">
                    <span class="text-white bg-emerald-650 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">2</span>
                    <span class="text-lg md:text-2xl font-black text-emerald-950 group-hover:text-emerald-700 font-sans">Đề bài 2</span>
                </div>
                <p class="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed">
                    Viết bài văn tả một người là nhân vật chính trong bộ phim hoặc vở kịch mà em đã xem.
                </p>
            </button>
        </div>
    </div>

    <!-- 💡 GỢI Ý CẤU TRÚC DÀN Ý CHI TIẾT -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <h3 class="text-3xl md:text-4xl font-black text-gray-800 flex items-center gap-2 border-b-2 border-blue-100 pb-4">
            <span>💡</span> Gợi ý lập dàn ý chi tiết bài văn:
        </h3>

        <div class="space-y-6 max-w-4xl mx-auto">
            <!-- Mở bài -->
            <div class="p-6 bg-gradient-to-r from-blue-50 to-blue-50/30 rounded-3xl border-2 border-blue-150 flex items-start gap-4">
                <div class="px-4 py-2 bg-blue-600 text-white font-black text-xl rounded-xl whitespace-nowrap">Mở bài</div>
                <div class="text-xl md:text-2xl font-bold text-blue-950 leading-relaxed">
                    Giới thiệu khái quát người được tả.<br>
                    <span class="text-gray-500 font-medium text-lg italic">(Ví dụ: Em đã gặp người đó ở đâu hoặc được biết về người đó qua bộ phim, vở kịch nào?)</span>
                </div>
            </div>

            <!-- Thân bài -->
            <div class="p-6 bg-gradient-to-r from-teal-50 to-emerald-50/30 rounded-3xl border-2 border-emerald-250 flex items-start gap-4">
                <div class="px-4 py-2 bg-emerald-600 text-white font-black text-xl rounded-xl whitespace-nowrap">Thân bài</div>
                <div class="text-xl md:text-2xl font-bold text-emerald-950 leading-relaxed space-y-2">
                    <p>Nêu ngắn gọn những ý cần có:</p>
                    <ul class="list-disc pl-6 space-y-1 text-gray-700 font-semibold text-lg md:text-xl">
                        <li><strong>Ngoại hình:</strong> Lựa chọn những đặc điểm nổi bật, gây ấn tượng nhất (mái tóc, dáng vẻ, nụ cười...).</li>
                        <li><strong>Hoạt động:</strong> Lựa chọn những cử chỉ, lời nói, cách ứng xử thể hiện rõ tính cách của người được tả hoặc việc làm khiến em nhớ mãi.</li>
                        <li><strong>Tính tình, sở thích, sở trường:</strong> Thói quen tốt, tài năng đặc biệt, hoặc tính cách tốt đẹp.</li>
                    </ul>
                </div>
            </div>

            <!-- Kết bài -->
            <div class="p-6 bg-gradient-to-r from-amber-50 to-orange-50/30 rounded-3xl border-2 border-amber-250 flex items-start gap-4">
                <div class="px-4 py-2 bg-amber-600 text-white font-black text-xl rounded-xl whitespace-nowrap">Kết bài</div>
                <div class="text-xl md:text-2xl font-bold text-amber-950 leading-relaxed">
                    Nêu nhận xét, cảm nghĩ về người được tả hoặc những điều em muốn học tập ở người đó.
                </div>
            </div>
        </div>
    </div>
</div>
<script>
let selectedDeIndex = 1;
window.selectDe153 = function(idx) {
    selectedDeIndex = idx;
    const btn1 = document.getElementById('de153-btn-1');
    const btn2 = document.getElementById('de153-btn-2');
    
    if (idx === 1) {
        btn1.className = "p-6 bg-blue-50 rounded-3xl border-4 border-blue-600 text-left transition-all shadow-lg";
        btn2.className = "p-6 bg-emerald-50/40 rounded-3xl border-2 border-emerald-250 hover:border-emerald-600 hover:bg-emerald-50 text-left transition-all shadow-md group";
        UI.showToast("Em đã chọn Đề bài 1: Tả một người em chỉ gặp một vài lần nhưng nhớ mãi.", "info");
    } else {
        btn2.className = "p-6 bg-emerald-50 rounded-3xl border-4 border-emerald-600 text-left transition-all shadow-lg";
        btn1.className = "p-6 bg-blue-50/40 rounded-3xl border-2 border-blue-200 hover:border-blue-600 hover:bg-blue-50 text-left transition-all shadow-md group";
        UI.showToast("Em đã chọn Đề bài 2: Tả một nhân vật chính trong bộ phim hoặc vở kịch.", "info");
    }
    
    // Sync textarea placeholder
    const area = document.getElementById('area-viet153');
    if (area) {
        if (idx === 1) {
            area.placeholder = "Ví dụ đề 1: Trong một lần cùng bố đi dọn dẹp vệ sinh khu phố, em đã gặp bác lao công công ích. Hình ảnh bác cần mẫn quét từng đống rác lớn dưới trời nắng gắt làm em nhớ mãi...";
        } else {
            area.placeholder = "Ví dụ đề 2: Bộ phim hoạt hình 'Cuộc phiêu lưu của chú kiến nhỏ' là bộ phim em yêu thích nhất. Nhân vật kiến chủ tướng vô cùng dũng cảm, thông minh..." ;
        }
    }
};
</script>
`,
    "practice": `
<div class="glass-card rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100/50 bg-white/60 max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
    
    <!-- ✍️ KHÔNG GIAN VIẾT BÀI VĂN -->
    <section class="space-y-6">
        <div class="flex items-center space-x-4 mb-6 justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-650 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <span class="text-xl md:text-3xl text-white">✍️</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">Viết bài văn của em</h2>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
            <div class="text-xl md:text-2xl font-bold text-gray-500 flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                <span>Trạng thái chọn đề: <strong class="text-blue-600" id="current-de-txt">Đề bài 1 (Tả người gặp vài lần)</strong></span>
                <button onclick="window.selectDe153(selectedDeIndex)" class="text-sm font-black bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">Cập nhật đề đã chọn</button>
            </div>

            <textarea id="area-viet153" rows="10" oninput="capNhatDem153()" placeholder="Nhập bài văn của em vào đây..." class="w-full p-6 border-2 border-blue-150 rounded-3xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none text-xl resize-none shadow-sm leading-relaxed"></textarea>
            
            <div class="flex justify-between items-center text-lg font-bold text-gray-500">
                <span id="char-count-153">Độ dài: 0 ký tự (Bài văn tối thiểu cần đạt 100 ký tự)</span>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="nopBaiViet153()" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-xl shadow-md transition-all active:scale-95">Nộp bài văn</button>
            </div>
        </div>
    </section>

    <!-- 🔍 BIỂU MẪU ĐỌC SOÁT BÀI -->
    <section class="space-y-6 border-t-4 border-dashed border-blue-100 pt-10">
        <div class="flex items-center space-x-4 mb-6 justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <span class="text-xl md:text-3xl text-white">🔍</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">Đọc soát và Góp ý bài viết</h2>
        </div>

        <div class="max-w-4xl mx-auto space-y-4 bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-emerald-100">
            <p class="text-xl md:text-2xl font-bold text-emerald-950 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                💡 <strong>Gợi ý hoạt động nhóm:</strong> Em hãy trao đổi bài viết với bạn cùng bàn để đọc soát lỗi chính tả, cách dùng từ, câu văn và điền những ý kiến đóng góp của em dành cho bài viết của bạn dưới đây:
            </p>

            <div class="space-y-4">
                <div class="space-y-2">
                    <label class="text-xl font-black text-gray-750 block">💬 Nhận xét của em về bài viết của bạn (Khen ngợi, ưu điểm nổi bật):</label>
                    <textarea id="gopy-153-1" rows="2" placeholder="Ví dụ: Bài văn của bạn tả rất sinh động, miêu tả chi tiết đôi bàn tay thô ráp của bác bảo vệ khiến mình rất ấn tượng..." class="w-full p-4 border border-gray-200 rounded-2xl font-bold text-xl bg-white text-gray-800 outline-none focus:border-emerald-500"></textarea>
                </div>

                <div class="space-y-2">
                    <label class="text-xl font-black text-gray-750 block">🛠️ Gợi ý điều chỉnh để bài viết của bạn hay hơn (sửa câu lặp từ, sửa lỗi chính tả...):</label>
                    <textarea id="gopy-153-2" rows="2" placeholder="Ví dụ: Bạn nên bổ sung thêm một câu so sánh ở đoạn tả giọng nói để bài viết hay hơn nữa nhé..." class="w-full p-4 border border-gray-200 rounded-2xl font-bold text-xl bg-white text-gray-800 outline-none focus:border-emerald-500"></textarea>
                </div>
            </div>

            <div class="flex justify-center pt-2">
                <button onclick="nopGopY153()" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xl shadow-md transition-all active:scale-95">Lưu góp ý</button>
            </div>
        </div>
    </section>
</div>

<script>
window.capNhatDem153 = function() {
    const txt = document.getElementById('area-viet153').value;
    const counter = document.getElementById('char-count-153');
    if (counter) {
        counter.innerHTML = "Độ dài: " + txt.length + " ký tự (Bài văn tối thiểu cần đạt 100 ký tự)";
    }
    
    // Sync current selected title
    const deTxt = document.getElementById('current-de-txt');
    if (deTxt) {
        deTxt.innerHTML = (selectedDeIndex === 1) ? "Đề bài 1 (Tả người gặp vài lần)" : "Đề bài 2 (Tả nhân vật phim/vở kịch)";
    }
};

window.nopBaiViet153 = function() {
    const txt = document.getElementById('area-viet153').value.trim();
    if (txt.length < 100) {
        UI.showToast("Bài văn của em còn ngắn quá, hãy viết chi tiết hơn để đạt tối thiểu 100 ký tự nhé!", "error");
    } else {
        UI.showToast("Nộp bài văn thành công! Thầy E sẽ chấm điểm cấu trúc và chi tiết tả người của em.", "success");
    }
};

window.nopGopY153 = function() {
    const g1 = document.getElementById('gopy-153-1').value.trim();
    const g2 = document.getElementById('gopy-153-2').value.trim();
    if (!g1 || !g2) {
        UI.showToast("Em hãy điền đầy đủ cả 2 phần nhận xét và góp ý cho bạn nhé!", "warning");
    } else {
        UI.showToast("Đã lưu ý kiến đóng góp của em thành công! Cảm ơn tinh thần tương trợ của em.", "success");
    }
};

// Initial run
setTimeout(() => {
    window.selectDe153(1);
}, 200);
</script>
`,
    "quizPool": [
        {
            "question": "Đề tài 1 trong bài học yêu cầu học sinh tả đối tượng nào?",
            "options": [
                "Tả một người thân thiết nhất trong gia đình em",
                "Tả một người em chỉ gặp một vài lần nhưng để lại ấn tượng sâu sắc, nhớ mãi",
                "Tả một người nổi tiếng hoặc siêu anh hùng trong thế giới giả tưởng",
                "Tả một thầy giáo hoặc cô giáo dạy em từ lớp một"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đối tượng nào sau đây thích hợp nhất để lựa chọn tả cho Đề bài 2?",
            "options": [
                "Một người bạn thân cùng lớp",
                "Nhân vật chú bộ đội hải quân canh gác ngoài đảo xa trong phóng sự truyền hình",
                "Nhân vật chính Simba trong bộ phim hoạt hình 'Vua sư tử' mà em đã xem",
                "Bác bảo vệ trường tiểu học của em"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Nội dung nào thuộc phần Thân bài của bài văn tả người?",
            "options": [
                "Giới thiệu khái quát về người được tả và hoàn cảnh em gặp hoặc biết họ",
                "Miêu tả chi tiết ngoại hình, hoạt động nổi bật, sở thích, tính tình của người đó",
                "Nêu nhận xét, tình cảm suy nghĩ sâu sắc của em hoặc bài học em rút ra",
                "Giải thích ý nghĩa nhan đề bài viết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong phần Mở bài của Đề bài 1, học sinh cần làm rõ chi tiết gì?",
            "options": [
                "Cách ăn mặc thường ngày của đối tượng",
                "Giới thiệu em đã gặp người đó ở đâu, trong hoàn cảnh nào và ấn tượng ban đầu",
                "Kể lại toàn bộ các công việc người đó đã làm",
                "Hứa hẹn sẽ học tập các đức tính tốt của người đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tiêu chí nào thể hiện sự liên kết mạch lạc nhất trong bài văn tả người?",
            "options": [
                "Mỗi đoạn văn tả một bộ phận cơ thể hoàn toàn biệt lập",
                "Sử dụng các câu nối, từ ngữ chuyển ý tự nhiên giữa phần tả ngoại hình và hoạt động",
                "Viết bài văn dài nhất có thể, bất chấp nội dung",
                "Không sử dụng các dấu câu để tránh ngắt quãng cảm xúc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đoạn văn tả ngoại hình của một nhân vật chính trong phim nên tập trung vào điểm gì?",
            "options": [
                "Các chi tiết tả cảnh thiên nhiên xung quanh nhân vật",
                "Các trang phục, đặc điểm gương mặt, cử chỉ đặc trưng tạo nên thương hiệu của nhân vật đó",
                "Tả quá trình đoàn làm phim sản xuất ra bộ phim",
                "Liệt kê danh sách các diễn viên lồng tiếng cho phim"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục đích chính của việc 'Đọc soát bài văn' là gì?",
            "options": [
                "Để tính toán điểm số bài làm",
                "Để phát hiện và sửa các lỗi chính tả, dùng từ lặp, diễn đạt chưa gãy gọn và bổ sung ý hay",
                "Để chép lại bài viết của bạn học khác",
                "Để nộp bài nhanh nhất có thể"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ ngữ nào biểu thị hành động đặc trưng thường dùng trong văn tả người?",
            "options": [
                "đi tuần, quét rác, chăm chú giảng bài, thoăn thoắt",
                "xanh ngắt, bao la, bát ngát",
                "yên tĩnh, thanh vắng, rầm rộ",
                "sông ngòi, núi đồi, thung lũng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý nào nên đưa vào phần Kết bài của bài văn tả người?",
            "options": [
                "Miêu tả màu sắc chiếc áo người đó mặc",
                "Kể lại câu chuyện lúc mới bắt đầu gặp gỡ",
                "Bày tỏ nhận xét, cảm xúc sâu sắc hoặc những điều bản thân muốn học tập ở người đó",
                "Liệt kê sở trường thể thao của nhân vật"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khi tả một người chỉ gặp một vài lần, em nên lựa chọn chi tiết ngoại hình nào để tả?",
            "options": [
                "Tả chi tiết từ kẽ tóc đến gót chân của họ",
                "Lựa chọn một vài đặc điểm nổi bật nhất gây ấn tượng sâu sắc khiến em nhớ mãi",
                "Bỏ qua phần tả ngoại hình, chỉ tả hoạt động",
                "Mô tả ngôi nhà họ đang sinh sống"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu văn nào sau đây bộc lộ cảm xúc rõ nét nhất đối với đối tượng được tả?",
            "options": [
                "Người đó có dáng vẻ rất gầy gò.",
                "Hình ảnh nụ cười hiền hậu của bác bảo vệ hôm đó đã in sâu vào tâm trí em như một ngọn lửa sưởi ấm.",
                "Em nhìn thấy bác ấy đang quét dọn ở góc phố.",
                "Bác ấy làm công việc đó mỗi tuần hai lần."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi 'sinh nghĩa mơ hồ' trong văn tả người là lỗi gì?",
            "options": [
                "Sử dụng quá nhiều tính từ miêu tả",
                "Đặt câu lủng củng khiến người đọc hiểu sai lệch thông tin hoặc không rõ câu nói về ai",
                "Viết chữ quá xấu không đọc được",
                "Dùng từ ngữ Hán Việt cổ trang"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi viết bài văn số 2, học sinh cần làm gì đầu tiên trước khi đặt bút viết chi tiết?",
            "options": [
                "Nộp bài ngay cho giáo viên",
                "Đọc kỹ đề bài, chọn đề tài và lập dàn ý sơ lược các ý cần tả",
                "Đọc bài văn mẫu của các năm trước",
                "Vẽ tranh minh họa nhân vật"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây miêu tả hoạt động phối hợp nhịp nhàng của nhân vật?",
            "options": [
                "Anh ấy rất thích đọc sách truyện.",
                "Đôi tay anh thoăn thoắt nhặt rau, miệng vẫn vui vẻ huýt sáo theo điệu nhạc.",
                "Anh có vóc dáng cân đối và chiều cao nổi bật.",
                "Mái tóc anh được cắt gọn gàng, nam tính."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Hoạt động 'góp ý bài viết của bạn' giúp học sinh phát triển năng lực nào?",
            "options": [
                "Năng lực tự chủ và tự học, khả năng giao tiếp và hợp tác nhóm, cùng tư duy phản biện",
                "Năng lực tính toán số lượng từ ngữ",
                "Khả năng học thuộc lòng nhanh chóng",
                "Khả năng viết chữ đẹp sắc sảo"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};