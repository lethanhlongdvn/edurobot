/**
 * @file presentation.js
 * @description Slide trình chiếu chuẩn (Premium) cho Tiết 125: Luyện tập Thể tích HLP.
 */

export const lesson125Presentation = [
    // Slide 1: Tiêu đề
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-emerald-50 to-teal-100 text-center relative overflow-hidden">
        <div class="absolute -left-20 -top-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px]"></div>
        <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-200/40 rounded-full blur-[100px]"></div>
        
        <div class="relative z-10 animate-fade-in-up">
            <span class="px-8 py-3 bg-emerald-600 text-white rounded-full text-2xl font-black uppercase tracking-[0.4em] mb-8 inline-block shadow-xl">Toán Lớp 5</span>
            <h1 class="text-7xl md:text-[6rem] font-black text-emerald-900 leading-tight drop-shadow-2xl">
                BÀI 53: LUYỆN TẬP <br><span class="text-teal-600">(TIẾT 2)</span>
            </h1>
            <p class="text-3xl md:text-5xl font-bold text-gray-500 mt-10 max-w-5xl leading-relaxed italic">
                Cùng ôn tập và củng cố kiến thức về Thể tích hình lập phương!
            </p>
        </div>
    </div>
    `,

    // Slide 2: Khởi động - Câu 1
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white relative">
        <div class="absolute top-10 left-12 flex items-center gap-4">
             <div class="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">🚀</div>
             <span class="text-4xl font-black text-orange-600 uppercase tracking-widest">Khởi động</span>
        </div>

        <div class="w-full max-w-7xl">
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 mb-12 leading-tight">
                Câu 1: Công thức tính thể tích hình lập phương cạnh <span class="text-emerald-600">a</span> là:
            </h2>
            
            <div class="grid grid-cols-2 gap-8 w-full">
                <button onclick="window.lesson125CheckKickoff(1, 'A')" id="btn-pre-1-A" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    A. V = a &times; 4
                </button>
                <button onclick="window.lesson125CheckKickoff(1, 'B')" id="btn-pre-1-B" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    B. V = a &times; a &times; a
                </button>
                <button onclick="window.lesson125CheckKickoff(1, 'C')" id="btn-pre-1-C" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    C. V = a &times; a
                </button>
                <button onclick="window.lesson125CheckKickoff(1, 'D')" id="btn-pre-1-D" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    D. V = a &times; 6
                </button>
            </div>
        </div>
    </div>
    `,

    // Slide 3: Khởi động - Câu 2
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white relative">
        <div class="absolute top-10 left-12 flex items-center gap-4">
             <div class="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">🚀</div>
             <span class="text-4xl font-black text-orange-600 uppercase tracking-widest">Khởi động</span>
        </div>

        <div class="w-full max-w-7xl">
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 mb-12 leading-tight">
                Câu 2: Hình lập phương cạnh 2cm có thể tích là bao nhiêu?
            </h2>
            
            <div class="grid grid-cols-2 gap-8 w-full">
                <button onclick="window.lesson125CheckKickoff(2, 'A')" id="btn-pre-2-A" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    A. 4 cm&sup3;
                </button>
                <button onclick="window.lesson125CheckKickoff(2, 'B')" id="btn-pre-2-B" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    B. 6 cm&sup3;
                </button>
                <button onclick="window.lesson125CheckKickoff(2, 'C')" id="btn-pre-2-C" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    C. 8 cm&sup3;
                </button>
                <button onclick="window.lesson125CheckKickoff(2, 'D')" id="btn-pre-2-D" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    D. 12 cm&sup3;
                </button>
            </div>
        </div>
    </div>
    `,

    // Slide 4: Khởi động - Câu 3
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white relative">
        <div class="absolute top-10 left-12 flex items-center gap-4">
             <div class="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">🚀</div>
             <span class="text-4xl font-black text-orange-600 uppercase tracking-widest">Khởi động</span>
        </div>

        <div class="w-full max-w-7xl">
            <h2 class="text-5xl md:text-6xl font-black text-gray-800 mb-12 leading-tight">
                Câu 3: Đơn vị đo thể tích là gì?
            </h2>
            
            <div class="grid grid-cols-2 gap-8 w-full">
                <button onclick="window.lesson125CheckKickoff(3, 'A')" id="btn-pre-3-A" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    A. cm&sup2;
                </button>
                <button onclick="window.lesson125CheckKickoff(3, 'B')" id="btn-pre-3-B" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    B. cm
                </button>
                <button onclick="window.lesson125CheckKickoff(3, 'C')" id="btn-pre-3-C" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    C. cm&sup3;
                </button>
                <button onclick="window.lesson125CheckKickoff(3, 'D')" id="btn-pre-3-D" class="kickoff-btn p-10 bg-gray-50 border-4 border-gray-100 rounded-[32px] font-black text-5xl text-gray-400 hover:border-orange-400 hover:text-orange-600 transition-all shadow-md active:scale-95">
                    D. kg
                </button>
            </div>
        </div>
    </div>
    `,

    // Slide 5: Ghi nhớ công thức
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20">
        <div class="bg-emerald-600 p-16 rounded-[64px] shadow-2xl w-full max-w-7xl text-white relative">
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <h4 class="text-4xl font-black uppercase tracking-[0.3em] mb-12 opacity-90 text-center">Ôn lại kiến thức</h4>
            <div class="bg-white p-12 rounded-[40px] shadow-inner text-center">
                <p class="text-5xl md:text-8xl font-black text-emerald-600 leading-relaxed italic">
                    V = a &times; a &times; a
                </p>
                <p class="text-3xl text-gray-400 mt-6 font-bold uppercase">(Thể tích hình lập phương)</p>
            </div>
        </div>
    </div>
    `,

    // Slide 6: Luyện tập - Bài 1
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white">
        <h2 class="text-5xl font-black text-blue-600 mb-10 w-full text-left max-w-7xl border-l-[16px] border-blue-500 pl-8 uppercase">Luyện tập: Bài 1</h2>
        <div class="bg-blue-50 p-12 rounded-[56px] shadow-xl w-full max-w-7xl border-4 border-blue-200 flex flex-col lg:flex-row gap-12 items-center">
             <div class="w-full lg:w-3/5 space-y-8">
                <p class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Khối ru-bích của Việt có dạng hình lập phương cạnh <span class="text-blue-600">6 cm</span>.</p>
                <p class="text-4xl md:text-5xl font-black text-blue-800">Thể tích của khối ru-bích đó là bao nhiêu?</p>
             </div>
             <div class="w-full lg:w-2/5">
                <div class="bg-white p-6 rounded-[40px] shadow-2xl border-4 border-blue-100 flex items-center justify-center">
                    <span class="text-[10rem]">🎲</span>
                </div>
             </div>
        </div>
    </div>
    `,

    // Slide 7: Luyện tập - Bài 2
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white">
        <h2 class="text-5xl font-black text-teal-600 mb-10 w-full text-left max-w-7xl border-l-[16px] border-teal-500 pl-8 uppercase">Luyện tập: Bài 2</h2>
        <div class="bg-teal-50 p-12 rounded-[56px] shadow-xl w-full max-w-7xl border-4 border-teal-200 flex flex-col lg:flex-row gap-12 items-center text-center">
             <div class="w-full space-y-8">
                <p class="text-5xl md:text-6xl font-black text-teal-800 leading-tight italic">Hoàn thành bảng tính thể tích đồ vật!</p>
                <div class="bg-white p-10 rounded-[40px] border-2 border-teal-100 flex justify-center shadow-lg">
                    <img src="assets/images/toan/toan_tap_2/125-b2-items.webp" alt="Items" class="max-w-[600px] h-auto rounded-3xl">
                </div>
             </div>
        </div>
    </div>
    `,

    // Slide 8: Luyện tập - Bài 3
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-12 bg-white">
        <h2 class="text-5xl font-black text-purple-600 mb-10 w-full text-left max-w-7xl border-l-[16px] border-purple-500 pl-8 uppercase">Luyện tập: Bài 3</h2>
        <div class="bg-purple-50 p-12 rounded-[56px] shadow-xl w-full max-w-7xl border-4 border-purple-200 flex flex-col lg:flex-row gap-12 items-center">
             <div class="w-full lg:w-1/2 space-y-8">
                <p class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight italic">Em hãy quan sát và cho biết 2 khối nào ghép được thành hình lập phương?</p>
                <div class="p-6 bg-white rounded-3xl border-2 border-purple-100">
                    <p class="text-3xl text-purple-700 font-black tracking-widest uppercase mb-2 animate-pulse">💡 Gợi ý tư duy</p>
                </div>
             </div>
             <div class="w-full lg:w-1/2">
                <img src="assets/images/toan/toan_tap_2/125-b3-blocks.webp" alt="Blocks" class="w-full rounded-[40px] shadow-2xl border-8 border-white">
             </div>
        </div>
    </div>
    `,

    // Slide 9: Tổng kết
    `
    <div class="h-full flex flex-col justify-center items-center w-full px-20 bg-gradient-to-br from-emerald-900 to-black text-white text-center">
        <h2 class="text-8xl md:text-[10rem] font-black mb-10 drop-shadow-2xl animate-fade-in">GIỎI LẮM! 🎉</h2>
        <p class="text-4xl md:text-5xl font-bold text-emerald-300 italic mb-12">Em đã hoàn thành các bài tập Luyện tập rồi đấy!</p>
        <div class="flex gap-10">
             <div class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-5xl">⭐️</div>
             <div class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-5xl">⭐️</div>
             <div class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-5xl">⭐️</div>
        </div>
    </div>
    `
];

