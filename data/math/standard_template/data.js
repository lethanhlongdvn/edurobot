export const lessonTemplateContent = `
<div class="space-y-8 animate-fade-in pb-10"> <!-- Khung bao ngoài cùng, khoảng cách dọc 8 đơn vị, hiệu ứng hiện dần -->
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50 p-8 rounded-[48px] border-l-8 border-blue-600 shadow-xl relative overflow-hidden"> <!-- Thẻ chứa mục tiêu, nền xanh nhạt, bo góc lớn, viền trái đậm -->
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div> <!-- Hiệu ứng trang trí hình tròn mờ -->
        <h3 class="text-3xl font-black text-blue-900 mb-6 flex items-center gap-4"> <!-- Tiêu đề mục tiêu -->
            <span class="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">🎯</span> <!-- Icon mục tiêu trên nền xanh -->
            Mục tiêu bài học
        </h3>
        <ul class="space-y-4 text-blue-800 font-bold text-xl md:text-2xl ml-4"> <!-- Danh sách các mục tiêu -->
            <li class="flex items-start gap-3">
                <span class="text-blue-600 font-black">•</span>
                Kiến thức: [Nội dung kiến thức cần đạt] <!-- Mục tiêu kiến thức -->
            </li>
            <li class="flex items-start gap-3">
                <span class="text-blue-600 font-black">•</span>
                Kỹ năng: [Nội dung kỹ năng cần rèn luyện] <!-- Mục tiêu kỹ năng -->
            </li>
        </ul>
    </div>

    <!-- 📖 Khám phá kiến thức -->
    <div class="bg-white p-8 md:p-12 rounded-[56px] border border-blue-100 shadow-2xl relative overflow-hidden"> <!-- Phần khám phá kiến thức mới -->
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div> <!-- Hiệu ứng trang trí -->
        
        <div class="flex flex-col lg:flex-row gap-12 items-center relative z-10"> <!-- Chia layout 2 cột trên màn hình lớn -->
            <div class="w-full lg:w-1/2 space-y-8"> <!-- Cột bên trái: Văn bản -->
                <h4 class="text-4xl md:text-5xl font-black text-blue-800 leading-tight">
                    Khám phá <br><span class="text-blue-600 font-black italic">[Tên chủ đề]</span> <!-- Tiêu đề khám phá -->
                </h4>
                <p class="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    [Mô tả tình huống dẫn nhập hoặc khái niệm mới...] <!-- Diễn giải nội dung -->
                </p>
                
                <div class="bg-blue-50 p-8 rounded-[40px] border-2 border-dashed border-blue-200 shadow-inner"> <!-- Box công thức quan trọng -->
                    <p class="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-3">Công thức / Quy tắc</p>
                    <p class="text-2xl md:text-4xl font-black text-blue-900 text-center drop-shadow-sm italic">
                        [V = a &times; b &times; c] <!-- Công thức toán học -->
                    </p>
                </div>
            </div>

            <!-- Khu vực Visual (Hình ảnh / 3D) -->
            <div class="w-full lg:w-1/2 flex justify-center relative"> <!-- Cột bên phải: Hình ảnh minh họa -->
                <div class="w-full aspect-square max-w-[500px] bg-gradient-to-br from-blue-100 to-indigo-50 rounded-[48px] border-4 border-white shadow-2xl flex items-center justify-center relative group overflow-hidden">
                    <img src="[Link_hinh_anh_minh_hoa]" alt="Illustration" class="w-4/5 h-auto object-contain transition-transform duration-700 group-hover:scale-110"> <!-- Ảnh minh họa -->
                    
                    <!-- Nút View 3D (Nếu có) -->
                    <button onclick="window.openTemplate3DModal()" class="absolute bottom-6 right-6 px-10 py-5 bg-white/90 backdrop-blur-md text-blue-600 font-black text-xl rounded-2xl shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 flex items-center gap-3">
                        3D <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> <!-- Nút mở mô phỏng 3D -->
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Ghi nhớ (Highlight Section) -->
    <div class="p-10 rounded-[48px] bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-2xl relative overflow-hidden"> <!-- Phần ghi nhớ với hiệu ứng gradient -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <h4 class="text-2xl font-black uppercase tracking-widest mb-6 opacity-80 flex items-center gap-3"> <!-- Tiêu đề ghi nhớ -->
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Ghi nhớ quan trọng
        </h4>
        <div class="bg-white/20 backdrop-blur-xl p-8 rounded-[32px] border border-white/30 shadow-inner"> <!-- Box nội dung ghi nhớ -->
            <p class="text-2xl md:text-3xl font-bold leading-relaxed italic text-center">
                "[Nội dung câu quy tắc ghi nhớ trong SGK...]" <!-- Câu thần chú ghi nhớ -->
            </p>
        </div>
    </div>
</div>
`;

export const lessonTemplatePractice = `
<div class="space-y-16 animate-fade-in pb-12"> <!-- Khung bao phần luyện tập -->
    <!-- Bài tập 1: Trắc nghiệm / Chọn đáp án -->
    <section class="bg-white p-4 rounded-[64px] shadow-2xl border border-indigo-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-template-1"> <!-- Bài tập 1 trắc nghiệm -->
        <div class="p-4 md:p-7 bg-indigo-50/50 dark:bg-slate-900 rounded-[56px]">
            <div class="flex items-start gap-6 mb-10"> <!-- Header bài tập -->
                <div class="w-16 h-16 bg-indigo-600 text-white rounded-[24px] flex items-center justify-center text-3xl font-black shadow-lg shadow-indigo-200">1</div>
                <h3 class="text-3xl md:text-5xl font-black text-gray-800 dark:text-slate-100 leading-tight italic">
                    [Câu hỏi trắc nghiệm hoặc bài tập 1...] <!-- Nội dung câu hỏi 1 -->
                </h3>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Chia 2 cột: Ảnh và Nút bấm -->
                <!-- Visual for Exercise -->
                <div class="bg-white dark:bg-slate-800 p-8 rounded-[48px] border-2 border-indigo-100 shadow-xl flex justify-center"> <!-- Card chứa ảnh bài tập -->
                    <img src="[Link_anh_bai_tap]" alt="Ex 1" class="w-full max-w-[450px] h-auto rounded-3xl">
                </div>

                <!-- MCQ Options -->
                <div class="grid grid-cols-2 gap-6"> <!-- Lưới các nút đáp án A, B, C, D -->
                    <button onclick="window.selectMCQTemplate('template-1', 'A')" id="btn-template-1-A" class="mcq-btn-premium p-10 bg-white dark:bg-slate-800 border-4 border-indigo-100 rounded-[32px] font-black text-4xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-md active:scale-95 group relative">
                        A. [X]
                    </button>
                    <button onclick="window.selectMCQTemplate('template-1', 'B')" id="btn-template-1-B" class="mcq-btn-premium p-10 bg-white dark:bg-slate-800 border-4 border-indigo-100 rounded-[32px] font-black text-4xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-md active:scale-95 group relative">
                        B. [Y]
                    </button>
                    <button onclick="window.selectMCQTemplate('template-1', 'C')" id="btn-template-1-C" class="mcq-btn-premium p-10 bg-white dark:bg-slate-800 border-4 border-indigo-100 rounded-[32px] font-black text-4xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-md active:scale-95 group relative">
                        C. [Z]
                    </button>
                    <button onclick="window.selectMCQTemplate('template-1', 'D')" id="btn-template-1-D" class="mcq-btn-premium p-10 bg-white dark:bg-slate-800 border-4 border-indigo-100 rounded-[32px] font-black text-4xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-md active:scale-95 group relative">
                        D. [W]
                    </button>
                </div>
            </div>
            
            <!-- Feedback & Submit -->
            <div id="feedback-template-1" class="mt-10 text-center text-2xl md:text-3xl font-black opacity-0 transform translate-y-4 transition-all duration-500 p-8 rounded-[32px]"></div>
            <div class="mt-4 flex justify-center">
                <button id="btn-submit-template-1" onclick="window.submitExTemplate(1)" class="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-3xl font-black text-2xl shadow-xl flex items-center gap-3 transition-all hover:scale-105">
                    NỘP BÀI 1 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    </section>

    <!-- Bài tập 2: Tự luận (Thầy E chấm bài) -->
    <section class="bg-white p-4 rounded-[64px] shadow-2xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-template-2"> <!-- Bài tập 2 tự luận -->
        <div class="p-8 md:p-14 bg-amber-50/50 dark:bg-slate-900 rounded-[56px]">
            <div class="flex items-start gap-6 mb-10">
                <div class="w-16 h-16 bg-amber-500 text-white rounded-[24px] flex items-center justify-center text-3xl font-black shadow-lg shadow-amber-200">2</div>
                <h3 class="text-3xl md:text-5xl font-black text-gray-800 dark:text-slate-100 leading-tight">
                    [Bài toán có lời văn - Yêu cầu tính toán...] <!-- Đề bài tự luận -->
                </h3>
            </div>

            <div class="flex flex-col lg:flex-row gap-10 items-stretch"> <!-- Chia 2 cột: Ảnh gợi ý và Vùng làm bài -->
                <!-- Image/Hint Box -->
                <div class="w-full lg:w-2/5 p-8 bg-white dark:bg-slate-800 rounded-[48px] border-2 border-amber-100 shadow-xl flex flex-col items-center gap-6"> <!-- Block hình ảnh -->
                    <img src="[Link_anh_bai_tap_2]" alt="Ex 2" class="w-full rounded-3xl object-contain h-auto">
                    <div class="p-6 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-200">
                        <p class="text-lg font-bold text-amber-800 italic">💡 Gợi ý: [Nhắc lại công thức hoặc cách giải...]</p> <!-- Gợi ý cách làm -->
                    </div>
                </div>

                <!-- Answer Area -->
                <div class="w-full lg:w-3/5 bg-white dark:bg-slate-800 p-10 rounded-[48px] border-[6px] border-amber-200/50 shadow-2xl flex flex-col relative"> <!-- Vùng nhập bài làm -->
                    <div class="flex justify-between items-center mb-6">
                         <span class="text-xl font-black text-amber-500 uppercase tracking-widest">📝 Bài giải của em</span>
                    </div>
                    
                    <div class="relative flex-grow">
                        <textarea id="ans-template-2" rows="6" class="w-full p-8 pr-20 rounded-[32px] border-4 border-amber-100 bg-amber-50/30 dark:bg-slate-900 outline-none focus:border-amber-400 text-3xl font-bold text-gray-800 dark:text-slate-100 transition-all shadow-inner resize-none leading-relaxed" placeholder="Gõ lời giải tại đây..."></textarea> <!-- Ô nhập lời giải -->
                        
                        <!-- Mic Button -->
                        <button id="btn-mic-template-2" onclick="Lesson.toggleSpeechRec('ans-template-2')" class="absolute right-6 bottom-6 w-14 h-14 bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95" title="Nhập liệu bằng giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg> <!-- Icon micro -->
                        </button>
                        <div id="mic-status-template-2" class="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500 text-white text-xs font-black rounded-full animate-bounce hidden whitespace-nowrap">Đang ghi âm...</div>
                    </div>

                    <div class="mt-8 flex items-center gap-6">
                        <button id="btn-submit-template-2" onclick="window.submitExTemplate(2)" class="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-2xl rounded-[24px] shadow-xl transition-all active:scale-95 flex items-center gap-3">
                            NỘP BÀI 2 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <button onclick="Lesson.submitWordProblemAI('template-2')" class="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black text-2xl rounded-[24px] shadow-xl shadow-amber-200 transition-all active:scale-95 flex items-center gap-4">
                            Kiểm tra với Thầy E <span class="bg-white/20 p-1 rounded-lg italic text-lg">AI</span>
                        </button>
                        <div id="fb-template-2" class="text-2xl font-black opacity-0 flex items-center gap-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Nộp bài Global Button -->
    <div class="pt-10 flex justify-center"> <!-- Nút nộp bài cuối cùng -->
        <button onclick="window.submitStandardLesson('[Tên bài học]', 100)" class="px-16 py-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 text-white font-black text-2xl rounded-[32px] shadow-2xl transition-all active:scale-95 flex items-center gap-4 group">
            HOÀN THÀNH LUYỆN TẬP
            <svg class="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </button>
    </div>
</div>
`;

export const lessonTemplateQuizPool = [ // Ngân hàng câu hỏi trắc nghiệm nhanh (Quiz)
    { "question": "[Câu hỏi Cơ bản 1?]", "options": ["A", "B", "C", "D"], "answer": 0, "level": 1 }, // Câu hỏi mức 1
    { "question": "[Câu hỏi Nâng cao 1?]", "options": ["A", "B", "C", "D"], "answer": 1, "level": 2 }, // Câu hỏi mức 2
    { "question": "[Câu hỏi Thử thách 1?]", "options": ["A", "B", "C", "D"], "answer": 2, "level": 3 }  // Câu hỏi mức 3
];
