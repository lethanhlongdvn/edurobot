// Bài 1 Tiết 2: Thành phần và vai trò của đất đối với cây trồng (SGK Khoa học 5 - Kết nối tri thức)
export const lesson002 = {
    topic: 'Chất',
    week: '1',
    period: '2',
    title: 'Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 2)',
    description: 'Tìm hiểu vai trò của đất đối với cây trồng, đất bazan & phù sa, các hoạt động nông nghiệp làm tăng vai trò của đất và thực hành VBT.',

    content: `
        <!-- ====== PHẦN 2: VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-8">
            <div class="flex items-center gap-3 border-b-2 border-emerald-100 pb-4">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">🌱</div>
                <h2 class="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100">2. Vai trò của đất đối với cây trồng</h2>
            </div>

            <!-- Định nghĩa lý thuyết cốt lõi SGK trang 7 -->
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
                                👉 Trả lời: Rễ cây lấy <b>chất khoáng, mùn, nước và không khí</b> từ đất.
                            </p>
                        </div>
                        <div class="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200">
                            <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                                💬 <b>Câu hỏi 2:</b> Vì sao cây có thể đứng vững, không bị đổ?
                            </p>
                            <p class="text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                                👉 Trả lời: Nhờ rễ cây bám chặt và đâm sâu vào lòng đất giữ cho cây đứng vững.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-5 flex justify-center">
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-[32px] border border-emerald-100 text-center space-y-3">
                        <img src="assets/images/science/1-2/hinh6_vai_tro_cua_dat.png" 
                             alt="Hình 6. Vai trò của đất với cây trồng" 
                             class="w-full h-auto rounded-2xl mb-2 object-cover" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                        <div style="display:none;" class="py-4">
                            <span class="text-5xl block">🌱🪴</span>
                        </div>
                        <p class="text-base font-black text-emerald-800 dark:text-emerald-300">Hình 6. Vai trò của đất với cây trồng</p>
                        <p class="text-xs font-bold text-slate-500">Rễ hút Nước, Không khí, Chất khoáng & Mùn</p>
                    </div>
                </div>
            </div>

            <!-- Hộp Em có biết vùng miền đất Việt Nam (Hình 7 & 8) -->
            <div class="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                <div class="flex items-center gap-2">
                    <span class="text-2xl md:text-3xl">🇻🇳</span>
                    <h4 class="text-lg md:text-xl font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">Em có biết? Các loại đất theo vùng miền (Hình 7 & 8)</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-5 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border border-amber-200">
                        <img src="assets/images/science/1-2/hinh7_dat_bazan.png" 
                             alt="Hình 7 - Đất bazan" 
                             class="w-full h-40 object-cover rounded-xl mb-3" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                        <div style="display:none;">
                            <span class="text-3xl block mb-2">☕🪵</span>
                        </div>
                        <h5 class="text-base md:text-lg font-black text-amber-800 dark:text-amber-400 mb-1">Đất bazan (Hình 7)</h5>
                        <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">Phổ biến ở vùng Nam Trung Bộ, Tây Nguyên,... Thích hợp trồng các loại cây công nghiệp như <b>cao su, cà phê, hồ tiêu,...</b></p>
                    </div>
                    <div class="p-5 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200">
                        <img src="assets/images/science/1-2/hinh8_dat_phu_sa.png" 
                             alt="Hình 8 - Đất phù sa" 
                             class="w-full h-40 object-cover rounded-xl mb-3" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                        <div style="display:none;">
                            <span class="text-3xl block mb-2">🌾🌽</span>
                        </div>
                        <h5 class="text-base md:text-lg font-black text-emerald-800 dark:text-emerald-400 mb-1">Đất phù sa (Hình 8)</h5>
                        <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">Phổ biến ở vùng đồng bằng có các sông lớn chảy qua (sông Hồng, sông Đáy, sông Cửu Long,...). Thích hợp trồng <b>lúa, ngô, khoai,...</b></p>
                    </div>
                </div>
            </div>

            <!-- Các hoạt động làm tăng vai trò của đất (Hình 9 SGK trang 8) -->
            <div class="p-6 md:p-8 bg-blue-50/20 dark:bg-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700 space-y-6">
                <h3 class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    🚜 Hoạt động làm tăng vai trò của đất đối với cây trồng (Hình 9)
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 space-y-2">
                        <span class="text-3xl">🚜</span>
                        <h4 class="text-base md:text-lg font-black text-blue-700">a) Làm tơi xới đất</h4>
                        <p class="text-sm font-bold text-slate-600 dark:text-slate-300"><b>Tác dụng:</b> Giúp đất tơi xốp, tăng lượng <b>không khí</b> trong đất cho rễ cây hô hấp tốt.</p>
                    </div>
                    <div class="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 space-y-2">
                        <span class="text-3xl">🌱</span>
                        <h4 class="text-base md:text-lg font-black text-blue-700">b) Bón phân hữu cơ cho đất</h4>
                        <p class="text-sm font-bold text-slate-600 dark:text-slate-300"><b>Tác dụng:</b> Bổ sung thêm <b>mùn và chất dinh dưỡng</b> giúp đất màu mỡ cho cây phát triển xanh tốt.</p>
                    </div>
                </div>
            </div>

            <!-- Nông nghiệp thông minh & Tổng kết -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-[32px] border border-emerald-200">
                    <h4 class="text-base md:text-lg font-black text-emerald-800 dark:text-emerald-400 mb-2">✅ Em đã học</h4>
                    <ul class="list-disc list-inside text-sm md:text-base font-bold text-slate-700 dark:text-slate-300 space-y-2">
                        <li>Thành phần của đất gồm: chất khoáng, mùn, nước, không khí,...</li>
                        <li>Đất giữ cho cây đứng vững, cung cấp dinh dưỡng (chất khoáng, mùn), không khí, nước đảm bảo cho cây sống và phát triển.</li>
                    </ul>
                </div>
                <div class="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-[32px] border border-amber-200">
                    <h4 class="text-base md:text-lg font-black text-amber-800 dark:text-amber-400 mb-2">💡 Em có thể</h4>
                    <p class="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">
                        Giải thích được tác dụng của việc xới đất và vun đất vào gốc cho cây trồng (xới đất giúp thoáng khí; vun đất giúp rễ bám sâu vững chắc).
                    </p>
                </div>
            </div>
        </div>
    `,

    practice() {
        return `
        <div class="bg-white dark:bg-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8 space-y-12">
            <div class="flex items-center gap-3 border-b-2 border-emerald-100 pb-4">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black">📝</div>
                <h2 class="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100">Luyện tập (Vở bài tập Khoa học 5 - Trang 5 & 6)</h2>
            </div>

            <!-- ====== CÂU 5 VBT (Trang 5) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">5</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Câu 5 (trang 5 VBT): Sử dụng rơm rạ phủ dưới gốc cây trồng có ý nghĩa gì?</h3>
                </div>
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                    <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                        🌾 Trong hoạt động sản xuất nông nghiệp, người nông dân sử dụng rơm rạ phủ dưới gốc cây trồng. Hãy cho biết ý nghĩa của việc làm này.
                    </p>
                    ${Lesson.renderTrueFalse('vbt-kh2-c5', [
                        {
                            text: 'Phủ rơm rạ giúp tăng độ che phủ để giữ nước ẩm cho đất.',
                            answer: true,
                            explanation: 'Đúng! Lớp rơm rạ làm giảm sự bốc hơi nước của đất.'
                        },
                        {
                            text: 'Bổ sung thêm mùn cho đất khi rơm rạ phân hủy.',
                            answer: true,
                            explanation: 'Đúng! Rơm rạ là chất hữu cơ, khi phân hủy sẽ biến thành mùn dinh dưỡng.'
                        }
                    ])}
                </div>
            </div>

            <!-- ====== CÂU 6 VBT (Trang 6) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">6</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Câu 6 (trang 6 VBT): Chọn từ/cụm từ thích hợp điền vào chỗ trống</h3>
                </div>
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                    <p class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">
                        Các từ cho trước: <i>vun đất, xới đất, mất đất, ủ phân hữu cơ</i>.
                    </p>
                    ${Lesson.renderFillBlanks(
                        'vbt-kh2-c6',
                        'Để làm tăng vai trò của đất đối với cây trồng, trong hoạt động sản xuất nông nghiệp người nông dân có thể (1) {0} bón cho cây trồng. Ngoài ra, để cho đất tơi xốp và thoáng khí người nông dân có thể (2) {1}, tuy nhiên ở vùng đất dốc hoạt động này nên hạn chế vì có thể làm (3) {2} còn để giúp cây đứng vững, cần phải (4) {3} vào gốc cho cây trồng.',
                        ['ủ phân hữu cơ', 'xới đất', 'mất đất', 'vun đất'],
                        ['ủ phân hữu cơ', 'xới đất', 'mất đất', 'vun đất']
                    )}
                </div>
            </div>

            <!-- ====== CÂU 7 VBT (Trang 6) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">7</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Câu 7 (trang 6 VBT): Nêu một số việc làm ở gia đình/địa phương em làm tăng vai trò của đất đối với cây trồng</h3>
                </div>
                ${Lesson.renderTrueFalse('vbt-kh2-c7', [
                    {
                        text: 'Cày đất, bừa/đập đất nhỏ giúp đất tơi xốp.',
                        answer: true,
                        explanation: 'Đúng! Giúp tăng lượng không khí trong đất.'
                    },
                    {
                        text: 'Lên luống, xới đất và vun đất vào gốc cây.',
                        answer: true,
                        explanation: 'Đúng! Giúp rễ đâm sâu và cây đứng vững.'
                    },
                    {
                        text: 'Ủ phân hữu cơ bón cho cây trồng.',
                        answer: true,
                        explanation: 'Đúng! Giúp bổ sung dinh dưỡng và mùn cho đất.'
                    }
                ])}
            </div>

            <!-- ====== CÂU 8 VBT (Trang 6) ====== -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-blue-600 text-white text-xs md:text-base flex items-center justify-center font-black">8</span>
                    <h3 class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-200">Câu 8 (trang 6 VBT): Vì sao không bón phân nhưng cây rừng vẫn sống và phát triển xanh tốt?</h3>
                </div>
                <div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 space-y-4">
                    ${Lesson.renderTrueFalse('vbt-kh2-c8', [
                        {
                            text: 'Nhờ có tán lá xoè rộng như chiếc ô, nước mưa không xối thẳng xuống mặt đất, nắng không đốt cháy mặt đất nên đất ít bị rửa trôi.',
                            answer: true,
                            explanation: 'Đúng! Thảm thực vật rừng bảo vệ đất chống xói mòn rửa trôi.'
                        },
                        {
                            text: 'Đất rừng hầu như tự bón phân vì cành lá rơi rụng từ cây bị phân hủy tạo thành chất dinh dưỡng (mùn).',
                            answer: true,
                            explanation: 'Đúng! Chu trình tuần hoàn hữu cơ tự nhiên trong rừng tự tạo nguồn mùn dồi dào.'
                        }
                    ])}
                </div>
            </div>
        </div>
        `;
    },

    quizPool: [
        {
            level: 1,
            question: 'Vai trò chính của chất khoáng và mùn trong đất đối với cây trồng là gì?',
            options: [
                'Cung cấp chất dinh dưỡng giúp cây trồng sống và phát triển',
                'Tạo độ bóng cho lá cây',
                'Ngăn cản cây hút nước',
                'Làm cho đất có màu đen'
            ],
            answer: 0
        },
        {
            level: 1,
            question: 'Đất giúp cây trồng đứng vững bằng cách nào?',
            options: [
                'Rễ cây đâm sâu và bám chặt vào trong đất',
                'Thân cây tự dính chặt vào đất',
                'Nước trong đất giữ cây thẳng đứng',
                'Không khí ép chặt gốc cây'
            ],
            answer: 0
        },
        {
            level: 1,
            question: 'Đất bazan ở vùng Nam Trung Bộ và Tây Nguyên rất thích hợp trồng nhóm cây nào dưới đây?',
            options: [
                'Cây công nghiệp dài ngày (cà phê, cao su, hồ tiêu)',
                'Cây lúa nước',
                'Cây rêu và tảo',
                'Cây ngập mặn'
            ],
            answer: 0
        },
        {
            level: 1,
            question: 'Đất phù sa màu mỡ dọc các dòng sông lớn thích hợp trồng nhóm cây nào?',
            options: [
                'Cây lương thực và hoa màu (lúa, ngô, khoai, rau)',
                'Cây thông rừng',
                'Cây xương rồng',
                'Cây đước ngập mặn'
            ],
            answer: 0
        },
        {
            level: 1,
            question: 'Hoạt động cày bừa, xới đất có tác dụng trực tiếp nào đối với đất?',
            options: [
                'Làm đất tơi xốp và thoáng khí',
                'Tạo ra thêm hạt cát mới',
                'Làm đất bị nén chặt',
                'Diệt sạch vi sinh vật'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Người nông dân phủ rơm rạ dưới gốc cây trồng nhằm mục đích gì?',
            options: [
                'Tăng độ che phủ giữ nước ẩm và tạo mùn khi rơm rạ phân hủy',
                'Để làm đẹp mảnh vườn',
                'Để ngăn không cho cây vươn cao',
                'Để rơm rạ hút hết chất dinh dưỡng của cây'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Tại sao ở vùng đất dốc đồi núi nên HẠN CHẾ xới đất quá sâu?',
            options: [
                'Vì xới đất dốc dễ bị nước mưa xối rửa gây xói mòn và mất đất',
                'Vì đất dốc không có không khí',
                'Vì đất dốc chứa quá nhiều mùn',
                'Vì máy kéo không lên được đồi'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Hành động vun đất vào gốc cây có tác dụng quan trọng nhất là gì?',
            options: [
                'Giúp rễ bám sâu vững chắc và bảo vệ rễ cây',
                'Làm đất cứng lại',
                'Tăng nhiệt độ gốc cây',
                'Làm cây giảm hút nước'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Tác dụng của việc ủ phân hữu cơ bón cho đất là gì?',
            options: [
                'Bổ sung chất dinh dưỡng và mùn tự nhiên màu mỡ cho đất',
                'Tạo ra đất cát',
                'Giảm độ tơi xốp của đất',
                'Tiêu diệt giun đất'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Vì sao đất rừng tự nhiên không cần con người bón phân nhưng cây rừng vẫn phát triển xanh tốt?',
            options: [
                'Vì cành lá rơi rụng phân hủy tự tạo ra mùn dinh dưỡng (tự bón phân)',
                'Vì cây rừng không cần chất dinh dưỡng',
                'Vì đất rừng là đất nhân tạo',
                'Vì có mưa rào liên tục'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Tán lá cây rừng rậm rạp giúp bảo vệ đất rừng bằng cách nào?',
            options: [
                'Tán lá cản lực hạt mưa xối thẳng và che nắng đốt cháy mặt đất, tránh rửa trôi đất',
                'Tán lá hút bớt không khí trong đất',
                'Tán lá giữ không cho gió thổi vào đất',
                'Tán lá làm khô đất'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Ứng dụng công nghệ cao tưới nước và bón phân tự động trong nông nghiệp thông minh mang lại lợi ích gì?',
            options: [
                'Cung cấp nước & dinh dưỡng vừa đủ theo nhu cầu cây, tiết kiệm tài nguyên và bảo vệ môi trường đất',
                'Thay thế hoàn toàn vai trò của ánh sáng mặt trời',
                'Loại bỏ hoàn toàn mùn trong đất',
                'Làm cho đất không cần không khí'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Nếu cây trồng không được vun gốc và đất bị nén chặt nứt nẻ, hiện tượng gì dễ xảy ra khi có gió lớn?',
            options: [
                'Cây dễ bị bật gốc, đổ ngã vì rễ bám nông và thiếu không khí hô hấp',
                'Cây lớn nhanh hơn',
                'Rễ cây tự đâm sâu hơn',
                'Đất tự động tơi xốp'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Một gia đình trồng rau sạch tại nhà, để tăng mùn và độ tơi xốp cho đất trồng chậu họ nên làm gì?',
            options: [
                'Ủ rác bếp (vỏ hoa quả, rau thừa) thành phân hữu cơ rồi trộn vào đất',
                'Đổ thêm cát biển vào chậu',
                'Tưới bùn đặc kín chậu',
                'Nén chặt đất trong chậu'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Điểm khác biệt chính giữa đất bazan và đất phù sa là gì?',
            options: [
                'Đất bazan hình thành từ đá núi lửa (thích hợp cây công nghiệp); đất phù sa hình thành từ phù sa sông bồi đắp (thích hợp cây lương thực)',
                'Đất bazan không có chất khoáng',
                'Đất phù sa không có nước',
                'Cả hai loại đất đều không trồng được cây'
            ],
            answer: 0
        }
    ]
};

