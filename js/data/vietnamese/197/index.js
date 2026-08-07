export const lesson197 = {
    "title": "Danh y Tuệ Tĩnh",
    "week": 29,
    "subject": "Đọc",
    "theme": "Tiếp bước cha ông",
    "audio": "am_thanh/291-danh-y-tue-tinh.mp3",
    "content": `<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl">
                        <div class="bg-paper rounded-[32px] p-8 md:p-12 shadow-inner border border-white/50 relative overflow-hidden">
                            <!-- Trang trí góc -->
                            <div class="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                            <h1 class="text-2xl md:text-4xl font-black mb-12 text-blue-950 text-center uppercase tracking-tighter leading-tight relative">
                                <span class="bg-blue-600 w-12 h-1.5 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></span>
                                Danh y Tuệ Tĩnh
                            </h1>

                            <div class="serif-font text-gray-800 leading-relaxed relative reading-content text-lg md:text-4xl">
                                <div class="mb-8">
                                    <img src="assets/images/tiengviet_5_2/197/197-1.png" alt="Danh y Tuệ Tĩnh và học trò" class="w-full h-auto rounded-3xl shadow-lg border-4 border-white">
                                </div>

                                <div class="mb-8">
                                    <img src="assets/images/tiengviet_5_2/197/197-4.png" alt="Vườn thuốc Nam" class="w-full h-auto rounded-3xl shadow-lg border-4 border-white">
                                </div>
                            </div>
                        </div>

                        <!-- Nội dung chính -->
                        <div class="mt-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div class="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg shrink-0 text-center min-w-[160px]">
                                    <p class="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-blue-100 mb-1">Thông điệp</p>
                                    <h3 class="text-2xl md:text-5xl font-black uppercase tracking-tight">Ý NGHĨA</h3>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-lg md:text-3xl font-bold leading-relaxed text-blue-50">
                                        Bài đọc ca ngợi danh y Tuệ Tĩnh – người đã có công lớn trong việc khai sáng và xây dựng nền y học cổ truyền Việt Nam. Ông là tấm gương sáng về lòng yêu nước, tinh thần tự lực tự cường và lòng tự hào dân tộc với chủ trương "Nam dược trị Nam nhân".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- Cột phải (30%) - Tìm hiểu bài -->
</div>`,

    "practice": (UI) => {
        const pairs = [
            { left: "Tuệ Tĩnh", right: "một danh y sống ở giai đoạn cuối thời Trần, được hậu thế suy tôn là tiên thánh của ngành thuốc Nam." },
            { left: "Núi Nam Tào, Bắc Đẩu", right: "hai ngọn núi ở tỉnh Hải Dương." }
        ];

        const matchingHtml = window.Lesson.renderMatchingExercise(
            '197-vocab',
            'Bài tập 2: Nối từ ngữ với nghĩa tương ứng',
            pairs
        );

        return `
<div class="space-y-12 max-w-4xl mx-auto">
    <!-- PHẦN TÌM HIỂU BÀI -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-orange-50/30 border-2 border-orange-100">
            <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-10 flex items-start gap-6">
                <span class="bg-orange-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl font-serif">?</span>
                <span class="border-b-4 border-orange-400 pb-2">Bài tập 1: Tìm hiểu bài đọc</span>
            </h2>

            <div class="lesson-questions space-y-6 text-2xl md:text-3xl leading-relaxed text-gray-950 font-medium">
                <!-- CÂU 1 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q1">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">1.</span> Danh y Tuệ Tĩnh dẫn các học trò lên núi Nam Tào, Bắc Đẩu để nói với các trò điều gì?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <p class="text-emerald-950 font-bold mt-2">Tuệ Tĩnh dẫn các học trò lên núi Nam Tào, Bắc Đẩu để nói về ý nguyện của mình: "Ta muốn từ nay về sau, dân ta có thể dùng thuốc Nam để chữa bệnh cho người Nam."</p>
                        </div>
                    </div>
                </div>

                <!-- CÂU 2 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q2">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">2.</span> Câu chuyện mà Tuệ Tĩnh kể cho học trò nghe xảy ra vào thời gian nào? Tình hình đất nước lúc bấy giờ ra sao?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <p class="text-emerald-950 font-bold mt-2">Câu chuyện xảy ra vào thời nhà Trần, khi giặc ngoại xâm đe doạ. Tình hình đất nước lúc bấy giờ rất khó khăn: thuốc men từ phương Bắc bị cấm vận chuyển sang, nước ta lâm vào tình cảnh thiếu thuốc chữa bệnh trầm trọng.</p>
                        </div>
                    </div>
                </div>

                <!-- CÂU 3 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q3">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">3.</span> Tóm tắt nội dung câu chuyện mà Tuệ Tĩnh đã kể.</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <div class="text-emerald-950 font-bold mt-2 space-y-2">
                                <p>Thời nhà Trần, giặc ngoại xâm đe doạ, thuốc men từ phương Bắc bị cấm vận chuyển sang. Các thái y đời Trần đã tìm tòi, học hỏi cách chữa bệnh bằng cây cỏ dân gian (thuốc Nam). Nhờ thuốc Nam, quân sĩ nhà Trần khoẻ mạnh, hùng mạnh, can trường, góp phần chiến thắng kẻ thù.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CÂU 4 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q4">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">4.</span> Theo em, vì sao ý nguyện của Tuệ Tĩnh trở thành hiện thực và tiếp tục được kế thừa, phát huy cho đến ngày hôm nay?</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Đáp án:</p>
                            <div class="text-emerald-950 font-bold mt-2 space-y-2">
                                <p>Vì ý nguyện của ông đúng đắn, hợp lòng dân. Cây cỏ nước ta rất phong phú, có giá trị chữa bệnh cao. Các thế hệ sau đã tiếp tục nghiên cứu, phát triển nền y học cổ truyền dân tộc theo tư tưởng "Nam dược trị Nam nhân", mang lại nhiều lợi ích cho nhân dân.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CÂU 5 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q5">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-600 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">5.</span> Nêu cảm nghĩ của em về danh y Tuệ Tĩnh.</span>
                        <span class="text-lg md:text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> Gợi ý:</p>
                            <p class="text-emerald-950 font-bold mt-2">Em rất khâm phục danh y Tuệ Tĩnh. Ông là người có lòng yêu nước, thương dân sâu sắc, tinh thần tự lực tự cường. Ông đã dành cả đời nghiên cứu cây cỏ nước nhà để chữa bệnh cho nhân dân. Tấm gương của ông xứng đáng được kính trọng và noi theo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bài tập 2: Nối cặp -->
    <div>
        \${matchingHtml}
    </div>

    <!-- Bài tập 3: Chia sẻ cảm nhận qua AI -->
    <section class="bg-white/80 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <span class="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-2xl md:text-3xl shadow-md shrink-0">3</span>
            <h3 class="text-3xl md:text-4xl font-black text-blue-600">Bài tập 3: Chia sẻ cảm nghĩ</h3>
        </div>
        <p class="text-xl md:text-2xl font-semibold text-slate-700">Viết đoạn văn ngắn (3 – 5 câu) nêu cảm nghĩ của em về danh y Tuệ Tĩnh sau khi học xong bài đọc.</p>

        <div class="p-6 bg-amber-50/30 border border-amber-100 rounded-3xl space-y-4">
            <textarea id="essay-197" rows="4" class="w-full p-4 rounded-xl border border-slate-250 focus:ring-4 focus:ring-blue-100 outline-none text-xl md:text-2xl font-semibold" placeholder="Nhập đoạn văn của em tại đây..."></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="check197EssayAI();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-197-essay-ai" class="w-full hidden mt-4"></div>
        </div>
    </section>
</div>

<script>
    window.check197EssayAI = async function() {
        const text = document.getElementById('essay-197').value.trim();
        if (!text) {
            alert('Em hãy nhập đoạn văn cảm nghĩ trước khi gửi nhé!');
            return;
        }

        const fb = document.getElementById('fb-197-essay-ai');
        fb.classList.remove('hidden');
        fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg text-sky-900 animate-pulse text-center">EduRobot đang xem bài viết cảm nghĩ của em, chờ một chút nhé...</div>';

        const prompt = \`Học sinh lớp 5 viết đoạn văn (3-5 câu) nêu cảm nghĩ về danh y Tuệ Tĩnh sau khi học bài đọc "Danh y Tuệ Tĩnh". Tuệ Tĩnh (Nguyễn Bá Tĩnh) sống cuối thời Trần, được hậu thế suy tôn là tiên thánh ngành thuốc Nam. Ông có ý nguyện "Nam dược trị Nam nhân".\\nĐoạn văn của học sinh: "\${text}"\\nHãy nhận xét bài làm chi tiết (khen ngợi điểm tốt, chỉ ra lỗi chính tả hoặc diễn đạt nếu có) và khích lệ lòng yêu nước, tự hào dân tộc. Xưng hô "Thầy/Cô" và gọi học sinh là "em".\`;

        await askAI('197-essay-ai', prompt, 'single', 'writing', 29, prompt);
    };
</script>
        `;
    },
    
    "quizPool": [
        {
                "question": "Danh y Tuệ Tĩnh sống vào triều đại nào trong lịch sử Việt Nam?",
                "options": [
                        "Nhà Lý",
                        "Nhà Trần",
                        "Nhà Lê",
                        "Nhà Nguyễn"
                ],
                "answer": 1
        },
        {
                "question": "Địa điểm ông dẫn học trò lên là đâu?",
                "options": [
                        "Núi Tản Viên",
                        "Núi Yên Tử",
                        "Núi Nam Tào, Bắc Đẩu",
                        "Núi Ngự Bình"
                ],
                "answer": 2
        },
        {
                "question": "Khó khăn lớn nhất về y tế mà nước ta gặp phải khi giặc ngoại xâm đe dọa là gì?",
                "options": [
                        "Thiếu thầy thuốc giỏi",
                        "Dân số quá đông",
                        "Thuốc men từ phương Bắc bị cấm vận chuyển sang",
                        "Không có bệnh viện"
                ],
                "answer": 2
        },
        {
                "question": "Để khắc phục tình trạng thiếu thuốc, các thái y đời Trần đã làm gì?",
                "options": [
                        "Đầu hàng giặc để xin thuốc",
                        "Tìm tòi, học hỏi cách chữa bệnh bằng cây cỏ dân gian (thuốc Nam)",
                        "Mua thuốc từ các nước phương Tây",
                        "Cầu khấn thần linh"
                ],
                "answer": 1
        },
        {
                "question": "Theo lời Tuệ Tĩnh, yếu tố nào đã góp phần giúp quân dân nhà Trần chiến thắng kẻ thù?",
                "options": [
                        "Vũ khí hiện đại",
                        "Cây cỏ nước Nam giúp quân đội hùng mạnh, can trường",
                        "Sự giúp đỡ của nước ngoài",
                        "Thời tiết thuận lợi"
                ],
                "answer": 1
        },
        {
                "question": "'Thuốc Nam' được hiểu là gì?",
                "options": [
                        "Thuốc do người tên Nam chế tạo",
                        "Thuốc nhập khẩu từ phía Nam",
                        "Thuốc được chế biến từ cây cỏ, dược liệu có sẵn tại nước Nam (Việt Nam)",
                        "Thuốc chỉ dành cho nam giới"
                ],
                "answer": 2
        },
        {
                "question": "Tư tưởng chủ đạo của Tuệ Tĩnh qua câu 'Nam dược trị Nam nhân' là gì?",
                "options": [
                        "Bài trừ thuốc nước ngoài hoàn toàn",
                        "Đề cao tinh thần tự chủ, dùng thuốc của nước mình chữa bệnh cho người mình",
                        "Chỉ chữa bệnh cho người nghèo",
                        "Khuyên mọi người không nên uống thuốc"
                ],
                "answer": 1
        },
        {
                "question": "Thái độ của Tuệ Tĩnh đối với cây cỏ nước nhà như thế nào?",
                "options": [
                        "Coi thường, cho là cỏ dại",
                        "Thờ ơ, không quan tâm",
                        "Trân trọng, tin tưởng vào giá trị chữa bệnh của chúng",
                        "Lo lắng vì cây cỏ có độc"
                ],
                "answer": 2
        },
        {
                "question": "Việc phát triển vườn thuốc Nam thể hiện truyền thống gì của dân tộc?",
                "options": [
                        "Truyền thống hiếu học",
                        "Truyền thống tự lực, tự cường và sáng tạo trong lao động",
                        "Truyền thống ngoại giao",
                        "Truyền thống văn nghệ"
                ],
                "answer": 1
        },
        {
                "question": "Danh y Tuệ Tĩnh được hậu thế tôn vinh là gì?",
                "options": [
                        "Ông tổ nghề mộc",
                        "Ông tổ ngành thuốc Nam (Thánh thuốc Nam)",
                        "Trạng nguyên trẻ nhất",
                        "Nhà thơ lớn nhất"
                ],
                "answer": 1
        },
        {
                "question": "Ý nguyện của Tuệ Tĩnh nhắn nhủ học trò là gì?",
                "options": [
                        "Phải đi du học nước ngoài",
                        "Phải làm quan to",
                        "Tiếp nối việc dùng thuốc Nam chữa bệnh cho dân ta",
                        "Viết sách lịch sử"
                ],
                "answer": 2
        },
        {
                "question": "Trong câu chuyện, cây cỏ thiên nhiên Việt Nam được ví như điều gì đối với quân đội?",
                "options": [
                        "Vũ khí sát thương",
                        "Nguồn sức mạnh bảo vệ sức khỏe",
                        "Lương thực dự trữ",
                        "Vật trang trí"
                ],
                "answer": 1
        },
        {
                "question": "Bài đọc thuộc chủ điểm nào?",
                "options": [
                        "Cánh chim hòa bình",
                        "Tiếp bước cha ông",
                        "Vẻ đẹp muôn màu",
                        "Những người quả cảm"
                ],
                "answer": 1
        },
        {
                "question": "Qua bài đọc, em học được điều gì từ danh y Tuệ Tĩnh?",
                "options": [
                        "Cách leo núi giỏi",
                        "Lòng yêu nước và ý thức trân trọng nguồn tài nguyên sẵn có của quê hương",
                        "Cách trồng cây cảnh",
                        "Cách đối phó với người lạ"
                ],
                "answer": 1
        },
        {
                "question": "Dòng nào dưới đây giải thích đúng từ 'can trường'?",
                "options": [
                        "Sợ hãi, bỏ chạy",
                        "Gan dạ, không sợ nguy hiểm, khó khăn",
                        "Yếu đuối, mệt mỏi",
                        "Thông minh, nhanh trí"
                ],
                "answer": 1
        }
]
};
