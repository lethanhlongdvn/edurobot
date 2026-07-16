// Bài 1 Tiết 1: Thành phần và vai trò của đất đối với cây trồng (SGK Khoa học 5 - Kết nối tri thức)
export const lesson001 = {
    topic: 'Chất',
    week: '1',
    period: '1',
    title: 'Thành phần và vai trò của đất đối với cây trồng',
    description: 'Tìm hiểu các thành phần chính của đất, các thí nghiệm thực tiễn và vai trò của đất đối với sự sinh trưởng của cây trồng.',

    content: `
        <!-- ====== PHẦN KHỞI ĐỘNG ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">🎯</div>
                <h2 class="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-100">Khởi động</h2>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div class="lg:col-span-8 space-y-4">
                    <div class="p-5 md:p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-emerald-500">
                        <p class="text-lg md:text-2xl font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                            <span class="text-emerald-600 font-black">Tình huống thực tế (Hình 1):</span> Ở vùng cao nguyên đá nguyên đá, cây ngô được trồng trong các khe đất mà không trồng được trên đá.
                        </p>
                    </div>
                    <p class="text-xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400 italic">
                        ❓ Vậy trong đất có những thành phần nào giúp cho cây trồng có thể phát triển?
                    </p>
                </div>
                <div class="lg:col-span-4 flex justify-center">
                    <div class="relative group rounded-[32px] overflow-hidden shadow-lg border-2 border-emerald-100 bg-emerald-50 p-4 text-center">
                        <span class="text-4xl md:text-5xl block mb-2">🏔️🌽</span>
                        <span class="text-sm font-bold text-emerald-800">Hình 1. Cây ngô mọc trong khe đá</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ====== PHẦN 1: THÀNH PHẦN CỦA ĐẤT ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-8">
            <div class="flex items-center gap-3 border-b-2 border-emerald-100 pb-4">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">1</div>
                <h2 class="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100">Thành phần của đất</h2>
            </div>

            <!-- Khái niệm cốt lõi SGK -->
            <div class="p-6 md:p-8 bg-blue-50/50 dark:bg-blue-950/10 rounded-[32px] border-2 border-blue-600 space-y-4">
                <p class="text-lg md:text-2xl font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                    🧪 Đất được hình thành do đá bị phá vỡ sau một quá trình lâu dài dưới tác động của nhiệt, nước, không khí, gió, mưa,...
                </p>
                <p class="text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed border-t border-blue-100 pt-4">
                    🔑 <span class="text-blue-700 font-black">Chất khoáng, mùn, nước, không khí</span> là những thành phần chính có trong đất. Mùn được hình thành chủ yếu do xác động vật và thực vật phân huỷ với sự tham gia của sinh vật trong đất. Tỉ lệ các thành phần trong đất thay đổi tuỳ thuộc vào điều kiện hình thành đất ở từng nơi.
                </p>
            </div>

            <!-- Thí nghiệm: Hình ảnh SGK + Mô phỏng tương tác -->
            <div class="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200">
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                    🔬 Thí nghiệm tìm thành phần của đất (Hình 2 & 3)
                </h3>
                <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-6">👆 Nhấn vào hình ảnh bên dưới để xem <span class="text-emerald-600 font-black">mô phỏng thí nghiệm tương tác</span></p>

                <!-- 2 hình ảnh SGK dạng grid, clickable -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Hình 2: Thả đất vào nước -->
                    <div onclick="window.moPhongThiNghiemDatTiet1(0)" 
                         class="group cursor-pointer p-4 bg-white dark:bg-slate-800 rounded-[28px] border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
                        <div class="relative overflow-hidden rounded-2xl mb-3">
                            <img src="assets/images/science/1-2/hinh2_tha_dat_vao_nuoc.png" 
                                 alt="Hình 2 - Thả đất vào cốc nước" 
                                 class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                                 data-no-zoom />
                            <div class="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-colors duration-300 flex items-center justify-center">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                                    <span class="text-3xl">🔬</span>
                                </div>
                            </div>
                        </div>
                        <h4 class="text-base md:text-lg font-black text-blue-700 dark:text-blue-400 mb-1">Thí nghiệm 1: Thả đất vào nước</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">🫧 Tìm <b>Không khí</b> trong đất</p>
                        <div class="mt-2 inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full">
                            👆 Nhấn để mô phỏng
                        </div>
                    </div>

                    <!-- Hình 3: Đun ống nghiệm -->
                    <div onclick="window.moPhongThiNghiemDatTiet1(1)" 
                         class="group cursor-pointer p-4 bg-white dark:bg-slate-800 rounded-[28px] border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
                        <div class="relative overflow-hidden rounded-2xl mb-3">
                            <img src="assets/images/science/1-2/hinh3_dun_ong_nghiem.png" 
                                 alt="Hình 3 - Đun ống nghiệm chứa đất" 
                                 class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                                 data-no-zoom />
                            <div class="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-colors duration-300 flex items-center justify-center">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                                    <span class="text-3xl">🔬</span>
                                </div>
                            </div>
                        </div>
                        <h4 class="text-base md:text-lg font-black text-blue-700 dark:text-blue-400 mb-1">Thí nghiệm 2: Đun ống nghiệm chứa đất</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">💧 Tìm <b>Nước</b> và <b>Mùn</b> trong đất</p>
                        <div class="mt-2 inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full">
                            👆 Nhấn để mô phỏng
                        </div>
                    </div>
                </div>

                <!-- Tóm tắt kết quả thí nghiệm -->
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200">
                        <h4 class="text-sm md:text-base font-black text-blue-700 mb-2">🫧 Kết quả TN1</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">Bọt khí nổi lên → Đất chứa <b class="text-emerald-600">Không khí</b></p>
                    </div>
                    <div class="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200">
                        <h4 class="text-sm md:text-base font-black text-blue-700 mb-2">💧🔥 Kết quả TN2</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">Giọt nước ngưng tụ → Đất chứa <b class="text-emerald-600">Nước</b>. Khói khét → Đất chứa <b class="text-emerald-600">Mùn</b></p>
                    </div>
                </div>
            </div>

            <!-- Tỉ lệ các thành phần (Hình 4) -->
            <div class="p-6 md:p-8 bg-blue-50/20 dark:bg-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700">
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-sm md:text-lg flex items-center justify-center font-black">3</span>
                    Biểu đồ thành phần của đất (Hình 4)
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="flex justify-center">
                        <svg class="w-64 h-64 drop-shadow-lg" viewBox="0 0 200 200">
                            <!-- Chat khoang 45% (Xanh duong - blue) -->
                            <path d="M 100 100 L 195.1 130.9 A 100 100 0 0 1 5.4 133.9 Z" fill="#2563eb" />
                            <!-- Nuoc 25% (Vang) -->
                            <path d="M 100 100 L 5.4 133.9 A 100 100 0 0 1 69.1 5.1 Z" fill="#eab308" />
                            <!-- Khong khi 25% (Xam) -->
                            <path d="M 100 100 L 69.1 5.1 A 100 100 0 0 1 195.1 69.1 Z" fill="#94a3b8" />
                            <!-- Mun & khac 5% (Cam) -->
                            <path d="M 100 100 L 195.1 69.1 A 100 100 0 0 1 195.1 130.9 Z" fill="#ea580c" />
                            <circle cx="100" cy="100" r="30" fill="#ffffff" class="dark:fill-slate-800" />
                        </svg>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded-lg bg-blue-600"></span>
                            <span class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-300">Chất khoáng (~45% - Nhiều nhất)</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded-lg bg-yellow-500"></span>
                            <span class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-300">Nước (~25%)</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded-lg bg-slate-400"></span>
                            <span class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-300">Không khí (~25%)</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded-lg bg-orange-600"></span>
                            <span class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-300">Mùn và một số thành phần khác (~5%)</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hộp Em có biết phân loại đất -->
            <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-2xl md:text-3xl">💡</span>
                    <h4 class="text-lg md:text-xl font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">Em có biết?</h4>
                </div>
                <p class="text-base md:text-lg font-bold text-slate-600 dark:text-slate-300 leading-relaxed">
                    Quá trình hình thành đất đã tạo ra những hạt riêng rẽ có kích thước và hình dạng khác nhau như hạt cát, hạt sét,... Tuỳ thuộc vào tỉ lệ các loại hạt trong đất, người ta chia thành các loại đất khác nhau như <b>đất cát, đất thịt, đất sét</b> (Hình 5).
                </p>
            </div>
        </div>

        <!-- ====== PHẦN 2: VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-8">
            <div class="flex items-center gap-3 border-b-2 border-emerald-100 pb-4">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">2</div>
                <h2 class="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100">Vai trò của đất đối với cây trồng</h2>
            </div>

            <!-- Định nghĩa lý thuyết cốt lõi SGK -->
            <div class="p-6 md:p-8 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-[32px] border-2 border-emerald-600">
                <p class="text-xl md:text-3xl font-black text-emerald-800 dark:text-emerald-400 text-center leading-relaxed">
                    ✨ "Chất khoáng, mùn cung cấp dinh dưỡng cho cây trồng, giúp cây trồng sống và phát triển."
                </p>
            </div>

            <!-- Quan sát hình 6 và trả lời câu hỏi -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-7 space-y-6">
                    <h3 class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200">
                        🔍 Quan sát Hình 6 và trả lời:
                    </h3>
                    <div class="space-y-4">
                        <div class="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200">
                            <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                                💬 <b>Câu hỏi 1:</b> Rễ cây lấy những gì từ đất?
                            </p>
                            <p class="text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                                👉 Trả lời: Rễ cây lấy <b>chất khoáng, mùn (chất hữu cơ), nước và không khí</b> từ đất.
                            </p>
                        </div>
                        <div class="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200">
                            <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                                💬 <b>Câu hỏi 2:</b> Vì sao cây có thể đứng vững, không bị đổ?
                            </p>
                            <p class="text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                                👉 Trả lời: Nhờ có rễ cây bám chặt và đâm sâu vào các lớp đất giúp cây đứng vững chắc.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-5 flex justify-center">
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-[32px] border border-emerald-100 flex flex-col items-center">
                        <span class="text-4xl md:text-5xl block mb-2">🌳🌾</span>
                        <p class="text-sm font-bold text-emerald-800 dark:text-emerald-300 text-center">Hình 6. Cây hút chất dinh dưỡng từ đất</p>
                    </div>
                </div>
            </div>

            <!-- Hộp Em có biết vùng miền đất Việt Nam -->
            <div class="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                <div class="flex items-center gap-2">
                    <span class="text-2xl md:text-3xl">🇻🇳</span>
                    <h4 class="text-lg md:text-xl font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">Đất trồng theo vùng miền</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-5 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border border-amber-200">
                        <span class="text-2xl md:text-3xl block mb-2">☕🪵</span>
                        <h5 class="text-base md:text-lg font-black text-amber-800 dark:text-amber-400 mb-1">Đất bazan (Tây Nguyên, Nam Trung Bộ)</h5>
                        <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">Phù hợp trồng cây công nghiệp dài ngày như cao su, cà phê, hồ tiêu,... (Hình 7)</p>
                    </div>
                    <div class="p-5 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200">
                        <span class="text-2xl md:text-3xl block mb-2">🌾🌽</span>
                        <h5 class="text-base md:text-lg font-black text-emerald-800 dark:text-emerald-400 mb-1">Đất phù sa (Vùng đồng bằng sông lớn)</h5>
                        <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">Phổ biến dọc sông Hồng, sông Cửu Long,... rất tốt để trồng lúa, ngô, khoai,... (Hình 8)</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice() {
        return `
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-12">
            <div class="flex items-center gap-3 border-b-2 border-emerald-100 pb-4">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">🏋️</div>
                <h2 class="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100">Luyện tập & Tương tác</h2>
            </div>

            <!-- ====== BÀI 1: NỐI CẶP ĐÔI ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">1</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Nối thành phần với hiện tượng thí nghiệm tương ứng</h3>
                </div>
                ${Lesson.renderMatchingExercise(
                    'kh-match-1',
                    'Hãy nối các ô thông tin ở cột trái với ô mô tả kết quả thí nghiệm ở cột phải sao cho đúng nhất.',
                    ['Không khí trong đất', 'Nước trong đất', 'Chất khoáng trong đất', 'Mùn và chất hữu cơ'],
                    [
                        'Thành ống nghiệm xuất hiện những giọt nước ngưng tụ khi đun nóng',
                        'Sủi bọt khí nổi lên mặt nước ngay sau khi thả cục đất vào cốc nước',
                        'Đất đun nóng bốc hơi khói kèm theo mùi khét của động thực vật phân hủy',
                        'Các hạt nặng như cát, sỏi, sét lắng xuống đáy cốc nước sau khi khuấy'
                    ],
                    [
                        { leftIdx: 0, rightIdx: 1 }, // Không khí -> Sủi bọt khí
                        { leftIdx: 1, rightIdx: 0 }, // Nước -> Giọt nước ngưng tụ
                        { leftIdx: 2, rightIdx: 3 }, // Chất khoáng -> Lắng xuống đáy
                        { leftIdx: 3, rightIdx: 2 }  // Mùn -> Khói, mùi khét
                    ]
                )}
            </div>

            <!-- ====== BÀI 2: ĐÚNG / SAI (True/False) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">2</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Chọn Đúng (Đ) hoặc Sai (S)</h3>
                </div>
                ${Lesson.renderTrueFalse('kh-tf-1', [
                    {
                        text: 'Mùn trong đất chủ yếu được hình thành từ đá bị phá vỡ sau quá trình lâu dài.',
                        answer: false,
                        explanation: 'Sai! Đá bị phá vỡ tạo thành chất khoáng. Mùn được hình thành từ xác động vật và thực vật phân hủy.'
                    },
                    {
                        text: 'Chất khoáng là thành phần chiếm tỷ lệ lớn nhất trong đất (khoảng 45%).',
                        answer: true,
                        explanation: 'Đúng! Chất khoáng là bộ phận chiếm tỷ lệ lớn nhất giúp rễ bám sâu nâng đỡ cây.'
                    },
                    {
                        text: 'Cây có thể đứng vững hoàn toàn không cần rễ bám vào đất.',
                        answer: false,
                        explanation: 'Sai! Đất giữ cho cây đứng vững là nhờ rễ cây đâm sâu và bám chặt vào lòng đất.'
                    },
                    {
                        text: 'Không khí chứa trong các khe hở của đất giúp rễ cây thực hiện quá trình hô hấp.',
                        answer: true,
                        explanation: 'Chính xác! Do đó chúng ta cần thường xuyên vun xới giúp đất thoáng khí.'
                    }
                ])}
            </div>

            <!-- ====== BÀI 3: ĐIỀN VÀO CHỖ TRỐNG (Fill-in-the-Blanks) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">3</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Điền từ thích hợp hoàn thành bài học</h3>
                </div>
                ${Lesson.renderFillBlanks(
                    'kh-fb-1',
                    'Thành phần của đất gồm: chất khoáng, {0}, nước, {1},... Đất giữ cho cây đứng vững, cung cấp chất dinh dưỡng ({2}), không khí, nước đảm bảo cho cây {3} và phát triển.',
                    ['mùn', 'không khí', 'chất khoáng và mùn', 'sống', 'sinh vật', 'ánh sáng'],
                    ['mùn', 'không khí', 'chất khoáng và mùn', 'sống']
                )}
            </div>

            <!-- ====== BÀI 4: VẬN DỤNG VÀ THỰC TIỄN (AI TUTOR) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">4</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Trả lời câu hỏi vận dụng</h3>
                </div>
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-6">
                    <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                        🚜 <b>Câu hỏi (Hình 9 SGK):</b> Em hãy quan sát các hoạt động như <b>làm tơi xới đất</b> và <b>bón phân hữu cơ</b> cho đất. Hãy giải thích tác dụng của các việc làm đó đối với đất và cây trồng?
                    </p>
                    ${AIInteraction.renderTutor(
                        'kh-tutor-1',
                        'Em hãy nhập câu trả lời giải thích tác dụng của việc cày bừa/xới đất và bón phân cho cây trồng.',
                        'Nhập câu trả lời của em tại đây...'
                    )}
                </div>
            </div>

            <!-- ====== HÌNH ẢNH HOÀN THÀNH BÀI HỌC (STITCH CELEBRATION GRAPHIC) ====== -->
            <div class="pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col items-center">
                <img src="assets/images/science/1-2/lesson_complete.png" alt="Chúc mừng hoàn thành bài học" class="w-full max-w-lg rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-300" />
                <p class="text-sm font-bold text-slate-500 mt-4 text-center">Chúc các em nhỏ học tập thật vui cùng bài học về Đất và Cây trồng! 🌱✨</p>
            </div>
        </div>
        `;
    },

    quizPool: [
        // Level 1: Nhận biết
        {
            level: 1,
            question: 'Theo Sách giáo khoa Khoa học 5, các thành phần chính có trong đất là gì?',
            options: [
                'Cát, nước, mùn, sinh vật',
                'Chất khoáng, mùn, nước, không khí',
                'Đá, sỏi, lá cây phân hủy, nước',
                'Cát, sét, mùn, khí oxi'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Trong đất trồng, thành phần nào thường chiếm tỷ lệ thể tích lớn nhất?',
            options: ['Mùn', 'Nước', 'Chất khoáng', 'Không khí'],
            answer: 2
        },
        {
            level: 1,
            question: 'Mùn trong đất chủ yếu được hình thành từ nguồn nào?',
            options: [
                'Từ các hạt cát và sỏi bị nghiền nhỏ',
                'Từ xác động vật và thực vật phân hủy',
                'Từ nước mưa và hơi ẩm',
                'Từ phân hóa học do con người bón vào'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Đất trồng được hình thành trực tiếp từ tác nhân chính nào dưới đây?',
            options: [
                'Phân bón hóa học tích tụ lâu ngày',
                'Đá bị phá vỡ lâu ngày do nhiệt, nước, không khí, gió, mưa',
                'Lá cây rừng rụng tích tụ',
                'Nước ngầm dâng cao xói mòn'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Màu đỏ hoặc đỏ vàng đặc trưng của loại đất bazan ở vùng cao nguyên Tây Nguyên thích hợp trồng cây gì?',
            options: ['Lúa nước', 'Cây công nghiệp (cà phê, cao su, hồ tiêu)', 'Rau ôn đới', 'Cây ngập mặn'],
            answer: 1
        },
        // Level 2: Thông hiểu
        {
            level: 2,
            question: 'Khi thả đất vào cốc nước và thấy bọt khí nổi lên, thí nghiệm này chứng minh điều gì?',
            options: [
                'Đất có chứa sinh vật đang hô hấp',
                'Đất có chứa không khí bên trong các khe hở',
                'Đất có chứa nhiều chất dinh dưỡng',
                'Đất chứa nước làm sủi bọt'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Khi đun nóng ống nghiệm chứa đất trên ngọn lửa đèn cồn, hiện tượng giọt nước ngưng tụ trên thành ống nghiệm chứng minh đất có:',
            options: ['Mùn', 'Chất khoáng', 'Nước', 'Không khí'],
            answer: 2
        },
        {
            level: 2,
            question: 'Vì sao đất bazan có khả năng trồng được các loại cây công nghiệp lâu năm phát triển tốt?',
            options: [
                'Vì có tỷ lệ chất khoáng và mùn màu mỡ, tơi xốp sâu',
                'Vì chứa nhiều hạt sỏi và cát sạch',
                'Vì nằm ở vùng không có mưa',
                'Vì có màu đỏ bắt mắt'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Tác dụng chủ yếu của việc bón phân hữu cơ (như phân chuồng hoai mục, lá ủ) cho đất là gì?',
            options: [
                'Tạo ra chất khoáng cát sỏi mới',
                'Làm tăng lượng mùn và cải thiện độ tơi xốp, dinh dưỡng cho đất',
                'Làm cho đất cứng hơn',
                'Ngăn cản giun đất phát triển'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Tại sao khi trồng cây người ta phải thực hiện vun xới quanh gốc cây?',
            options: [
                'Để làm chặt đất cho cây khỏi đổ',
                'Giúp đất thoáng khí, rễ cây hô hấp tốt và dễ hút dinh dưỡng hơn',
                'Làm đẹp cảnh quan quanh vườn',
                'Tiết kiệm nước tưới'
            ],
            answer: 1
        },
        // Level 3: Vận dụng
        {
            level: 3,
            question: 'Tại sao ngô trồng ở cao nguyên đá Đồng Văn có thể sinh trưởng được trong các khe đá mà không thể mọc trên mặt đá trơn?',
            options: [
                'Do mặt đá nhận nhiều ánh nắng hơn',
                'Do khe đá có đất tích tụ, giữ ẩm, cung cấp đủ chất khoáng, mùn, nước, không khí',
                'Do gió thổi mạnh làm gãy ngô trên mặt đá',
                'Do đá trơn chứa chất độc hại'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'If đất trồng bị ngập úng nước trong một thời gian dài, hiện tượng gì sẽ xảy ra khiến cây bị héo hoặc chết?',
            options: [
                'Nước nhiều đẩy không khí ra ngoài khe đất, rễ cây thiếu ô-xy dẫn đến không hô hấp được và thối rễ',
                'Cây hút quá nhiều nước làm vỡ mạch',
                'Mùn hữu cơ bị trôi hết lập tức',
                'Chất khoáng trong đất biến mất'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Trồng cây trong cát sạch đã được rửa trôi hoàn toàn mùn hữu cơ thì cây sẽ phát triển như thế nào?',
            options: [
                'Phát triển rất nhanh vì cát thoáng rễ',
                'Cây phát triển kém, còi cọc vì thiếu chất dinh dưỡng chủ yếu từ mùn',
                'Cây không thể đứng thẳng',
                'Cây sinh trưởng hoàn toàn bình thường'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Trong nông nghiệp thông minh công nghệ cao, người ta ứng dụng hệ thống tưới tiêu và bón phân tự động nhằm mục đích chính là gì?',
            options: [
                'Tăng diện tích đất cát trồng trọt',
                'Cung cấp nước và dinh dưỡng vừa đủ theo nhu cầu cây, bảo vệ môi trường và giữ tài nguyên đất',
                'Làm sạch hoàn toàn các hạt sét trong đất',
                'Thay thế hoàn toàn vai trò của rễ cây'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Vì sao đất trong các khu rừng già tự nhiên thường rất tơi xốp, ẩm và màu mỡ hơn đất ở những vùng đồi trọc bị xói mòn?',
            options: [
                'Vì đồi trọc có nhiều giun đất phá hoại đất',
                'Vì rừng già có thảm lá rụng dồi dào phân hủy liên tục tạo mùn và giữ nước, không khí tốt',
                'Vì rừng già không có nắng chiếu xuống đất',
                'Vì đất rừng già có nhiều đá sỏi hơn'
            ],
            answer: 1
        }
    ]
};

// Đăng ký hàm mở popup mô phỏng thí nghiệm cho Tiết 1
if (typeof window !== 'undefined') {
    /**
     * Mở popup mô phỏng thí nghiệm đất - Tiết 1 Khoa học
     * @param {number} tabIndex - Tab thí nghiệm mở mặc định (0 = TN1, 1 = TN2)
     */
    window.moPhongThiNghiemDatTiet1 = (tabIndex = 0) => {
        if (!window.Lesson || !window.Lesson.openExperimentSimulator) {
            console.warn('Lesson.openExperimentSimulator chưa sẵn sàng');
            return;
        }

        const cacThiNghiem = [
            {
                type: 'tha-dat-vao-nuoc',
                title: 'TN1: Thả đất vào nước',
                icon: '🫧',
                labBg: 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%)',
                labHtml: window.Lesson.renderExpLab1_ThaDatVaoNuoc(),
                steps: [
                    { title: 'Chuẩn bị', desc: 'Cầm một cục đất khô, đưa lên trên miệng cốc nước sạch.' },
                    { title: 'Thả đất vào nước', desc: 'Thả nhẹ cục đất vào cốc nước. Quan sát mặt nước.' },
                    { title: 'Quan sát hiện tượng', desc: 'Các bọt khí nhỏ nổi lên từ cục đất → Không khí thoát ra.' }
                ],
                conclusion: '🫧 Khi thả đất vào nước, thấy có bọt khí nổi lên. Điều này chứng minh trong đất có chứa KHÔNG KHÍ.'
            },
            {
                type: 'dun-ong-nghiem',
                title: 'TN2: Đun ống nghiệm',
                icon: '🔥',
                labBg: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #fbbf24 100%)',
                labHtml: window.Lesson.renderExpLab2_DunOngNghiem(),
                steps: [
                    { title: 'Chuẩn bị', desc: 'Cho đất vào ống nghiệm, đặt lên giá đỡ. Đốt đèn cồn.' },
                    { title: 'Đun nóng', desc: 'Hơ nóng ống nghiệm trên ngọn lửa. Quan sát thành ống.' },
                    { title: 'Quan sát hiện tượng', desc: 'Giọt nước ngưng tụ trên thành ống + khói bốc, mùi khét.' }
                ],
                conclusion: '💧 Giọt nước bám trên thành ống → Đất chứa NƯỚC. Khói bốc kèm mùi khét → Đất chứa MÙN (chất hữu cơ từ xác động thực vật phân huỷ).'
            }
        ];

        window.Lesson.openExperimentSimulator(cacThiNghiem);

        // Chuyển đến tab đúng nếu cần
        if (tabIndex > 0) {
            setTimeout(() => {
                window.Lesson._switchExpTab(tabIndex);
            }, 100);
        }
    };
}
