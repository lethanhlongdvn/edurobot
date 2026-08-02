// Bài 1 Tiết 2: Quốc kì, Quốc huy, Quốc ca
// VBT Lịch sử & Địa lí 5 - KNTT: Bài 1 (Phần 3)
export const lesson002 = {
    topic: 'Địa lí Việt Nam',
    week: '1',
    period: '2',
    title: 'Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 2)',
    description: 'Tìm hiểu và khám phá ý nghĩa sâu sắc của các biểu tượng quốc gia Việt Nam theo sách giáo khoa mới.',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-red-600 via-red-500 to-amber-500 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-full mb-4 text-xl md:text-2xl font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🇻🇳</span> Chủ đề: Địa lí Việt Nam
                </div>
                <h1 class="text-4xl md:text-5xl font-black mb-3 leading-tight">Các biểu tượng quốc gia</h1>
                <p class="text-2xl md:text-3xl font-bold opacity-90 max-w-3xl leading-relaxed">Tìm hiểu ý nghĩa thiêng liêng của Quốc kì, Quốc huy và Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam.</p>
            </div>
        </div>

        <!-- ====== 3. BIỂU TƯỢNG QUỐC GIA ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-none border-2 border-blue-700 mb-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black">🇻🇳</div>
                <h2 class="text-2xl md:text-3xl font-black text-blue-900 dark:text-slate-100">3. Quốc kì, Quốc huy, Quốc ca Việt Nam</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Quốc kì -->
                <div class="p-6 bg-red-50/50 dark:bg-red-900/20 rounded-[2rem] border-2 border-red-500 text-center">
                    <span class="text-7xl block mb-3">🚩</span>
                    <h3 class="text-2xl md:text-3xl font-black text-red-950 mb-2">Quốc kì</h3>
                    <p class="text-xl font-bold text-red-800 leading-relaxed">Hình chữ nhật, chiều rộng bằng 2/3 chiều dài, nền đỏ, giữa có ngôi sao vàng năm cánh. Nền đỏ tượng trưng cho cách mạng, sao vàng tượng trưng cho sự đoàn kết 5 tầng lớp (trí thức, nông dân, công nhân, thương nhân, binh sĩ).</p>
                </div>
                <!-- Quốc huy -->
                <div class="p-6 bg-yellow-50/50 dark:bg-yellow-900/20 rounded-[2rem] border-2 border-yellow-600 text-center">
                    <span class="text-7xl block mb-3">🏅</span>
                    <h3 class="text-2xl md:text-3xl font-black text-yellow-950 mb-2">Quốc huy</h3>
                    <p class="text-xl font-bold text-yellow-800 leading-relaxed">Hình tròn, nền đỏ, ở giữa có ngôi sao vàng năm cánh, xung quanh có bông lúa vàng (nông nghiệp), ở dưới có nửa bánh xe răng (công nghiệp) và dòng chữ "Cộng hoà xã hội chủ nghĩa Việt Nam".</p>
                </div>
                <!-- Quốc ca -->
                <div class="p-6 bg-amber-50/50 dark:bg-amber-900/20 rounded-[2rem] border-2 border-amber-500 text-center">
                    <span class="text-7xl block mb-3">🎵</span>
                    <h3 class="text-2xl md:text-3xl font-black text-amber-950 mb-2">Quốc ca</h3>
                    <p class="text-xl font-bold text-amber-800 leading-relaxed">Nhạc và lời của bài "Tiến quân ca" do nhạc sĩ <b>Văn Cao</b> sáng tác năm 1944. Thể hiện sự hi sinh to lớn, chiến thắng vinh quang của thế hệ đi trước và khát vọng hòa bình, độc lập dân tộc.</p>
                </div>
            </div>

            <!-- Ghi nhớ -->
            <div class="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] border-2 border-emerald-400">
                <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-3">📝 Ghi nhớ</h3>
                <ul class="space-y-2 text-2xl md:text-3xl font-bold text-emerald-800">
                    <li class="flex items-start gap-2"><span class="text-emerald-600 mt-1">✅</span> Quốc kì, Quốc huy, Quốc ca là những biểu tượng thiêng liêng của Việt Nam.</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-600 mt-1">✅</span> Bài Tiến quân ca được sáng tác vào năm 1944 và được chọn làm Quốc ca từ năm 1946.</li>
                </ul>
            </div>
        </div>
        `;
    },

    // Practice is a FUNCTION → gets called at render time when Lesson is loaded
    practice() {
        return `
        <h2 class="text-3xl md:text-4xl font-black text-blue-900 dark:text-slate-100 mb-6">🏋️ Luyện tập (Tiết 2)</h2>

        <!-- ====== 1. ĐIỀN VÀO CHỖ TRỐNG ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 1: Điền từ vào chỗ trống</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Chọn từ ngữ thích hợp để hoàn thành đoạn văn mô tả các biểu tượng quốc gia:</p>
            ${Lesson.renderFillBlanks(
                'ls-fb-2',
                '- Quốc kì hình {0}, chiều rộng bằng {1} chiều dài, nền {2}, ở giữa có {3}.<br><br>- Quốc huy hình {4}, nền {5}, ở giữa có {6}, xung quanh có {7}, ở dưới có {8} và dòng chữ {9}. Trong đó, hình ảnh {10} tượng trưng cho nông nghiệp; {11} tượng trưng cho công nghiệp.',
                ['chữ nhật', 'hai phần ba', 'đỏ', 'ngôi sao vàng năm cánh', 'tròn', 'đỏ', 'ngôi sao vàng năm cánh', 'bông lúa', 'nửa bánh xe răng', 'Cộng hòa xã hội chủ nghĩa Việt Nam', 'bông lúa vàng', 'bánh xe', 'hình vuông', 'màu xanh', 'bông hoa sen'],
                ['chữ nhật', 'hai phần ba', 'đỏ', 'ngôi sao vàng năm cánh', 'tròn', 'đỏ', 'ngôi sao vàng năm cánh', 'bông lúa', 'nửa bánh xe răng', 'Cộng hòa xã hội chủ nghĩa Việt Nam', 'bông lúa vàng', 'bánh xe']
            )}
        </div>

        <!-- ====== 2. ĐÚNG / SAI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 2: Nhận định Đúng hay Sai</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Các nhận xét sau đúng hay sai?</p>
            ${Lesson.renderTrueFalse('ls-tf-2', [
                {
                    text: 'Trên Quốc kì, nền đỏ tượng trưng cho cách mạng, ngôi sao vàng tượng trưng cho dân tộc Việt Nam.',
                    answer: true,
                    explanation: 'Đúng! Màu đỏ tượng trưng cho cách mạng, màu vàng tượng trưng cho dân tộc Việt Nam.'
                },
                {
                    text: 'Ngôi sao năm cánh trên Quốc kì tượng trưng cho năm tầng lớp nhân dân cùng đoàn kết.',
                    answer: true,
                    explanation: 'Đúng! Đó là năm tầng lớp: trí thức, nông dân, công nhân, thương nhân, binh sĩ.'
                },
                {
                    text: 'Quốc huy nước ta có hình vuông, viền màu xanh lá cây.',
                    answer: false,
                    explanation: 'Sai! Quốc huy hình tròn, nền đỏ, viền vàng.'
                },
                {
                    text: 'Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam do nhạc sĩ Văn Cao sáng tác.',
                    answer: true,
                    explanation: 'Đúng! Bài Tiến quân ca do nhạc sĩ Văn Cao sáng tác năm 1944 là Quốc ca Việt Nam.'
                }
            ])}
        </div>

        <!-- ====== 3. NỐI CẶP ĐÔI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 3: Nối biểu tượng với ý nghĩa</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Ghép nối tên biểu tượng quốc gia với ý nghĩa biểu tượng tương ứng:</p>
            ${Lesson.renderMatchingExercise(
                'ls-match-2',
                'Ý nghĩa các biểu tượng quốc gia',
                ['Quốc kì', 'Quốc huy', 'Quốc ca'],
                [
                    'Tượng trưng cho sự thống nhất, độc lập, tự chủ và hoà bình của dân tộc.',
                    'Thể hiện khát vọng về một nền hoà bình, độc lập, tự do và sự phát triển thịnh vượng.',
                    'Thể hiện sự hi sinh to lớn, chiến thắng vinh quang và khát vọng tự do của dân tộc.'
                ],
                [{ leftIdx: 0, rightIdx: 0 }, { leftIdx: 1, rightIdx: 1 }, { leftIdx: 2, rightIdx: 2 }]
            )}
        </div>

        <!-- ====== 4. HỎI ĐÁP VỚI AI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Vận dụng & Liên hệ (Trang 8)</h3>
            ${AIInteraction.renderTutor(
                'ls-tutor-2',
                'Em hãy chia sẻ cảm xúc của em khi tham gia lễ chào cờ và hát Quốc ca dưới cờ Tổ quốc ở trường hoặc địa phương em sống.',
                'Khi đứng trang nghiêm chào cờ và hát vang bài Tiến quân ca, em cảm thấy...'
            )}
        </div>
        `;
    },

    quizPool: [
        {
            level: 1,
            question: 'Quốc kì nước Cộng hoà xã hội chủ nghĩa Việt Nam có hình dạng gì?',
            options: ['Hình tròn', 'Hình vuông', 'Hình chữ nhật', 'Hình tam giác'],
            answer: 2
        },
        {
            level: 1,
            question: 'Chiều rộng của Quốc kì Việt Nam bằng bao nhiêu phần chiều dài?',
            options: ['Một phần hai', 'Hai phần ba', 'Ba phần tư', 'Hai phần xoắn'],
            answer: 1
        },
        {
            level: 1,
            question: 'Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam có tên gọi là gì?',
            options: ['Hành khúc tới trường', 'Tiến quân ca', 'Giải phóng miền Nam', 'Chiến sĩ ca'],
            answer: 1
        },
        {
            level: 1,
            question: 'Tác giả của bài hát Quốc ca Việt Nam là nhạc sĩ nào?',
            options: ['Phạm Tuyên', 'Lưu Hữu Phước', 'Đỗ Nhuận', 'Văn Cao'],
            answer: 3
        },
        {
            level: 1,
            question: 'Quốc huy nước ta có hình dạng gì?',
            options: ['Hình chữ nhật', 'Hình bầu dục', 'Hình tròn', 'Hình vuông'],
            answer: 2
        },
        {
            level: 2,
            question: 'Trên Quốc kì, màu đỏ của nền cờ tượng trưng cho điều gì?',
            options: ['Sự giàu có', 'Nền hòa bình', 'Cách mạng', 'Linh hồn dân tộc'],
            answer: 2
        },
        {
            level: 2,
            question: 'Ngôi sao vàng năm cánh trên Quốc kì tượng trưng cho năm tầng lớp nào?',
            options: [
                'Trí thức, học sinh, sinh viên, công nhân, binh sĩ',
                'Trí thức, nông dân, công nhân, thương nhân, binh sĩ',
                'Công nhân, nông dân, trí thức, tiểu thương, doanh nhân',
                'Binh sĩ, sĩ quan, công nhân, nông dân, doanh nhân'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Hình ảnh bông lúa vàng bao quanh trên Quốc huy tượng trưng cho ngành nào?',
            options: ['Công nghiệp', 'Thương nghiệp', 'Lâm nghiệp', 'Nông nghiệp'],
            answer: 3
        },
        {
            level: 2,
            question: 'Hình ảnh nửa bánh xe răng ở phía dưới Quốc huy tượng trưng cho ngành nào?',
            options: ['Giao thông', 'Công nghiệp', 'Nông nghiệp', 'Thủ công nghiệp'],
            answer: 1
        },
        {
            level: 2,
            question: 'Bài hát "Tiến quân ca" được sáng tác vào năm nào?',
            options: ['Năm 1944', 'Năm 1945', 'Năm 1946', 'Năm 1954'],
            answer: 0
        },
        {
            level: 3,
            question: 'Quốc hội khoá I quyết định chọn "Tiến quân ca" làm Quốc ca nước ta vào năm nào?',
            options: ['Năm 1944', 'Năm 1945', 'Năm 1946', 'Năm 1976'],
            answer: 2
        },
        {
            level: 3,
            question: 'Ý nghĩa to lớn nhất của các biểu tượng Quốc kì, Quốc huy, Quốc ca là gì?',
            options: [
                'Là tác phẩm nghệ thuật đặc sắc của nước ta',
                'Là biểu tượng đại diện cho chủ quyền, lịch sử, tinh thần đoàn kết và khát vọng của đất nước',
                'Là biểu tượng bắt buộc dùng trong mọi buổi họp lớp',
                'Giúp người dân nhận diện nhanh đất nước trên bản đồ thế giới'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Màu vàng của ngôi sao trên Quốc kì tượng trưng cho điều gì?',
            options: ['Dân tộc Việt Nam', 'Nông nghiệp lúa nước', 'Sự phát triển giàu có', 'Màu của ánh sáng mặt trời'],
            answer: 0
        },
        {
            level: 3,
            question: 'Quốc huy nước ta thể hiện khát vọng gì của dân tộc Việt Nam?',
            options: [
                'Trở thành nước xuất khẩu lúa gạo lớn nhất thế giới',
                'Trở thành cường quốc công nghiệp vũ trụ',
                'Nền hòa bình, độc lập, tự do và sự phát triển thịnh vượng sánh vai các quốc gia',
                'Mở rộng lãnh thổ ra khu vực'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Bông lúa vàng và nửa bánh xe răng xuất hiện trên biểu tượng nào của Việt Nam?',
            options: ['Quốc kì', 'Quốc huy', 'Quốc ca', 'Cột mốc biên giới'],
            answer: 1
        }
    ]
};
