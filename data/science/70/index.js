export const lesson070 = {
    topic: "Khám phá Khoa học",
    week: "35",
    period: "70",
    title: "Ôn tập Khoa học (Cuối học kỳ II)",
    quizCount: 30,
    desc: "Tổng hợp kiến thức Khoa học lớp 5: Vi khuẩn, Sự phát triển của con người và Bảo vệ môi trường.",
    content() {
        return `
        <div class="space-y-8 text-slate-800">
            <!-- Hero Section -->
            <div class="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 p-8 md:p-12 text-white shadow-2xl mb-8">
                <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl animate-pulse"></div>
                <div class="relative z-10">
                    <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-black uppercase tracking-widest backdrop-blur-md border border-white/30">
                        <span class="text-xl">📚</span> Ôn tập tổng hợp
                    </div>
                    <h1 class="text-4xl md:text-5xl font-black mb-6 leading-tight italic">Hệ thống Kiến thức Khoa học</h1>
                    <p class="text-lg md:text-xl font-bold opacity-90 leading-relaxed max-w-3xl">
                        Nội dung ôn tập tập trung vào 3 chủ đề lớn: Vi khuẩn, Con người & Sức khỏe, và Môi trường. Hãy cùng ôn lại để vững tin bước vào kì thi nhé!
                    </p>
                </div>
            </div>

            <!-- CHỦ ĐỀ 4: VI KHUẨN -->
            <section class="bg-white rounded-[32px] p-8 shadow-sm border border-emerald-100 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 text-emerald-100 pointer-events-none">
                    <span class="text-9xl font-black opacity-10">04</span>
                </div>
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-emerald-200">🦠</div>
                    <h2 class="text-3xl font-black text-emerald-800">CHỦ ĐỀ 4: VI KHUẨN</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <h3 class="text-lg font-black text-emerald-700 mb-4 flex items-center gap-2">
                            <span class="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                            Đặc điểm & Nơi sống
                        </h3>
                        <p class="text-base font-bold text-slate-600 leading-relaxed">
                            Vi khuẩn siêu nhỏ, sống khắp nơi: đất, nước, không khí, thực phẩm... Cần rửa tay thường xuyên (tay người có thể chứa 40.000 vi khuẩn/cm²) để phòng bệnh.
                        </p>
                    </div>
                    <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <h3 class="text-lg font-black text-emerald-700 mb-4 flex items-center gap-2">
                            <span class="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                            Vi khuẩn có ích
                        </h3>
                        <p class="text-base font-bold text-slate-600 leading-relaxed">
                            Vi khuẩn <b>Lactic</b> giúp muối chua, làm sữa chua. Giúp thực phẩm thơm ngon, hỗ trợ tiêu hóa và tăng cường sức khỏe.
                        </p>
                    </div>
                    <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <h3 class="text-lg font-black text-emerald-700 mb-4 flex items-center gap-2">
                            <span class="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
                            Vi khuẩn gây bệnh
                        </h3>
                        <p class="text-base font-bold text-slate-600 leading-relaxed">
                            <b>Bệnh tả:</b> Lây qua đường tiêu hóa (thức ăn bẩn).<br>
                            <b>Sâu răng:</b> Vi khuẩn dùng đường/tinh bột phá hủy men răng.
                        </p>
                    </div>
                </div>
            </section>

            <!-- CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE -->
            <section class="bg-white rounded-[32px] p-8 shadow-sm border border-blue-100 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 text-blue-100 pointer-events-none">
                    <span class="text-9xl font-black opacity-10">05</span>
                </div>
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-blue-200">🚶</div>
                    <h2 class="text-3xl font-black text-blue-800">CHỦ ĐỀ 5: CON NGƯỜI</h2>
                </div>

                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-blue-50 p-6 rounded-3xl">
                            <h4 class="font-black text-blue-700 mb-2">Hành trình 9 tháng</h4>
                            <p class="text-base font-bold text-slate-600 italic">Trứng + Tinh trùng → Hợp tử → Phôi → Thai nhi → Em bé.</p>
                        </div>
                        <div class="bg-blue-50 p-6 rounded-3xl">
                            <h4 class="font-black text-blue-700 mb-2">Nam và Nữ</h4>
                            <p class="text-base font-bold text-slate-600">Phân biệt chủ yếu bằng cơ quan sinh dục. Cần đối xử bình đẳng và tôn trọng lẫn nhau.</p>
                        </div>
                    </div>

                    <div class="bg-white border-2 border-blue-50 rounded-3xl p-6">
                        <h4 class="font-black text-blue-800 mb-4 flex items-center gap-2 text-xl">
                            ⏳ Các giai đoạn phát triển chính
                        </h4>
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div class="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <span class="text-2xl block mb-2">👶</span>
                                <b class="text-blue-600 block text-sm">Tuổi ấu thơ</b>
                                <span class="text-xs font-bold text-slate-400">0 - 9 tuổi</span>
                            </div>
                            <div class="text-center p-4 rounded-2xl bg-blue-100 border border-blue-200">
                                <span class="text-2xl block mb-2">🧒</span>
                                <b class="text-blue-700 block text-sm">Vị thành niên</b>
                                <span class="text-xs font-bold text-blue-500">10 - 19 tuổi</span>
                            </div>
                            <div class="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <span class="text-2xl block mb-2">🧑‍💼</span>
                                <b class="text-blue-600 block text-sm">Trưởng thành</b>
                                <span class="text-xs font-bold text-slate-400">20 - 60 tuổi</span>
                            </div>
                            <div class="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <span class="text-2xl block mb-2">👵</span>
                                <b class="text-blue-600 block text-sm">Tuổi già</b>
                                <span class="text-xs font-bold text-slate-400">Trên 60 tuổi</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-red-50 border border-red-100 rounded-3xl">
                        <h4 class="font-black text-red-700 mb-2 flex items-center gap-2">🛡️ Phòng tránh xâm hại</h4>
                        <p class="text-base font-bold text-red-800/80">Tránh xa tình huống nguy cơ (đi một mình nơi vắng, nhận đồ người lạ). Luôn tin tưởng và chia sẻ với người đáng tin cậy.</p>
                    </div>
                </div>
            </section>

            <!-- CHỦ ĐỀ 6: SINH VẬT VÀ MÔI TRƯỜNG -->
            <section class="bg-white rounded-[32px] p-8 shadow-sm border border-amber-100 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 text-amber-100 pointer-events-none">
                    <span class="text-9xl font-black opacity-10">06</span>
                </div>
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-amber-200">🌍</div>
                    <h2 class="text-3xl font-black text-amber-800">CHỦ ĐỀ 6: MÔI TRƯỜNG</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <h4 class="font-black text-amber-700 border-b-2 border-amber-100 pb-2 flex items-center gap-2">
                            🏠 Chức năng môi trường
                        </h4>
                        <ul class="space-y-3 text-base font-bold text-slate-600">
                            <li class="flex items-start gap-2">✨ Cung cấp nhu cầu sống (thức ăn, nước, ánh sáng...).</li>
                            <li class="flex items-start gap-2">🛡️ Bảo vệ sinh vật (tầng ozone, rừng...).</li>
                            <li class="flex items-start gap-2">♻️ Chứa đựng và phân hủy chất thải.</li>
                        </ul>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-black text-amber-700 border-b-2 border-amber-100 pb-2 flex items-center gap-2">
                            🌱 Hành động của chúng ta
                        </h4>
                        <div class="p-4 bg-red-50 rounded-2xl mb-2">
                            <b class="text-red-700 text-sm block">Tiêu cực ❌</b>
                            <p class="text-xs font-bold text-slate-500">Chặt rừng, xả rác, khai thác tài nguyên cạn kiệt.</p>
                        </div>
                        <div class="p-4 bg-emerald-50 rounded-2xl">
                            <b class="text-emerald-700 text-sm block">Tích cực ✅</b>
                            <p class="text-xs font-bold text-slate-500">Trồng rừng, phân loại rác, dùng năng lượng sạch (gió, mặt trời).</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;
    },
    practice() {
        return `
        <div class="space-y-12 pb-12">
            <!-- 1. Fill in the blanks -->
            <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                <h3 class="text-xl font-black text-emerald-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center">1</span>
                    Thử thách: Tìm hiểu Vi khuẩn
                </h3>
                ${Lesson.renderFillBlanks(
                    'kh70-fb-1',
                    'Vi khuẩn sống ở {0} xung quanh chúng ta. Để phòng bệnh, chúng ta cần thường xuyên {1} bằng xà phòng. Trong chế biến thực phẩm, vi khuẩn {2} được dùng để làm sữa chua.',
                    ['khắp mọi nơi', 'rửa tay', 'lactic', 'đồ ngọt', 'không khí'],
                    ['khắp mọi nơi', 'rửa tay', 'lactic']
                )}
            </div>

            <!-- 2. Ordering -->
            <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                <h3 class="text-xl font-black text-blue-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">2</span>
                    Sắp xếp giai đoạn phát triển con người
                </h3>
                ${Lesson.renderOrdering(
                    'kh70-ord-1',
                    'Kéo thả các giai đoạn theo đúng thứ tự thời gian:',
                    [
                        'Tuổi ấu thơ (đến 9 tuổi)',
                        'Tuổi vị thành niên (10-19 tuổi)',
                        'Tuổi trưởng thành (20-60 tuổi)',
                        'Tuổi già (trên 60 tuổi)'
                    ],
                    [0, 1, 2, 3]
                )}
            </div>

            <!-- 3. Matching -->
            <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                <h3 class="text-xl font-black text-amber-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center">3</span>
                    Nối chức năng môi trường
                </h3>
                ${Lesson.renderMatchingExercise(
                    'kh70-match-1',
                    'Nối nội dung ở cột trái với ý tương ứng ở cột phải:',
                    ['Cung cấp nhu cầu sống', 'Bảo vệ sinh vật', 'Nơi chứa chất thải'],
                    ['Tầng Ozone hấp thụ tia cực tím', 'Thức ăn, nước uống, nơi ở', 'Phân hủy nhờ vi khuẩn, nấm'],
                    [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 0 }, { leftIdx: 2, rightIdx: 2 }]
                )}
            </div>

            <!-- 4. Categorizing -->
            <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                <h3 class="text-xl font-black text-blue-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">4</span>
                    Phân loại hành động bảo vệ môi trường
                </h3>
                ${Lesson.renderCategorizing(
                    'kh70-cat-1',
                    'Phân loại các hành động sau:',
                    [
                        { name: '✅ Nên làm', color: 'emerald' },
                        { name: '❌ Không nên làm', color: 'red' }
                    ],
                    [
                        { text: 'Trồng rừng, phủ xanh đồi trọc', categoryIdx: 0 },
                        { text: 'Xả rác thải bừa bãi xuống sông', categoryIdx: 1 },
                        { text: 'Sử dụng tiết kiệm tài nguyên', categoryIdx: 0 },
                        { text: 'Khai thác tài nguyên quá mức', categoryIdx: 1 },
                        { text: 'Sử dụng năng lượng mặt trời', categoryIdx: 0 },
                        { text: 'Chặt phá rừng trái phép', categoryIdx: 1 }
                    ]
                )}
            </div>
            <!-- 5. Socratic Tutor Review -->
            <div class="bg-white rounded-[32px] p-6 shadow-sm border border-orange-100 bg-gradient-to-br from-white to-orange-50/30">
                <h3 class="text-xl font-black text-orange-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center">5</span>
                    Gia sư EduRobot: Ôn tập tổng hợp
                </h3>
                ${Lesson.renderSocraticTutor('kh70-tutor', {
                    title: 'Thầy EduRobot',
                    phases: [
                        {
                            text: "Chào em! Thầy là EduRobot. Chúng ta vừa ôn tập xong các chủ đề Khoa học lớp 5. Em cảm thấy chủ đề nào 'khó nhằn' nhất nhỉ?",
                            options: [
                                { text: "Dạ, là chủ đề Vi khuẩn ạ.", next: 1 },
                                { text: "Dạ, là Con người và sức khỏe.", next: 2 },
                                { text: "Dạ, là Môi trường và tài nguyên.", next: 3 }
                            ]
                        },
                        {
                            text: "Vi khuẩn tuy nhỏ nhưng sức mạnh không hề nhỏ đâu nhé! Em có nhớ chúng ta dùng loại vi khuẩn nào để làm ra món sữa chua thơm ngon không?",
                            options: [
                                { text: "Vi khuẩn gây bệnh tả.", next: 0, feedback: "Ồ không, vi khuẩn đó rất nguy hiểm đấy! Hãy chọn lại nhé." },
                                { text: "Vi khuẩn Lắc-tíc (Lactic).", next: 4, feedback: "Chính xác! Vi khuẩn Lactic là 'người bạn' giúp chúng ta có món sữa chua bổ dưỡng." }
                            ]
                        },
                        {
                            text: "Con người chúng ta phát triển qua nhiều giai đoạn. Theo em, giai đoạn nào là lúc cơ thể có nhiều biến đổi nhanh chóng về cả thể chất và tinh thần?",
                            options: [
                                { text: "Tuổi ấu thơ.", next: 0, feedback: "Tuổi ấu thơ cũng biến đổi nhiều, nhưng có một giai đoạn khác 'bùng nổ' hơn cơ. Thử lại nhé!" },
                                { text: "Tuổi vị thành niên (dậy thì).", next: 4, feedback: "Đúng rồi! Đây là giai đoạn cực kỳ quan trọng để em phát triển thành người lớn đấy." }
                            ]
                        },
                        {
                            text: "Bảo vệ môi trường là trách nhiệm của mọi người. Để giảm lượng rác thải ra môi trường, em nghĩ hành động nào sau đây là tốt nhất?",
                            options: [
                                { text: "Phân loại rác và tái chế.", next: 4, feedback: "Tuyệt vời! Tái chế giúp chúng ta tận dụng tài nguyên và giảm ô nhiễm môi trường." },
                                { text: "Đốt hết tất cả các loại rác.", next: 0, feedback: "Đốt rác không đúng cách sẽ gây ô nhiễm không khí nặng nề đấy em ạ. Hãy chọn cách khác nhé!" }
                            ]
                        },
                        {
                            text: "Chúc mừng em đã hoàn thành thử thách ôn tập cùng Thầy! Em có muốn ôn lại thêm một lần nữa không?",
                            options: [
                                { text: "Dạ, em đã sẵn sàng cho kỳ thi!", next: 4 },
                                { text: "Cho em ôn lại từ đầu nhé.", next: 0 }
                            ]
                        }
                    ]
                })}
            </div>
        </div>
        `;
    },
    quizPool: [
        {
            "question": "Vi khuẩn lắc-tíc tạo ra sản phẩm có mùi, vị như thế nào?",
            "options": ["Chua nhẹ.", "Ngọt.", "Đắng.", "Cay."],
            "answer": 0
        },
        {
            "question": "Trong quá trình làm sữa chua, sau khi ủ, sữa chuyển sang trạng thái đặc và có mùi vị như thế nào?",
            "options": ["Thơm và nhạt.", "Cay và đắng nhẹ.", "Thơm và chua nhẹ.", "Ngọt và chua nhẹ."],
            "answer": 2
        },
        {
            "question": "Đặc điểm nào sau đây không xuất hiện của nam ở tuổi dậy thì?",
            "options": ["Xuất hiện râu.", "Ngực nở rộng hơn.", "Giọng nói trầm hơn.", "Xuất hiện kinh nguyệt."],
            "answer": 3
        },
        {
            "question": "Độ tuổi nào có thể lập gia đình, sinh con, chịu trách nhiệm với bản thân, gia đình và xã hội?",
            "options": ["Tuổi thơ ấu.", "Tuổi trưởng thành.", "Tuổi già.", "Tuổi vị thành niên."],
            "answer": 1
        },
        {
            "question": "Tác dụng của việc sau khi đi vệ sinh, cần lau và thấm bằng giấy vệ sinh mềm hoặc rửa đúng cách là gì?",
            "options": ["Để tuyến bã nhờn hoạt động hiệu quả.", "Tạo môi trường cho vi khuẩn có lợi phát triển.", "Tránh vi khuẩn đi từ hậu môn đi vào cơ quan sinh dục, gây viêm nhiễm.", "Giữ cho cơ quan sinh dục luôn khô thoáng."],
            "answer": 2
        },
        {
            "question": "Ở tuổi dậy thì, cơ thể bạn nữ và bạn nam có những dấu hiệu gì?",
            "options": ["Có những thay đổi về cơ thể và cảm xúc.", "Sức khỏe tinh thần và thể chất bị suy giảm.", "Có tinh thần vận động mạnh mẽ.", "Trí nhớ phát triển mạnh."],
            "answer": 0
        },
        {
            "question": "Môi trường cung cấp những gì để các loại sinh vật sinh sống và phát triển?",
            "options": ["Đất đai, đường xá, thức ăn.", "Thức ăn, nơi ở và các điều kiện cần thiết khác.", "Nhà cửa, chất đốt và thức ăn.", "Than đá, chất đốt và thức ăn."],
            "answer": 1
        },
        {
            "question": "Các chất thải trong môi trường được phân hủy nhờ đâu?",
            "options": ["Chất đốt.", "Chất mùn.", "Không khí và nước.", "Vi khuẩn và nấm có trong môi trường."],
            "answer": 3
        },
        {
            "question": "Kết quả của việc tái sử dụng các vật dụng trong gia đình là gì?",
            "options": ["Dễ gây bệnh truyền nhiễm.", "Giảm thiểu rác thải, tiết kiệm tài nguyên.", "Kinh tế suy thoái do hàng hóa bị tồn đọng.", "Đồ ăn bị giảm chất lượng."],
            "answer": 1
        },
        {
            "question": "Đâu là cách bảo vệ môi trường nước?",
            "options": ["Không vứt rác, xả chất thải xuống sông, hồ.", "Trồng cây che phủ rừng.", "Sử dụng năng lượng gió.", "Mở khu bảo tồn động vật hoang dã."],
            "answer": 0
        },
        {
            "question": "Đâu không phải cách để phòng tránh nguy cơ bị xâm hại tình dục?",
            "options": ["Giữ khoảng cách với người lạ.", "Không nhận quà của người lạ.", "Không cho phép người lạ chạm vào vùng riêng tư.", "Đi một mình trong khu vắng vẻ."],
            "answer": 3
        },
        {
            "question": "Em cần làm gì khi thấy một bạn nam bị người anh họ trêu đùa làm bạn ấy rất khó chịu, bạn ấy chống lại những người anh họ vẫn không buông ra?",
            "options": ["Bỏ qua vì đó là anh em họ.", "Phản đối hành vi đó.", "Bỏ qua vì đó không phải việc của mình.", "Giữ im lặng."],
            "answer": 1
        },
        {
            "question": "Vi khuẩn có đặc điểm về kích thước như thế nào?",
            "options": ["Kích thước rất lớn, bằng ngón tay.", "Kích thước bằng hạt đỗ.", "Kích thước rất nhỏ, không nhìn thấy được bằng mắt thường.", "Kích thước to bằng một cái lá cây."],
            "answer": 2
        },
        {
            "question": "Theo khuyến cáo của Tổ chức Y tế Thế giới (WHO), chúng ta cần thường xuyên làm gì để phòng chống lây nhiễm các bệnh nhiễm khuẩn nguy hiểm?",
            "options": ["Rửa tay và giữ đôi bàn tay sạch sẽ.", "Đeo kính khi ra đường.", "Mặc áo khoác dày.", "Hạn chế nói chuyện với người khác."],
            "answer": 0
        },
        {
            "question": "Người ta sử dụng loại vi khuẩn nào để chế biến thực phẩm như muối chua rau, củ, quả và làm sữa chua?",
            "options": ["Vi khuẩn lactic.", "Vi khuẩn tả.", "Nấm men.", "Vi khuẩn sâu răng."],
            "answer": 0
        },
        {
            "question": "Vi khuẩn gây bệnh sâu răng sử dụng chất gì từ thức ăn để tạo thành các chất phá huỷ men răng?",
            "options": ["Chất đạm, chất béo.", "Vi khoáng, vitamin.", "Đường, tinh bột.", "Chất xơ."],
            "answer": 2
        },
        {
            "question": "Bệnh tả lây truyền qua con đường nào?",
            "options": ["Lây qua đường hô hấp.", "Lây qua đường máu.", "Lây qua đường tiêu hoá.", "Lây qua vết thương hở."],
            "answer": 2
        },
        {
            "question": "Cơ thể người được hình thành từ sự kết hợp giữa trứng của mẹ và tinh trùng của bố tạo thành gì?",
            "options": ["Phôi.", "Hợp tử.", "Thai nhi.", "Em bé."],
            "answer": 1
        },
        {
            "question": "Khoảng thời gian bao lâu sau khi thụ tinh thì thai nhi phát triển gần như hoàn thiện và sẵn sàng được sinh ra?",
            "options": ["Khoảng 3 tháng.", "Khoảng 6 tháng.", "Khoảng 9 tháng.", "Khoảng 12 tháng."],
            "answer": 2
        },
        {
            "question": "Theo Tổ chức Y tế Thế giới (WHO), lứa tuổi vị thành niên nằm trong giai đoạn nào?",
            "options": ["Từ lúc mới sinh đến 9 tuổi.", "Từ 10 đến 19 tuổi.", "Từ 20 đến 60 tuổi.", "Trên 60 tuổi."],
            "answer": 1
        },
        {
            "question": "Con người bước vào giai đoạn nào thì sức khoẻ, các giác quan, trí nhớ,... bắt đầu giảm dần?",
            "options": ["Tuổi ấu thơ.", "Tuổi vị thành niên.", "Tuổi trưởng thành.", "Tuổi già."],
            "answer": 3
        },
        {
            "question": "Nam và nữ được phân biệt chủ yếu bởi đặc điểm sinh học nào?",
            "options": ["Độ dài của tóc.", "Cơ quan sinh dục.", "Trang phục mặc hàng ngày.", "Tính cách, sở thích."],
            "answer": 1
        },
        {
            "question": "Để phát triển tối đa chiều cao ở tuổi dậy thì, cần tăng cường vận động kết hợp sử dụng các thực phẩm giàu chất gì?",
            "options": ["Giàu chất béo.", "Giàu đường.", "Giàu can-xi.", "Giàu tinh bột."],
            "answer": 2
        },
        {
            "question": "Nữ giới trong thời kì có kinh nguyệt cần lưu ý thay băng vệ sinh cách nhau khoảng thời gian bao lâu?",
            "options": ["Từ 1 đến 2 giờ một lần.", "Từ 3 đến 4 giờ một lần.", "1 ngày một lần.", "2 ngày một lần."],
            "answer": 1
        },
        {
            "question": "Tình huống nào dưới đây KHÔNG có nguy cơ dẫn đến bị xâm hại?",
            "options": ["Đi một mình qua quãng đường vắng vẻ, trời tối.", "Nhận quà hoặc tiền từ người lạ.", "Mở cửa cho người lạ vào nhà khi ở một mình.", "Đi dã ngoại cùng bố mẹ và người thân."],
            "answer": 3
        },
        {
            "question": "Hành động nào sau đây là biện pháp phòng tránh nguy cơ lây nhiễm vi khuẩn gây bệnh tả?",
            "options": ["Chỉ uống nước lã chưa đun sôi.", "Thường xuyên để móng tay dài.", "Rửa tay bằng xà phòng trước khi ăn, sau khi đi vệ sinh.", "Không đeo găng tay khi dọn rác."],
            "answer": 2
        },
        {
            "question": "Môi trường cung cấp chỗ ở, thức ăn, ánh sáng, nhiệt độ cho con người và động thực vật là thực hiện chức năng gì?",
            "options": ["Cung cấp các nhu cầu sống thiết yếu cho sinh vật.", "Tác động tiêu cực đến con người.", "Tiêu thụ rác thải.", "Gây hiệu ứng nhà kính."],
            "answer": 0
        },
        {
            "question": "Tầng ô-dôn (ozone) bao quanh Trái Đất có vai trò quan trọng nào đối với sinh vật và con người?",
            "options": ["Phân huỷ chất thải hữu cơ từ động vật.", "Cung cấp thức ăn cho các loài chim.", "Hấp thụ phần lớn tia cực tím có hại từ Mặt Trời.", "Ngăn cản sự phát triển của vi khuẩn."],
            "answer": 2
        },
        {
            "question": "Hành động nào sau đây là tác động tiêu cực của con người đến môi trường?",
            "options": ["Trồng rừng, phủ xanh đồi trọc.", "Sử dụng năng lượng mặt trời.", "Khai thác, sử dụng quá mức làm tài nguyên thiên nhiên bị cạn kiệt.", "Ủ phân hữu cơ từ rác thải."],
            "answer": 2
        },
        {
            "question": "Để chung tay bảo vệ môi trường, học sinh có thể thực hiện việc làm nào sau đây?",
            "options": ["Chặt cây xanh trong sân trường.", "Khai thác cát, sỏi dưới lòng sông.", "Tắt điện khi không sử dụng và vứt rác đúng nơi quy định.", "Sử dụng nhiều đồ nhựa dùng một lần."],
            "answer": 2
        }
    ]
};

export default lesson070;
