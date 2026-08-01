// Bài 1 Tiết 1: Thành phần và vai trò của đất đối với cây trồng (SGK Khoa học 5 - Kết nối tri thức)
export const lesson001 = {
    topic: 'Chất',
    week: '1',
    period: '1',
    title: 'Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1)',
    description: 'Tìm hiểu các thành phần chính của đất (chất khoáng, mùn, nước, không khí), mô phỏng thí nghiệm thực tiễn và thực hành VBT.',

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
                            <span class="text-emerald-600 font-black">Tình huống thực tế (Hình 1):</span> Ở vùng cao nguyên đá, cây ngô được trồng trong các khe đất mà không trồng được trên đá (hình 1).
                        </p>
                    </div>
                    <p class="text-xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400 italic">
                        ❓ Vậy trong đất có những thành phần nào giúp cho cây trồng có thể phát triển?
                    </p>
                </div>
                <div class="lg:col-span-4 flex justify-center">
                    <div class="relative group rounded-[32px] overflow-hidden shadow-lg border-2 border-emerald-100 bg-emerald-50 p-3 text-center">
                        <img src="assets/images/science/1-2/hinh1_cay_ngo_khe_da.png" 
                             alt="Hình 1. Cây ngô mọc trong khe đá" 
                             class="w-full h-48 md:h-56 object-cover rounded-2xl mb-2" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                        <div style="display:none;" class="py-4">
                            <span class="text-4xl md:text-5xl block mb-2">🏔️🌽</span>
                        </div>
                        <span class="text-xs md:text-sm font-bold text-emerald-800 dark:text-emerald-300 block">Hình 1. Cây ngô mọc trong khe đá</span>
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

            <!-- Thí nghiệm: Thí nghiệm 1 & 2 -->
            <div class="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200">
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                    🔬 Thí nghiệm tìm thành phần của đất (Hình 2 & 3)
                </h3>
                <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-6">👆 Nhấn vào thí nghiệm bên dưới để xem mô phỏng tương tác</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Thí nghiệm 1 -->
                    <div onclick="window.moPhongThiNghiemDatTiet1(0)" 
                         class="group cursor-pointer p-5 bg-white dark:bg-slate-800 rounded-[28px] border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                        <div class="text-4xl mb-3 text-center">🫧🥛</div>
                        <h4 class="text-base md:text-lg font-black text-blue-700 dark:text-blue-400 mb-1">Thí nghiệm 1 (Hình 2): Thả đất vào cốc nước</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                            <b>Tiến hành:</b> Thả đất vào cốc nước, quan sát hiện tượng xảy ra.
                        </p>
                        <p class="text-xs md:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                            <b>Kết quả:</b> Bọt khí nổi lên → Đất chứa <b>Không khí</b>.
                        </p>
                        <div class="mt-3 inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                            👆 Nhấn để mô phỏng
                        </div>
                    </div>

                    <!-- Thí nghiệm 2 -->
                    <div onclick="window.moPhongThiNghiemDatTiet1(1)" 
                         class="group cursor-pointer p-5 bg-white dark:bg-slate-800 rounded-[28px] border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                        <div class="text-4xl mb-3 text-center">🔥🧪</div>
                        <h4 class="text-base md:text-lg font-black text-blue-700 dark:text-blue-400 mb-1">Thí nghiệm 2 (Hình 3): Đun ống nghiệm chứa đất</h4>
                        <p class="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                            <b>Tiến hành:</b> Quan sát ống nghiệm trước, trong và sau khi đun trên ngọn lửa đèn cồn.
                        </p>
                        <p class="text-xs md:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                            <b>Kết quả:</b> Có giọt nước ngưng tụ → Đất chứa <b>Nước</b>. Có khói & mùi khét → Đất chứa <b>Mùn</b>.
                        </p>
                        <div class="mt-3 inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                            👆 Nhấn để mô phỏng
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tỉ lệ các thành phần (Hình 4) -->
            <div class="p-6 md:p-8 bg-blue-50/20 dark:bg-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700">
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                    📊 Biểu đồ thành phần của đất (Hình 4)
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
                            <span class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-300">Chất khoáng (~45% - Thành phần nhiều nhất)</span>
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

            <!-- Hộp Em có biết phân loại đất (Hình 5) -->
            <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-2xl md:text-3xl">💡</span>
                    <h4 class="text-lg md:text-xl font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">Em có biết? (Hình 5)</h4>
                </div>
                <p class="text-base md:text-lg font-bold text-slate-600 dark:text-slate-300 leading-relaxed">
                    Quá trình hình thành đất đã tạo ra những hạt riêng rẽ có kích thước và hình dạng khác nhau như hạt cát, hạt sét,... Tuỳ thuộc vào tỉ lệ các loại hạt trong đất, người ta chia thành các loại đất khác nhau như <b>đất cát, đất thịt, đất sét</b> (Hình 5).
                </p>
            </div>
        </div>
    `,

    practice() {
        return `
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-12">
            
            <!-- ====== CÂU 1 VBT (Trang 4) ====== -->
            <div>
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">
                    Câu 1 (trang 4 VBT): Nối nội dung (1) với cột A và B chỉ thành phần chính của đất.
                </h3>
                
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200">
                    <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-6 text-center">
                        👆 Nhấp chọn các ô ở Cột A và Cột B là <b>Thành phần chính có trong đất (1)</b> để nối vào trung tâm
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <!-- CỘT A -->
                        <div class="md:col-span-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-300 overflow-hidden shadow-sm">
                            <div class="bg-slate-100 dark:bg-slate-700 py-3 text-center font-black text-lg text-slate-800 dark:text-slate-100 border-b-2 border-slate-300">
                                A
                            </div>
                            <div class="divide-y-2 divide-slate-200 dark:divide-slate-700">
                                <button onclick="window.toggleVbt1Connect(this, true)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all flex items-center justify-between group">
                                    <span>Chất khoáng</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                                <button onclick="window.toggleVbt1Connect(this, false)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all flex items-center justify-between group">
                                    <span>Lá cây và rễ cây</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                                <button onclick="window.toggleVbt1Connect(this, true)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all flex items-center justify-between group">
                                    <span>Mùn</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                            </div>
                        </div>

                        <!-- Ô TRUNG TÂM (1) -->
                        <div class="md:col-span-4 bg-blue-50 dark:bg-blue-950/40 border-3 border-blue-500 rounded-3xl p-6 text-center shadow-lg my-auto flex flex-col items-center justify-center min-h-[200px]">
                            <span class="text-3xl font-black text-blue-700 dark:text-blue-400 mb-2">(1)</span>
                            <span class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 leading-snug">
                                Thành phần chính có trong đất
                            </span>
                        </div>

                        <!-- CỘT B -->
                        <div class="md:col-span-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-300 overflow-hidden shadow-sm">
                            <div class="bg-slate-100 dark:bg-slate-700 py-3 text-center font-black text-lg text-slate-800 dark:text-slate-100 border-b-2 border-slate-300">
                                B
                            </div>
                            <div class="divide-y-2 divide-slate-200 dark:divide-slate-700">
                                <button onclick="window.toggleVbt1Connect(this, true)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all flex items-center justify-between group">
                                    <span>Nước</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                                <button onclick="window.toggleVbt1Connect(this, false)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all flex items-center justify-between group">
                                    <span>Giun đất</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                                <button onclick="window.toggleVbt1Connect(this, true)" class="w-full py-4 px-4 text-center font-bold text-base md:text-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all flex items-center justify-between group">
                                    <span>Không khí</span>
                                    <span class="status-icon text-xl font-black"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ====== CÂU 2 VBT (Trang 4) ====== -->
            <div>
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">
                    Câu 2 (trang 4 VBT): Hình bên thể hiện vai trò nào của đất với cây trồng?
                </h3>
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                    <p class="text-base md:text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                        🌱 Quan sát sơ đồ rễ cây đâm sâu hút dinh dưỡng (Hình 6 SGK):
                    </p>
                    ${Lesson.renderTrueFalse('vbt-kh1-c2', [
                        {
                            text: 'Đất giữ cho cây đứng vững, cung cấp dinh dưỡng (chất khoáng, mùn), không khí, nước đảm bảo cho cây sống và phát triển.',
                            answer: true,
                            explanation: 'Chính xác! Đây là vai trò đầy đủ của đất đối với cây trồng.'
                        }
                    ])}
                </div>
            </div>

            <!-- ====== CÂU 3 VBT (Trang 4) ====== -->
            <div>
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">
                    Câu 3 (trang 4 VBT): Viết Đ trước câu đúng, S trước câu sai liên quan đến vai trò của đất đối với cây trồng
                </h3>
                ${Lesson.renderTrueFalse('vbt-kh1-c3', [
                    {
                        text: 'a) Đất cung cấp chất khoáng cho cây trồng.',
                        answer: true,
                        explanation: 'Đúng! Chất khoáng là thành phần dinh dưỡng thiết yếu trong đất.'
                    },
                    {
                        text: 'b) Đất giúp cho cây trồng đứng vững.',
                        answer: true,
                        explanation: 'Đúng! Rễ bám chặt vào đất giúp cây đứng vững chắc.'
                    },
                    {
                        text: 'c) Đất là nơi sinh sống của một số loài sinh vật.',
                        answer: true,
                        explanation: 'Đúng! Nhiều loài như giun đất, vi sinh vật sinh sống trong đất.'
                    },
                    {
                        text: 'd) Đất là nguyên liệu để sản xuất chậu trồng cây.',
                        answer: false,
                        explanation: 'Sai! Đây không phải là vai trò của đất đối với sự phát triển của cây trồng.'
                    },
                    {
                        text: 'e) Đất cung cấp không khí và nước cho cây trồng.',
                        answer: true,
                        explanation: 'Đúng! Đất chứa nước và không khí cho rễ cây hô hấp và hút ẩm.'
                    }
                ])}
            </div>

            <!-- ====== CÂU 4 VBT (Trang 5) ====== -->
            <div>
                <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">
                    Câu 4 (trang 5 VBT): Đánh dấu x vào ô chỉ hoạt động làm tăng thành phần của đất và cho biết tên thành phần đó
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Hình 1: Cày xới đất -->
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col space-y-3">
                        <div class="overflow-hidden rounded-2xl border border-slate-100 h-44 bg-slate-100">
                            <img src="assets/images/science/1-2/hinh9_lam_toi_dat_bon_phan.png" alt="Làm tơi đất" class="w-full h-full object-cover" />
                        </div>
                        <div class="pt-2 flex flex-col space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                <input type="checkbox" checked disabled class="w-6 h-6 text-emerald-600 rounded accent-emerald-600" />
                                <span class="font-black text-base text-emerald-900">☒ Tăng thành phần tốt cho đất</span>
                            </label>
                            <div class="p-3 bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-bold text-sm md:text-base rounded-xl">
                                👉 <b>Tăng thành phần:</b> tơi xốp, giúp đất thoáng <b>KHÔNG KHÍ</b>
                            </div>
                        </div>
                    </div>

                    <!-- Hình 2: Bón phân hữu cơ -->
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col space-y-3">
                        <div class="overflow-hidden rounded-2xl border border-slate-100 h-44 bg-slate-100">
                            <img src="assets/images/science/1-2/hinh9_lam_toi_dat_bon_phan.png" alt="Bón phân hữu cơ" class="w-full h-full object-cover object-right" />
                        </div>
                        <div class="pt-2 flex flex-col space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                                <input type="checkbox" checked disabled class="w-6 h-6 text-emerald-600 rounded accent-emerald-600" />
                                <span class="font-black text-base text-emerald-900">☒ Tăng thành phần tốt cho đất</span>
                            </label>
                            <div class="p-3 bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-bold text-sm md:text-base rounded-xl">
                                👉 <b>Tăng thành phần:</b> <b>CHẤT DINH DƯỠNG (MÙN)</b>
                            </div>
                        </div>
                    </div>

                    <!-- Hình 3: Đổ rác -->
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col space-y-3">
                        <div class="p-6 bg-slate-100 dark:bg-slate-700 text-center rounded-2xl h-44 flex flex-col items-center justify-center">
                            <span class="text-5xl mb-2">🗑️</span>
                            <span class="text-xs font-bold text-slate-500">Đổ rác thải ra môi trường</span>
                        </div>
                        <div class="pt-2 flex flex-col space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-200">
                                <input type="checkbox" disabled class="w-6 h-6 rounded" />
                                <span class="font-bold text-base text-slate-500">☐ Đổ rác thải (Không chọn)</span>
                            </label>
                            <div class="p-3 bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300 font-bold text-sm rounded-xl">
                                🚫 Gây ô nhiễm, KHÔNG làm tăng thành phần tốt
                            </div>
                        </div>
                    </div>

                    <!-- Hình 4: Phun hóa chất -->
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col space-y-3">
                        <div class="p-6 bg-slate-100 dark:bg-slate-700 text-center rounded-2xl h-44 flex flex-col items-center justify-center">
                            <span class="text-5xl mb-2">☣️</span>
                            <span class="text-xs font-bold text-slate-500">Phun thuốc hóa học bừa bãi</span>
                        </div>
                        <div class="pt-2 flex flex-col space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-200">
                                <input type="checkbox" disabled class="w-6 h-6 rounded" />
                                <span class="font-bold text-base text-slate-500">☐ Phun hóa chất bừa bãi (Không chọn)</span>
                            </label>
                            <div class="p-3 bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300 font-bold text-sm rounded-xl">
                                🚫 Gây thoái hóa đất, KHÔNG làm tăng thành phần tốt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    quizPool: [
        {
            level: 1,
            question: 'Thành phần chính có trong đất bao gồm những gì?',
            options: [
                'Cát, sét, đá ong, nước',
                'Chất khoáng, mùn, nước, không khí',
                'Phân bón, hóa chất, lá cây, đá',
                'Nước, không khí, cát, rác thải'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Trong đất, thành phần nào chiếm tỷ lệ lớn nhất (khoảng 45%)?',
            options: ['Mùn', 'Nước', 'Chất khoáng', 'Không khí'],
            answer: 2
        },
        {
            level: 1,
            question: 'Mùn trong đất được hình thành chủ yếu từ đâu?',
            options: [
                'Từ đá bị phong hóa',
                'Từ xác động vật và thực vật phân hủy',
                'Từ nước mưa ngấm xuống',
                'Từ phân hóa học bón vào'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Khi thả một cục đất khô vào cốc nước, ta thấy có bọt khí nổi lên. Thí nghiệm này chứng minh:',
            options: [
                'Đất có chứa chất khoáng',
                'Đất có chứa không khí',
                'Đất có chứa mùn',
                'Đất có chứa nước'
            ],
            answer: 1
        },
        {
            level: 1,
            question: 'Khi đun nóng ống nghiệm chứa đất trên ngọn lửa đèn cồn, giọt nước đọng trên thành ống nghiệm chứng minh:',
            options: ['Đất có chứa nước', 'Đất có chứa không khí', 'Đất có chứa chất khoáng', 'Đất có chứa phân bón'],
            answer: 0
        },
        {
            level: 2,
            question: 'Hiện tượng khói bốc lên kèm mùi khét khi đun nóng đất trên đèn cồn chứng minh trong đất có:',
            options: ['Chất khoáng', 'Mùn (chất hữu cơ)', 'Không khí', 'Nước ngầm'],
            answer: 1
        },
        {
            level: 2,
            question: 'Đá bị phá vỡ lâu ngày dưới tác động của nhiệt độ, nước, gió, mưa sẽ tạo thành thành phần nào trong đất?',
            options: ['Mùn', 'Chất khoáng', 'Không khí', 'Nước'],
            answer: 1
        },
        {
            level: 2,
            question: 'Loại hạt nào dưới đây tạo nên đất thịt, đất cát, đất sét tuỳ thuộc vào tỷ lệ của chúng?',
            options: [
                'Hạt cát, hạt sét, hạt sỏi',
                'Hạt bụi, hạt phấn, hạt gạo',
                'Hạt ngô, hạt lúa, hạt đỗ',
                'Hạt nhựa, hạt thủy tinh'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Biện pháp nào sau đây giúp làm tăng lượng KHÔNG KHÍ trong đất?',
            options: ['Bón phân hóa học', 'Cày bừa, xới đất làm tơi xốp', 'Tưới ngập nước', 'Đốt nương rẫy'],
            answer: 1
        },
        {
            level: 2,
            question: 'Biện pháp nào dưới đây làm tăng lượng MÙN và CHẤT DINH DƯỠNG cho đất?',
            options: ['Bón phân hữu cơ (ủ phân xanh, phân chuồng)', 'Phun thuốc trừ sâu bừa bãi', 'Chặt phá cây rừng', 'Để đất khô nứt nẻ'],
            answer: 0
        },
        {
            level: 3,
            question: 'Vì sao cây ngô ở vùng cao nguyên đá Đồng Văn có thể sinh trưởng trong các khe đá?',
            options: [
                'Vì mặt đá chứa chất dinh dưỡng',
                'Vì khe đá tích tụ đất có đủ chất khoáng, mùn, nước và không khí',
                'Vì cây ngô không cần nước và không khí',
                'Vì đá tự phân hủy thành ngô'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Phát biểu nào sau đây KHÔNG PHẢI là vai trò của đất đối với cây trồng?',
            options: [
                'Đất giúp cây đứng vững',
                'Đất cung cấp nước và chất khoáng',
                'Đất là nguyên liệu để sản xuất chậu trồng cây',
                'Đất cung cấp không khí cho rễ thở'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Điều gì xảy ra với rễ cây khi đất bị ngập nước quá lâu?',
            options: [
                'Cây lớn nhanh gấp đôi',
                'Nước choán hết các khe hở làm ngợp không khí, rễ không hô hấp được dẫn đến thối rễ',
                'Mùn sinh ra nhiều hơn',
                'Đất hóa thành chất khoáng'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Nếu trồng cây trong cát biển đã rửa sạch hoàn toàn mùn, cây sẽ phát triển ra sao?',
            options: [
                'Phát triển rất tốt',
                'Còi cọc, chậm lớn vì thiếu dinh dưỡng (mùn)',
                'Biến thành cây gỗ lớn',
                'Không có ảnh hưởng gì'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Tỷ lệ bình thường của các thành phần trong đất tốt bao gồm:',
            options: [
                'Chất khoáng (~45%), Nước (~25%), Không khí (~25%), Mùn (~5%)',
                'Chất khoáng (100%)',
                'Nước (50%), Không khí (50%)',
                'Mùn (90%), Chất khoáng (10%)'
            ],
            answer: 0
        }
    ]
};

// Đăng ký hàm mở popup mô phỏng thí nghiệm cho Tiết 1
if (typeof window !== 'undefined') {
    window.moPhongThiNghiemDatTiet1 = (tabIndex = 0) => {
        if (!window.Lesson || !window.Lesson.openExperimentSimulator) {
            console.warn('Lesson.openExperimentSimulator chưa sẵn sàng');
            return;
        }

        const cacThiNghiem = [
            {
                type: 'tha-dat-vao-nuoc',
                title: 'TN1: Thả đất vào nước (Hình 2)',
                icon: '🫧',
                labBg: 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%)',
                labHtml: window.Lesson.renderExpLab1_ThaDatVaoNuoc ? window.Lesson.renderExpLab1_ThaDatVaoNuoc() : '<div>Mô phỏng sủi bọt khí...</div>',
                steps: [
                    { title: 'Chuẩn bị', desc: 'Cầm một cục đất khô, đưa lên trên miệng cốc nước sạch.' },
                    { title: 'Thả đất vào nước', desc: 'Thả nhẹ cục đất vào cốc nước. Quan sát mặt nước.' },
                    { title: 'Quan sát hiện tượng', desc: 'Các bọt khí nhỏ nổi lên từ cục đất → Không khí thoát ra.' }
                ],
                conclusion: '🫧 Khi thả đất vào nước, thấy có bọt khí nổi lên. Điều này chứng minh trong đất có chứa KHÔNG KHÍ.'
            },
            {
                type: 'dun-ong-nghiem',
                title: 'TN2: Đun ống nghiệm chứa đất (Hình 3)',
                icon: '🔥',
                labBg: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #fbbf24 100%)',
                labHtml: window.Lesson.renderExpLab2_DunOngNghiem ? window.Lesson.renderExpLab2_DunOngNghiem() : '<div>Mô phỏng đun ống nghiệm...</div>',
                steps: [
                    { title: 'Chuẩn bị', desc: 'Cho đất vào ống nghiệm, đặt lên giá đỡ. Đốt đèn cồn.' },
                    { title: 'Đun nóng', desc: 'Hơ nóng ống nghiệm trên ngọn lửa. Quan sát thành ống.' },
                    { title: 'Quan sát hiện tượng', desc: 'Giọt nước ngưng tụ trên thành ống + khói bốc, mùi khét.' }
                ],
                conclusion: '💧 Giọt nước bám trên thành ống → Đất chứa NƯỚC. Khói bốc kèm mùi khét → Đất chứa MÙN (chất hữu cơ).'
            }
        ];

        window.Lesson.openExperimentSimulator(cacThiNghiem);
        if (tabIndex > 0 && window.Lesson._switchExpTab) {
            setTimeout(() => { window.Lesson._switchExpTab(tabIndex); }, 100);
        }
    };
}

// Hàm tương tác nối Bài 1 VBT
window.toggleVbt1Connect = function(btn, isCorrect) {
    const icon = btn.querySelector('.status-icon');
    if (btn.classList.contains('connected-correct')) {
        btn.classList.remove('connected-correct', 'bg-emerald-500', 'text-white');
        icon.textContent = '';
        return;
    }
    if (btn.classList.contains('connected-wrong')) {
        btn.classList.remove('connected-wrong', 'bg-rose-500', 'text-white');
        icon.textContent = '';
        return;
    }

    if (isCorrect) {
        btn.classList.add('connected-correct', 'bg-emerald-500', 'text-white');
        icon.textContent = '✓ (Nối (1))';
    } else {
        btn.classList.add('connected-wrong', 'bg-rose-500', 'text-white');
        icon.textContent = '✗ (Không nối)';
    }
};

