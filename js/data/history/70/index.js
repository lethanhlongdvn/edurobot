export const lesson070 = {
    topic: 'Ôn tập Tổng kết',
    week: '35',
    period: '70',
    title: 'Ôn tập Tổng kết cuối năm (Lịch sử & Địa lý)',
    description: 'Hệ thống hóa kiến thức trọng tâm môn Lịch sử và Địa lý lớp 5 cả năm học, chuẩn bị cho đánh giá cuối kì II.',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-amber-700 via-orange-600 to-red-600 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10 text-center md:text-left">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🏆</span> Tổng kết cuối năm
                </div>
                <h1 class="text-3xl md:text-5xl font-black mb-4 leading-tight italic">Hành trình Lịch sử & Địa lý 5</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-3xl leading-relaxed">
                    Chúc mừng các em đã hoàn thành chặng đường khám phá vẻ đẹp của đất nước và những trang sử hào hùng của dân tộc. Hãy cùng ôn lại những dấu ấn đáng nhớ nhất!
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <!-- PHẦN 1: LỊCH SỬ VIỆT NAM -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-lg border border-red-100 dark:border-red-900/30">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-black">🇻🇳</div>
                    <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Dấu ấn Lịch sử</h2>
                </div>

                <div class="space-y-6">
                    <div class="relative pl-8 border-l-4 border-red-200 dark:border-red-800 py-2">
                        <div class="absolute -left-[14px] top-4 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-slate-800 shadow-md"></div>
                        <h3 class="text-lg font-black text-red-700 dark:text-red-400 uppercase tracking-widest">1858 - 1945</h3>
                        <p class="text-base font-bold text-gray-600 dark:text-slate-300 mt-1 italic">
                            Chống Pháp xâm lược, Bác Hồ tìm đường cứu nước, Đảng Cộng sản Việt Nam ra đời (1930) và Cách mạng tháng Tám (1945).
                        </p>
                    </div>

                    <div class="relative pl-8 border-l-4 border-red-200 dark:border-red-800 py-2">
                        <div class="absolute -left-[14px] top-4 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-slate-800 shadow-md"></div>
                        <h3 class="text-lg font-black text-red-700 dark:text-red-400 uppercase tracking-widest">1945 - 1954</h3>
                        <p class="text-base font-bold text-gray-600 dark:text-slate-300 mt-1 italic">
                            Chín năm kháng chiến chống thực dân Pháp, đỉnh cao là chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu".
                        </p>
                    </div>

                    <div class="relative pl-8 border-l-4 border-red-200 dark:border-red-800 py-2">
                        <div class="absolute -left-[14px] top-4 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-slate-800 shadow-md"></div>
                        <h3 class="text-lg font-black text-red-700 dark:text-red-400 uppercase tracking-widest">1954 - 1975</h3>
                        <p class="text-base font-bold text-gray-600 dark:text-slate-300 mt-1 italic">
                            Chống Mỹ cứu nước, phong trào Đồng khởi, đường Trường Sơn huyền thoại và đại thắng mùa Xuân năm 1975.
                        </p>
                    </div>

                    <div class="relative pl-8 border-l-4 border-red-200 dark:border-red-800 py-2">
                        <div class="absolute -left-[14px] top-4 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-slate-800 shadow-md"></div>
                        <h3 class="text-lg font-black text-red-700 dark:text-red-400 uppercase tracking-widest">1975 - Nay</h3>
                        <p class="text-base font-bold text-gray-600 dark:text-slate-300 mt-1 italic">
                            Xây dựng và phát triển đất nước, những công trình thế kỷ như Thủy điện Hòa Bình và con đường đổi mới.
                        </p>
                    </div>
                </div>
            </div>

            <!-- PHẦN 2: ĐỊA LÝ VIỆT NAM & THẾ GIỚI -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900/30">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">🌏</div>
                    <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Khám phá Địa lý</h2>
                </div>

                <div class="space-y-6">
                    <div class="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-100">
                        <h3 class="text-lg font-black text-blue-800 dark:text-blue-300 mb-2">🏔️ Địa lý Việt Nam</h3>
                        <ul class="text-base font-bold text-blue-700 dark:text-blue-200 list-disc pl-5 space-y-1">
                            <li>Vị trí hình chữ S, 63 tỉnh thành phố.</li>
                            <li>3/4 diện tích là đồi núi, 1/4 là đồng bằng.</li>
                            <li>Khí hậu nhiệt đới ẩm gió mùa.</li>
                        </ul>
                    </div>

                    <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-2xl border-2 border-green-100">
                        <h3 class="text-lg font-black text-green-800 dark:text-green-300 mb-2">🌍 Thế giới và Văn minh</h3>
                        <ul class="text-base font-bold text-green-700 dark:text-green-200 list-disc pl-5 space-y-1">
                            <li>6 châu lục và 4 đại dương lớn.</li>
                            <li>Nền văn minh Ai Cập và Hy Lạp cổ đại.</li>
                            <li>Bảo vệ thế giới Xanh - Sạch - Đẹp và Hòa bình.</li>
                        </ul>
                    </div>

                    <div class="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-100 text-center">
                        <p class="text-lg font-black text-amber-800 dark:text-amber-300 italic">
                            "Học để hiểu, học để yêu và học để xây dựng quê hương ngày càng giàu đẹp!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    },

    practice() {
        return `
        <h2 class="text-3xl font-black text-gray-800 dark:text-slate-100 mb-8 flex items-center gap-3">
            <span class="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg">🏋️</span>
            Hệ thống Luyện tập Tổng hợp
        </h2>

        <!-- ====== 1. ĐÚNG / SAI (Kiến thức Học kỳ II) ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-10">
            <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span class="text-amber-500">✅</span> Kiểm tra kiến thức Học kỳ II
            </h3>
            ${Lesson.renderTrueFalse('ls-tf-70', [
                {
                    text: 'Chiến dịch Hồ Chí Minh lịch sử kết thúc vào ngày 30/4/1975.',
                    answer: true,
                    explanation: 'Đúng! Ngày 30/4/1975 là ngày giải phóng hoàn toàn miền Nam, thống nhất đất nước.'
                },
                {
                    text: 'Châu Phi là châu lục có số dân đông nhất thế giới.',
                    answer: false,
                    explanation: 'Sai! Châu Á mới là châu lục có số dân đông nhất thế giới.'
                },
                {
                    text: 'Kim tự tháp là công trình kiến trúc vĩ đại của người Ai Cập cổ đại.',
                    answer: true,
                    explanation: 'Đúng! Kim tự tháp là biểu tượng của nền văn minh Ai Cập cổ đại.'
                },
                {
                    text: 'Nước ta có 5 thành phố trực thuộc Trung ương.',
                    answer: true,
                    explanation: 'Đúng! Đó là Hà Nội, Hải Phòng, Đà Nẵng, TP.HCM và Cần Thơ.'
                }
            ])}
        </div>

        <!-- ====== 2. NỐI SỰ KIỆN LỊCH SỬ ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-10">
            <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span class="text-red-500">🔗</span> Nối mốc thời gian và sự kiện
            </h3>
            ${Lesson.renderMatchingExercise(
                'ls-match-70',
                'Nối năm ở cột trái với sự kiện lịch sử tương ứng ở cột phải:',
                ['03/02/1930', '19/05/1959', '30/12/1972', '30/12/1988'],
                ['Đảng Cộng sản Việt Nam ra đời', 'Mở đường Trường Sơn', 'Đập tan cuộc tập kích B52 (Điện Biên Phủ trên không)', 'Khánh thành tổ máy số 1 Thủy điện Hòa Bình'],
                [{ leftIdx: 0, rightIdx: 0 }, { leftIdx: 1, rightIdx: 1 }, { leftIdx: 2, rightIdx: 2 }, { leftIdx: 3, rightIdx: 3 }]
            )}
        </div>

        <!-- ====== 3. PHÂN LOẠI CHÂU LỤC & ĐẠI DƯƠNG ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-10">
            <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span class="text-blue-500">🧩</span> Phân loại các đại danh thế giới
            </h3>
            ${Lesson.renderCategorizing(
                'ls-cat-70',
                'Hãy đưa các tên gọi sau vào đúng nhóm Châu lục hoặc Đại dương:',
                [
                    { name: '🌍 Châu lục', color: 'green' },
                    { name: '🌊 Đại dương', color: 'blue' }
                ],
                [
                    { text: 'Châu Á', categoryIdx: 0 },
                    { text: 'Thái Bình Dương', categoryIdx: 1 },
                    { text: 'Châu Âu', categoryIdx: 0 },
                    { text: 'Ấn Độ Dương', categoryIdx: 1 },
                    { text: 'Châu Phi', categoryIdx: 0 },
                    { text: 'Đại Tây Dương', categoryIdx: 1 },
                    { text: 'Bắc Băng Dương', categoryIdx: 1 },
                    { text: 'Châu Mỹ', categoryIdx: 0 }
                ]
            )}
        </div>

        <!-- ====== 4. HỎI ĐÁP CÙNG AI ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-10">
            <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span class="text-blue-500">💬</span> Chia sẻ cảm xúc cuối năm
            </h3>
            ${AIInteraction.renderTutor(
                'ls-tutor-70',
                'Trong cả năm học vừa qua, em thích nhất bài học Lịch sử hoặc Địa lý nào? Vì sao? Hãy chia sẻ với thầy cô và các bạn nhé!',
                'Gợi ý: Em thích bài về Chiến thắng Điện Biên Phủ vì... hoặc Em thích bài về các Châu lục vì...'
            )}
        </div>
        `;
    },

    quizPool: [
        // Lịch sử - Kỳ I & II
        {
            question: 'Sự kiện nào đánh dấu bước ngoặt vĩ đại của lịch sử Việt Nam trong thế kỉ XX?',
            options: ['Khởi nghĩa Yên Bái', 'Thành lập Đảng Cộng sản Việt Nam (3/2/1930)', 'Phong trào Xô viết Nghệ - Tĩnh', 'Đại hội Đảng lần thứ nhất'],
            answer: 1
        },
        {
            question: 'Ai là người chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam tại Hồng Kông?',
            options: ['Trần Phú', 'Nguyễn Ái Quốc', 'Lê Hồng Phong', 'Hà Huy Tập'],
            answer: 1
        },
        {
            question: 'Chiến thắng nào đã kết thúc oanh liệt 9 năm kháng chiến chống Pháp?',
            options: ['Chiến dịch Việt Bắc', 'Chiến dịch Biên giới', 'Chiến dịch Điện Biên Phủ', 'Chiến dịch Hồ Chí Minh'],
            answer: 2
        },
        {
            question: 'Phong trào "Đồng khởi" ở Bến Tre bắt đầu bùng nổ vào năm nào?',
            options: ['1954', '1959', '1960', '1965'],
            answer: 2
        },
        {
            question: 'Tên của nhà máy thủy điện lớn nhất nước ta được xây dựng với sự giúp đỡ của Liên Xô là gì?',
            options: ['Sơn La', 'Trị An', 'Thác Bà', 'Hòa Bình'],
            answer: 3
        },
        {
            question: 'Ngày giải phóng miền Nam, thống nhất đất nước là ngày nào?',
            options: ['2/9/1945', '19/5/1890', '30/4/1975', '1/5/1975'],
            answer: 2
        },
        // Địa lý - Kỳ I & II
        {
            question: 'Việt Nam có bao nhiêu tỉnh, thành phố trực thuộc trung ương?',
            options: ['54', '60', '63', '64'],
            answer: 2
        },
        {
            question: 'Dân cư nước ta tập trung đông đúc nhất ở đâu?',
            options: ['Vùng núi', 'Các cao nguyên', 'Các đồng bằng và ven biển', 'Vùng biên giới'],
            answer: 2
        },
        {
            question: 'Châu lục nào lạnh nhất thế giới và không có dân cư sinh sống thường xuyên?',
            options: ['Châu Âu', 'Châu Á', 'Châu Mỹ', 'Châu Nam Cực'],
            answer: 3
        },
        {
            question: 'Đại dương nào có diện tích lớn nhất trên Trái Đất?',
            options: ['Đại Tây Dương', 'Thái Bình Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'],
            answer: 1
        },
        {
            question: 'Đỉnh núi Everest - đỉnh núi cao nhất thế giới nằm ở châu lục nào?',
            options: ['Châu Âu', 'Châu Mỹ', 'Châu Phi', 'Châu Á'],
            answer: 3
        },
        {
            question: 'Rừng rậm nhiệt đới A-ma-dôn nằm ở châu lục nào?',
            options: ['Châu Á', 'Châu Phi', 'Châu Mỹ', 'Châu Âu'],
            answer: 2
        },
        {
            question: 'Châu lục nào được gọi là "Lục địa đen"?',
            options: ['Châu Mỹ', 'Châu Âu', 'Châu Phi', 'Châu Đại Dương'],
            answer: 2
        },
        {
            question: 'Ai Cập cổ đại gắn liền với dòng sông nào?',
            options: ['Sông Hằng', 'Sông Nin', 'Sông Hoàng Hà', 'Sông Mê Công'],
            answer: 1
        },
        {
            question: 'Nguồn gốc của Thế vận hội Ô-lim-píc hiện nay xuất phát từ quốc gia nào?',
            options: ['Ai Cập', 'Hy Lạp', 'Trung Quốc', 'La Mã'],
            answer: 1
        },
        {
            question: 'Biểu tượng của thế giới hòa bình thường là hình ảnh con vật nào?',
            options: ['Chim đại bàng', 'Chim bồ câu ngậm cành ô liu', 'Chim hải âu', 'Chim công'],
            answer: 1
        },
        {
            question: 'Sông Nin mang lại điều gì quan trọng nhất cho văn minh Ai Cập?',
            options: ['Nhiều vàng bạc', 'Phù sa màu mỡ và nguồn nước', 'Lớp băng bảo vệ', 'Các loài cá hiếm'],
            answer: 1
        },
        {
            question: 'Châu Á tiếp giáp với những đại dương nào?',
            options: ['Bắc Băng Dương, Thái Bình Dương, Ấn Độ Dương', 'Thái Bình Dương, Đại Tây Dương', 'Ấn Độ Dương, Đại Tây Dương', 'Bắc Băng Dương, Đại Tây Dương'],
            answer: 0
        },
        {
            question: 'Lãnh thổ Việt Nam có hình dạng đặc trưng giống chữ gì?',
            options: ['Chữ C', 'Chữ V', 'Chữ S', 'Chữ L'],
            answer: 2
        },
        {
            question: 'Công trình Thủy điện Hòa Bình được xây dựng trên dòng sông nào?',
            options: ['Sông Hồng', 'Sông Đà', 'Sông Mã', 'Sông Đồng Nai'],
            answer: 1
        },
        {
            question: 'Cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp bắt đầu vào năm nào?',
            options: ['1858', '1919', '1930', '1945'],
            answer: 1
        },
        {
            question: 'Vua Hàm Nghi là người lãnh đạo phong trào kháng chiến nào?',
            options: ['Phong trào Tây Sơn', 'Phong trào Cần Vương', 'Phong trào Đông Du', 'Phong trào Duy Tân'],
            answer: 1
        },
        {
            question: 'Nguyễn Ái Quốc ra đi tìm đường cứu nước vào ngày tháng năm nào?',
            options: ['19/05/1890', '05/06/1911', '02/09/1945', '03/02/1930'],
            answer: 1
        },
        {
            question: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951) đã quyết định đổi tên Đảng thành gì?',
            options: ['Đảng Cộng sản Đông Dương', 'Đảng Lao động Việt Nam', 'Đảng Cộng sản Việt Nam', 'An Nam Cộng sản Đảng'],
            answer: 1
        },
        {
            question: 'Bản Tuyên ngôn Độc lập được Bác Hồ đọc tại Quảng trường Ba Đình vào ngày nào?',
            options: ['19/08/1945', '30/04/1975', '02/09/1945', '22/12/1944'],
            answer: 2
        },
        {
            question: 'Châu lục nào có diện tích nhỏ nhất thế giới?',
            options: ['Châu Âu', 'Châu Đại Dương', 'Châu Nam Cực', 'Châu Á'],
            answer: 1
        },
        {
            question: 'Dân cư trên thế giới phân bố như thế nào?',
            options: ['Đồng đều khắp nơi', 'Không đồng đều', 'Chỉ tập trung ở châu Âu', 'Chỉ tập trung ở châu Mỹ'],
            answer: 1
        },
        {
            question: 'Chủng tộc có màu da vàng, tóc đen, mắt đen phổ biến ở châu Á là?',
            options: ['Ơ-rô-pê-ô-it', 'Nê-grô-it', 'Môn-gô-lô-it', 'Ô-xtra-lô-it'],
            answer: 2
        },
        {
            question: 'Tác động nào sau đây là tiêu cực đối với môi trường?',
            options: ['Trồng cây gây rừng', 'Xả rác thải bừa bãi', 'Sử dụng năng lượng mặt trời', 'Phân loại rác'],
            answer: 1
        },
        {
            question: 'Cờ Liên hợp quốc có hình ảnh gì ở giữa?',
            options: ['Nhánh ô liu bao quanh bản đồ thế giới', 'Hình ngôi sao vàng', 'Hình chim bồ câu', 'Hình bàn tay nắm chặt'],
            answer: 0
        },
        {
            question: 'Khu vực nào của Việt Nam thường xuyên chịu ảnh hưởng của bão nhất?',
            options: ['Tây Nguyên', 'Tây Bắc', 'Ven biển miền Trung', 'Đồng bằng sông Cửu Long'],
            answer: 2
        },
        {
            question: 'Quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền của quốc gia nào?',
            options: ['Trung Quốc', 'Việt Nam', 'Phi-líp-pin', 'Ma-lai-xi-a'],
            answer: 1
        },
        {
            question: 'Thành phố nào là trung tâm kinh tế lớn nhất miền Nam Việt Nam?',
            options: ['Cần Thơ', 'Đà Nẵng', 'Hải Phòng', 'Thành phố Hồ Chí Minh'],
            answer: 3
        },
        {
            question: 'Loại đất nào chiếm diện tích lớn nhất ở vùng đồng bằng nước ta?',
            options: ['Đất feralit', 'Đất phù sa', 'Đất mùn', 'Đất đỏ bazan'],
            answer: 1
        },
        {
            question: 'Lễ hội Đền Hùng được tổ chức tại tỉnh nào?',
            options: ['Vĩnh Phúc', 'Phú Thọ', 'Hà Nội', 'Ninh Bình'],
            answer: 1
        },
        {
            question: 'Tôn giáo nào có số lượng tín đồ đông nhất ở châu Âu?',
            options: ['Phật giáo', 'Hồi giáo', 'Thiên Chúa giáo', 'Ấn Độ giáo'],
            answer: 2
        },
        {
            question: 'Kênh đào Xuy-ê nối liền hai biển/đại dương nào?',
            options: ['Thái Bình Dương và Đại Tây Dương', 'Địa Trung Hải và Biển Đỏ', 'Ấn Độ Dương và Thái Bình Dương', 'Biển Đen và Biển Đỏ'],
            answer: 1
        },
        {
            question: 'Châu Mỹ nằm hoàn toàn ở bán cầu nào?',
            options: ['Bán cầu Đông', 'Bán cầu Tây', 'Bán cầu Nam', 'Bán cầu Bắc'],
            answer: 1
        },
        {
            question: 'Hoang mạc Xa-ha-ra nằm ở châu lục nào?',
            options: ['Châu Á', 'Châu Mỹ', 'Châu Phi', 'Châu Úc'],
            answer: 2
        },
        {
            question: 'Hành động nào góp phần xây dựng thế giới hòa bình?',
            options: ['Gây xung đột với bạn bè', 'Đoàn kết, hữu nghị giữa các dân tộc', 'Phân biệt chủng tộc', 'Sản xuất vũ khí trái phép'],
            answer: 1
        }
    ]
};
