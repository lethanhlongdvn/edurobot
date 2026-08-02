export const lessonTemplatePresentation = [
    // Slide 1: Tiêu đề bài học
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-center relative overflow-hidden"> <!-- Slide tiêu đề với nền gradient xanh -->
        <div class="absolute -left-20 -top-20 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]"></div> <!-- Hiệu ứng trang trí mờ -->
        <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-[100px]"></div>
        
        <div class="relative z-10 animate-fade-in-up"> <!-- Nội dung chính có hiệu ứng hiện từ dưới lên -->
            <span class="px-8 py-3 bg-blue-600 text-white rounded-full text-2xl font-black uppercase tracking-[0.4em] mb-8 inline-block shadow-xl">Toán Lớp 5</span> <!-- Nhãn môn học -->
            <h1 class="text-7xl md:text-[8rem] font-black text-blue-900 leading-tight drop-shadow-2xl">
                [TÊN BÀI HỌC CHUẨN] <!-- Tên bài học chính -->
            </h1>
            <p class="text-3xl md:text-5xl font-bold text-gray-500 mt-10 max-w-5xl leading-relaxed italic">
                Chào mừng các em đến với tiết học ngày hôm nay! <!-- Lời chào mở đầu -->
            </p>
        </div>
    </div>
    `,

    // Slide 2-11: Khởi động (Kickoff Quiz)
    // Prototype Slide Khởi động (Hệ thống sẽ dùng mẫu này để tạo 10 câu hỏi)
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white relative"> <!-- Slide câu hỏi khởi động -->
        <div class="absolute top-10 left-12 flex items-center gap-4"> <!-- Header slide khởi động -->
             <div class="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">🚀</div>
             <span class="text-4xl font-black text-orange-600 uppercase tracking-widest">Khởi động</span>
        </div>

        <div class="w-full max-w-7xl"> <!-- Khu vực câu hỏi -->
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 mb-12 leading-tight">
                [Câu hỏi khởi động 1?] <!-- Nội dung câu hỏi nhanh -->
            </h2>
            
            <div class="grid grid-cols-2 gap-8 w-full"> <!-- Lưới các nút đáp án lớn cho slide trình chiếu -->
                <button onclick="window.checkPreQuizTemplate(1, 'A')" id="btn-pre-1-A" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    A. [Đáp án A]
                </button>
                <button onclick="window.checkPreQuizTemplate(1, 'B')" id="btn-pre-1-B" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    B. [Đáp án B]
                </button>
                <button onclick="window.checkPreQuizTemplate(1, 'C')" id="btn-pre-1-C" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    C. [Đáp án C]
                </button>
                <button onclick="window.checkPreQuizTemplate(1, 'D')" id="btn-pre-1-D" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    D. [Đáp án D]
                </button>
            </div>
        </div>
    </div>
    `,

    // Slide 12: Chuyển sang phần Khám phá
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-blue-600 text-white text-center"> <!-- Slide chuyển tiếp giữa các phần -->
        <h2 class="text-[10rem] font-black animate-bounce">🔍</h2> <!-- Icon phóng đại kèm hiệu ứng nhún -->
        <h3 class="text-7xl font-black uppercase tracking-widest mt-10">Khám phá kiến thức</h3>
        <p class="text-4xl font-bold mt-6 opacity-80 italic italic">Cùng tìm hiểu bài học mới nào!</p>
    </div>
    `,

    // Slide 13: Nội dung khám phá chính (Thường kèm 3D)
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white"> <!-- Slide nội dung bài học chính -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-[90rem]"> <!-- Layout 2 cột -->
            <div class="space-y-10"> <!-- Cột chữ -->
                <h4 class="text-6xl font-black text-blue-900">[Khám phá 1: Mô tả khái niệm]</h4> <!-- Tiêu đề phần khám phá -->
                <div class="p-10 bg-blue-50 rounded-[48px] border-4 border-blue-200">
                     <p class="text-4xl text-gray-700 leading-relaxed font-bold">
                        [Giải thích kiến thực dẫn nhập từ SGK...] <!-- Giải thích chi tiết -->
                     </p>
                </div>
            </div>
            
            <div class="flex justify-center"> <!-- Cột ảnh/3D -->
                <div class="w-full aspect-video bg-gray-50 rounded-[48px] border-8 border-white shadow-2xl flex items-center justify-center relative">
                    <span class="text-3xl text-gray-400 font-black tracking-widest uppercase">Khu vực nhúng 3D / Video</span> <!-- Chỗ này để nhúng interactive visual -->
                </div>
            </div>
        </div>
    </div>
    `,

    // Slide 14: Kết luận / Ghi nhớ (Native Presentation Style)
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20"> <!-- Slide tóm tắt quy tắc -->
        <div class="bg-rose-500 p-16 rounded-[64px] shadow-2xl w-full max-w-7xl text-white relative"> <!-- Card ghi nhớ nổi bật -->
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <h4 class="text-4xl font-black uppercase tracking-[0.3em] mb-12 opacity-90">Kết luận & Ghi nhớ</h4>
            <div class="bg-white p-12 rounded-[40px] shadow-inner text-center">
                <p class="text-5xl md:text-6xl font-black text-rose-600 leading-relaxed italic">
                    "[Nội dung công thức/quy tắc chính]" <!-- Quy tắc đóng khung trắng -->
                </p>
            </div>
        </div>
    </div>
    `,

    // Slide 15+: Luyện tập các bài
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white"> <!-- Slide bài tập thực hành -->
        <h2 class="text-5xl font-black text-emerald-600 mb-10 w-full text-left max-w-7xl border-l-[16px] border-emerald-500 pl-8">Luyện tập: Bài 1</h2> <!-- Tên bài tập -->
        <div class="bg-emerald-50 p-12 rounded-[56px] shadow-xl w-full max-w-7xl border-4 border-emerald-200 flex flex-col lg:flex-row gap-12 items-center"> <!-- Khung bài tập -->
             <div class="w-full lg:w-3/5 space-y-8"> <!-- Đề bài -->
                <p class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight italic">[Nội dung đề bài luyện tập 1...]</p>
                <div class="bg-white p-8 rounded-3xl border-2 border-emerald-100">
                    <p class="text-2xl text-emerald-700 font-bold tracking-widest uppercase mb-2 italic">Hướng dẫn:</p>
                    <p class="text-3xl text-gray-600 font-medium leading-relaxed">[Cách giải nhanh...]</p> <!-- Gợi ý làm bài -->
                </div>
             </div>
             <div class="w-full lg:w-2/5"> <!-- Ảnh minh họa cho bài tập -->
                <img src="[Link_anh_bai_tap_1]" alt="Practice 1" class="w-full rounded-[40px] shadow-2xl border-8 border-white">
             </div>
        </div>
    </div>
    `,

    // Slide Cuối: Tạm biệt
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-indigo-900 to-black text-white text-center"> <!-- Slide kết thúc bài học -->
        <h2 class="text-8xl md:text-[10rem] font-black mb-10 drop-shadow-2xl">🎉 HOÀN THÀNH! 🎉</h2>
        <p class="text-4xl md:text-5xl font-bold text-indigo-300 italic">Thầy/Cô chúc các em học tốt nhé!</p> <!-- Lời chúc/Tạm biệt -->
    </div>
    `
];
