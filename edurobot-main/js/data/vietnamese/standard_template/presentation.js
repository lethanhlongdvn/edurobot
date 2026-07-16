/**
 * @file presentation.js
 * @description Slides trình chiếu cho bài Tiếng Việt chuẩn.
 * Gồm: Slide tiêu đề, khởi động, bài đọc, câu hỏi, ghi nhớ, tạm biệt.
 */

export const vnTemplatePresentation = [
    // Slide 1: Tiêu đề bài học
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-emerald-50 to-teal-100 text-center relative overflow-hidden">
        <div class="absolute -left-20 -top-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px]"></div>
        <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-200/40 rounded-full blur-[100px]"></div>

        <div class="relative z-10 animate-fade-in-up">
            <span class="px-8 py-3 bg-emerald-600 text-white rounded-full text-2xl font-black uppercase tracking-[0.4em] mb-8 inline-block shadow-xl">Tiếng Việt 5</span>
            <h1 class="text-7xl md:text-[8rem] font-black text-emerald-900 leading-tight drop-shadow-2xl">
                [TÊN BÀI ĐỌC]
            </h1>
            <p class="text-3xl md:text-5xl font-bold text-gray-500 mt-10 max-w-5xl leading-relaxed italic">
                Chào mừng các em đến với tiết Tiếng Việt hôm nay!
            </p>
        </div>
    </div>
    `,

    // Slide 2: Khởi động - Câu hỏi nhanh
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white relative">
        <div class="absolute top-10 left-12 flex items-center gap-4">
             <div class="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">🚀</div>
             <span class="text-4xl font-black text-orange-600 uppercase tracking-widest">Khởi động</span>
        </div>

        <div class="w-full max-w-7xl">
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 mb-12 leading-tight">
                [Câu hỏi khởi động: Ôn bài cũ hoặc dẫn nhập bài mới?]
            </h2>

            <div class="grid grid-cols-2 gap-8 w-full">
                <button onclick="window.checkVnPreQuiz(1, 'A', 'A')" id="btn-vn-pre-1-A" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    A. [Đáp án A]
                </button>
                <button onclick="window.checkVnPreQuiz(1, 'B', 'A')" id="btn-vn-pre-1-B" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    B. [Đáp án B]
                </button>
                <button onclick="window.checkVnPreQuiz(1, 'C', 'A')" id="btn-vn-pre-1-C" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    C. [Đáp án C]
                </button>
                <button onclick="window.checkVnPreQuiz(1, 'D', 'A')" id="btn-vn-pre-1-D" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    D. [Đáp án D]
                </button>
            </div>
        </div>
    </div>
    `,

    // Slide 3: Chuyển tiếp - Bắt đầu đọc bài
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-emerald-600 text-white text-center">
        <h2 class="text-[10rem] font-black animate-bounce">📖</h2>
        <h3 class="text-7xl font-black uppercase tracking-widest mt-10">Đọc bài</h3>
        <p class="text-4xl font-bold mt-6 opacity-80 italic">Cùng đọc và tìm hiểu bài đọc nào!</p>
    </div>
    `,

    // Slide 4: Trình bày bài đọc (trên lớp)
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-[90rem]">
            <div class="space-y-10">
                <h4 class="text-5xl font-black text-emerald-900">[Tên bài đọc]</h4>
                <div class="p-10 bg-emerald-50 rounded-[48px] border-4 border-emerald-200">
                     <p class="text-3xl text-gray-700 leading-relaxed font-bold">
                        [Đoạn văn bản trích dẫn từ SGK cho slide trình chiếu...]
                     </p>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="w-full aspect-[3/4] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[48px] border-8 border-white shadow-2xl flex items-center justify-center relative">
                    <span class="text-3xl text-gray-400 font-black tracking-widest uppercase">Hình minh họa bài đọc</span>
                </div>
            </div>
        </div>
    </div>
    `,

    // Slide 5: Câu hỏi thảo luận
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white">
        <div class="w-full max-w-7xl">
            <div class="flex items-center gap-6 mb-12">
                <div class="w-20 h-20 bg-amber-500 text-white rounded-[24px] flex items-center justify-center text-4xl font-black shadow-lg">❓</div>
                <h2 class="text-6xl font-black text-gray-800 uppercase tracking-widest">Thảo luận</h2>
            </div>
            <div class="bg-amber-50 p-12 rounded-[48px] border-4 border-amber-200">
                <p class="text-4xl md:text-5xl font-bold text-gray-700 leading-relaxed">
                    [Câu hỏi thảo luận trên lớp: Em hãy cho biết...?]
                </p>
            </div>
        </div>
    </div>
    `,

    // Slide 6: Kết luận / Ghi nhớ
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20">
        <div class="bg-emerald-600 p-16 rounded-[64px] shadow-2xl w-full max-w-7xl text-white relative">
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <h4 class="text-4xl font-black uppercase tracking-[0.3em] mb-12 opacity-90">Ghi nhớ</h4>
            <div class="bg-white p-12 rounded-[40px] shadow-inner text-center">
                <p class="text-5xl md:text-6xl font-black text-emerald-700 leading-relaxed italic">
                    "[Nội dung ghi nhớ / ý nghĩa bài đọc]"
                </p>
            </div>
        </div>
    </div>
    `,

    // Slide Cuối: Tạm biệt
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-emerald-900 to-black text-white text-center">
        <h2 class="text-8xl md:text-[10rem] font-black mb-10 drop-shadow-2xl">🎉 HOÀN THÀNH! 🎉</h2>
        <p class="text-4xl md:text-5xl font-bold text-emerald-300 italic">Thầy/Cô chúc các em học tốt nhé!</p>
    </div>
    `
];
