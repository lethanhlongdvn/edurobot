// Bài 1 Tiết 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca
// VBT Lịch sử & Địa lí 5 - KNTT: Bài 1 (Phần 1 & 2)
export const lesson001 = {
    topic: 'Địa lí Việt Nam',
    week: '1',
    period: '1',
    startPage: 7,
    title: 'Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1)',
    description: 'Khám phá vị trí địa lí, lãnh thổ và đơn vị hành chính đặc thù của Việt Nam theo số liệu sách giáo khoa mới.',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-500 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-full mb-4 text-xl md:text-2xl font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🌏</span> Chủ đề: Địa lí Việt Nam
                </div>
                <h1 class="text-4xl md:text-5xl font-black mb-3 leading-tight">Vị trí địa lí và lãnh thổ Việt Nam</h1>
                <p class="text-2xl md:text-3xl font-bold opacity-90 max-w-3xl leading-relaxed">Khám phá vị trí đặc biệt của Việt Nam trên bản đồ thế giới, hình dạng lãnh thổ và hệ thống đơn vị hành chính năm 2025.</p>
            </div>
        </div>

        <!-- ====== 1. VỊ TRÍ ĐỊA LÍ ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-none border-2 border-blue-700 mb-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-14 h-14 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black">🗺️</div>
                <h2 class="text-2xl md:text-3xl font-black text-blue-900 dark:text-slate-100">1. Vị trí địa lí</h2>
            </div>

            <p class="text-2xl md:text-3xl font-bold text-blue-800 dark:text-slate-200 mb-6 leading-relaxed">
                Việt Nam nằm ở khu vực <b>Đông Nam Á</b>, thuộc <b>châu Á</b>. Trên đất liền, nước ta có chung đường biên giới với <b>Trung Quốc</b>, <b>Lào</b>, <b>Cam-pu-chia (Cambodia)</b> và tiếp giáp với biển. Vùng biển nước ta thuộc <b>Biển Đông</b>, giáp với vùng biển của nhiều quốc gia.
            </p>

            <!-- Cards thông tin -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-[2rem] border-2 border-blue-700">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl md:text-4xl">📐</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-900">Diện tích phần đất liền</h3>
                    </div>
                    <p class="text-2xl md:text-3xl font-bold text-blue-800">Hơn <b>331 nghìn km²</b> (gồm toàn bộ phần đất liền và các đảo, quần đảo trên Biển Đông).</p>
                </div>
                <div class="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-[2rem] border-2 border-blue-700">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl md:text-4xl">🏖️</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-900">Đường bờ biển</h3>
                    </div>
                    <p class="text-2xl md:text-3xl font-bold text-blue-800">Dài hơn <b>3.260 km</b>, chạy dọc phía đông và nam đất nước.</p>
                </div>
                <div class="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-[2rem] border-2 border-blue-700">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl md:text-4xl">🏛️</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-900">Đơn vị hành chính (Năm 2025)</h3>
                    </div>
                    <p class="text-2xl md:text-3xl font-bold text-blue-800"><b>34 đơn vị hành chính cấp tỉnh</b>, gồm <b>7 thành phố</b> trực thuộc Trung ương và <b>27 tỉnh</b>. Thủ đô là <b>Hà Nội</b>.</p>
                </div>
                <div class="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-[2rem] border-2 border-blue-700">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl md:text-4xl">📍</span>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-900">Hình dạng lãnh thổ đất liền</h3>
                    </div>
                    <p class="text-2xl md:text-3xl font-bold text-blue-800">Hình chữ <b>S</b>, hẹp ngang và trải dài theo chiều bắc – nam (khoảng <b>1.650 km</b>).</p>
                </div>
            </div>
        </div>

        <!-- ====== 2. LÃNH THỔ VÀ ĐƠN VỊ HÀNH CHÍNH ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-none border-2 border-blue-700 mb-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-14 h-14 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black">🇻🇳</div>
                <h2 class="text-2xl md:text-3xl font-black text-blue-900 dark:text-slate-100">2. Lãnh thổ và đơn vị hành chính</h2>
            </div>
            
            <p class="text-2xl md:text-3xl font-bold text-blue-800 dark:text-slate-200 mb-6 leading-relaxed">
                Lãnh thổ Việt Nam gồm vùng đất, vùng biển và vùng trời. Vùng biển nước ta có diện tích rộng lớn khoảng 1 triệu km². Tính đến năm 2025, Việt Nam có 34 đơn vị hành chính cấp tỉnh.
            </p>

            <ul class="space-y-4 mb-6">
                 <li class="flex items-start gap-4 p-5 bg-blue-50/30 dark:bg-slate-700/50 rounded-[2rem] border-2 border-blue-200">
                    <div class="text-3xl md:text-4xl mt-1">🧩</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-950 dark:text-slate-100 uppercase tracking-wider">Phần đất liền</h3>
                        <p class="text-2xl md:text-3xl font-bold text-blue-800 dark:text-slate-300 mt-1">Nước ta có dạng hình chữ S, hẹp ngang và trải dài theo chiều bắc – nam.</p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-5 bg-blue-50/30 dark:bg-slate-700/50 rounded-[2rem] border-2 border-blue-200">
                    <div class="text-3xl md:text-4xl mt-1">🌊</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-950 dark:text-slate-100 uppercase tracking-wider">Vùng biển</h3>
                        <p class="text-2xl md:text-3xl font-bold text-blue-800 dark:text-slate-300 mt-1">Gồm toàn bộ vùng biển thuộc chủ quyền nước ta rộng khoảng 1 triệu km².</p>
                    </div>
                </li>
                 <li class="flex items-start gap-4 p-5 bg-blue-50/30 dark:bg-slate-700/50 rounded-[2rem] border-2 border-blue-200">
                    <div class="text-3xl md:text-4xl mt-1">🏛️</div>
                    <div>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-950 dark:text-slate-100 uppercase tracking-wider">Các thành phố trực thuộc Trung ương (7 thành phố)</h3>
                        <p class="text-2xl md:text-3xl font-bold text-blue-800 dark:text-slate-300 mt-1">Hà Nội, Hải Phòng, Huế, Đà Nẵng, Thành phố Hồ Chí Minh, Đồng Nai và Cần Thơ.</p>
                    </div>
                </li>
            </ul>

            <!-- Ghi nhớ -->
            <div class="mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] border-2 border-emerald-400">
                <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-3">📝 Ghi nhớ</h3>
                <ul class="space-y-2 text-2xl md:text-3xl font-bold text-emerald-800">
                    <li class="flex items-start gap-2"><span class="text-emerald-600 mt-1">✅</span> Việt Nam nằm ở Đông Nam Á, giáp Trung Quốc, Lào, Cam-pu-chia và Biển Đông.</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-600 mt-1">✅</span> Cực Bắc có Cột cờ Lũng Cú (tỉnh Tuyên Quang); cực Nam có Mũi Cà Mau (tỉnh Cà Mau).</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-600 mt-1">✅</span> Có 34 đơn vị hành chính cấp tỉnh (gồm 7 thành phố trực thuộc Trung ương và 27 tỉnh).</li>
                </ul>
            </div>
        </div>

        <!-- ====== BẢN ĐỒ TƯƠNG TÁC ====== -->
        ${Lesson.renderInteractiveMap(
            'ls-map-1',
            'Khám phá bản đồ Việt Nam (Dữ liệu 2025)',
            'Nhấn vào các địa điểm để xem thông tin và di chuyển trên bản đồ hành chính mới.',
            [
                { name: 'Cột cờ Lũng Cú (Tuyên Quang)', lat: 22.3364, lng: 105.3142, info: 'Cực Bắc đất nước thuộc tỉnh Tuyên Quang (theo ảnh chụp SGK).', emoji: '🚩' },
                { name: 'Mũi Cà Mau (Cà Mau)', lat: 8.6288, lng: 104.7212, info: 'Điểm cực Nam trên phần đất liền Tổ quốc.', emoji: '🏝️' },
                { name: 'Thủ đô Hà Nội', lat: 21.0285, lng: 105.8048, info: 'Thủ đô nước Cộng hoà xã hội chủ nghĩa Việt Nam.', emoji: '🏛️' },
                { name: 'TP. Hải Phòng', lat: 20.8449, lng: 106.6881, info: 'Thành phố cảng công nghiệp trực thuộc Trung ương.', emoji: '🏙️' },
                { name: 'TP. Huế', lat: 16.4637, lng: 107.5909, info: 'Thành phố di sản trực thuộc Trung ương.', emoji: '🏯' },
                { name: 'TP. Đà Nẵng', lat: 16.0544, lng: 108.2022, info: 'Thành phố cảng, du lịch miền Trung.', emoji: '🏖️' },
                { name: 'TP. Hồ Chí Minh', lat: 10.7765, lng: 106.7010, info: 'Đô thị lớn nhất cả nước và trung tâm kinh tế phía Nam.', emoji: '🏙️' },
                { name: 'TP. Biên Hòa (Đồng Nai)', lat: 10.9574, lng: 106.8427, info: 'Thành phố trực thuộc Trung ương mới bổ sung.', emoji: '🏭' },
                { name: 'TP. Cần Thơ', lat: 10.0452, lng: 105.7469, info: 'Thành phố trung tâm vùng đồng bằng sông Cửu Long.', emoji: '🌾' }
            ]
        )}
    `;
    },

    // Practice is a FUNCTION → gets called at render time when Lesson is loaded
    practice() {
        return `
        <h2 class="text-3xl md:text-4xl font-black text-blue-900 dark:text-slate-100 mb-6">🏋️ Luyện tập (Tiết 1)</h2>

        <!-- ====== 1. ĐÚNG / SAI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 1: Đúng hay Sai?</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Các nhận xét dưới đây đúng hay sai dựa vào nội dung và hình ảnh bài học?</p>
            ${Lesson.renderTrueFalse('ls-tf-1', [
                {
                    text: 'Việt Nam nằm ở khu vực Đông Nam Á, thuộc châu Á.',
                    answer: true,
                    explanation: 'Đúng! Việt Nam nằm ở Đông Nam Á, thuộc châu Á.'
                },
                {
                    text: 'Theo hình ảnh trong sách giáo khoa, Cột cờ Lũng Cú thuộc tỉnh Hà Giang.',
                    answer: false,
                    explanation: 'Sai! Hình 1 trang 5 ghi rõ: Cột cờ Lũng Cú (tỉnh Tuyên Quang).'
                },
                {
                    text: 'Tính đến năm 2025, Việt Nam có 34 đơn vị hành chính cấp tỉnh.',
                    answer: true,
                    explanation: 'Đúng! SGK trang 7 ghi: Việt Nam có 34 đơn vị hành chính cấp tỉnh.'
                },
                {
                    text: 'Huế và Đồng Nai là hai trong số các thành phố trực thuộc Trung ương.',
                    answer: true,
                    explanation: 'Đúng! Có tổng cộng 7 thành phố trực thuộc Trung ương gồm cả Huế và Đồng Nai.'
                }
            ])}
        </div>

        <!-- ====== 2. ĐIỀN VÀO CHỖ TRỐNG ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 2: Điền số liệu hành chính</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Hoàn thành thông tin hành chính Việt Nam năm 2025:</p>
            ${Lesson.renderFillBlanks(
                'ls-fb-1',
                'Tính đến năm 2025, Việt Nam có {0} đơn vị hành chính cấp tỉnh. Trong đó, có {1} thành phố trực thuộc Trung ương (gồm cả Huế và {2}) và {3} tỉnh. Thủ đô của Việt Nam là {4}.',
                ['34', '7', 'Đồng Nai', '27', 'Hà Nội', '63', '5', 'Hà Giang'],
                ['34', '7', 'Đồng Nai', '27', 'Hà Nội']
            )}
        </div>

        <!-- ====== 3. PHÂN LOẠI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Bài tập 3: Phân loại dữ liệu địa lí</h3>
            <p class="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4">Kéo thả các đặc điểm, địa danh vào cột phân loại thích hợp:</p>
            ${Lesson.renderCategorizing(
                'ls-cat-1',
                'Phân loại thông tin địa lí Việt Nam',
                [
                    { name: '🗺️ Đặc điểm tự nhiên', color: 'blue' },
                    { name: '🏛️ Thành phố trực thuộc TƯ', color: 'indigo' },
                    { name: '📍 Địa danh tiêu biểu', color: 'amber' }
                ],
                [
                    { text: 'Nằm ở Đông Nam Á, trên bán đảo Đông Dương', categoryIdx: 0 },
                    { text: 'Hình dáng chữ S hẹp ngang, trải dài Bắc-Nam', categoryIdx: 0 },
                    { text: 'Hà Nội, Hải Phòng, Huế, Đà Nẵng', categoryIdx: 1 },
                    { text: 'TP. Hồ Chí Minh, Cần Thơ, Đồng Nai', categoryIdx: 1 },
                    { text: 'Cột cờ Lũng Cú (tỉnh Tuyên Quang)', categoryIdx: 2 },
                    { text: 'Mũi Cà Mau (tỉnh Cà Mau)', categoryIdx: 2 }
                ]
            )}
        </div>

        <!-- ====== 4. HỎI ĐÁP VỚI AI ====== -->
        <div class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 border-blue-700">
            <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-2">Vận dụng & Liên hệ thực tế</h3>
            ${AIInteraction.renderTutor(
                'ls-tutor-1',
                'Em hãy nêu số lượng và tên các thành phố trực thuộc Trung ương của nước ta theo bài học mới. Tỉnh hoặc thành phố nơi em đang sống tên là gì?',
                'Ví dụ: Theo bài học mới nước ta có 7 thành phố trực thuộc Trung ương là... Em đang sống ở...'
            )}
        </div>
        `;
    },

    quizPool: [
        {
            level: 1,
            question: 'Việt Nam nằm ở khu vực nào của châu Á?',
            options: ['Đông Bắc Á', 'Đông Nam Á', 'Nam Á', 'Tây Nam Á'],
            answer: 1
        },
        {
            level: 1,
            question: 'Trên đất liền, phía Bắc nước ta giáp với quốc gia nào?',
            options: ['Lào', 'Thái Lan', 'Trung Quốc', 'Cam-pu-chia'],
            answer: 2
        },
        {
            level: 1,
            question: 'Phần đất liền nước ta có hình dạng giống chữ cái nào?',
            options: ['Chữ C', 'Chữ S', 'Chữ V', 'Chữ L'],
            answer: 1
        },
        {
            level: 1,
            question: 'Theo sách giáo khoa Lịch sử & Địa lí mới, Cột cờ Lũng Cú nằm ở tỉnh nào?',
            options: ['Hà Giang', 'Lạng Sơn', 'Cao Bằng', 'Tuyên Quang'],
            answer: 3
        },
        {
            level: 1,
            question: 'Điểm cực Nam trên đất liền nước ta thuộc tỉnh nào?',
            options: ['Kiên Giang', 'Cà Mau', 'Bạc Liêu', 'Sóc Trăng'],
            answer: 1
        },
        {
            level: 2,
            question: 'Tính đến năm 2025, nước ta có bao nhiêu đơn vị hành chính cấp tỉnh?',
            options: ['63', '64', '34', '58'],
            answer: 2
        },
        {
            level: 2,
            question: 'Trong 34 đơn vị hành chính cấp tỉnh năm 2025, có bao nhiêu tỉnh?',
            options: ['27', '28', '29', '30'],
            answer: 0
        },
        {
            level: 2,
            question: 'Thủ đô nước Cộng hoà xã hội chủ nghĩa Việt Nam là thành phố nào?',
            options: ['Đà Nẵng', 'Thành phố Hồ Chí Minh', 'Hải Phòng', 'Hà Nội'],
            answer: 3
        },
        {
            level: 2,
            question: 'Thành phố nào sau đây KHÔNG phải thành phố trực thuộc Trung ương?',
            options: ['Huế', 'Đồng Nai', 'Đà Nẵng', 'Nha Trang'],
            answer: 3
        },
        {
            level: 2,
            question: 'Đường bờ biển của Việt Nam có chiều dài là bao nhiêu?',
            options: ['Dài hơn 1.650 km', 'Dài hơn 3.260 km', 'Khoảng 1 triệu km²', 'Hơn 331 nghìn km²'],
            answer: 1
        },
        {
            level: 3,
            question: 'Tổng diện tích phần đất liền nước ta là bao nhiêu?',
            options: ['Hơn 331 nghìn km²', 'Khoảng 1 triệu km²', 'Hơn 3.260 km²', 'Khoảng 1.650 km²'],
            answer: 0
        },
        {
            level: 3,
            question: 'Vùng biển nước ta nằm ở phía nào của đất nước và thuộc biển nào?',
            options: ['Phía Tây - Vịnh Thái Lan', 'Phía Đông và Nam - Biển Đông', 'Phía Bắc - Vịnh Bắc Bộ', 'Phía Đông - Thái Bình Dương'],
            answer: 1
        },
        {
            level: 3,
            question: 'Nước ta có chung đường biên giới đất liền với những quốc gia nào?',
            options: ['Trung Quốc, Thái Lan, Lào', 'Lào, Cam-pu-chia, Thái Lan', 'Trung Quốc, Lào, Cam-pu-chia', 'Cam-pu-chia, Trung Quốc, Mi-an-ma'],
            answer: 2
        },
        {
            level: 3,
            question: 'Sự kiện nào diễn ra vào năm 2025 đối với hệ thống hành chính nước ta theo bài học?',
            options: ['Tăng từ 34 lên 63 tỉnh thành', 'Bổ sung Huế và Đồng Nai vào danh sách thành phố trực thuộc Trung ương', 'Đổi tên thủ đô Hà Nội', 'Mở rộng diện tích lên gấp đôi'],
            answer: 1
        },
        {
            level: 3,
            question: 'Vị trí địa lí mang lại đặc điểm khí hậu nào cho nước ta?',
            options: ['Khí hậu ôn đới lạnh giá', 'Khí hậu nhiệt đới ẩm gió mùa', 'Khí hậu hoang mạc khô cằn', 'Khí hậu hàn đới lạnh quanh năm'],
            answer: 1
        }
    ]
};
