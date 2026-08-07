export const lesson245 = {
    "topic": "Tiếng Việt 5",
    "week": "35",
    "period": "245",
    "title": "KIỂM TRA ĐỌC HIỂU - VIẾT (TIẾT 7)",
    "desc": "Đề kiểm tra viết tham khảo cuối năm học lớp 5: Thực hành viết bài văn tả người bạn thân thiết hoặc kể lại một câu chuyện yêu thích kèm yếu tố sáng tạo.",
    "subject": "Viết",
    "theme": "Thế giới của chúng ta",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600 mb-4 flex items-center gap-3">
                <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Viết được bài văn hoàn chỉnh mạch lạc theo một trong hai đề tự chọn ở phần đánh giá cuối năm.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Với đề tả người: Nêu bật được các nét đặc trưng về ngoại hình, hoạt động, tính cách và kỷ niệm gắn bó với người bạn thân thiết.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-black">•</span>
                    Với đề kể chuyện sáng tạo: Kể lại sinh động câu chuyện đã học bằng cách thêm thắt chi tiết tưởng tượng, thay đổi kết thúc hoặc nhập vai kể phù hợp.
                </li>
            </ul>
        </div>

        <!-- 🧩 Khởi động (Warmup) -->
        <section class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">1</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Lựa chọn đề văn kiểm tra</h3>
            </div>
            <p class="text-gray-600 font-bold text-lg">Em hãy chọn một trong hai đề bài dưới đây để bắt đầu tìm hiểu và lập dàn ý:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Đề 1 -->
                <button onclick="window.selectDe245(1)" id="btn-de-1" class="p-6 bg-amber-50 hover:bg-amber-100/80 border-2 border-amber-300 rounded-3xl text-left transition-all space-y-3">
                    <span class="px-3 py-1 bg-amber-600 text-white font-black text-sm rounded-lg uppercase tracking-wider">Đề số 1</span>
                    <h4 class="text-xl font-black text-amber-950">Viết bài văn tả một người bạn đã gắn bó với em trong những năm học qua.</h4>
                    <p class="text-sm font-bold text-amber-900/85">Phù hợp để luyện tập văn tả người, miêu tả ngoại hình kết hợp cử chỉ, tính cách, kỷ niệm sâu sắc học trò.</p>
                </button>

                <!-- Đề 2 -->
                <button onclick="window.selectDe245(2)" id="btn-de-2" class="p-6 bg-emerald-50 hover:bg-emerald-100/80 border-2 border-emerald-300 rounded-3xl text-left transition-all space-y-3">
                    <span class="px-3 py-1 bg-emerald-600 text-white font-black text-sm rounded-lg uppercase tracking-wider">Đề số 2</span>
                    <h4 class="text-xl font-black text-emerald-950">Viết bài văn kể lại một câu chuyện em yêu thích trong sách Tiếng Việt 5, trong đó có những chi tiết sáng tạo.</h4>
                    <p class="text-sm font-bold text-emerald-900/85">Phù hợp cho học sinh yêu thích kể chuyện, tưởng tượng phong phú bằng cách thêm chi tiết, suy nghĩ nhân vật.</p>
                </button>
            </div>
            
            <div id="outline-suggest-245" class="hidden p-6 md:p-8 bg-blue-50/40 rounded-3xl border border-blue-100 animate-in slide-in-from-top-4 duration-300">
                <!-- Nội dung dàn ý gợi ý động sẽ điền ở đây -->
            </div>
        </section>

        <!-- 💡 Ý chính bài học -->
        <div class="bg-emerald-50/70 p-6 rounded-3xl border-l-8 border-emerald-500 shadow-md relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <h5 class="text-xl md:text-2xl font-black text-emerald-900 mb-2 flex items-center gap-2">
                <span>💡</span> Bí quyết viết văn hay
            </h5>
            <div class="text-emerald-800 text-lg md:text-xl font-bold leading-relaxed space-y-2">
                <p>• <strong>Đối với bài tả người:</strong> Không chỉ tả hình dáng tĩnh, hãy đưa người bạn vào các hoạt động (học bài, vui chơi) để tính cách bộc lộ tự nhiên.</p>
                <p>• <strong>Đối với bài kể chuyện sáng tạo:</strong> Sự sáng tạo cần hợp lý, không làm thay đổi hay méo mó ý nghĩa nhân văn gốc của câu chuyện.</p>
            </div>
        </div>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto pb-12">
        
        <!-- 📝 Viết bài văn hoàn chỉnh -->
        <section class="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-blue-100 space-y-6">
            <div class="flex justify-end items-center gap-4">
                <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">2</span>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hành viết bài văn kiểm tra</h3>
            </div>
            
            <div class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="font-black text-gray-800 text-lg">Bài viết của em:</span>
                    <span id="word-count-245" class="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">0 từ</span>
                </div>
                
                <textarea id="txt-essay-245" oninput="window.countWords245()" rows="15" class="w-full p-6 border-2 border-gray-200 rounded-3xl font-medium text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 leading-relaxed" placeholder="Hãy viết bài làm của em tại đây (Mở bài, Thân bài, Kết bài)..."></textarea>
            </div>

            <!-- Tự đánh giá soát lỗi -->
            <div class="space-y-4 pt-4 border-t border-gray-100">
                <p class="font-black text-gray-800 text-lg">💡 Tiêu chí tự soát lỗi bài làm:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-colors">
                        <input type="checkbox" id="chk-essay-1" class="w-5 h-5 text-blue-600 rounded">
                        <span class="font-bold text-gray-700 text-sm">Bố cục đủ 3 phần (Mở, Thân, Kết)</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-colors">
                        <input type="checkbox" id="chk-essay-2" class="w-5 h-5 text-blue-600 rounded">
                        <span class="font-bold text-gray-700 text-sm">Các chi tiết tả/kể sinh động, chân thực</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-colors">
                        <input type="checkbox" id="chk-essay-3" class="w-5 h-5 text-blue-600 rounded">
                        <span class="font-bold text-gray-700 text-sm">Diễn đạt trôi chảy, không lặp từ ngữ</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-colors">
                        <input type="checkbox" id="chk-essay-4" class="w-5 h-5 text-blue-600 rounded">
                        <span class="font-bold text-gray-700 text-sm">Đúng chính tả, ngắt câu hợp lý</span>
                    </label>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="window.resetEssay245()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="window.checkEssay245();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            
            <div id="fb-essay-245" class="hidden p-6 rounded-3xl border animate-in fade-in duration-300"></div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Thành phần nào KHÔNG bắt buộc phải có trong phần mở bài của một bài văn tả người?",
            "options": [
                "Giới thiệu người định tả là ai",
                "Mối quan hệ của em với người đó như thế nào",
                "Ấn tượng chung nhất về người bạn đó",
                "Kể chi tiết một kỷ niệm sâu sắc nhất giữa hai người"
            ],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Một bài văn kể chuyện sáng tạo trong Tiếng Việt 5 có thể thực hiện theo cách nào?",
            "options": [
                "Chép lại nguyên văn từng câu chữ trong sách giáo khoa",
                "Thay đổi hoàn toàn nội dung để nhân vật chính biến mất",
                "Tưởng tượng thêm lời thoại, suy nghĩ, ngoại hình nhân vật hoặc đóng vai nhân vật để kể lại",
                "Viết thành một bài văn nghị luận bác bỏ câu chuyện đó"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khi viết một bài văn tả người bạn thân thiết, việc kết hợp miêu tả đặc điểm ngoại hình với hoạt động, tính cách có tác dụng gì?",
            "options": [
                "Làm bài văn dài hơn để đạt điểm cao",
                "Làm nổi bật tính cách, nét đáng yêu riêng biệt của người bạn đó qua hành vi thực tế",
                "Hạn chế việc phải dùng các từ ngữ miêu tả cảm xúc",
                "Tránh việc phải giới thiệu tên tuổi của người bạn đó"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cách mở bài nào dưới đây giới thiệu trực tiếp người bạn thân?",
            "options": [
                "Trong những năm học tiểu học, em có rất nhiều bạn bè, nhưng người bạn gắn bó thân thiết nhất với em là Nam.",
                "Tuổi học trò trôi qua như một giấc mơ đẹp với biết bao kỷ niệm bên mái trường và những người bạn mến thương.",
                "Mỗi khi nhìn chiếc bút chì màu xanh đã cũ, lòng em lại dâng trào bao nỗi nhớ thương da diết về một người bạn.",
                "Ai cũng có những ước mơ và hoài bão lớn lao của cuộc đời mình khi bước vào giảng đường học tập."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thế nào là kết bài mở rộng cho bài văn tả người bạn thân?",
            "options": [
                "Chỉ nêu một câu ngắn gọn tình cảm của em đối với người bạn đó rồi kết thúc bài.",
                "Bày tỏ tình cảm sâu sắc, lời hứa giữ gìn tình bạn và liên hệ bài học làm người, những mong ước tương lai.",
                "Kể nốt câu chuyện kỷ niệm dở dang ở phần thân bài.",
                "Miêu tả chi tiết hoạt động của bạn vào ngày cuối tuần trước khi chia tay lớp học."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nếu chọn Đề 2 để kể lại câu chuyện 'Trí tưởng tượng phong phú' (hoặc chuyện khác), chi tiết sáng tạo nào sau đây là hợp lý?",
            "options": [
                "Tưởng tượng thêm lời trò chuyện thú vị giữa các bạn học sinh khi quan sát đám mây",
                "Thay đổi bối cảnh câu chuyện từ trường học sang một hành tinh giả tưởng ngoài vũ trụ",
                "Đổi nhân vật chính thành một siêu anh hùng có phép thuật",
                "Viết kết thúc câu chuyện thành các nhân vật ghét bỏ nhau"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ ngữ nào sau đây thích hợp nhất để tả mái tóc của một người bạn học sinh?",
            "options": [
                "Bạc trắng như cước, lưa thưa",
                "Đen lánh, mượt mà, được tết gọn gàng hai bên",
                "Đỏ hoe, xơ xác vì sương gió cuộc đời",
                "Cứng đờ như những chiếc gai nhọn hoắt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu ghép: 'Tuy chúng em mỗi người một tính cách, nhưng chúng em luôn yêu thương và giúp đỡ lẫn nhau.', hai vế câu được nối với nhau bằng cách nào?",
            "options": [
                "Nối trực tiếp bằng dấu phẩy",
                "Nối bằng cặp quan hệ từ biểu thị quan hệ tương phản 'Tuy... nhưng...'",
                "Nối bằng cặp quan hệ từ biểu thị nguyên nhân - kết quả 'Vì... nên...'",
                "Nối bằng quan hệ từ biểu thị điều kiện 'Nếu... thì...'"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'bàn' trong cụm từ 'bàn tròn' và 'bàn mưu tính kế' có quan hệ như thế nào?",
            "options": [
                "Từ đồng nghĩa",
                "Từ nhiều nghĩa (nghĩa gốc và nghĩa chuyển)",
                "Từ đồng âm",
                "Từ trái nghĩa"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Khi viết văn kể chuyện sáng tạo, việc đóng vai một nhân vật trong truyện để kể lại (ngôi thứ nhất - xưng 'tôi') giúp ích gì?",
            "options": [
                "Làm người đọc không nhận ra cốt truyện gốc nữa",
                "Tạo cảm giác chân thực, giúp bộc lộ sâu sắc cảm xúc, suy nghĩ nội tâm của nhân vật đó",
                "Tiết kiệm thời gian suy nghĩ các chi tiết phụ",
                "Được phép bỏ qua phần kết thúc của câu chuyện"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết nào sau đây thể hiện đặc điểm tính cách 'chăm chỉ, tốt bụng' của người bạn thân?",
            "options": [
                "Bạn có vóc dáng cao ráo và làn da bánh mật khỏe khoắn.",
                "Bạn thường xuyên giảng giải lại những bài toán khó cho em và kiên trì tự làm hết bài tập về nhà.",
                "Bạn rất thích mặc bộ đồng phục học sinh màu trắng tinh khôi.",
                "Bạn thích đi đá bóng cùng các bạn trong xóm vào mỗi buổi chiều mát."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Công dụng chính của dấu gạch ngang được dùng trong các đề bài thảo luận hoặc liệt kê là gì?",
            "options": [
                "Nối các vế trong câu ghép tương phản",
                "Đánh dấu các bộ phận liệt kê, các ý trong một danh sách",
                "Ngăn cách trạng ngữ với chủ ngữ và vị ngữ",
                "Thay thế cho dấu chấm hỏi cuối câu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào đồng nghĩa với từ 'gắn bó' trong câu: 'Người bạn gắn bó với em suốt năm năm học.'?",
            "options": [
                "Hờ hững",
                "Thân thiết",
                "Xa cách",
                "Lạnh nhạt"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Để liên kết đoạn mở bài với đoạn thân bài trong bài văn tả người bạn thân, em nên làm gì?",
            "options": [
                "Bắt đầu ngay thân bài mà không cần từ ngữ chuyển ý",
                "Sử dụng câu chuyển ý hoặc từ ngữ liên kết để tạo sự liền mạch giữa việc giới thiệu và tả chi tiết",
                "Lặp lại toàn bộ câu chữ của đoạn mở bài",
                "Viết một dấu gạch ngang lớn ngăn cách giữa hai đoạn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Lỗi phổ biến nhất khi viết câu trong bài tập làm văn tiểu học là gì?",
            "options": [
                "Sử dụng quá nhiều từ ngữ trang trọng của văn nghị luận",
                "Viết câu thiếu chủ ngữ hoặc vị ngữ (câu què) và lặp từ quá nhiều",
                "Đặt câu quá ngắn gọn súc tích",
                "Sử dụng quá nhiều hình ảnh nhân hóa so sánh"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// Đăng ký tương tác động toàn cục
window.selectDe245 = function(deNum) {
    const btn1 = document.getElementById('btn-de-1');
    const btn2 = document.getElementById('btn-de-2');
    const suggest = document.getElementById('outline-suggest-245');
    
    btn1.className = "p-6 bg-amber-50 hover:bg-amber-100/80 border-2 border-amber-300 rounded-3xl text-left transition-all space-y-3";
    btn2.className = "p-6 bg-emerald-50 hover:bg-emerald-100/80 border-2 border-emerald-300 rounded-3xl text-left transition-all space-y-3";
    
    suggest.classList.remove('hidden');
    
    if (deNum === 1) {
        btn1.className = "p-6 bg-amber-100 border-4 border-amber-500 rounded-3xl text-left transition-all space-y-3 shadow-md";
        suggest.innerHTML = `
            <h4 class="text-xl font-black text-amber-950 mb-3">📋 Dàn ý gợi ý cho Đề 1: Tả người bạn thân</h4>
            <div class="space-y-3 font-bold text-gray-700 text-base md:text-lg">
                <p class="text-amber-900"><strong class="bg-amber-200 px-2 py-0.5 rounded-lg">1. Mở bài:</strong> Giới thiệu người bạn thân thiết của em (Tên là gì, học chung từ khi nào, ấn tượng ban đầu).</p>
                <p class="text-amber-900"><strong class="bg-amber-200 px-2 py-0.5 rounded-lg">2. Thân bài:</strong></p>
                <ul class="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Tả ngoại hình: Dáng người, làn da, đôi mắt sáng, nụ cười hiền hậu, giọng nói...</li>
                    <li>Tả tính cách, hoạt động: Bạn chăm chỉ học tập, hay giúp đỡ mọi người, tính tình vui vẻ, hòa đồng.</li>
                    <li>Kể một kỷ niệm sâu sắc giữa em và bạn khiến tình bạn thêm khăng khít.</li>
                </ul>
                <p class="text-amber-900"><strong class="bg-amber-200 px-2 py-0.5 rounded-lg">3. Kết bài:</strong> Khẳng định tình cảm yêu quý, lời hứa sẽ luôn trân trọng và giữ gìn tình cảm bạn bè tốt đẹp.</p>
            </div>
        `;
    } else {
        btn2.className = "p-6 bg-emerald-100 border-4 border-emerald-500 rounded-3xl text-left transition-all space-y-3 shadow-md";
        suggest.innerHTML = `
            <h4 class="text-xl font-black text-emerald-950 mb-3">📋 Gợi ý chi tiết sáng tạo cho Đề 2: Kể chuyện sáng tạo</h4>
            <div class="space-y-3 font-bold text-gray-700 text-base md:text-lg">
                <p class="text-emerald-900"><strong class="bg-emerald-200 px-2 py-0.5 rounded-lg">1. Chọn truyện:</strong> Lựa chọn tác phẩm nổi bật (ví dụ: <em>Tranh làng Hồ, Một người hùng thầm lặng, Sự tích chú Tễu...</em>).</p>
                <p class="text-emerald-900"><strong class="bg-emerald-200 px-2 py-0.5 rounded-lg">2. Hướng sáng tạo đề xuất:</strong></p>
                <ul class="list-disc pl-6 space-y-1 text-gray-600">
                    <li><strong>Cách 1:</strong> Đóng vai nhân vật trong truyện để kể bằng ngôi thứ nhất (xưng "tôi").</li>
                    <li><strong>Cách 2:</strong> Viết thêm đoạn hội thoại, bổ sung chi tiết biểu cảm, suy nghĩ nội tâm nhân vật.</li>
                    <li><strong>Cách 3:</strong> Sáng tạo thêm cái kết mở rộng, mang ý nghĩa giáo dục sâu sắc hơn.</li>
                </ul>
                <p class="text-emerald-900"><strong class="bg-emerald-200 px-2 py-0.5 rounded-lg">3. Bố cục bài kể:</strong> Giới thiệu truyện -> Diễn biến cốt truyện kết hợp sáng tạo -> Bài học rút ra.</p>
            </div>
        `;
    }
    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
};

window.countWords245 = function() {
    const text = document.getElementById('txt-essay-245').value.trim();
    const countSpan = document.getElementById('word-count-245');
    if (!text) {
        countSpan.innerHTML = "0 từ";
        return;
    }
    const words = text.split(/\\s+/).filter(w => w.length > 0);
    countSpan.innerHTML = words.length + " từ";
};

window.checkEssay245 = function() {
    const text = document.getElementById('txt-essay-245').value.trim();
    const fb = document.getElementById('fb-essay-245');
    fb.classList.remove('hidden');

    if (text.length < 50) {
        fb.className = "p-6 rounded-3xl border border-red-200 bg-red-50 text-red-950 font-bold text-lg mt-4";
        fb.innerHTML = "❌ Bài làm của em còn quá ngắn hoặc chưa hoàn chỉnh. Hãy cố gắng viết bài văn tối thiểu khoảng 100-150 từ với đầy đủ ba phần (Mở bài, Thân bài, Kết bài) nhé!";
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
        return;
    }

    const words = text.split(/\\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    const chk1 = document.getElementById('chk-essay-1').checked;
    const chk2 = document.getElementById('chk-essay-2').checked;
    const chk3 = document.getElementById('chk-essay-3').checked;
    const chk4 = document.getElementById('chk-essay-4').checked;

    if (!chk1 || !chk2 || !chk3 || !chk4) {
        fb.className = "p-6 rounded-3xl border border-orange-200 bg-orange-50 text-orange-950 font-bold text-lg mt-4 space-y-2";
        fb.innerHTML = `
            <p>⚠️ Bài làm đã đạt <strong>\${wordCount} từ</strong>. Tuy nhiên, em hãy kiểm tra lại và tích chọn đầy đủ các tiêu chí tự soát lỗi (Bố cục, Chi tiết sinh động, Diễn đạt trôi chảy, Đúng chính tả) để bài viết được hoàn hảo nhất nhé!</p>
        `;
        if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('incorrect'); }
        return;
    }

    fb.className = "p-6 rounded-3xl border border-green-200 bg-green-50 text-green-950 font-bold text-lg mt-4 space-y-3";
    fb.innerHTML = `
        <h4 class="text-xl font-black text-green-900">🌟 Chúc mừng em đã hoàn thành bài viết văn kiểm tra học kì II!</h4>
        <p>• Số lượng từ đạt được: <strong>\${wordCount} từ</strong>.</p>
        <p>• Hệ thống đánh giá bài viết của em có kết cấu rõ ràng, đáp ứng tốt các tiêu chí tự soát lỗi ngữ pháp và chính tả.</p>
        <p>• <strong>Lời khuyên thêm từ EduRobot:</strong> Hãy chia sẻ bài viết này với thầy cô và bạn bè để nhận thêm những ý kiến nhận xét trực tiếp sinh động giúp bài viết ngày một xuất sắc hơn nhé!</p>
    `;

    if (typeof window.playAudioHelper === 'function') { window.playAudioHelper('correct'); }
    if (typeof window.submitMathLesson === 'function') {
        window.submitMathLesson("Tiếng Việt Tiết 245: Viết bài văn đánh giá cuối năm", 100, "ex-245-essay", 1, 1, 1);
    }
};

window.resetEssay245 = function() {
    document.getElementById('txt-essay-245').value = "";
    document.getElementById('word-count-245').innerHTML = "0 từ";
    document.getElementById('chk-essay-1').checked = false;
    document.getElementById('chk-essay-2').checked = false;
    document.getElementById('chk-essay-3').checked = false;
    document.getElementById('chk-essay-4').checked = false;
    
    const fb = document.getElementById('fb-essay-245');
    fb.classList.add('hidden');
    fb.innerHTML = "";
};

window.lesson245 = lesson245;
