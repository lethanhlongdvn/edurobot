// === 124/presentation.js ===
// Tất cả slide trình chiếu + câu hỏi khởi động

const lesson124KickoffQuestions = [
    {
        title: "CÂU HỎI 1",
        question: "Hình hộp chữ nhật bao gồm tất cả bao nhiêu mặt?",
        options: ["4 mặt", "6 mặt", "8 mặt", "12 mặt"],
        correct: "B",
        questionClass: "text-3xl md:text-4xl"
    },
    {
        title: "CÂU HỎI 2",
        question: "Đặc điểm của các mặt trong hình hộp chữ nhật là gì?",
        options: ["Đều là hình tam giác", "Đều là hình thoi", "Đều là hình vuông", "Là các hình chữ nhật"],
        correct: "D",
        questionClass: "text-3xl md:text-4xl"
    },
    {
        title: "CÂU HỎI 3",
        question: "Công thức tính thể tích V của hình hộp chữ nhật có chiều dài a, chiều rộng b và chiều cao c là gì?",
        options: ["V = a + b + c", "V = (a + b) × c", "V = a × b × c", "V = a × a × a"],
        correct: "C",
        questionClass: "text-2xl md:text-3xl"
    },
    {
        title: "CÂU HỎI 4",
        question: "Khẳng định nào sau đây là ĐÚNG khi nói về hình lập phương?",
        options: [
            "Hình lập phương có sáu mặt là các hình chữ nhật bằng nhau.",
            "Hình lập phương có sáu mặt là các hình vuông bằng nhau.",
            "Hình lập phương có bốn mặt là các hình vuông bằng nhau.",
            "Hình lập phương có sáu mặt là các hình thoi bằng nhau."
        ],
        correct: "B",
        questionClass: "text-xl md:text-2xl",
        stacked: true,
        stackedBtnClass: "quiz-opt w-full p-3 md:p-3.5 text-base md:text-lg leading-snug font-bold border-4 border-blue-100/70 rounded-3xl bg-blue-600 hover:bg-blue-700 transition-all text-left flex items-start gap-3 text-white"
    },
    {
        title: "CÂU HỎI 5",
        question: "Hình khai triển của một hình lập phương (để gấp thành hình) bao gồm bao nhiêu hình vuông?",
        options: ["4", "5", "6", "8"],
        correct: "C",
        questionClass: "text-3xl md:text-4xl"
    }
];

function renderLesson124KickoffSlide(item, idx) {
    const defaultGridBtnClass = 'quiz-opt p-4 md:p-5 text-xl md:text-2xl leading-snug font-bold border-4 border-blue-100/70 rounded-3xl bg-blue-600 hover:bg-blue-700 transition-all text-center text-white';
    const defaultStackedBtnClass = 'quiz-opt w-full p-4 md:p-5 text-lg md:text-xl font-bold border-4 border-blue-100/70 rounded-3xl bg-blue-600 hover:bg-blue-700 transition-all text-left flex items-start gap-4 text-white';
    const optionsMarkup = item.options.map((option, optionIdx) => {
        const optionLetter = String.fromCharCode(65 + optionIdx);
        const isCorrect = optionLetter === item.correct ? 'true' : 'false';
        if (item.stacked) {
            const buttonClass = item.stackedBtnClass || defaultStackedBtnClass;
            return `
                <button onclick="window.checkPreQuiz124(this, ${isCorrect}, ${idx + 1})" data-default-class="${buttonClass}" class="${buttonClass}">
                    <span class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 text-sm md:text-base">${optionLetter}</span> ${option}
                </button>
            `;
        }
        const buttonClass = item.gridBtnClass || defaultGridBtnClass;
        return `
            <button onclick="window.checkPreQuiz124(this, ${isCorrect}, ${idx + 1})" data-default-class="${buttonClass}" class="${buttonClass}">
                ${optionLetter}. ${option}
            </button>
        `;
    }).join('');

    return `
    <div class="presentation-slide-content h-full flex flex-col ${item.stacked ? 'justify-start' : 'justify-center'} items-center w-full px-10 ${item.stacked ? 'py-2' : 'py-4'} rounded-[40px] shadow-inner overflow-hidden bg-cover bg-center" style="background-image: url('assets/images/toan/toan_tap_2/124-khoidong2.webp');">
        <div class="w-full max-w-5xl bg-transparent ${item.stacked ? 'p-4 md:p-5 mt-1' : 'p-6 md:p-8'} rounded-[50px] shadow-2xl border-4 border-blue-200/60 flex flex-col items-center">
            <div class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-2xl ${item.stacked ? 'mb-3' : 'mb-4'} shadow-lg">${item.title}</div>
            <h3 class="${item.questionClass || 'text-3xl md:text-4xl'} font-black text-blue-700 text-center ${item.stacked ? 'mb-3' : 'mb-5'} leading-tight">${item.question}</h3>
            <div class="${item.stacked ? 'space-y-3 w-full' : 'grid grid-cols-2 gap-4 w-full'}">
                ${optionsMarkup}
            </div>
            <div class="quiz-feedback h-16 md:h-20 flex items-center"></div>
        </div>
    </div>
    `;
}

// Cấu hình Slide Trình chiếu (Native Presentation)
export const lesson124Presentation = [
    // Trang 1: KHỞI ĐỘNG
    `
    <div class="presentation-slide-content h-full flex flex-col justify-center items-center w-full px-10 text-white rounded-[40px] shadow-inner overflow-hidden relative bg-cover bg-center" style="background-image: url('assets/images/toan/toan_tap_2/124-khoidong2.webp');">
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div class="z-10 text-center space-y-10">
            <div class="inline-block p-6 bg-white/80 rounded-3xl border-4 border-white shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)] animate-pop-in">
                <h1 class="text-5xl md:text-7xl font-black tracking-[0.06em] whitespace-nowrap text-purple-800 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">KHỞI ĐỘNG</h1>
            </div>
            <p class="inline-block px-8 py-4 bg-white/85 rounded-2xl text-2xl md:text-4xl font-black text-purple-800 tracking-widest shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] animate-fade-in delay-300">Sẵn sàng vượt qua thử thách!</p>
            <div class="flex justify-center pt-10">
                <div class="w-3 h-20 bg-white/30 rounded-full animate-bounce"></div>
            </div>
        </div>
    </div>
    `,
    ...lesson124KickoffQuestions.map((item, idx) => renderLesson124KickoffSlide(item, idx)),
    // Trang 11: TIÊU ĐỀ KHÁM PHÁ (Trang 12 theo yêu cầu)
    `
    <style>
        .animate-title { animation: titleFloat 3s ease-in-out infinite; }
        @keyframes titleFloat { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-20px) rotate(1deg); } }
        .floating-cube { animation: cubeFloat 6s ease-in-out infinite; }
        @keyframes cubeFloat { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-30px) rotate(15deg); } }
        .bg-presentation-124 { background: radial-gradient(circle at top right, #fdfcfb 0%, #e2d1c3 100%); }
        .character-square { width: 120px; height: 120px; border: 4px solid white; border-radius: 30px; overflow: hidden; background: white; box-shadow: 0 15px 35px rgba(0,0,0,0.1); animation: gentleBounce 4s ease-in-out infinite; }
        @keyframes gentleBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @media (min-width: 768px) { .character-square { width: 150px; height: 150px; } }
    </style>
    <div class="presentation-slide-content h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-presentation-124 rounded-[40px] shadow-2xl">
        <!-- Background Elements -->
        <div class="absolute top-20 right-20 w-32 h-32 bg-orange-400/20 rounded-3xl rotate-45 floating-cube"></div>
        <div class="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full floating-cube" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-400/20 rounded-2xl rotate-12 floating-cube" style="animation-delay: 2s;"></div>

        <!-- Student Characters -->
        <div class="absolute left-8 bottom-8 character-square z-20 animate-fade-in">
            <img src="assets/images/toan/toan_tap_2/124-student-boy.webp" alt="Student Boy" class="w-full h-full object-contain p-2">
        </div>
        <div class="absolute right-8 bottom-8 character-square z-20 animate-fade-in" style="animation-delay: 0.5s;">
            <img src="assets/images/toan/toan_tap_2/124-student-girl.webp" alt="Student Girl" class="w-full h-full object-contain p-2">
        </div>

        <!-- Central Content Area -->
        <div class="relative z-10 flex flex-col items-center text-center p-10 bg-white/40 backdrop-blur-xl rounded-[60px] border-4 border-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] max-w-5xl">
            <div class="inline-block py-2 px-6 bg-purple-600 text-white rounded-full font-black text-2xl mb-6 shadow-lg tracking-widest uppercase">TOÁN HỌC</div>
            
            <h1 class="text-6xl md:text-8xl font-black text-slate-800 leading-tight mb-8 animate-title contrast-125">
                Thể tích của<br/>
                <span class="text-orange-500 bg-clip-text">hình lập phương</span>
            </h1>

            <div class="w-32 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>

            <footer class="mt-4">
                <p class="text-slate-600 text-2xl font-bold tracking-wide opacity-90 italic">
                    Giáo viên thực hiện: <span class="text-blue-600 not-italic font-black">Lê Thành Long</span>
                </p>
            </footer>
        </div>

        <!-- Floating Geometric Cubes decoration -->
        <div class="absolute top-10 left-1/2 -translate-x-1/2 flex gap-8 opacity-30">
            <div class="w-8 h-8 bg-blue-500 rounded-lg animate-bounce"></div>
            <div class="w-12 h-12 bg-orange-500 rounded-xl animate-bounce" style="animation-delay: 0.2s;"></div>
            <div class="w-10 h-10 bg-purple-500 rounded-lg animate-bounce" style="animation-delay: 0.4s;"></div>
        </div>
    </div>
    `,
    // Trang 12: KHÁM PHÁ (Trang 13 theo yêu cầu)
    `
        <div class="h-full flex flex-col justify-center items-center w-full px-10">
            <h2 class="text-5xl md:text-7xl font-black text-purple-600 mb-10 tracking-widest uppercase animate-slide-in-top">KHÁM PHÁ</h2>
            <div class="bg-white p-8 md:p-12 rounded-[40px] border-4 border-purple-200 shadow-2xl relative w-full max-w-6xl flex justify-center items-center">
                <div class="flex justify-center relative group">
                    <img src="assets/images/toan/toan_tap_2/124-khampha.webp" alt="Khám phá" class="w-full max-w-[700px] h-auto rounded-[40px] shadow-2xl border-8 border-white group-hover:rotate-1 transition-transform">
                </div>
            </div>
        </div>
    `,
    // Trang 13: Mô phỏng Khối Lập Phương 3D (Trang 14)
    `
    <style>
        .grid-bg-124 { background-size: 80px 80px; background-image: linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px); }
        .transform-style-3d { transform-style: preserve-3d; }
        .minicube-124 { position: absolute; width: 80px; height: 80px; margin-left: -40px; margin-top: -40px; transform-style: preserve-3d; }
        .minicube-124 .face { position: absolute; width: 80px; height: 80px; border: 1px solid rgba(251, 191, 36, 0.9); background: rgba(253, 230, 138, 0.95); box-shadow: inset 0 0 16px rgba(251, 191, 36, 0.5); }
        .minicube-124 .face.top { transform: translateY(-40px) rotateX(90deg); background: #fef3c7; }
        .minicube-124 .face.bottom { transform: translateY(40px) rotateX(-90deg); background: #f59e0b; }
        .minicube-124 .face.front { transform: translateZ(40px); }
        .minicube-124 .face.back { transform: translateZ(-40px) rotateY(180deg); background: #d97706; }
        .minicube-124 .face.right { transform: translateX(40px) rotateY(90deg); background: #fcd34d; }
        .minicube-124 .face.left { transform: translateX(-40px) rotateY(-90deg); background: #fbbf24; }
    </style>
    <div class="h-full flex flex-col justify-center items-center w-full px-10">
        <div class="flex-1 w-full max-w-6xl flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-purple-950 p-6 rounded-[40px] shadow-2xl border-4 border-purple-200 relative mb-8">
                <!-- 3D SCENE -->
                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px] scale-90 md:scale-100" id="scene-124-pre">
                    <div id="cube-wrapper-124-pre" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing w-[240px] h-[240px]" style="transform: rotateX(-20deg) rotateY(-30deg);">
                        <!-- Container for mini blocks -->
                        <div id="cube-layers-124-pre" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                        <!-- The Container Box -->
                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: rotateY(180deg) translateZ(120px);"></div>
                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: rotateY(-90deg) translateZ(120px);"></div>
                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: rotateX(-90deg) translateZ(120px);"></div>
                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-124 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: rotateX(90deg) translateZ(120px);"></div>
                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-end justify-center pb-2 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: rotateY(90deg) translateZ(120px);">
                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm md:text-xl">Rộng: 3 cm</div>
                            </div>
                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-center justify-center flex-col justify-end pb-4 gap-2 w-[240px] h-[240px] left-1/2 top-1/2 -ml-[120px] -mt-[120px]" style="transform: translateZ(120px);">
                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[120px] absolute text-sm md:text-xl">Dài: 3 cm</div>
                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[150px] absolute text-sm md:text-xl -rotate-90">Cao: 3 cm</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Controls -->
                <div class="flex flex-wrap items-center justify-center gap-4 z-10 w-full shrink-0 mt-4">
                    <button onclick="window.fillKhamPha124Pre()" id="btn-fill-124-pre" class="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all flex items-center gap-3">
                        🧊 Bấm lần 1: Xếp 1 hình
                    </button>
                    <button onclick="window.resetKhamPha124Pre()" class="px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                        ↺ Đặt lại
                    </button>
                    <div class="absolute bottom-4 right-4 bg-white/10 px-4 py-2 rounded-xl text-white font-bold opacity-70 text-sm hidden md:block border border-white/20">
                        👆 Dùng chuột kéo xoay để nhìn khối 3D kĩ hơn nhé
                    </div>
                </div>
                
                <!-- Script specifically for presentation mode -->
                <script>
                    setTimeout(() => {
                        if (typeof window.initLesson124CubeController === 'function') {
                            window.initLesson124CubeController('pre');
                            window.resetKhamPha124Pre();
                        }
                    }, 200);
                </script>
            </div>
        </div>
    `,
    // Trang 14: VÍ DỤ TÌNH HUỐNG (Trang 15 theo yêu cầu)
    `
    <div class="presentation-slide-content h-full w-full flex flex-col relative overflow-hidden bg-white rounded-[40px] shadow-2xl p-8">
        <!-- Background Elements -->
        <div class="absolute w-64 h-64 bg-blue-50 rounded-full -top-20 -left-20"></div>
        <div class="absolute w-48 h-48 bg-green-50 rounded-full -bottom-10 -right-10"></div>

        <!-- Header -->
        <header class="relative z-10 w-full mb-4">
            <div class="flex items-center gap-4">
                <div class="h-8 w-1.5 bg-blue-500 rounded-full"></div>
                <h1 class="font-bold text-blue-900 text-4xl">Thể tích của hình lập phương</h1>
            </div>
            <hr class="mt-2 border-blue-100"/>
        </header>

        <!-- Content Body -->
        <section class="relative z-10 flex-grow flex items-center">
            <div class="grid grid-cols-12 gap-8 items-center w-full">
                <!-- Illustration -->
                <div class="col-span-4 flex flex-col items-center justify-center bg-white p-2 rounded-3xl shadow-sm border border-blue-50 self-center">
                    <img src="assets/images/toan/toan_tap_2/124-trang-15.webp" alt="Minh họa" class="w-full h-auto rounded-lg drop-shadow-xl">
                </div>

                <!-- Text Content -->
                <div class="col-span-8 space-y-4">
                    <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-l-[6px] border-blue-500 shadow-sm space-y-5">
                        <!-- Step 1 -->
                        <div class="flex items-start gap-4">
                            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">1</span>
                            <p class="text-blue-900 text-2xl font-medium leading-snug">
                                Hình lập phương đó chứa được:<br/>
                                <span class="font-black text-blue-700 text-3xl">3 &times; 3 &times; 3 = 27</span> (hình lập phương nhỏ).
                            </p>
                        </div>
                        
                        <!-- Step 2 -->
                        <div class="flex items-start gap-4">
                            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">2</span>
                            <p class="text-blue-900 text-2xl font-medium leading-snug">
                                Thể tích của mỗi hình lập phương nhỏ là <span class="font-black">1 cm&sup3;</span>.
                            </p>
                        </div>

                        <!-- Conclusion -->
                        <div class="mt-4 pt-4 border-t border-blue-200">
                            <div class="flex items-center gap-2 mb-3">
                                <svg class="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                                <span class="font-black text-blue-800 uppercase tracking-widest text-xl">Kết luận:</span>
                            </div>
                            <div class="bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg inline-block border-2 border-white/20">
                                <p class="text-2xl font-bold">Thể tích của hình lập phương có cạnh 3 cm là:</p>
                                <p class="text-4xl font-black mt-2">3 &times; 3 &times; 3 = 27 (cm&sup3;)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="relative z-10 mt-2 flex justify-between items-center text-gray-400 text-base font-medium">
            <div>Môn Toán - Lớp 5</div>
            <div class="flex gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
        </footer>
    </div>
    `,
    // Trang 15: Công thức Thể tích hình lập phương (Trang 16)
    `
        <div class="h-full flex flex-col justify-center items-center w-full px-8">
            <div class="bg-gradient-to-r from-pink-500 to-rose-600 p-6 lg:p-10 rounded-[60px] text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl">
                <div class="w-full lg:w-1/2 flex justify-center z-10">
                    <img src="assets/images/toan/toan_tap_2/124-formula.webp" alt="Công thức" class="w-full h-auto rounded-[40px] border-8 border-pink-400/50 shadow-2xl bg-white/5">
                </div>
                <div class="w-full lg:w-1/2 text-center lg:text-left space-y-8 z-10">
                    <p class="text-base md:text-lg font-black uppercase tracking-[0.3em] opacity-80 bg-white/20 inline-block px-4 py-1.5 rounded-full mb-2 shadow-sm border border-white/30">Ghi nhớ quan trọng</p>
                    <p class="text-xl md:text-3xl font-bold text-white leading-tight">Thể tích V của hình lập phương có cạnh <span class="text-yellow-300 font-black">a</span> được tính theo công thức:</p>
                    <p class="text-2xl md:text-4xl font-black drop-shadow-lg tracking-tight whitespace-nowrap">V = a &times; a &times; a</p>
                </div>
                <div class="absolute -right-20 -top-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <div class="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
    `,
    // Trang 16: Tiêu đề LUYỆN TẬP (Trang 17)
    `
        <div class="h-full flex flex-col justify-center items-center w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden relative">
            <!-- Decorative Background -->
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-pulse" style="animation-delay: 2s"></div>
            </div>
            
            <!-- Animated Cubes -->
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-indigo-400/30 rounded-lg transform rotate-45 animate-float"></div>
                <div class="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-400/30 rounded-xl transform -rotate-30 animate-float" style="animation-delay: 1.5s"></div>
                <div class="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-400/30 rounded-full animate-float" style="animation-delay: 3s"></div>
            </div>

            <div class="relative z-10 text-center">
                <p class="text-indigo-300 text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">Bài học</p>
                <h1 class="text-white text-5xl md:text-7xl font-black leading-tight drop-shadow-lg">LUYỆN TẬP</h1>
                <div class="mt-8 flex justify-center">
                    <div class="w-32 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                </div>
            </div>
        </div>
    `,
    // Trang 17: Bài tập 1 (Trang 18)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-6 bg-slate-50 relative overflow-hidden">
            <!-- Header -->
            <div class="flex items-center justify-between mb-4 z-10">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 transform -rotate-3">
                        <span class="text-2xl font-black">1</span>
                    </div>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Viết số đo thích hợp vào ô trống</h2>
                        <div class="h-1 w-24 bg-indigo-500 rounded-full mt-1"></div>
                    </div>
                </div>
                <!-- Mascot/Icon -->
                <div class="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                    <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                    <span class="font-bold text-slate-600 text-base">V = a &times; a &times; a</span>
                </div>
            </div>

            <!-- Content Area -->
            <div class="flex-grow flex flex-col items-center justify-center z-10 max-w-5xl mx-auto w-full">
                <div class="w-full bg-white rounded-[32px] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-indigo-600 text-white">
                                <th class="py-6 px-4 text-xl font-black text-center border-r border-white/10 uppercase tracking-widest w-1/4">Hình lập phương</th>
                                <th class="py-6 px-4 text-xl font-black text-center border-r border-white/10 uppercase tracking-widest">(1)</th>
                                <th class="py-6 px-4 text-xl font-black text-center border-r border-white/10 uppercase tracking-widest">(2)</th>
                                <th class="py-6 px-4 text-xl font-black text-center uppercase tracking-widest">(3)</th>
                            </tr>
                        </thead>
                        <tbody class="text-lg md:text-xl">
                            <!-- Độ dài cạnh -->
                            <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                <td class="py-6 px-6 font-black text-slate-700 bg-slate-50/50 border-r border-slate-100 text-center">Độ dài cạnh (a)</td>
                                <td class="py-6 px-4 text-center border-r border-slate-100 font-bold text-indigo-600 italic">10 cm</td>
                                <td class="py-6 px-4 text-center border-r border-slate-100 font-bold text-indigo-600 italic">2,5 m</td>
                                <td class="py-6 px-4 text-center font-bold text-indigo-600 italic">2/5 dm</td>
                            </tr>
                            <!-- Thể tích -->
                            <tr class="border-b border-slate-50">
                                <td class="py-8 px-6 font-black text-slate-700 bg-slate-50/50 border-r border-slate-100 text-center">Thể tích (V)</td>
                                <td class="p-3 border-r border-slate-100 border-2 transition-all">
                                    <div class="flex flex-col items-center gap-3">
                                        <div class="relative group/input w-full">
                                            <input type="text" id="ans-124-1a" placeholder="..." class="w-full h-16 bg-white text-center text-2xl font-black text-teal-600 outline-none rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-300">
                                            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold pointer-events-none group-focus-within/input:text-indigo-500 text-sm">cm&sup3;</div>
                                        </div>
                                        <button onclick="window.checkEx124_1_col('a')" class="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all text-xl font-black">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
                                        </button>
                                        <div id="feedback-124-1a" class="h-4 text-xs font-bold transition-all opacity-0"></div>
                                    </div>
                                </td>
                                <td class="p-3 border-r border-slate-100 border-2 transition-all">
                                    <div class="flex flex-col items-center gap-3">
                                        <div class="relative group/input w-full">
                                            <input type="text" id="ans-124-1b" placeholder="..." class="w-full h-16 bg-white text-center text-2xl font-black text-teal-600 outline-none rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-300">
                                            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold pointer-events-none group-focus-within/input:text-indigo-500 text-sm">m&sup3;</div>
                                        </div>
                                        <button onclick="window.checkEx124_1_col('b')" class="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all text-xl font-black">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
                                        </button>
                                        <div id="feedback-124-1b" class="h-4 text-xs font-bold transition-all opacity-0"></div>
                                    </div>
                                </td>
                                <td class="p-3 border-2 transition-all">
                                    <div class="flex flex-col items-center gap-3">
                                        <div class="relative group/input w-full">
                                            <input type="text" id="ans-124-1c" placeholder="..." class="w-full h-16 bg-white text-center text-2xl font-black text-teal-600 outline-none rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-300">
                                            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold pointer-events-none group-focus-within/input:text-indigo-500 text-sm">dm&sup3;</div>
                                        </div>
                                        <button onclick="window.checkEx124_1_col('c')" class="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all text-xl font-black">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
                                        </button>
                                        <div id="feedback-124-1c" class="h-4 text-xs font-bold transition-all opacity-0"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Footer Info -->
                <div class="mt-6 text-center">
                    <p class="text-slate-400 font-medium italic underline underline-offset-4 decoration-slate-200 text-sm">💡 Sử dụng dấu phẩy (,) cho số thập phân nhé!</p>
                </div>
            </div>

            <!-- Background Decorations -->
            <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-40"></div>
            <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-40"></div>
        </div>
    `,
    // Trang 18: Bài tập 2 (Trang 19)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-6 bg-white relative overflow-y-auto">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-4 z-10">
                <div class="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-3">
                    <span class="text-xl font-black">2</span>
                </div>
                <h2 class="text-xl md:text-2xl font-black text-slate-800">Tính thể tích chiếc bánh kem</h2>
            </div>

            <!-- Content -->
            <div class="flex-grow flex flex-col lg:flex-row items-center justify-center gap-8 z-10 pb-20">
                <div class="flex flex-col items-center gap-6 w-full lg:w-1/3">
                    <div class="relative group cursor-pointer w-full max-w-[320px]" onclick="window.Lesson.openZoom('assets/images/toan/toan_tap_2/124-b2-cake.webp', 'Chiếc bánh kem')">
                        <div class="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity"></div>
                        <img src="assets/images/toan/toan_tap_2/124-b2-cake.webp" class="relative w-full drop-shadow-2xl transition-transform duration-500 rounded-3xl" alt="Bánh kem">
                        
                        <!-- Floating Small Square Zoom Button -->
                        <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                           <button class="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border-2 border-amber-200 text-amber-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors">
                               <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                           </button>
                        </div>
                    </div>
                </div>

                <div class="flex-1 w-full max-w-4xl">
                    <div class="bg-indigo-50/50 p-6 md:p-8 rounded-[48px] border-2 border-indigo-100 shadow-sm relative">
                        <div class="absolute -top-4 -left-4 w-12 h-12 bg-indigo-500 rounded-2xl rotate-12 flex items-center justify-center text-white shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </div>
                        <div class="mb-2 text-center lg:text-left">
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-bold">
                                Một chiếc bánh kem hình hộp chữ nhật có chiều dài <span class="text-indigo-600 font-black">12 cm</span>, chiều rộng <span class="text-indigo-600 font-black">12 cm</span> và chiều cao <span class="text-indigo-600 font-black">6 cm</span>. 
                            </p>
                            <p class="text-2xl md:text-3xl text-slate-800 leading-relaxed font-bold mt-4">
                                Người ta cắt đi một phần bánh hình lập phương cạnh <span class="text-indigo-600 font-black">6 cm</span> ở một góc (như hình vẽ).
                            </p>
                            <div class="h-1 w-full bg-indigo-100 my-6 rounded-full"></div>
                            <p class="text-3xl md:text-4xl text-orange-600 font-black animate-pulse tracking-tight text-center lg:text-left">
                                Tính thể tích phần còn lại của chiếc bánh kem đó?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Background Decorations -->
            <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
            <div class="absolute -top-20 -left-20 w-60 h-60 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
        </div>
    `,
    // Trang 19: Lời giải Bài 2 (Trang 20)
    `
        <div class="h-full flex flex-col w-full p-3 md:p-4 bg-slate-900 text-white relative overflow-y-auto">
            <div class="z-10 flex flex-col h-full">
                <div class="flex-grow flex flex-col items-center justify-start text-center max-w-4xl mx-auto w-full py-1 pb-20 md:pb-24">
                    <div class="space-y-4 w-full max-w-5xl">
                        <div class="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[36px] border border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform">
                            <p class="text-xl md:text-2xl font-medium text-slate-400 mb-3 italic">Bài giải:</p>
                            <div class="text-left space-y-4 max-w-3xl mx-auto mb-5">
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl font-bold text-slate-200">Thể tích chiếc bánh kem hình hộp chữ nhật ban đầu là:</p>
                                    <p class="text-2xl md:text-3xl font-black text-indigo-300 text-center bg-indigo-500/10 py-2.5 rounded-2xl">12 &times; 12 &times; 6 = 864 (cm&sup3;)</p>
                                </div>
                                
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl font-bold text-slate-200">Thể tích miếng bánh hình lập phương bị cắt đi là:</p>
                                    <p class="text-2xl md:text-3xl font-black text-indigo-300 text-center bg-indigo-500/10 py-2.5 rounded-2xl">6 &times; 6 &times; 6 = 216 (cm&sup3;)</p>
                                </div>
                                
                                <div class="space-y-2">
                                    <p class="text-xl md:text-2xl font-bold text-slate-200">Thể tích phần còn lại của chiếc bánh kem là:</p>
                                    <p class="text-2xl md:text-4xl font-black text-emerald-400 text-center bg-emerald-500/10 py-3 rounded-2xl border-2 border-emerald-500/20">864 - 216 = 648 (cm&sup3;)</p>
                                </div>
                            </div>
                            <p class="text-2xl md:text-4xl font-black text-amber-400 mt-2 drop-shadow-lg">Đáp số: 648 cm&sup3;</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tech/Abstract Background -->
            <div class="absolute inset-0 pointer-events-none opacity-10">
                <div class="absolute top-0 right-0 w-full h-full border-[100px] border-white/5 rounded-full scale-150"></div>
            </div>
        </div>
    `,
    // Trang 19A: Bài tập 3 (Luyện tập)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-6 bg-indigo-50 relative overflow-y-auto">
            <div class="z-10 flex flex-col h-full max-w-6xl mx-auto w-full text-left">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-3">
                        <span class="text-xl font-black">3</span>
                    </div>
                    <h2 class="text-xl md:text-2xl font-black text-indigo-900">Chọn câu trả lời đúng</h2>
                    <div class="h-1 flex-grow bg-indigo-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col lg:flex-row items-stretch justify-center gap-6 pb-20 md:pb-24">
                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-6 md:p-8 flex flex-col justify-center">
                        <p class="text-2xl md:text-3xl font-black text-indigo-900 leading-tight">
                            Mai và Rô-bốt xếp được hai hình từ các hình lập phương nhỏ như hình bên.
                        </p>
                        <div class="mt-6 space-y-4">
                            <div class="bg-indigo-50 border border-indigo-100 rounded-3xl p-4">
                                <p class="text-lg md:text-2xl font-black text-indigo-700 leading-snug">
                                    a) Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?
                                </p>
                            </div>
                            <div class="bg-indigo-50 border border-indigo-100 rounded-3xl p-4">
                                <p class="text-lg md:text-2xl font-black text-indigo-700 leading-snug">
                                    b) Nếu mỗi hình lập phương nhỏ có cạnh <span class="text-indigo-900">2 cm</span> thì thể tích hình của Rô-bốt là bao nhiêu cm&sup3;?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-4 md:p-6 flex items-center justify-center">
                        <img src="assets/images/toan/toan_tap_2/124-b3-mairobot.webp" alt="Hình của Mai và Rô-bốt" class="w-full h-auto rounded-3xl">
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 19B: Bài tập 3a (Đáp án)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-6 bg-indigo-50 relative overflow-y-auto">
            <div class="z-10 flex flex-col h-full max-w-6xl mx-auto w-full text-left">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-3">
                        <span class="text-xl font-black">3a</span>
                    </div>
                    <h2 class="text-xl md:text-2xl font-black text-indigo-900">Đáp án câu a</h2>
                    <div class="h-1 flex-grow bg-indigo-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col lg:flex-row items-stretch justify-center gap-6 pb-20 md:pb-24">
                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-6 md:p-8 flex flex-col justify-center">
                        <p class="text-xl md:text-2xl font-black text-indigo-800 leading-tight mb-6">
                            Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?
                        </p>
                        <div id="p124-3a-choices" class="grid grid-cols-2 gap-4">
                            <button onclick="window.checkPractice124_3a('A')" id="p124-3a-A" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">A. 12 hình</button>
                            <button onclick="window.checkPractice124_3a('B')" id="p124-3a-B" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">B. 10 hình</button>
                            <button onclick="window.checkPractice124_3a('C')" id="p124-3a-C" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">C. 8 hình</button>
                            <button onclick="window.checkPractice124_3a('D')" id="p124-3a-D" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">D. 6 hình</button>
                        </div>
                        <div id="p124-3a-feedback" class="mt-5 p-4 rounded-3xl font-black text-lg md:text-xl hidden"></div>
                        <div id="p124-3a-retry" class="mt-5 hidden">
                            <button onclick="window.retryPractice124_3a()">LÀM LẠI</button>
                        </div>
                        <div id="p124-3a-solution" class="mt-6 bg-emerald-50 border border-emerald-200 rounded-3xl p-4 space-y-2 hidden">
                            <p class="text-lg md:text-xl font-black text-emerald-700">Đáp án đúng: B. 10 hình</p>
                            <p class="text-lg md:text-xl font-black text-emerald-700">Số hình lập phương nhỏ trong hình của Mai: 3 &times; 3 &times; 2 = 18 (hình)</p>
                            <p class="text-lg md:text-xl font-black text-emerald-700">Số hình lập phương nhỏ trong hình của Robot: 2 &times; 2 &times; 2 = 8 (hình)</p>
                            <p class="text-lg md:text-xl font-black text-emerald-700">Số hình lập phương nhỏ Mai cần bỏ: 18 - 8 = 10 (hình)</p>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-4 md:p-6 flex items-center justify-center">
                        <img src="assets/images/toan/toan_tap_2/124-b3-mairobot.webp" alt="Hình của Mai và Rô-bốt" class="w-full h-auto rounded-3xl">
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 19C: Bài tập 3b (Đáp án)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-6 bg-indigo-50 relative overflow-y-auto">
            <div class="z-10 flex flex-col h-full max-w-6xl mx-auto w-full text-left">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg transform -rotate-3">
                        <span class="text-xl font-black">3b</span>
                    </div>
                    <h2 class="text-xl md:text-2xl font-black text-indigo-900">Đáp án câu b</h2>
                    <div class="h-1 flex-grow bg-indigo-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col lg:flex-row items-stretch justify-center gap-6 pb-20 md:pb-24">
                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-6 md:p-8 flex flex-col justify-center">
                        <p class="text-xl md:text-2xl font-black text-indigo-800 leading-tight mb-6">
                            Nếu mỗi hình lập phương nhỏ có cạnh <span class="text-indigo-900">2 cm</span> thì thể tích hình của Rô-bốt là bao nhiêu cm&sup3;?
                        </p>
                        <div id="p124-3b-choices" class="grid grid-cols-2 gap-4">
                            <button onclick="window.checkPractice124_3b('A')" id="p124-3b-A" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">A. 96 cm&sup3;</button>
                            <button onclick="window.checkPractice124_3b('B')" id="p124-3b-B" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">B. 72 cm&sup3;</button>
                            <button onclick="window.checkPractice124_3b('C')" id="p124-3b-C" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">C. 64 cm&sup3;</button>
                            <button onclick="window.checkPractice124_3b('D')" id="p124-3b-D" data-default-class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all" class="p-5 rounded-3xl border-2 border-indigo-100 bg-white text-indigo-900 font-black text-lg md:text-2xl text-left hover:bg-indigo-50 transition-all">D. 32 cm&sup3;</button>
                        </div>
                        <div id="p124-3b-solution" class="bg-indigo-50 border border-indigo-200 rounded-3xl p-4 space-y-2 hidden">
                            <p class="text-lg md:text-xl font-black text-indigo-700">Rô-bốt gồm 8 hình lập phương nhỏ.</p>
                            <p class="text-lg md:text-xl font-black text-indigo-700">Thể tích 1 hình nhỏ: 2 &times; 2 &times; 2 = 8 cm&sup3;.</p>
                            <p class="text-lg md:text-xl font-black text-indigo-700">V = 8 &times; 8 = 64 cm&sup3;.</p>
                        </div>
                        <div id="p124-3b-feedback" class="mt-5 p-4 rounded-3xl font-black text-lg md:text-xl hidden"></div>
                        <div id="p124-3b-retry" class="mt-5 hidden">
                            <button onclick="window.retryPractice124_3b()">LÀM LẠI</button>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 bg-white rounded-[40px] shadow-xl border border-indigo-100 p-4 md:p-6 flex items-center justify-center">
                        <img src="assets/images/toan/toan_tap_2/124-b3-mairobot.webp" alt="Hình của Mai và Rô-bốt" class="w-full h-auto rounded-3xl">
                    </div>
                </div>
            </div>
        </div>
    `,

    // Trang 20: Tiêu đề CỦNG CỐ (Trang 21)
    `
        <div class="h-full flex flex-col justify-center items-center w-full bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-900 overflow-hidden relative">
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div class="relative z-10 text-center scale-110">
                <div class="mb-8 animate-bounce">
                    <div class="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                        <svg class="w-14 h-14 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                </div>
                <h1 class="text-8xl md:text-9xl font-black text-white tracking-widest drop-shadow-[0_10px_30px_rgba(52,211,153,0.5)]">CỦNG CỐ</h1>
                <p class="mt-8 text-emerald-200 text-2xl font-bold uppercase tracking-[0.5em] opacity-80 italic">Kiểm tra lại kiến thức nào!</p>
            </div>
        </div>
    `,
    // Trang 21: Câu 1 Củng cố (Trang 22)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-8 bg-emerald-50 relative overflow-hidden">
            <div class="z-10 flex flex-col h-full max-w-5xl mx-auto w-full">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">1</div>
                    <div class="h-1 flex-grow bg-emerald-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col justify-center gap-8">
                    <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border-b-8 border-emerald-100">
                        <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-10 text-center">
                            1. Công thức tính thể tích hình lập phương có cạnh <span class="text-emerald-600">a</span> là:
                        </h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button onclick="window.checkCC124(1, 'A')" id="cc124-1-A" class="group p-6 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">A</span>
                                <span class="text-2xl font-bold text-slate-600 group-hover:text-white">V = a &times; a</span>
                            </button>
                            <button onclick="window.checkCC124(1, 'B')" id="cc124-1-B" class="group p-6 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">B</span>
                                <span class="text-2xl font-bold text-slate-600 group-hover:text-white">V = a &times; a &times; 4</span>
                            </button>
                            <button onclick="window.checkCC124(1, 'C')" id="cc124-1-C" class="group p-6 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">C</span>
                                <span class="text-2xl font-bold text-slate-600 group-hover:text-white">V = a &times; a &times; a</span>
                            </button>
                            <button onclick="window.checkCC124(1, 'D')" id="cc124-1-D" class="group p-6 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">D</span>
                                <span class="text-2xl font-bold text-slate-600 group-hover:text-white">V = a &times; a &times; 6</span>
                            </button>
                        </div>
                        <div id="cc-retry-124-1" class="mt-8 flex justify-center hidden">
                            <button onclick="window.retryCC124(1)" class="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                                LÀM LẠI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 22: Câu 2 Củng cố (Trang 23)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-8 bg-emerald-50 relative overflow-hidden">
            <div class="z-10 flex flex-col h-full max-w-5xl mx-auto w-full">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">2</div>
                    <div class="h-1 flex-grow bg-emerald-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col justify-center gap-8">
                    <div class="bg-white p-7 md:p-10 rounded-[40px] shadow-xl border-b-8 border-emerald-100">
                        <h3 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-8 text-center">
                            2. Diện tích một mặt của hình lập phương là <span class="italic text-slate-500">S = a&times;a</span>.<br>Công thức tính thể tích có thể viết lại là:
                        </h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <button onclick="window.checkCC124(2, 'A')" id="cc124-2-A" class="group p-5 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">A</span>
                                <span class="text-xl md:text-2xl font-bold text-slate-600 group-hover:text-white">V = S &times; 6</span>
                            </button>
                            <button onclick="window.checkCC124(2, 'B')" id="cc124-2-B" class="group p-5 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">B</span>
                                <span class="text-xl md:text-2xl font-bold text-slate-600 group-hover:text-white">V = S &times; a</span>
                            </button>
                            <button onclick="window.checkCC124(2, 'C')" id="cc124-2-C" class="group p-5 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">C</span>
                                <span class="text-xl md:text-2xl font-bold text-slate-600 group-hover:text-white">V = S &times; 4</span>
                            </button>
                            <button onclick="window.checkCC124(2, 'D')" id="cc124-2-D" class="group p-5 bg-slate-50 hover:bg-emerald-600 border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all duration-300 text-left">
                                <span class="inline-block w-10 h-10 bg-white group-hover:bg-emerald-400 rounded-full text-center leading-10 font-bold text-slate-400 group-hover:text-white mr-4 shadow-sm">D</span>
                                <span class="text-xl md:text-2xl font-bold text-slate-600 group-hover:text-white">V = S &times; S</span>
                            </button>
                        </div>
                        <div id="cc-retry-124-2" class="mt-8 flex justify-center hidden">
                            <button onclick="window.retryCC124(2)" class="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                                LÀM LẠI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 23: Câu 3 Củng cố (Trang 24)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-8 bg-emerald-50 relative overflow-hidden">
            <div class="z-10 flex flex-col h-full max-w-5xl mx-auto w-full">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">3</div>
                    <div class="h-1 flex-grow bg-emerald-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col justify-center gap-8">
                    <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border-b-8 border-emerald-100">
                        <div class="flex flex-col md:flex-row items-center gap-10">
                            <div class="flex-1 text-center md:text-left">
                                <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-6">
                                    3. Một hình lập phương có cạnh <span class="text-emerald-600">3 cm</span>.<br>Thể tích của nó là:
                                </h3>
                            </div>
                            <div class="w-48 h-48 bg-emerald-100 rounded-[32px] flex items-center justify-center animate-pulse">
                                <!-- Cube Icon placeholder -->
                                <svg class="w-24 h-24 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            <button onclick="window.checkCC124(3, 'A')" id="cc124-3-A" class="p-6 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-2xl font-black text-2xl transition-all border-2 border-slate-100 shadow-sm uppercase">9 cm&sup3;</button>
                            <button onclick="window.checkCC124(3, 'B')" id="cc124-3-B" class="p-6 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-2xl font-black text-2xl transition-all border-2 border-slate-100 shadow-sm uppercase">12 cm&sup3;</button>
                            <button onclick="window.checkCC124(3, 'C')" id="cc124-3-C" class="p-6 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-2xl font-black text-2xl transition-all border-2 border-slate-100 shadow-sm uppercase">27 cm&sup3;</button>
                            <button onclick="window.checkCC124(3, 'D')" id="cc124-3-D" class="p-6 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-2xl font-black text-2xl transition-all border-2 border-slate-100 shadow-sm uppercase">54 cm&sup3;</button>
                        </div>
                        <div id="cc-retry-124-3" class="mt-10 flex justify-center hidden">
                            <button onclick="window.retryCC124(3)" class="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                                LÀM LẠI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 24: Câu 4 Củng cố (Trang 25)
    `
        <div class="h-full flex flex-col w-full p-4 md:p-8 bg-emerald-50 relative overflow-hidden">
            <div class="z-10 flex flex-col h-full max-w-5xl mx-auto w-full">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">4</div>
                    <div class="h-1 flex-grow bg-emerald-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col justify-center gap-8">
                    <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border-b-8 border-emerald-100">
                        <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-10 text-center">
                            4. Một hình lập phương có cạnh <span class="text-emerald-600">4 dm</span>.<br>Thể tích của nó là bao nhiêu?
                        </h3>
                        
                            <div class="flex flex-wrap justify-center gap-6">
                                <button onclick="window.checkCC124(4, 'A')" id="cc124-4-A" class="group relative px-10 py-6 bg-white border-4 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all">
                                    <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">64 dm&sup3;</span>
                                </button>
                                <button onclick="window.checkCC124(4, 'B')" id="cc124-4-B" class="group relative px-10 py-6 bg-white border-4 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all">
                                    <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">16 dm&sup3;</span>
                                </button>
                                <button onclick="window.checkCC124(4, 'C')" id="cc124-4-C" class="group relative px-10 py-6 bg-white border-4 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all">
                                    <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">96 dm&sup3;</span>
                                </button>
                                <button onclick="window.checkCC124(4, 'D')" id="cc124-4-D" class="group relative px-10 py-6 bg-white border-4 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all">
                                    <span class="text-3xl font-black text-slate-400 group-hover:text-emerald-600">12 dm&sup3;</span>
                                </button>
                            </div>
                            <div id="cc-retry-124-4" class="mt-8 flex justify-center hidden">
                                <button onclick="window.retryCC124(4)" class="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                                    LÀM LẠI
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 25: Câu 5 Củng cố (Trang 26)
    `
        <div class="h-full flex flex-col w-full p-3 md:p-6 bg-emerald-50 relative overflow-y-auto">
            <div class="z-10 flex flex-col h-full max-w-5xl mx-auto w-full">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">5</div>
                    <div class="h-1 flex-grow bg-emerald-200 rounded-full"></div>
                </div>

                <div class="flex-grow flex flex-col justify-start gap-6 pb-20 md:pb-24">
                    <div class="bg-white p-5 md:p-7 rounded-[36px] shadow-xl border-b-8 border-emerald-100 text-center">
                        <div class="mb-5">
                            <div class="inline-block px-5 py-1.5 bg-amber-100 text-amber-700 rounded-full font-black text-xs uppercase tracking-widest mb-3">Vận dụng</div>
                            <h3 class="text-lg md:text-xl font-black text-slate-800 leading-tight">
                                5. Một khối rubik hình lập phương có cạnh <span class="text-emerald-600">5 cm</span>.<br>Mỗi hình khối lập phương nhỏ có thể tích là 1cm&sup3;.<br>Cần bao nhiêu khối lập phương nhỏ để xếp thành khối rubik này?
                            </h3>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onclick="window.checkCC124(5, 'A')" id="cc124-5-A" class="group p-5 bg-slate-50 hover:bg-emerald-600 rounded-[24px] border-2 border-slate-100 transition-all text-center">
                                <p class="text-2xl md:text-3xl font-black text-slate-700 group-hover:text-white mb-1">25</p>
                                <p class="text-sm md:text-base text-slate-400 group-hover:text-emerald-200 font-bold">khối</p>
                            </button>
                            <button onclick="window.checkCC124(5, 'B')" id="cc124-5-B" class="group p-5 bg-slate-50 hover:bg-emerald-600 rounded-[24px] border-2 border-slate-100 transition-all text-center">
                                <p class="text-2xl md:text-3xl font-black text-slate-700 group-hover:text-white mb-1">125</p>
                                <p class="text-sm md:text-base text-slate-400 group-hover:text-emerald-200 font-bold">khối</p>
                            </button>
                            <button onclick="window.checkCC124(5, 'C')" id="cc124-5-C" class="group p-5 bg-slate-50 hover:bg-emerald-600 rounded-[24px] border-2 border-slate-100 transition-all text-center">
                                <p class="text-2xl md:text-3xl font-black text-slate-700 group-hover:text-white mb-1">150</p>
                                <p class="text-sm md:text-base text-slate-400 group-hover:text-emerald-200 font-bold">khối</p>
                            </button>
                            <button onclick="window.checkCC124(5, 'D')" id="cc124-5-D" class="group p-5 bg-slate-50 hover:bg-emerald-600 rounded-[24px] border-2 border-slate-100 transition-all text-center">
                                <p class="text-2xl md:text-3xl font-black text-slate-700 group-hover:text-white mb-1">100</p>
                                <p class="text-sm md:text-base text-slate-400 group-hover:text-emerald-200 font-bold">khối</p>
                            </button>
                        </div>
                        <div id="cc-retry-124-5" class="mt-8 flex justify-center hidden">
                            <button onclick="window.retryCC124(5)" class="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                                LÀM LẠI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // Trang 26: GHI NHỚ (Tổng kết công thức)
    `
        <div class="presentation-slide-content h-full w-full flex flex-col items-center justify-center rounded-[40px] shadow-2xl overflow-hidden relative bg-cover bg-center" style="background-image: url('assets/images/toan/toan_tap_2/124-khoidong2.webp');">
            <div class="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[56px] border-8 border-indigo-100 shadow-2xl text-center max-w-4xl animate-pop-in">
                <p class="text-xl md:text-2xl font-black text-indigo-600 uppercase tracking-widest mb-5">Ghi nhớ</p>
                <h3 class="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">THỂ TÍCH HÌNH LẬP PHƯƠNG</h3>
                <div class="bg-indigo-600 text-white p-6 md:p-10 rounded-[36px] shadow-inner mb-6 border-4 border-white/20">
                    <p class="text-5xl md:text-7xl font-black tracking-tighter italic">V = a &times; a &times; a</p>
                </div>
                <p class="text-xl md:text-3xl font-bold text-slate-600 italic">
                    (Trong đó <span class="text-indigo-600 font-black">a</span> là độ dài cạnh)
                </p>
            </div>
        </div>
    `,
    // Trang 27: KẾT THÚC
    `
        <div class="presentation-slide-content h-full w-full flex items-center justify-center rounded-[40px] shadow-2xl overflow-hidden relative animate-fade-in bg-white">
            <div class="relative w-[92%] h-[92%] bg-center bg-no-repeat" style="background-image: url('assets/images/toan/toan_tap_2/124-ketthuc.webp'); background-size: 92% 92%;">
                <img src="assets/images/toan/toan_tap_2/124-hoamai1.webp" alt="Hoa mai 1" class="absolute top-6 left-6 md:top-8 md:left-8 w-28 md:w-40 lg:w-48 h-auto floating-cube drop-shadow-2xl pointer-events-none select-none" style="animation-duration: 4.6s;">
                <img src="assets/images/toan/toan_tap_2/124-hoamai2.webp" alt="Hoa mai 2" class="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-28 md:w-40 lg:w-48 h-auto floating-cube drop-shadow-2xl pointer-events-none select-none" style="animation-duration: 5.2s; animation-delay: 0.8s;">
            </div>
        </div>
    `
];

