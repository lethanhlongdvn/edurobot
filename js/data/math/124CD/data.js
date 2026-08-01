// === 124CD/data.js ===
// Dữ liệu bài học: nội dung, bài tập, ngân hàng câu hỏi

export const lesson124CDContent = `
        <div class="space-y-6 text-purple-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-[40px] text-white shadow-2xl flex items-center gap-8 relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl shadow-lg">🎯</div>
                <div>
                    <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg md:text-2xl opacity-95 space-y-1">
                        <li>Biết quy tắc và công thức tính thể tích hình lập phương.</li>
                        <li>Dựa trên thể tích hình hộp chữ nhật để tính thể tích hình lập phương.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá -->
            <div class="bg-white p-8 rounded-[40px] border border-purple-100 shadow-2xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="bg-amber-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">?</span>
                            <h4 class="text-3xl md:text-4xl font-black text-amber-700 uppercase">Khám phá công thức</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700 italic border-l-8 border-amber-400 pl-4 bg-amber-50 py-4 rounded-r-2xl">
                            "Hình lập phương đó chứa được 3 × 3 × 3 = 27 (hình lập phương nhỏ)."
                        </p>
                        <div class="bg-purple-50 p-6 rounded-3xl border-2 border-purple-100">
                            <p class="text-xl md:text-2xl font-black text-purple-900 space-y-2">
                                <span class="block">📏 Chiều dài: 3 cm</span>
                                <span class="block">📏 Chiều rộng: 3 cm</span>
                                <span class="block">📏 Chiều cao: 3 cm</span>
                                <span class="block mt-4 text-2xl text-purple-600">3 &times; 3 &times; 3 = 27 (cm³)</span>
                            </p>
                        </div>
                    </div>
                    
                    <!-- Phần bên phải ảnh khám phá có nút 3D -->
                    <div class="relative flex justify-center lg:justify-end">
                        <div class="relative group cursor-pointer inline-block">
                            <!-- Image with openZoom -->
                            <img src="assets/images/toan/toan_tap_2/124-khampha.webp" alt="Khám phá" class="w-full max-w-[600px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform">
                            
                            <!-- Overlay Action Buttons -->
                            <div class="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onclick="window.openKhamPhaModal124CD(); event.stopPropagation();" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-black shadow-2xl flex items-center justify-center transform active:scale-95 transition-all outline-none text-lg" title="Mô phỏng 3D">
                                    3D
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
                <div id="modal-124CD-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md p-4" onclick="window.closeKhamPhaModal124CD()">
                    <div class="bg-purple-50 w-[96%] max-w-5xl h-[94vh] max-h-[1000px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                        <!-- Header -->
                        <div class="bg-purple-600 bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                                <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                            </h3>
                            <button onclick="window.closeKhamPhaModal124CD()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <!-- Body -->
                        <div class="flex-grow flex flex-col p-4 md:p-6 gap-4 relative">
                            <!-- Left: 3D Simulator -->
                            <div class="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-purple-950 p-2 md:p-6 rounded-[32px] shadow-2xl border-4 border-purple-200 relative">
                                <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                                <!-- 3D SCENE -->
                                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-124CD">
                                    <div id="cube-wrapper-124CD" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing scale-90 md:scale-100" style="width: 240px; height: 240px; transform: rotateX(-20deg) rotateY(-30deg);">
                                        <!-- Container for mini blocks -->
                                        <div id="cube-layers-124CD" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                                        <!-- The Container Box (3x3x3 blocks of 80px) -->
                                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                            <!-- Outside Faces - centered relative to 240x240 container -> center is at (120, 120) -->
                                            <!-- Back -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124CD" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(180deg) translateZ(120px);"></div>
                                            <!-- Left -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124CD" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(-90deg) translateZ(120px);"></div>
                                            <!-- Bottom -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124CD" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(-90deg) translateZ(120px);"></div>
                                            <!-- Top (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-124CD" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(90deg) translateZ(120px);"></div>
                                            <!-- Right (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124CD flex items-end justify-center pb-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(90deg) translateZ(120px);">
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">Rộng: 3 cm</div>
                                            </div>
                                            <!-- Front (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124CD flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: translateZ(120px);">
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[120px] absolute text-sm">Dài: 3 cm</div>
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[150px] absolute text-sm">Cao: 3 cm</div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer Controls -->
                            <div class="flex flex-wrap items-center justify-center gap-4 z-10 w-full mb-2 shrink-0">
                                <button onclick="window.fillKhamPha124CD()" id="btn-fill-124CD" class="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all flex items-center gap-3">
                                    🧊 Bấm lần 1: Xếp 1 hình
                                </button>
                                <button onclick="window.resetKhamPha124CD()" class="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all">
                                    ↺ Đặt lại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    /* Grid lines for box faces */
                    .grid-bg-124CD {
                        background-size: 80px 80px;
                        background-image: 
                            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px);
                    }
                    .transform-style-3d {
                        transform-style: preserve-3d;
                    }
                    
                    /* Mini Blocks */
                    .minicube-124CD {
                        position: absolute;
                        width: 80px; height: 80px;
                        margin-left: -40px; margin-top: -40px;
                        transform-style: preserve-3d;
                    }
                    .minicube-124CD .face {
                        position: absolute; width: 80px; height: 80px;
                        border: 1px solid rgba(251, 191, 36, 0.9);
                        background: rgba(253, 230, 138, 0.95); /* amber-200 */
                        box-shadow: inset 0 0 16px rgba(251, 191, 36, 0.5);
                    }
                    .minicube-124CD .face.top { transform: translateY(-40px) rotateX(90deg); background: #fef3c7; }
                    .minicube-124CD .face.bottom { transform: translateY(40px) rotateX(-90deg); background: #f59e0b; }
                    .minicube-124CD .face.front { transform: translateZ(40px); }
                    .minicube-124CD .face.back { transform: translateZ(-40px) rotateY(180deg); background: #d97706; }
                    .minicube-124CD .face.right { transform: translateX(40px) rotateY(90deg); background: #fcd34d; }
                    .minicube-124CD .face.left { transform: translateX(-40px) rotateY(-90deg); background: #fbbf24; }

                    .animate-title {
                        animation: titleFloat 3s ease-in-out infinite;
                    }
                    @keyframes titleFloat {
                        0%, 100% { transform: translateY(0) rotate(-1deg); }
                        50% { transform: translateY(-20px) rotate(1deg); }
                    }
                    .floating-cube {
                        animation: cubeFloat 6s ease-in-out infinite;
                    }
                    @keyframes cubeFloat {
                        0%, 100% { transform: translateY(0) rotate(0); }
                        50% { transform: translateY(-30px) rotate(15deg); }
                    }
                    .bg-presentation-124CD {
                        background: radial-gradient(circle at top right, #fdfcfb 0%, #e2d1c3 100%);
                    }
                    .character-square {
                        width: 150px;
                        height: 150px;
                        border: 4px solid white;
                        border-radius: 30px;
                        overflow: hidden;
                        background: white;
                        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                        animation: gentleBounce 4s ease-in-out infinite;
                    }
                    @keyframes gentleBounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                </style>

            <!-- Công thức Ghi nhớ -->
            <div class="bg-gradient-to-r from-pink-500 to-rose-600 p-8 md:p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                <div class="flex flex-col lg:flex-row items-center gap-10">
                   <div class="w-full lg:w-1/2 flex justify-center">
                       <img src="assets/images/toan/toan_tap_2/124-formula.webp" alt="Công thức" class="w-full h-auto rounded-3xl border-4 border-pink-400/50 shadow-2xl group-hover:rotate-1 transition-transform">
                   </div>
                   <div class="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                        <p class="text-sm font-black uppercase tracking-[0.3em] opacity-80 bg-white/20 inline-block px-4 py-1 rounded-full">Ghi nhớ quan trọng</p>
                        <p class="text-2xl md:text-4xl font-bold opacity-90">Thể tích V của hình lập phương có cạnh <span class="text-yellow-300">a</span> được tính theo công thức:</p>
                        <p class="text-2xl md:text-5xl font-black drop-shadow-lg tracking-tight whitespace-nowrap">V = a &times; a &times; a</p>
                   </div>
                </div>
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    `;

export const lesson124CDPractice = `
        <div class="space-y-6 animate-fade-in pb-4"> <!-- Khung bao ngoài cùng, tạo khoảng cách dọc và hiệu ứng hiện dần -->
            <!-- Bài tập 1: Bảng tính -->
            <div class="bg-white p-2 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124CD-1"> <!-- Thẻ bao quanh Bài tập 1 với bo góc và bóng đổ -->
                <div class="p-4 md:p-6 bg-teal-50 dark:bg-slate-900 rounded-[40px]"> <!-- Nền phía trong của Bài tập 1 -->
                    <div class="flex items-start gap-3 mb-6"> <!-- Hàng tiêu đề gồm số thứ tự và nội dung câu hỏi -->
                        <div class="w-10 h-10 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-lg font-black shrink-0">1</div> <!-- Ô số 1 màu xanh -->
                        <h3 class="text-xl md:text-2xl font-bold text-teal-800 dark:text-teal-100 leading-tight">Hoàn thành bảng tính thể tích cho các hình lập phương dưới đây:</h3> <!-- Nội dung tiêu đề Bài 1 -->
                    </div>
                    <div class="overflow-x-auto"> <!-- Cho phép cuộn ngang nếu bảng quá rộng trên điện thoại -->
                        <table class="w-full border-separate border-spacing-2"> <!-- Bảng dữ liệu với khoảng cách giữa các ô -->
                            <thead>
                                <tr class="text-base md:text-xl font-black text-teal-900 uppercase"> <!-- Dòng đầu đề của bảng -->
                                    <th class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-sm text-left">Đại lượng</th> <!-- Cột tiêu đề: Đại lượng -->
                                    <th class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (1)</th> <!-- Cột: Hình 1 -->
                                    <th class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (2)</th> <!-- Cột: Hình 2 -->
                                    <th class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (3)</th> <!-- Cột: Hình 3 -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center"> <!-- Dòng dữ liệu về Cạnh -->
                                    <td class="p-4 bg-teal-100 dark:bg-teal-900/40 rounded-3xl font-black text-lg md:text-xl text-teal-900">Cạnh (a)</td> <!-- Tên hàng: Cạnh (a) -->
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl font-black text-xl md:text-2xl text-rose-500">10 cm</td> <!-- Giá trị cạnh Hình 1 -->
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl font-black text-xl md:text-2xl text-rose-500">2,5 dm</td> <!-- Giá trị cạnh Hình 2 -->
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl font-black text-xl md:text-2xl text-rose-500">0,4 m</td> <!-- Giá trị cạnh Hình 3 -->
                                </tr>
                                <tr class="text-center"> <!-- Dòng dữ liệu về Thể tích để học sinh điền -->
                                    <td class="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl font-bold text-lg md:text-xl text-emerald-900 uppercase">Thể tích (V)</td> <!-- Tên hàng: Thể tích (V) -->
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-2 border-teal-200"> <!-- Ô nhập Hình 1 -->
                                        <input type="number" id="ans-124CD-1a" class="w-full text-2xl md:text-3xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?"> <!-- Ô nhập số trả lời -->
                                    </td>
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-2 border-teal-200"> <!-- Ô nhập Hình 2 -->
                                        <input type="number" step="0.001" id="ans-124CD-1b" class="w-full text-2xl md:text-3xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?"> <!-- Ô nhập số, hỗ trợ số thập phân -->
                                    </td>
                                    <td class="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-2 border-teal-200"> <!-- Ô nhập Hình 3 -->
                                        <input type="number" step="0.001" id="ans-124CD-1c" class="w-full text-2xl md:text-3xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?"> <!-- Ô nhập số, hỗ trợ số thập phân -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex flex-col items-center gap-4">
                        <button id="btn-submit-124CD-1" onclick="window.submitEx124CD_1()" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI 1 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="feedback-124CD-1" class="edu-feedback text-xl font-bold transition-all duration-300 min-h-[1.5rem]"></div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2: Bánh bông lan -->
            <div class="bg-white p-2 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-teal-900 overflow-hidden" id="ex-124CD-2"> <!-- Khung bao Bài 2 -->
                <div class="p-4 md:p-7 bg-teal-50 dark:bg-slate-900 rounded-[40px]"> <!-- Nền trong Bài 2 -->
                    
                    <!-- Đề bài -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8"> <!-- Chia 2 cột -->
                        <!-- Đề bài bên trái -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[32px] border border-teal-100 shadow-sm"> <!-- Cột chữ -->
                            <div class="flex items-start gap-4 mb-4"> <!-- Hàng chứa số thứ tự và câu dẫn -->
                                <div class="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-black shrink-0 shadow-md">2</div> <!-- Icon số 2 màu xanh -->
                                <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed"> <!-- Nội dung câu mở đầu -->
                                    Một chiếc bánh bông lan hình hộp chữ nhật có đáy là hình vuông cạnh 12 cm, chiều cao 6 cm.
                                </p>
                            </div>
                            <div class="ml-14 space-y-4"> <!-- Các câu hỏi nhỏ a và b -->
                                <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed"> <!-- Câu a -->
                                    <span class="text-teal-600 font-black">a)</span> Tính thể tích của chiếc bánh đó.
                                </p>
                                <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed"> <!-- Câu b -->
                                    <span class="text-teal-600 font-black">b)</span> Rô-bốt đã cắt một miếng bánh hình lập phương cạnh 6 cm của chiếc bánh đó để mời Mi. Tính thể tích phần bánh còn lại.
                                </p>
                            </div>
                        </div>

                        <!-- Hình minh họa bên phải -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-teal-100 shadow-md flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow relative group" onclick="if(window.Lesson && window.Lesson.openZoom) window.Lesson.openZoom('assets/images/toan/toan_tap_2/124-b2-cake.webp', 'Bánh bông lan')"> <!-- Cột ảnh -->
                            <img src="assets/images/toan/toan_tap_2/124-b2-cake.webp" alt="Bánh bông lan" class="w-full h-auto rounded-2xl hover:scale-[1.02] transition-transform duration-300"> <!-- Ảnh bánh minh họa -->
                            <!-- Overlay nút phóng to -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-[32px]">
                                <div class="bg-white/90 text-teal-600 p-3 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Khu vực bài làm -->
                    <div class="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-[32px] border-2 border-teal-100 shadow-sm"> <!-- Card dành cho phần làm bài -->
                        <p class="text-lg md:text-xl font-black text-teal-600 uppercase tracking-widest mb-3">📝 Bài làm</p> <!-- Tiêu đề phần làm bài -->
                        <p class="text-xl md:text-2xl font-bold text-gray-700 dark:text-slate-200 leading-relaxed mb-3 hidden" id="wp-problem-text-124CD-2">Một chiếc bánh bông lan hình hộp chữ nhật có đáy là hình vuông cạnh 12 cm, chiều cao 6 cm. a) Tính thể tích của chiếc bánh đó. b) Rô-bốt đã cắt một miếng bánh hình lập phương cạnh 6 cm của chiếc bánh đó để mời Mi. Tính thể tích phần bánh còn lại.</p> <!-- Đề bài ẩn dành cho AI đọc -->
                        <div class="relative"> <!-- Chứa ô nhập và nút micro -->
                            <textarea id="wp-full-124CD-2" rows="5" class="w-full p-4 pr-12 rounded-2xl border-2 border-teal-50 bg-teal-50/20 dark:bg-slate-900 outline-none focus:border-teal-500 text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-y shadow-inner leading-relaxed" placeholder="Bài giải:"></textarea> <!-- Ô soạn thảo lời giải -->
                            <button id="btn-mic-124CD-2" onclick="Lesson.toggleSpeechRec('wp-full-124CD-2')" class="absolute right-4 top-4 text-teal-400 hover:text-teal-600 p-2" title="Giọng nói"> <!-- Nút micro đọc lời giải -->
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            </button>
                            <div id="mic-status-124CD-2" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div> <!-- Trạng thái đang nghe từ micro -->
                        </div>
                        <div class="mt-6 flex flex-col items-center gap-4">
                            <div class="flex justify-center items-center gap-4">
                                <button onclick="window.submitWordProblemAILocal('124CD-2')" class="w-14 h-14 bg-teal-100 text-teal-600 hover:bg-teal-200 rounded-2xl font-black text-2xl transition-all active:scale-95 flex items-center justify-center border-2 border-teal-200" title="Thầy E chấm bài">E</button>
                                <button id="btn-submit-124CD-2" onclick="window.submitEx124CD_2()" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                                    NỘP BÀI 2 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </div>
                            <div id="fb-124CD-2" class="text-xl font-bold transition-all duration-300 min-h-[1.5rem]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Chọn câu trả lời đúng -->
            <div class="bg-white p-2 rounded-[48px] shadow-xl border border-rose-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124CD-3"> <!-- Khung Bài 3 màu hồng -->
                <div class="p-4 md:p-6 bg-rose-50 dark:bg-slate-900 rounded-[40px]"> <!-- Nền phía trong -->
                    <div class="flex items-start gap-3 mb-4"> <!-- Tiêu đề bài 3 -->
                        <div class="w-10 h-10 bg-rose-600 text-white rounded-2xl flex items-center justify-center text-lg font-black shrink-0">3</div> <!-- Ô số 3 -->
                        <h3 class="text-xl md:text-2xl font-black text-rose-900 dark:text-rose-100 leading-tight">Chọn câu trả lời đúng.</h3> <!-- Nội dung tiêu đề -->
                    </div>

                    <!-- Đề bài bên trái + Hình bên phải -->
                    <div class="flex flex-col lg:flex-row gap-4 items-stretch mb-6"> <!-- Chia 2 cột nội dung -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-4 rounded-[32px] border border-rose-100 shadow-sm flex items-center"> <!-- Văn bản câu hỏi -->
                            <p class="text-xl md:text-2xl font-black text-rose-900 dark:text-rose-100 leading-relaxed">
                                Mai và Rô-bốt xếp được hai hình từ các hình lập phương nhỏ như hình sau.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 p-4 bg-white dark:bg-slate-800 rounded-[32px] border border-rose-100 shadow-md flex items-center justify-center"> <!-- Ảnh so sánh 2 hình -->
                            <img src="assets/images/toan/toan_tap_2/124-b3-mairobot.webp" alt="Hình của Mai và Rô-bốt" class="w-full max-w-[400px] h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Câu a -->
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border border-rose-100 mb-4"> <!-- Card cho câu hỏi nhỏ a -->
                        <p class="text-xl md:text-2xl font-black text-rose-600 mb-4"><span class="text-rose-800">a)</span> Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?</p> <!-- Câu hỏi trắc nghiệm a -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3"> <!-- Lưới 4 đáp án -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3a', 'A')" id="btn-124CD-3a-A" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">A. 12 hình</button> <!-- Đáp án A -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3a', 'B')" id="btn-124CD-3a-B" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">B. 10 hình</button> <!-- Đáp án B -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3a', 'C')" id="btn-124CD-3a-C" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">C. 8 hình</button> <!-- Đáp án C -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3a', 'D')" id="btn-124CD-3a-D" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">D. 6 hình</button> <!-- Đáp án D -->
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border border-rose-100 mb-4"> <!-- Card cho câu hỏi nhỏ b -->
                        <p class="text-xl md:text-2xl font-black text-rose-600 mb-4"><span class="text-rose-800">b)</span> Nếu mỗi hình lập phương nhỏ có cạnh <b class="text-rose-800">2 cm</b> thì thể tích hình của Rô-bốt là bao nhiêu xăng-ti-mét khối?</p> <!-- Câu hỏi trắc nghiệm b -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3"> <!-- Lưới 4 đáp án -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3b', 'A')" id="btn-124CD-3b-A" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">A. 96 cm³</button> <!-- Đáp án A -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3b', 'B')" id="btn-124CD-3b-B" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">B. 72 cm³</button> <!-- Đáp án B -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3b', 'C')" id="btn-124CD-3b-C" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">C. 64 cm³</button> <!-- Đáp án C -->
                            <button onclick="window.lesson124CDSelectMCQ('124CD-3b', 'D')" id="btn-124CD-3b-D" class="mcq-btn p-3 bg-rose-50 border-2 border-rose-100 rounded-xl font-black text-xl text-blue-600 hover:border-rose-400 transition-all">D. 32 cm³</button> <!-- Đáp án D -->
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col items-center gap-4">
                        <button id="btn-submit-124CD-3" onclick="window.submitEx124CD_3()" class="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            NỘP BÀI 3 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="feedback-124CD-3" class="edu-feedback text-xl font-bold transition-all duration-300 min-h-[1.5rem]"></div>
                    </div>
                </div>
            </div>


            <!-- Phần Củng cố Premium -->
            <div class="mt-16 p-8 md:p-10 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all duration-1000"></div>
                
                <div class="relative z-10 flex flex-col items-center gap-6 text-center">
                    <div class="space-y-3">
                        <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none drop-shadow-xl">Cùng chinh phục Quiz!</h3>
                        <p class="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed max-w-2xl italic mx-auto">Vượt qua các câu hỏi để nhận ngay huy chương "Bậc thầy hình khối" nhé!</p>
                    </div>
                    <button onclick="document.getElementById('tab-quiz')?.click(); window.scrollTo({top: 0, behavior: 'smooth'});" 
                            class="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-10 py-4 rounded-3xl font-black text-2xl uppercase tracking-tighter shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mt-2 group">
                        BẮT ĐẦU <svg class="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

export const lesson124CDQuizPool = [
    // Level 1 - Cơ bản
    { "question": "Công thức tính thể tích hình lập phương là:", "options": ["V = a × a", "V = a × a × a", "V = a × a × 6", "V = a × 4"], "answer": 1, "level": 1 },
    { "question": "Thể tích hình lập phương có cạnh 3 cm là:", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": 1 },
    { "question": "Thể tích hình lập phương có cạnh 5 cm là:", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": 1 },
    { "question": "Muốn tính thể tích hình lập phương, ta lấy:", "options": ["Cạnh × cạnh", "Cạnh × cạnh × 6", "Cạnh × cạnh × cạnh", "Cạnh × cạnh × 4"], "answer": 2, "level": 1 },
    { "question": "Hình lập phương có cạnh 10 cm. Thể tích là:", "options": ["100 cm³", "600 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 1 },
    // Level 2 - Nâng cao
    { "question": "Hình lập phương có thể tích 64 cm³. Cạnh của nó là:", "options": ["2 cm", "4 cm", "8 cm", "16 cm"], "answer": 1, "level": 2 },
    { "question": "Bánh bông lan hình hộp chữ nhật đáy vuông cạnh 12 cm, cao 6 cm. Thể tích bánh là:", "options": ["72 cm³", "432 cm³", "864 cm³", "1728 cm³"], "answer": 2, "level": 2 },
    { "question": "Cắt miếng bánh hình lập phương cạnh 6 cm từ chiếc bánh 864 cm³. Phần còn lại là:", "options": ["216 cm³", "432 cm³", "648 cm³", "828 cm³"], "answer": 2, "level": 2 },
    { "question": "Hình lập phương cạnh 2 cm có thể tích bao nhiêu?", "options": ["4 cm³", "6 cm³", "8 cm³", "12 cm³"], "answer": 2, "level": 2 },
    { "question": "Xếp 8 hình lập phương nhỏ cạnh 2 cm. Tổng thể tích là:", "options": ["16 cm³", "32 cm³", "48 cm³", "64 cm³"], "answer": 3, "level": 2 },
    { "question": "Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?", "options": ["12 hình", "10 hình", "8 hình", "6 hình"], "answer": 1, "level": 2 },
    { "question": "Nếu mỗi hình lập phương nhỏ cạnh 2 cm thì thể tích hình của Rô-bốt là bao nhiêu?", "options": ["96 cm³", "72 cm³", "64 cm³", "32 cm³"], "answer": 2, "level": 2 },
    // Level 3 - Thử thách
    { "question": "Nếu tăng cạnh hình lập phương lên gấp đôi, thể tích thay đổi thế nào?", "options": ["Gấp 2 lần", "Gấp 4 lần", "Gấp 6 lần", "Gấp 8 lần"], "answer": 3, "level": 3 },
    { "question": "Một khối rubik gồm 27 khối lập phương nhỏ cạnh 1 cm. Cạnh khối rubik là:", "options": ["3 cm", "9 cm", "27 cm", "6 cm"], "answer": 0, "level": 3 },
    { "question": "Hình lập phương cạnh 1 dm đổi sang cm³ là:", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 3 },
    { "question": "Hộp hình lập phương cạnh 8 cm. Xếp được tối đa bao nhiêu khối LP cạnh 2 cm vào hộp?", "options": ["8 khối", "16 khối", "32 khối", "64 khối"], "answer": 3, "level": 3 },
    { "question": "Diện tích toàn phần hình LP cạnh 5 cm là 150 cm². Thể tích của nó là:", "options": ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], "answer": 2, "level": 3 }
];

