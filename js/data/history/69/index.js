export const lesson069 = {
    topic: 'Ôn tập cuối năm',
    week: '35',
    period: '69',
    title: 'Ôn tập cuối năm (Lịch sử & Địa lý học kỳ II)',
    desc: 'Tổng hợp kiến thức trọng tâm từ Bài 22 đến Bài 27 và hệ thống câu hỏi ôn tập.',
    quizCount: 60,
    metadata: {
        exercises: [1, 2, 3, 4, 5]
    },

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-500 to-pink-500 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10 text-center md:text-left">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>📚</span> Ôn tập cuối năm
                </div>
                <h1 class="text-3xl md:text-5xl font-black mb-4 leading-tight">Hành trình khám phá thế giới</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-3xl leading-relaxed">Cùng hệ thống lại những kiến thức quan trọng về địa lý thế giới, các nền văn minh nhân loại và sứ mệnh chung tay xây dựng thế giới tốt đẹp hơn.</p>
            </div>
        </div>

        <!-- ====== NỘI DUNG TÓM TẮT ====== -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Bài 22 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl font-black">22</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Các châu lục & Đại dương</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">🌍 6 châu lục: Á, Âu, Phi, Mỹ, Đại Dương, Nam Cực.</li>
                    <li class="flex items-start gap-2">🌊 5 đại dương: Thái Bình Dương, Đại Tây Dương, Ấn Độ Dương, Nam Đại Dương, Bắc Băng Dương.</li>
                    <li class="flex items-start gap-2">🏆 Châu Á lớn nhất, Thái Bình Dương lớn nhất.</li>
                </ul>
            </div>

            <!-- Bài 23 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl font-black">23</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Dân số & Chủng tộc</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">📈 Dân số thế giới tăng nhanh (gần 8 tỉ người năm 2021).</li>
                    <li class="flex items-start gap-2">👥 4 chủng tộc chính: Môn-gô-lô-it, Ơ-rô-pê-ô-it, Nê-grô-it, Ô-xtra-lô-it.</li>
                    <li class="flex items-start gap-2">🤝 Tôn trọng sự khác biệt và bình đẳng giữa các chủng tộc.</li>
                </ul>
            </div>

            <!-- Bài 24 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl font-black">24</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Văn minh Ai Cập</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">🏜️ Hình thành bên dòng sông Nin kỳ vĩ.</li>
                    <li class="flex items-start gap-2">🧱 Thành tựu: Kim tự tháp, xác ướp, chữ tượng hình.</li>
                    <li class="flex items-start gap-2">⏰ Phát minh: Đồng hồ mặt trời, toán học.</li>
                </ul>
            </div>

            <!-- Bài 25 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl font-black">25</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Văn minh Hy Lạp</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">🏛️ Cái nôi của văn minh phương Tây.</li>
                    <li class="flex items-start gap-2">🎨 Kiến trúc & Điêu khắc: Đền Pác-tê-nông, Tượng lực sĩ ném đĩa.</li>
                    <li class="flex items-start gap-2">🏅 Nguồn gốc của Thế vận hội Ô-lim-píc.</li>
                </ul>
            </div>

            <!-- Bài 26 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl font-black">26</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Thế giới xanh - sạch - đẹp</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">🌡️ Biến đổi khí hậu, nước biển dâng, ô nhiễm môi trường.</li>
                    <li class="flex items-start gap-2">🌲 Trồng rừng, bảo vệ tài nguyên và đa dạng sinh học.</li>
                    <li class="flex items-start gap-2">♻️ Lối sống xanh: Giảm rác thải, tiết kiệm năng lượng.</li>
                </ul>
            </div>

            <!-- Bài 27 -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl font-black">27</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100">Thế giới hòa bình</h3>
                </div>
                <ul class="space-y-2 text-base font-bold text-gray-600 dark:text-slate-300">
                    <li class="flex items-start gap-2">🕊️ Biểu tượng: Chim bồ câu ngậm cành ô liu.</li>
                    <li class="flex items-start gap-2">🇺🇳 Vai trò của Liên hợp quốc trong việc gìn giữ hòa bình.</li>
                    <li class="flex items-start gap-2">🤝 Xây dựng tình đoàn kết, hữu nghị giữa các dân tộc.</li>
                </ul>
            </div>
        </div>

        <!-- ====== GHI NHỚ TỔNG HỢP ====== -->
        <div class="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border-2 border-emerald-200 mb-8">
            <h2 class="text-2xl font-black text-emerald-800 mb-4 flex items-center gap-2">
                <span class="text-3xl">🎯</span> Thông điệp chung
            </h2>
            <p class="text-lg font-bold text-emerald-700 leading-relaxed italic">
                "Chúng ta cùng sống trong một ngôi nhà chung là Trái Đất. Việc hiểu rõ về địa lý, lịch sử và các nền văn minh giúp chúng ta trân trọng quá khứ, bảo vệ hiện tại và cùng nhau kiến tạo một tương lai Xanh – Hòa bình – Phát triển."
            </p>
        </div>

        <!-- AI TUTOR ĐỒNG HÀNH -->
        ${AIInteraction.renderTutor(
            'history-review-tutor',
            'Trong các bài đã học, em ấn tượng nhất với thành tựu văn minh nào? Hãy kể tên một vài hành động em đã làm để bảo vệ môi trường?',
            'Ví dụ: Em rất ấn tượng với Kim tự tháp Ai Cập... Em đã trồng thêm cây xanh...'
        )}
        `;
    },

    practice() {
        return `
        <div class="space-y-8 pb-12">
            <!-- HEADING -->
            <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-600 text-white rounded-[20px] flex items-center justify-center text-2xl shadow-lg shadow-indigo-200 dark:shadow-none">🏋️</div>
                <div>
                    <h2 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-slate-100 leading-tight">Phần Luyện tập</h2>
                    <p class="text-gray-500 dark:text-slate-400 font-bold">Cùng thử thách kiến thức và rèn luyện tư duy nhé!</p>
                </div>
            </div>

            <!-- ====== KHỐI 2: CÂU HỎI TỰ LUẬN ====== -->
            <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl font-black">📝</div>
                    <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 uppercase tracking-tight">Câu hỏi tự luận</h3>
                </div>

                <div class="space-y-6">
                    <!-- Câu 1 -->
                    <div class="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-[24px] border border-blue-100 dark:border-blue-800/50">
                        <p class="font-bold text-gray-800 dark:text-slate-100 mb-4 flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">1</span>
                            Em hãy nêu một số đặc điểm tự nhiên nổi bật của châu Á.
                        </p>
                        <div class="relative group">
                            <textarea id="essay-input-069-1" class="w-full bg-white dark:bg-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-4 pr-16 focus:border-blue-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-gray-700 dark:text-slate-300 font-medium" rows="4" placeholder="…………………………………………..…………………………………………………"></textarea>
                            <div class="absolute right-3 bottom-3 flex flex-col gap-2">
                                <button id="btn-mic-essay-input-069-1" onclick="Lesson.toggleSpeechRec('essay-input-069-1')" class="w-10 h-10 bg-white hover:bg-blue-50 text-blue-500 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center transition-all active:scale-95" title="Nhập bằng giọng nói">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <button onclick="Lesson.submitEssayAI('069-1', 'Em hãy nêu một số đặc điểm tự nhiên nổi bật của châu Á.')" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-xl transition-all active:scale-95" title="Thầy E chấm bài">E</button>
                            </div>
                            <div id="mic-status-essay-input-069-1" class="absolute -top-3 right-0 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                    </div>

                    <!-- Câu 2 -->
                    <div class="p-6 bg-orange-50/50 dark:bg-orange-900/10 rounded-[24px] border border-orange-100 dark:border-orange-800/50">
                        <p class="font-bold text-gray-800 dark:text-slate-100 mb-4 flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-lg flex items-center justify-center text-xs font-black">2</span>
                            Em hãy trình bày biểu hiện và tác động của vấn đề ô nhiễm môi trường và biến đổi khí hậu.
                        </p>
                        <div class="relative group">
                            <textarea id="essay-input-069-2" class="w-full bg-white dark:bg-slate-900 border-2 border-dashed border-orange-200 dark:border-orange-800 rounded-xl p-4 pr-16 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-gray-700 dark:text-slate-300 font-medium" rows="4" placeholder="………………………………………………………………………………………………"></textarea>
                            <div class="absolute right-3 bottom-3 flex flex-col gap-2">
                                <button id="btn-mic-essay-input-069-2" onclick="Lesson.toggleSpeechRec('essay-input-069-2')" class="w-10 h-10 bg-white hover:bg-orange-50 text-orange-500 rounded-xl shadow-sm border border-orange-100 flex items-center justify-center transition-all active:scale-95" title="Nhập bằng giọng nói">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <button onclick="Lesson.submitEssayAI('069-2', 'Em hãy trình bày biểu hiện và tác động của vấn đề ô nhiễm môi trường và biến đổi khí hậu.')" class="w-10 h-10 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-xl transition-all active:scale-95" title="Thầy E chấm bài">E</button>
                            </div>
                            <div id="mic-status-essay-input-069-2" class="absolute -top-3 right-0 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                    </div>

                    <!-- Câu 3 -->
                    <div class="p-6 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-[24px] border border-emerald-100 dark:border-emerald-800/50">
                        <p class="font-bold text-gray-800 dark:text-slate-100 mb-4 flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-xs font-black">3</span>
                            Nêu tối thiểu 04 biện pháp mà học sinh tiểu học có thể thực hiện để góp phần xây dựng thế giới xanh - sạch - đẹp.
                        </p>
                        <div class="relative group">
                            <textarea id="essay-input-069-3" class="w-full bg-white dark:bg-slate-900 border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-xl p-4 pr-16 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-700 dark:text-slate-300 font-medium" rows="4" placeholder="………………………………………………………………………………………………"></textarea>
                            <div class="absolute right-3 bottom-3 flex flex-col gap-2">
                                <button id="btn-mic-essay-input-069-3" onclick="Lesson.toggleSpeechRec('essay-input-069-3')" class="w-10 h-10 bg-white hover:bg-emerald-50 text-emerald-500 rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center transition-all active:scale-95" title="Nhập bằng giọng nói">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <button onclick="Lesson.submitEssayAI('069-3', 'Nêu tối thiểu 04 biện pháp mà học sinh tiểu học có thể thực hiện để góp phần xây dựng thế giới xanh - sạch - đẹp.')" class="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-xl transition-all active:scale-95" title="Thầy E chấm bài">E</button>
                            </div>
                            <div id="mic-status-essay-input-069-3" class="absolute -top-3 right-0 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                    </div>

                    <!-- Câu 4 -->
                    <div class="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-[24px] border border-blue-100 dark:border-blue-800/50">
                        <p class="font-bold text-gray-800 dark:text-slate-100 mb-4 flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">4</span>
                            Vì sao hình ảnh chim bồ câu ngậm cành ô liu lại trở thành biểu tượng của thế giới hòa bình? Em hãy nêu vai trò của tổ chức Liên hợp quốc và phong trào Chữ thập đỏ trong việc chung tay bảo vệ cuộc sống con người và ngăn chặn chiến tranh.
                        </p>
                        <div class="relative group">
                            <textarea id="essay-input-069-4" class="w-full bg-white dark:bg-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-4 pr-16 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-700 dark:text-slate-300 font-medium" rows="5" placeholder="Câu trả lời của em..."></textarea>
                            <div class="absolute right-3 bottom-3 flex flex-col gap-2">
                                <button id="btn-mic-essay-input-069-4" onclick="Lesson.toggleSpeechRec('essay-input-069-4')" class="w-10 h-10 bg-white hover:bg-blue-50 text-blue-500 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center transition-all active:scale-95" title="Nhập bằng giọng nói">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <button onclick="Lesson.submitEssayAI('069-4', 'Vì sao hình ảnh chim bồ câu ngậm cành ô liu lại trở thành biểu tượng của thế giới hòa bình? Vai trò của LHQ và Chữ thập đỏ?')" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-xl transition-all active:scale-95" title="Thầy E chấm bài">E</button>
                            </div>
                            <div id="mic-status-essay-input-069-4" class="absolute -top-3 right-0 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                    </div>

                    <!-- Câu 5 -->
                    <div class="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-[24px] border border-blue-100 dark:border-blue-800/50">
                        <p class="font-bold text-gray-800 dark:text-slate-100 mb-4 flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">5</span>
                            Em hiểu như thế nào về quyền bình đẳng giữa các chủng tộc trên thế giới, bất chấp những khác biệt về đặc điểm ngoại hình?
                        </p>
                        <div class="relative group">
                            <textarea id="essay-input-069-5" class="w-full bg-white dark:bg-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-4 pr-16 focus:border-blue-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-gray-700 dark:text-slate-300 font-medium" rows="4" placeholder="Câu trả lời của em..."></textarea>
                            <div class="absolute right-3 bottom-3 flex flex-col gap-2">
                                <button id="btn-mic-essay-input-069-5" onclick="Lesson.toggleSpeechRec('essay-input-069-5')" class="w-10 h-10 bg-white hover:bg-blue-50 text-blue-500 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center transition-all active:scale-95" title="Nhập bằng giọng nói">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <button onclick="Lesson.submitEssayAI('069-5', 'Em hiểu như thế nào về quyền bình đẳng giữa các chủng tộc trên thế giới?')" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg flex items-center justify-center font-black text-xl transition-all active:scale-95" title="Thầy E chấm bài">E</button>
                            </div>
                            <div id="mic-status-essay-input-069-5" class="absolute -top-3 right-0 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    quizPool: [
        // BÀI 22
        {
            level: 1,
            question: 'Trên thế giới có tất cả bao nhiêu châu lục?',
            options: ['4 châu lục', '5 châu lục', '6 châu lục', '7 châu lục'],
            answer: 3
        },
        {
            level: 1,
            question: 'Đại dương nào có diện tích lớn nhất trên thế giới?',
            options: ['Đại Tây Dương', 'Thái Bình Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'],
            answer: 1
        },
        {
            level: 1,
            question: 'Dãy Hi-ma-lay-a nằm ở châu lục nào?',
            options: ['Châu Phi', 'Châu Mĩ', 'Châu Âu', 'Châu Á'],
            answer: 3
        },
        {
            level: 1,
            question: 'Hồ sâu nhất thế giới nằm ở châu Á là hồ nào?',
            options: ['Hồ Ca-xpi (Caspi)', 'Hồ Bai-can (Baikal)', 'Hồ A-ran (Aral)', 'Hồ Thượng'],
            answer: 1
        },
        {
            level: 1,
            question: 'Châu lục nào có diện tích nhỏ nhất trên thế giới?',
            options: ['Châu Đại Dương', 'Châu Âu', 'Châu Nam Cực', 'Châu Mỹ'],
            answer: 0
        },
        {
            level: 2,
            question: 'Đặc điểm địa hình chủ yếu của châu Âu là gì?',
            options: [
                'Đồng bằng chiếm 2/3 diện tích lãnh thổ và kéo dài từ tây sang đông.',
                'Núi cao và cao nguyên chiếm 3/4 diện tích lãnh thổ.',
                'Chủ yếu là các sơn nguyên xen với bồn địa thấp.',
                'Bề mặt bị bao phủ bởi lớp băng dày.'
            ],
            answer: 0
        },
        {
            level: 1,
            question: 'Ý nào sau đây không đúng khi nói về Châu Đại Dương?',
            options: [
                'Bao gồm lục địa Ô-xtrây-li-a và các đảo, quần đảo ở trung tâm Thái Bình Dương.',
                'Khí hậu lục địa khô hạn.',
                'Phần lớn diện tích là hoang mạc và xa van.',
                'Tài nguyên sinh vật kém phong phú.'
            ],
            answer: 3
        },
        {
            level: 2,
            question: 'Rừng nhiệt đới A-ma-dôn ở Nam Mỹ có vai trò đặc biệt quan trọng như thế nào?',
            options: [
                'Cung cấp phần lớn lượng nước ngọt cho thế giới.',
                'Là nguồn cung cấp than đá lớn nhất.',
                'Được coi là “lá phổi xanh” của Trái Đất, giúp điều hòa khí hậu.',
                'Là nơi có mạng lưới sông ngòi dày đặc nhất thế giới.'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Nguyên nhân nào khiến châu Phi có cảnh quan chủ yếu là hoang mạc (như Xa-ha-ra) và xa van?',
            options: [
                'Vì có quá nhiều sông lớn đổ ra biển.',
                'Vì địa hình có nhiều núi cao bao quanh chắn gió biển.',
                'Vì khí hậu khô, nóng bậc nhất thế giới kết hợp địa hình cao trung bình.',
                'Vì bề mặt châu lục thường xuyên bị bao phủ bởi lớp tuyết.'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Sự độc đáo của hệ động vật ở châu Nam Cực và châu Đại Dương chủ yếu đến từ yếu tố nào?',
            options: [
                'Cả hai châu lục đều có khí hậu nóng ẩm, rừng rậm bao phủ.',
                'Sự thích nghi với môi trường khắc nghiệt và sự cách biệt địa lí lâu đời.',
                'Do con người đem nhiều động vật lạ từ châu Âu đến nuôi dưỡng.',
                'Do sự phát triển của hệ thống sông ngòi dày đặc.'
            ],
            answer: 1
        },
        // BÀI 23
        {
            level: 1,
            question: 'Đến năm 2021, số dân trên thế giới đạt khoảng bao nhiêu người?',
            options: ['Gần 6 tỉ người', 'Gần 7 tỉ người', 'Gần 8 tỉ người', 'Gần 9 tỉ người'],
            answer: 2
        },
        {
            level: 1,
            question: 'Châu lục nào có số dân đông nhất thế giới, chiếm hơn 50% dân số toàn cầu?',
            options: ['Châu Phi', 'Châu Á', 'Châu Âu', 'Châu Mỹ'],
            answer: 1
        },
        {
            level: 1,
            question: 'Trừ châu Nam Cực, châu lục nào có số dân ít nhất thế giới?',
            options: ['Châu Âu', 'Châu Đại Dương', 'Châu Mỹ', 'Châu Phi'],
            answer: 1
        },
        {
            level: 1,
            question: 'Trên thế giới có các chủng tộc chính nào?',
            options: [
                'Môn-gô-lô-it và Ơ-rô-pê-ô-it.',
                'Ơ-rô-pê-ô-it and Nê-grô-it.',
                'Môn-gô-lô-it, Ơ-rô-pê-ô-it, Nê-grô-it và Ô-xtra-lô-it.',
                'Nê-grô-it và Ô-xtra-lô-it.'
            ],
            answer: 2
        },
        {
            level: 1,
            question: 'Đặc điểm ngoại hình của chủng tộc Môn-gô-lô-it là:',
            options: ['Da vàng, tóc vàng', 'Da đen, tóc đen', 'Da vàng, tóc đen', 'Da trắng, tóc xoăn'],
            answer: 2
        },
        {
            level: 1,
            question: 'Dân cư thế giới thường tập trung đông đúc ở khu vực địa hình đồng bằng vì:',
            options: [
                'Tập trung nguồn tài nguyên khoáng sản giàu có.',
                'Thuận lợi cho cư trú, giao lưu phát triển kinh tế.',
                'Khí hậu mát mẻ, ổn định.',
                'Ít chịu ảnh hưởng của thiên tai.'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Việc xuất hiện các nhóm người lai ở nhiều nơi trên Trái Đất là kết quả của yếu tố nào?',
            options: [
                'Sự biến đổi đột ngột của khí hậu Trái Đất.',
                'Quá trình di cư và cùng chung sống giữa các cộng đồng qua thời gian dài.',
                'Sự phân bố ngẫu nhiên của tự nhiên.',
                'Điều kiện tự nhiên của từng châu lục quyết định.'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Theo lịch sử di cư cách đây khoảng 20 nghìn năm, người bản địa ở châu Mỹ có chung nguồn gốc với chủng tộc nào?',
            options: ['Ơ-rô-pê-ô-it', 'Nê-grô-it', 'Môn-gô-lô-it (từ châu Á sang)', 'Ô-xtra-lô-it'],
            answer: 2
        },
        {
            level: 3,
            question: 'Thông điệp của câu hát “Vàng, đen, trắng, nước da không chia tấm lòng” là gì?',
            options: [
                'Khẳng định sự khác biệt về màu da quyết định tính cách.',
                'Chỉ những người cùng màu da mới có thể làm bạn.',
                'Sự khác biệt ngoại hình không quan trọng, các chủng tộc đều bình đẳng.',
                'Chủng tộc da trắng đóng vai trò lãnh đạo thế giới.'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Việc châu Á chiếm hơn 50% số dân thế giới phản ánh điều gì?',
            options: [
                'Mật độ dân số ở châu Á rất cao và dân cư phân bố không đồng đều.',
                'Các châu lục khác hoàn toàn không có điều kiện để sinh sống.',
                'Châu Á không có các vùng núi cao hay hoang mạc.',
                'Toàn bộ người dân châu Á đều thuộc chủng tộc Môn-gô-lô-it.'
            ],
            answer: 0
        },
        // BÀI 24
        {
            level: 1,
            question: 'Ai Cập cổ đại được hình thành ở khu vực nào?',
            options: ['Đông Bắc châu Á', 'Tây Âu', 'Đông Bắc châu Phi', 'Tây Nam Á'],
            answer: 2
        },
        {
            level: 1,
            question: 'Ai Cập cổ đại được hình thành trên lưu vực con sông nào?',
            options: ['Sông Nin', 'Sông Hằng', 'Sông Hồng', 'Sông Ti-grơ'],
            answer: 0
        },
        {
            level: 1,
            question: 'Công trình kiến trúc bằng đá nguyên khối vĩ đại nhất của Ai Cập cổ đại là gì?',
            options: ['Vạn Lý Trường Thành', 'Đền Pác-tê-nông', 'Kim tự tháp', 'Đấu trường La Mã'],
            answer: 2
        },
        {
            level: 1,
            question: 'Người Ai Cập cổ đại sáng tạo ra loại chữ viết nào?',
            options: ['Chữ cái Latinh', 'Chữ tượng hình', 'Chữ Hán', 'Chữ hình nêm'],
            answer: 1
        },
        {
            level: 1,
            question: 'Nữ hoàng nổi tiếng thông minh, xinh đẹp của Ai Cập cổ đại là ai?',
            options: ['Võ Tắc Thiên', 'Cơ-lê-ô-pát (Cleopatra)', 'Ê-li-da-bét', 'Vích-to-ri-a'],
            answer: 1
        },
        {
            level: 2,
            question: 'Mục đích chính của việc xây dựng các kim tự tháp là gì?',
            options: [
                'Làm lăng mộ chứa thi hài (xác ướp) của các pha-ra-ông.',
                'Làm nơi tổ chức Thế vận hội Ô-lim-píc.',
                'Làm pháo đài phòng thủ quân xâm lược.',
                'Làm đài quan sát thiên văn học.'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Phát minh đồng hồ mặt trời giúp người Ai Cập giải quyết nhu cầu gì?',
            options: [
                'Dự báo mực nước lũ của sông Nin.',
                'Xác định thời gian trong ngày dựa vào bóng cột.',
                'Đo đạc diện tích các khối đá xây kim tự tháp.',
                'Tìm ra phương hướng khi đi thuyền trên biển.'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Nội dung nào sau đây không phản ánh đúng ý nghĩa của những thành tựu văn minh Ai Cập cổ đại?',
            options: [
                'Để lại nhiều giá trị lịch sử sâu sắc cho đời sau.',
                'Đóng góp to lớn vào kho tàng văn minh nhân loại.',
                'Chịu ảnh hưởng sâu sắc của văn minh phương Tây.',
                'Thể hiện sự sáng tạo của cư dân Ai Cập cổ đại.'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Chi tiết nào thể hiện kĩ thuật xây dựng phi thường qua kim tự tháp Kê-ốp?',
            options: [
                'Xây dựng nổi trên mặt nước sông Nin.',
                'Dùng hơn 2,3 triệu tảng đá nặng ghép khít không dùng chất kết dính.',
                'Sử dụng máy móc bằng sắt thép để vận chuyển đá.',
                'Xây dựng hoàn toàn bằng bùn đáy sông.'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Tài năng của nữ hoàng Cơ-lê-ô-pát thể hiện qua khía cạnh nào?',
            options: [
                'Sử dụng các loại vũ khí tiên tiến nhất.',
                'Chỉ dựa vào vẻ đẹp để mê hoặc kẻ thù.',
                'Thông minh, giỏi nhiều thứ tiếng, kiến thức sâu rộng, lãnh đạo quân đội.',
                'Có phép thuật tạo ra bão cát.'
            ],
            answer: 2
        },
        // BÀI 25
        {
            level: 1,
            question: 'Hy Lạp cổ đại thuộc khu vực nào sau đây?',
            options: ['Địa Trung Hải', 'Đông Bắc châu Á', 'Đông Bắc châu Phi', 'Đông Nam Á'],
            answer: 0
        },
        {
            level: 2,
            question: 'Ý nào không phải là công trình kiến trúc nổi tiếng của Hy Lạp cổ đại?',
            options: ['Đền Parthenon', 'Đền thờ thần Dớt', 'Đền thờ thần A-pô-lô', 'Kim tự tháp Ai Cập'],
            answer: 3
        },
        {
            level: 1,
            question: 'Tác phẩm điêu khắc tiêu biểu khắc họa vận động viên thể thao Hy Lạp là gì?',
            options: ['Tượng Phật', 'Bức tượng Đại Phật', 'Tượng lực sĩ ném đĩa', 'Tượng Nhân sư'],
            answer: 2
        },
        {
            level: 1,
            question: 'Trong thần thoại Hy Lạp, nữ thần của trí tuệ và tài năng là ai?',
            options: ['Thần Dớt', 'Thần biển Pô-xê-đông', 'Nữ thần A-tê-na', 'Nữ thần Hê-ra'],
            answer: 2
        },
        {
            level: 1,
            question: 'Nguồn gốc của Thế vận hội Ô-lim-píc hiện nay xuất phát từ đâu?',
            options: ['Văn minh Ai Cập', 'Lễ hội thể thao của người Hy Lạp cổ đại', 'Văn minh Trung Hoa', 'Văn minh Văn Lang'],
            answer: 1
        },
        {
            level: 2,
            question: 'Điều kiện tự nhiên thuận lợi cho sự phát triển thủ công nghiệp ở Hy Lạp cổ đại là:',
            options: ['Có nhiều cảng biển', 'Nhiều đồng cỏ lớn', 'Giàu có khoáng sản', 'Đất đai màu mỡ'],
            answer: 2
        },
        {
            level: 2,
            question: 'Lễ hội Thể thao Ô-lim-píc thời cổ đại nhằm mục đích gì?',
            options: ['Chiêu mộ binh lính', 'Tổ chức hội chợ', 'Tôn vinh các vị thần (như thần Dớt)', 'Tranh giành lãnh thổ'],
            answer: 2
        },
        {
            level: 2,
            question: 'Phần thưởng cho người đạt giải cao nhất trong Ô-lim-píc cổ đại là gì?',
            options: ['Huy chương và tiền', 'Vòng nguyệt quế linh thiêng và sự tuyên dương', 'Nhà lớn and nô lệ', 'Quyền cai trị thành bang'],
            answer: 1
        },
        {
            level: 3,
            question: 'Bức "Tượng lực sĩ ném đĩa" phản ánh tư tưởng nào?',
            options: [
                'Khát vọng vươn tới sự hoàn hảo về thể hình và chiến thắng.',
                'Nỗi sợ hãi trước sức mạnh các vị thần.',
                'Cơ thể con người là yếu đuối cần giấu kín.',
                'Mong muốn biến con người thành chiến binh tàn bạo.'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Ý nghĩa của Thế vận hội Ô-lim-píc ngày nay khác gì thời cổ đại?',
            options: [
                'Chỉ tổ chức chạy, nhảy, ném đĩa.',
                'Chỉ dành cho người châu Âu.',
                'Biểu tượng đoàn kết, hòa bình toàn nhân loại.',
                'Nơi giải quyết tranh chấp quân sự.'
            ],
            answer: 2
        },
        // BÀI 26
        {
            level: 2,
            question: 'Câu ca dao tục ngữ nào thể hiện kinh nghiệm quan sát thiên nhiên của con người?',
            options: [
                'Nhất nước, nhì phân, tam cần, tứ giống.',
                'Làm ruộng ăn cơm nằm, chăm tằm ăn cơm đứng.',
                'Chớp đông nhay nháy, gà gáy thì mưa.',
                'Ăn quả nhớ kẻ trồng cây.'
            ],
            answer: 2
        },
        {
            level: 1,
            question: 'Sự nóng lên toàn cầu và nước biển dâng là biểu hiện của vấn đề gì?',
            options: ['Thiên tai', 'Ô nhiễm môi trường', 'Biến đổi khí hậu', 'Hiệu ứng đô thị'],
            answer: 2
        },
        {
            level: 1,
            question: 'Diện tích rừng bị thu hẹp, khoáng sản cạn kiệt thuộc nhóm vấn đề nào?',
            options: ['Suy giảm tài nguyên thiên nhiên', 'Ô nhiễm không khí', 'Gia tăng dân số', 'Khai thác tài nguyên tái tạo'],
            answer: 0
        },
        {
            level: 1,
            question: 'Hoạt động xả chất thải chưa qua xử lí ra sông hồ dẫn đến tình trạng gì?',
            options: ['Biến đổi khí hậu', 'Sóng thần', 'Ô nhiễm môi trường (nước, đất)', 'Nước biển dâng'],
            answer: 2
        },
        {
            level: 1,
            question: 'Biện pháp nào giúp bảo vệ môi trường, xây dựng thế giới xanh?',
            options: ['Khai thác tối đa khoáng sản', 'Chặt phá rừng lấy đất', 'Trồng rừng và bảo vệ rừng', 'Xả rác bừa bãi'],
            answer: 2
        },
        {
            level: 1,
            question: 'Thiên nhiên có vai trò gì trong cuộc sống con người?',
            options: [
                'Không gian sinh sống.',
                'Tạo bước đà cho con người phát triển.',
                'Cung cấp mối quan hệ xã hội.',
                'Giúp con người tự tin giao tiếp.'
            ],
            answer: 0
        },
        {
            level: 2,
            question: 'Ô nhiễm môi trường tác động tiêu cực trực tiếp nào tới con người?',
            options: ['Tăng diện tích đất nông nghiệp', 'Cung cấp nhiều khoáng sản', 'Gia tăng dịch bệnh và suy giảm sức khỏe', 'Hạn chế sạt lở đất'],
            answer: 2
        },
        {
            level: 2,
            question: 'Hành động "lựa chọn lối sống xanh" có vai trò gì?',
            options: ['Sử dụng đồ nhựa một lần', 'Khai thác năng lượng hóa thạch', 'Tiết kiệm năng lượng, bảo vệ môi trường bền vững', 'Xóa bỏ hoạt động công nghiệp'],
            answer: 2
        },
        {
            level: 3,
            question: 'Vì sao biến đổi khí hậu là thách thức toàn cầu?',
            options: [
                'Gây hậu quả diện rộng ảnh hưởng sức khỏe, kinh tế, môi trường toàn nhân loại.',
                'Chỉ các nước phát triển mới gây ra hiện tượng này.',
                'Chỉ ảnh hưởng sinh vật phù du.',
                'Khí hậu thay đổi từng ngày ai cũng cảm nhận được.'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Biện pháp sử dụng tài nguyên tiết kiệm giải quyết triệt để vấn đề gì?',
            options: ['Biến đổi khí hậu', 'Mưa axit', 'Suy giảm tài nguyên thiên nhiên', 'Động đất'],
            answer: 2
        },
        // BÀI 27
        {
            level: 2,
            question: 'Ước mong về một thế giới hòa bình được thể hiện thông qua hoạt động nào?',
            options: ['Thế vận hội Ô-lim-píc', 'Giờ Trái Đất', 'Ngày Thương binh liệt sĩ', 'Ngày Quốc tế thiếu nhi'],
            answer: 0
        },
        {
            level: 1,
            question: 'Truyền thuyết chim bồ câu liên quan thảm họa thiên nhiên nào?',
            options: ['Núi lửa', 'Trận đại hồng thủy', 'Bão tuyết', 'Động đất'],
            answer: 1
        },
        {
            level: 1,
            question: 'Hai màu sắc chủ đạo trên cờ Liên hợp quốc là gì?',
            options: ['Trắng và xanh', 'Đỏ và vàng', 'Xanh và đỏ', 'Trắng và đen'],
            answer: 0
        },
        {
            level: 3,
            question: 'Nội dung nào sau đây không đúng khi nói về Hoạt động của Liên hợp quốc?',
            options: [
                'Được thành lập ngày 24 – 10 – 1945.',
                'Duy trì hòa bình và an ninh quốc tế.',
                'Thúc đẩy quan hệ hữu nghị giữa các quốc gia.',
                'Là tổ chức của Phong trào Chữ thập đỏ quốc tế.'
            ],
            answer: 3
        },
        {
            level: 1,
            question: 'Phong trào nhân đạo bảo vệ sự sống con người trong chiến tranh là gì?',
            options: ['Tòa án Công lý', 'Phong trào Chữ thập đỏ', 'Liên minh châu Âu', 'Thế vận hội'],
            answer: 1
        },
        {
            level: 2,
            question: '5 vòng tròn trên biểu tượng Ô-lim-píc mang ý nghĩa gì?',
            options: ['Sự cạnh tranh 5 châu lục', '5 quốc gia sáng lập', 'Sự liên kết, đoàn kết và bình đẳng giữa các châu lục', '5 loại huy chương'],
            answer: 2
        },
        {
            level: 2,
            question: 'Học sinh cần làm gì để xây dựng thế giới hòa bình?',
            options: ['Đoàn kết, hữu nghị, không kì thị chủng tộc', 'Không tham gia hoạt động tập thể', 'Chuẩn bị vũ khí', 'Phân biệt đối xử bạn khác màu da'],
            answer: 0
        },
        {
            level: 2,
            question: 'Nguyên tắc quan trọng nhất xây dựng hòa bình toàn cầu?',
            options: ['Dùng quân sự áp đặt', 'Cắt đứt quan hệ nước mâu thuẫn', 'Giải quyết xung đột bằng biện pháp hòa bình', 'Kích động chiến tranh'],
            answer: 2
        },
        {
            level: 3,
            question: 'Biểu tượng "nhánh ô liu bao quanh bản đồ thế giới" của UN có ý nghĩa gì?',
            options: ['Quan tâm nông nghiệp', 'Kiểm soát tài nguyên', 'Khát vọng bảo vệ hòa bình và an ninh cho mọi quốc gia', 'Ghi nhớ thuyền Nô-ê'],
            answer: 2
        },
        {
            level: 3,
            question: 'Bài học cốt lõi từ các tổ chức hòa bình là gì?',
            options: ['Xung đột là thiết yếu', 'Gìn giữ hòa bình cần sự nỗ lực đoàn kết của cộng đồng quốc tế', 'Mỗi nước tự lo cho mình', 'Cần một quốc gia nắm quyền cai trị'],
            answer: 1
        }
    ]
};