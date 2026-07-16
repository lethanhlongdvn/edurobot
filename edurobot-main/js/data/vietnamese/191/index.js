export const lesson191 = {
    "topic": "Tiếng Việt 5",
    "week": "28",
    "period": "191",
    "title": "Luyện tập về đại từ và kết từ",
    "desc": "Luyện tập về đại từ và kết từ",
    "subject": "Tiếng Việt",
    "theme": "Vì cuộc sống thanh bình",
    "content": `
<div class="space-y-12 animate-in fade-in duration-1000 max-w-6xl mx-auto py-10 font-medium">
    <!-- 1. PHẦN GHI NHỚ -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl border-2 border-blue-100/50 bg-gradient-to-b from-white/90 to-blue-50/70">
            <div class="flex items-center space-x-6 mb-10">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-200">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h2 class="text-5xl font-black text-blue-950 uppercase tracking-tighter">Nội dung chính</h2>
            </div>
            
            <div class="grid grid-cols-1 gap-8">
                <!-- Từ đơn và cặp kết từ -->
                <div class="bg-blue-100/30 p-8 rounded-[32px] border-4 border-blue-200 shadow-xl">
                    <h3 class="text-3xl font-black text-blue-800 mb-6 border-b-4 border-blue-400 pb-2 inline-block">Kết từ:</h3>
                    <p class="text-3xl text-blue-950 leading-relaxed font-bold">
                        và, với, hay, hoặc, nhưng, mà, thì, của, ở, vì, để, như...
                    </p>
                </div>

                <div class="bg-emerald-100/30 p-8 rounded-[32px] border-4 border-emerald-200 shadow-xl">
                    <h3 class="text-3xl font-black text-emerald-800 mb-6 border-b-4 border-emerald-400 pb-2 inline-block">Cặp kết từ:</h3>
                    <ul class="space-y-6 text-3xl text-emerald-950 font-bold">
                        <li class="flex items-center space-x-4">
                            <span class="w-4 h-4 bg-emerald-500 rounded-full shadow-md"></span>
                            <span>Vì... nên... (Nguyên nhân)</span>
                        </li>
                        <li class="flex items-center space-x-4">
                            <span class="w-4 h-4 bg-emerald-500 rounded-full shadow-md"></span>
                            <span>Tuy... nhưng... (Tương phản)</span>
                        </li>
                        <li class="flex items-center space-x-4">
                            <span class="w-4 h-4 bg-emerald-500 rounded-full shadow-md"></span>
                            <span>Nếu... thì... (Giả thiết)</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-purple-100/30 p-8 rounded-[32px] border-4 border-purple-200 shadow-xl">
                    <h3 class="text-3xl font-black text-purple-800 mb-6 border-b-4 border-purple-400 pb-2 inline-block">Đại từ:</h3>
                    <p class="text-3xl text-purple-950 leading-relaxed font-bold">
                        Dùng để trỏ người, sự vật, hoạt động, tính chất... hoặc dùng để thay thế nhằm tránh lặp từ (ví dụ: tôi, ta, tớ, cậu, hắn, nó, họ, thế, vậy, ai, gì, nào...).
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
`,
    "practice": `
<div class="space-y-16 animate-in fade-in duration-1000 max-w-6xl mx-auto py-10 font-medium">
    
    <!-- BÀI TẬP 1 -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl bg-white/80 border-2 border-amber-100">
            <h2 class="text-4xl font-black text-gray-950 mb-10 flex items-start gap-6">
                <span class="bg-amber-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl">1</span>
                <span>Tìm đại từ nghi vấn trong các câu đố dưới đây và giải đố.</span>
            </h2>

            <div class="space-y-10">
                <!-- Câu đố a -->
                <div class="bg-amber-50/50 p-8 rounded-[40px] border-4 border-amber-200 shadow-inner flex flex-col items-center">
                    <div class="flex justify-between w-full mb-6 italic">
                        <span class="bg-amber-100 text-amber-700 px-4 py-2 rounded-xl font-black text-xl">Câu đố a</span>
                    </div>
                    <div class="italic text-3xl text-gray-800 leading-relaxed text-center font-bold mb-8">
                        <p>Đố ai trên Bạch Đằng Giang</p>
                        <p>Làm cho cọc nhọn dọc ngang sáng ngời</p>
                        <p>Phá quân Nam Hán tơi bời</p>
                        <p>Gươm thần độc lập giữa trời vang lên?</p>
                    </div>
                    
                    <!-- Input Area -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-10">
                        <div class="relative group">
                            <label class="block text-2xl font-black text-amber-800 mb-2 ml-4">Đại từ:</label>
                            <input id="input-q1a-daitu" type="text" class="w-full p-5 rounded-3xl bg-white border-4 border-amber-200 text-2xl font-bold focus:border-amber-500 outline-none shadow-xl transition-all placeholder:text-gray-300" placeholder="Nhập đại từ...">
                        </div>
                        <div class="relative group">
                            <label class="block text-2xl font-black text-amber-800 mb-2 ml-4">Giải đố:</label>
                            <input id="input-q1a-dap-an" type="text" class="w-full p-5 rounded-3xl bg-white border-4 border-amber-200 text-2xl font-bold focus:border-amber-500 outline-none shadow-xl transition-all placeholder:text-gray-300" placeholder="Nhập đáp án...">
                        </div>
                    </div>

                    <button onclick="window.check_191_q1a()" class="w-24 h-24 bg-amber-500 text-white rounded-3xl font-black text-5xl flex items-center justify-center shadow-[0_10px_40px_rgba(245,158,11,0.4)] hover:scale-110 active:scale-95 transition-all border-b-8 border-amber-700">E</button>
                    <p class="text-amber-600 font-black text-xl uppercase mt-4 tracking-widest">Đánh giá chung</p>
                </div>

                <!-- Câu đố b -->
                <div class="bg-blue-50/50 p-8 rounded-[40px] border-4 border-blue-200 shadow-inner flex flex-col items-center">
                    <div class="flex justify-between w-full mb-6 italic">
                        <span class="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-black text-xl">Câu đố b</span>
                    </div>
                    <div class="italic text-3xl text-gray-800 leading-relaxed text-center font-bold mb-8">
                        <p>Bánh gì vuông vức chữ điền</p>
                        <p>Áo màu lá biếc dây viền dọc ngang</p>
                        <p>Hương xuân vị Tết nồng nàn</p>
                        <p>Ăn rồi nhớ mãi lòng chàng Lang Liêu?</p>
                    </div>

                    <!-- Input Area -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-10">
                        <div class="relative group">
                            <label class="block text-2xl font-black text-blue-800 mb-2 ml-4">Đại từ:</label>
                            <input id="input-q1b-daitu" type="text" class="w-full p-5 rounded-3xl bg-white border-4 border-blue-200 text-2xl font-bold focus:border-blue-500 outline-none shadow-xl transition-all placeholder:text-gray-300" placeholder="Nhập đại từ...">
                        </div>
                        <div class="relative group">
                            <label class="block text-2xl font-black text-blue-800 mb-2 ml-4">Giải đố:</label>
                            <input id="input-q1b-dap-an" type="text" class="w-full p-5 rounded-3xl bg-white border-4 border-blue-200 text-2xl font-bold focus:border-blue-500 outline-none shadow-xl transition-all placeholder:text-gray-300" placeholder="Nhập đáp án...">
                        </div>
                    </div>

                    <button onclick="window.check_191_q1b()" class="w-24 h-24 bg-blue-500 text-white rounded-3xl font-black text-5xl flex items-center justify-center shadow-[0_10px_40px_rgba(59,130,246,0.4)] hover:scale-110 active:scale-95 transition-all border-b-8 border-blue-700">E</button>
                    <p class="text-blue-600 font-black text-xl uppercase mt-4 tracking-widest">Đánh giá chung</p>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 2 -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl bg-white/80 border-2 border-blue-100">
            <h2 class="text-4xl font-black text-gray-950 mb-10 flex items-start gap-6">
                <span class="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl">2</span>
                <span>Thay thế những từ ngữ bị lặp lại trong đoạn văn dưới đây bằng đại từ thích hợp (kéo từ kho từ vào ô trống):</span>
            </h2>

            <!-- Draggable Word Bank (Moved to Top for Visibility) -->
            <div class="bg-blue-600 p-8 rounded-[32px] shadow-xl mb-10 border-b-8 border-blue-800">
                <p class="text-white font-black text-2xl uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span class="bg-white text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center text-xl">🏷️</span>
                    Kho từ đại từ:
                </p>
                <div class="flex flex-wrap gap-8 justify-center">
                    <div class="dd-option px-10 py-5 bg-white text-blue-950 text-4xl font-black rounded-2xl shadow-[0_10px_0_#d1d5db] cursor-grab active:cursor-grabbing hover:scale-105 active:translate-y-1 active:shadow-none transition-all border-2 border-gray-100" draggable="true" ondragstart="window.Lesson.drag(event)" data-value="này">này</div>
                    <div class="dd-option px-10 py-5 bg-white text-blue-950 text-4xl font-black rounded-2xl shadow-[0_10px_0_#d1d5db] cursor-grab active:cursor-grabbing hover:scale-105 active:translate-y-1 active:shadow-none transition-all border-2 border-gray-100" draggable="true" ondragstart="window.Lesson.drag(event)" data-value="Đây">Đây</div>
                </div>
            </div>

            <!-- Paragraph with Slots -->
            <div class="bg-blue-50/50 p-10 rounded-[40px] border-4 border-blue-100 shadow-inner mb-10 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                </div>
                <p class="text-[3.5xl] font-bold leading-[2.4] text-gray-900 text-justify italic relative z-10">
                    <span class="indent-16 inline-block w-full">Cầu Long Biên bắc qua sông Hồng nối quận Ba Đình và quận Hoàn Kiếm với quận Long Biên của Hà Nội. Nhìn từ xa, cây cầu 
                    <span id="slot-q2-1" class="dd-slot inline-flex items-center justify-center min-w-[160px] h-16 border-4 border-dashed border-blue-400 bg-white mx-2 px-6 rounded-2xl text-blue-900 font-black not-italic shadow-sm transition-all cursor-pointer" ondragover="event.preventDefault()" ondrop="window.Lesson.drop(event, '191-q2')"></span> 
                    trông như một con rồng sắt khổng lồ. 
                    <span id="slot-q2-2" class="dd-slot inline-flex items-center justify-center min-w-[160px] h-16 border-4 border-dashed border-blue-400 bg-white mr-2 px-6 rounded-2xl text-blue-900 font-black not-italic shadow-sm transition-all cursor-pointer" ondragover="event.preventDefault()" ondrop="window.Lesson.drop(event, '191-q2')"></span> 
                    là cây cầu duy nhất của Thủ đô có các phương tiện di chuyển theo hướng tay trái.</span>
                </p>
            </div>

            <!-- Check Button -->
            <div class="flex flex-col items-center gap-4">
                <button onclick="window.check_191_q2()" class="w-28 h-28 bg-blue-600 text-white rounded-[2.5rem] font-black text-6xl flex items-center justify-center shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all border-b-8 border-blue-800">E</button>
                <p class="text-blue-600 font-black text-2xl uppercase tracking-[0.2em]">Thầy E nhận xét</p>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 3 -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl bg-white/80 border-2 border-emerald-100">
            <h2 class="text-4xl font-black text-gray-950 mb-10 flex items-start gap-6">
                <span class="bg-emerald-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl">3</span>
                <span>Chọn kết từ (mà, cho, như, tuy ... nhưng ...) thay cho bông hoa:</span>
            </h2>

            <div class="space-y-8">
                <!-- a -->
                <div class="bg-emerald-50/50 p-10 rounded-[40px] border-2 border-emerald-100 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-2 h-full bg-emerald-400 group-hover:w-4 transition-all"></div>
                    <p class="text-[3.5xl] font-bold flex flex-wrap items-center gap-4 leading-relaxed pl-4">
                        <span class="text-emerald-600 font-black mr-2">a.</span>
                        Con người có tổ, có tông
                        <input id="q3-1" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-emerald-300 text-emerald-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-emerald-50 focus:scale-105 transition-all text-center">
                        cây có cội,
                        <input id="q3-2" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-emerald-300 text-emerald-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-emerald-50 focus:scale-105 transition-all text-center">
                        sông có nguồn.
                    </p>
                </div>

                <!-- b -->
                <div class="bg-amber-50/50 p-10 rounded-[40px] border-2 border-amber-100 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-2 h-full bg-amber-400 group-hover:w-4 transition-all"></div>
                    <p class="text-[3.5xl] font-bold flex flex-wrap items-center gap-4 leading-relaxed pl-4">
                        <span class="text-amber-600 font-black mr-2">b.</span>
                        Bầu ơi thương lấy bí cùng
                        <input id="q3-3" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-amber-300 text-amber-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-amber-500 focus:bg-amber-50 focus:scale-105 transition-all text-center">
                        rằng khác giống
                        <input id="q3-4" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-amber-300 text-amber-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-amber-500 focus:bg-amber-50 focus:scale-105 transition-all text-center">
                        chung một giàn.
                    </p>
                </div>

                <!-- c -->
                <div class="bg-blue-50/50 p-10 rounded-[40px] border-2 border-blue-100 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-2 h-full bg-blue-400 group-hover:w-4 transition-all"></div>
                    <p class="text-[3.5xl] font-bold flex flex-wrap items-center gap-4 leading-relaxed pl-4 text-justify">
                        <span class="text-blue-600 font-black mr-2">c.</span>
                        Lời nói chẳng mất tiền mua / Lựa lời
                        <input id="q3-5" type="text" placeholder="..." class="w-28 px-4 py-2 bg-white border-b-4 border-blue-300 text-blue-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:scale-105 transition-all text-center mx-2">
                        nói
                        <input id="q3-6" type="text" placeholder="..." class="w-28 px-4 py-2 bg-white border-b-4 border-blue-300 text-blue-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:scale-105 transition-all text-center mx-2">
                        vừa lòng nhau.
                    </p>
                </div>

                <!-- d -->
                <div class="bg-purple-50/50 p-10 rounded-[40px] border-2 border-purple-100 shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-2 h-full bg-purple-400 group-hover:w-4 transition-all"></div>
                    <p class="text-[3.5xl] font-bold flex flex-wrap items-center gap-4 leading-relaxed pl-4">
                        <span class="text-purple-600 font-black mr-2">d.</span>
                        Công cha
                        <input id="q3-7" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-purple-300 text-purple-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-purple-500 focus:bg-purple-50 focus:scale-105 transition-all text-center">
                        núi ngất trời / Nghĩa mẹ
                        <input id="q3-8" type="text" placeholder="..." class="w-32 px-4 py-2 bg-white border-b-4 border-purple-300 text-purple-700 text-[3.5xl] font-black rounded-xl focus:outline-none focus:border-purple-500 focus:bg-purple-50 focus:scale-105 transition-all text-center">
                        nước ngời ngời Biển Đông.
                    </p>
                </div>

                <!-- Thầy E Button -->
                <div class="flex flex-col items-center gap-4 pt-10">
                    <button onclick="window.check_191_q3()" class="w-28 h-28 bg-emerald-500 text-white rounded-[2.5rem] font-black text-6xl flex items-center justify-center shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all border-b-8 border-emerald-700">E</button>
                    <p class="text-emerald-600 font-black text-2xl uppercase tracking-[0.2em]">Thầy E nhận xét</p>
                </div>
            </div>
        </div>
    </section>

    <!-- BÀI TẬP 4 -->
    <section class="w-full pb-10">
        <div class="glass-card rounded-[40px] p-8 md:p-10 shadow-2xl bg-gradient-to-br from-indigo-900 to-blue-900 text-white border-t-8 border-indigo-400">
            <h2 class="text-4xl font-black mb-10 flex items-start gap-6">
                <span class="bg-white text-indigo-900 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl">4</span>
                <span>Viết đoạn văn (3-5 câu) giới thiệu về một vị anh hùng dân tộc, trong đó có sử dụng đại từ và kết từ.</span>
            </h2>

            <div class="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 shadow-2xl">
                <p class="text-2xl font-bold mb-8 text-indigo-200 uppercase tracking-widest flex items-center gap-3">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    Đoạn văn tham khảo:
                </p>
                <p class="text-[3.5xl] text-white leading-relaxed font-black text-justify mb-10">
                    "Ngô Quyền là một vị anh hùng lỗi lạc của dân tộc ta. <span class="bg-yellow-400 text-indigo-950 px-3 py-1 rounded-lg">Ông</span> đã lãnh đạo quân ta đại phá quân Nam Hán trên sông Bạch Đằng <span class="bg-cyan-400 text-indigo-950 px-3 py-1 rounded-lg">và</span> giành lại độc lập cho đất nước. Nhờ tài trí <span class="bg-cyan-400 text-indigo-950 px-3 py-1 rounded-lg">của</span> mình, <span class="bg-yellow-400 text-indigo-950 px-3 py-1 rounded-lg">ông</span> đã khiến kẻ thù phải khiếp sợ trước những cọc nhọn dọc ngang dưới lòng sông."
                </p>
                
                <!-- Student Input Area -->
                <div class="space-y-6 pt-10 border-t border-white/10">
                    <p class="text-3xl font-black text-indigo-200 mb-4 flex items-center gap-4">
                        <span class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">✍️</span>
                        Bài làm của em:
                    </p>
                    <div class="relative group">
                        <textarea id="input-q4" class="w-full h-80 p-8 rounded-[40px] bg-white/5 border-4 border-white/20 text-white text-[3.5xl] font-bold focus:border-indigo-400 focus:bg-white/10 outline-none shadow-2xl transition-all placeholder:text-white/20 leading-relaxed" placeholder="Hãy viết đoạn văn của em vào đây hoặc nhấn Micro để nói..."></textarea>
                        
                        <!-- Mic Status -->
                        <div id="mic-status-q4" class="hidden absolute top-6 right-6 flex items-center gap-3 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/50 animate-pulse">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span class="text-red-400 font-bold text-xl uppercase tracking-widest">Đang nghe...</span>
                        </div>

                        <!-- Mic Button -->
                        <button onclick="window.toggleVnMic('q4')" id="btn-mic-q4" class="absolute bottom-8 right-8 w-20 h-20 bg-white/10 hover:bg-white/20 text-white rounded-[1.5rem] flex items-center justify-center text-[4rem] shadow-2xl backdrop-blur-md border-2 border-white/20 active:scale-90 transition-all group-hover:border-indigo-400/50">🎙️</button>
                    </div>
                    
                    <div class="flex flex-col items-center gap-6 mt-8">
                        <button onclick="window.check_191_q4()" class="w-24 h-24 bg-white text-indigo-900 rounded-[2rem] font-black text-6xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all ring-8 ring-white/10">E</button>
                        <p class="text-indigo-300 font-bold text-xl uppercase tracking-[0.2em]">Nhận xét từ Thầy E</p>
                    </div>
                </div>

                <div class="mt-10 flex flex-wrap gap-6 pt-8 border-t border-white/10 opacity-60">
                    <span class="flex items-center gap-3 text-xl font-bold"><span class="w-6 h-6 bg-yellow-400 rounded-md"></span> Đại từ</span>
                    <span class="flex items-center gap-3 text-xl font-bold"><span class="w-6 h-6 bg-cyan-400 rounded-md"></span> Kết từ</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Feedback Modal -->
    <div id="vn-modal-overlay" class="hidden fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div class="bg-white rounded-[40px] shadow-2xl max-w-2xl w-full p-8 md:p-12 relative overflow-hidden border-8 border-indigo-500 animate-in zoom-in-95 duration-300">
        <div id="vn-modal-header" class="text-indigo-600 font-black text-3xl md:text-5xl mb-8 flex items-center gap-5">
          <span id="vn-modal-icon" class="text-6xl">✨</span>
          <span id="vn-modal-title" class="uppercase tracking-tighter">LỜI KHEN TỪ THẦY E</span>
        </div>
        <div id="vn-modal-body" class="text-slate-700 text-2xl md:text-3xl leading-relaxed font-bold">
          <!-- Content here -->
        </div>
        <button onclick="window.closeVnModal()" class="mt-12 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-6 rounded-[2rem] text-3xl transition-all shadow-xl active:scale-95 border-b-8 border-indigo-800">Cảm ơn Thầy E ạ! ❤️</button>
        <div class="absolute -bottom-10 -right-10 opacity-10 pointer-events-none rotate-12">
          <div class="w-48 h-48 bg-indigo-600 rounded-full flex items-center justify-center text-9xl text-white font-black">E</div>
        </div>
      </div>
    </div>

    <script>
    window.toggleVnMic = function(id) {
        if (window.Lesson && window.Lesson.toggleSpeechRec) {
            window.Lesson.toggleSpeechRec(id);
        }
    };

    window.showVnFeedback = function(isCorrect, rightAnswer, studentAnswer) {
      const overlay = document.getElementById('vn-modal-overlay');
      const title = document.getElementById('vn-modal-title');
      const icon = document.getElementById('vn-modal-icon');
      const body = document.getElementById('vn-modal-body');
      
      const correctQuotes = [
        "Tuyệt vời quá! Em đã làm rất tốt. Thầy E rất tự hào về em!",
        "Chính xác rồi! Em nắm vững kiến thức về đại từ/kết từ rất tốt.",
        "Bản lĩnh lắm! Cách em vận dụng đại từ và kết từ thật nhuần nhuyễn.",
        "Đúng rồi! Em đã chinh phục bài tập này một cách xuất sắc."
      ];
      
      const wrongQuotes = [
        "Hơi đáng tiếc một chút, câu trả lời chưa hoàn toàn chính xác.",
        "Em hãy thử suy nghĩ lại về vai trò của đại từ/kết từ trong câu này nhé.",
        "Cố gắng lên! Hãy quan sát kỹ gợi ý và thử lại một lần nữa xem nào.",
        "Chưa đúng rồi! Bình tĩnh đọc lại nội dung và thực hiện lại bài tập nhé."
      ];

      if (isCorrect) {
        title.innerText = "LỜI KHEN TỪ THẦY E";
        icon.innerText = "✨";
        const quote = (rightAnswer === "Great") ? studentAnswer : correctQuotes[Math.floor(Math.random() * correctQuotes.length)];
        body.innerHTML = '<p class=\"text-emerald-600 mb-6\">' + quote + '</p>' +
                          (rightAnswer && rightAnswer !== "Great" ? '<div class=\"p-6 bg-blue-50 rounded-3xl border-2 border-blue-100\"><p class=\"text-blue-500 text-xl font-black uppercase mb-2\">Gợi ý đáp án:</p><p class=\"text-blue-700\">' + rightAnswer + '</p></div>' : '');
      } else {
        title.innerText = "HƯỚNG DẪN CỦA THẦY E";
        icon.innerText = "💡";
        const quote = wrongQuotes[Math.floor(Math.random() * wrongQuotes.length)];
        body.innerHTML = '<p class=\"text-orange-600 mb-6\">' + quote + '</p>' +
                          '<div class=\"p-6 bg-orange-50 rounded-3xl border-2 border-orange-100\"><p class=\"text-orange-700\">' + studentAnswer + '</p></div>';
      }
      overlay.classList.remove('hidden');
    };

    window.closeVnModal = function() {
      document.getElementById('vn-modal-overlay').classList.add('hidden');
    };

    window.check_191_q2 = function() {
        const s1 = document.getElementById('slot-q2-1').dataset.value || "";
        const s2 = document.getElementById('slot-q2-2').dataset.value || "";
        
        if (s1 === "này" && s2 === "Đây") {
            window.showVnFeedback(true, "này, Đây", "Tuyệt vời! Em đã thay thế các từ lặp lại bằng đại từ 'này' và 'Đây' một cách chính xác, giúp đoạn văn mạch lạc hơn.");
        } else if (!s1 || !s2) {
            window.showVnFeedback(false, "Hãy điền đủ 2 ô", "Em hãy kéo hai đại từ 'này' và 'Đây' vào các ô trống thích hợp trong đoạn văn nhé!");
        } else {
            window.showVnFeedback(false, "này, Đây", "Có vẻ như vị trí của các đại từ chưa hoàn toàn chính xác. Em hãy thử đổi chỗ chúng xem sao (Lưu ý: từ 'Đây' viết hoa vì đứng đầu câu nhé).");
        }
    };

    window.check_191_q4 = function() {
        const text = document.getElementById('input-q4').value.trim();
        if (text.length < 20) {
            window.showVnFeedback(false, "Bình tĩnh nào!", "Vui lòng viết đoạn văn dài hơn một chút (từ 3-5 câu) để thầy đánh giá nhé!");
        } else {
            window.showVnFeedback(true, "Great", "Đoạn văn của em thật hay! Em đã sử dụng đại từ và kết từ rất chính xác. Thầy E tặng em 10 điểm! ⭐");
        }
    };

    window.check_191_q1a = function() {
        const daitu = document.getElementById('input-q1a-daitu').value.trim().toLowerCase();
        const dapan = document.getElementById('input-q1a-dap-an').value.trim().toLowerCase();
        
        if (daitu === 'ai' && (dapan === 'ngô quyền' || dapan === 'ngo quyen')) {
            window.showVnFeedback(true, "Great", "Chính xác rồi! Đại từ 'ai' và đáp án Ngô Quyền là hoàn toàn đúng. Em rất am hiểu lịch sử!");
        } else {
            window.showVnFeedback(false, "Thử lại nhé!", "Gợi ý: Đại từ dùng để hỏi người, còn đáp án là vị vua đánh bại quân Nam Hán trên sông Bạch Đằng.");
        }
    };

    window.check_191_q1b = function() {
        const daitu = document.getElementById('input-q1b-daitu').value.trim().toLowerCase();
        const dapan = document.getElementById('input-q1b-dap-an').value.trim().toLowerCase();
        
        if (daitu === 'gì' && (dapan === 'bánh chưng' || dapan === 'banh chung')) {
            window.showVnFeedback(true, "Great", "Tuyệt vời! Đại từ 'gì' và Bánh chưng là đáp án chính xác. Chúc mừng em!");
        } else {
            window.showVnFeedback(false, "Chưa đúng rồi!", "Gợi ý: Bánh có hình vuông, gói bằng lá dong, gắn liền với sự tích Lang Liêu.");
        }
    };

    window.check_191_q3 = function() {
        const answers = [
            document.getElementById('q3-1').value.trim().toLowerCase(),
            document.getElementById('q3-2').value.trim().toLowerCase(),
            document.getElementById('q3-3').value.trim().toLowerCase(),
            document.getElementById('q3-4').value.trim().toLowerCase(),
            document.getElementById('q3-5').value.trim().toLowerCase(),
            document.getElementById('q3-6').value.trim().toLowerCase(),
            document.getElementById('q3-7').value.trim().toLowerCase(),
            document.getElementById('q3-8').value.trim().toLowerCase()
        ];
        
        const correctOnes = [
            "như", "như", "tuy", "nhưng", "mà", "cho", "như", "như"
        ];
        
        let score = 0;
        answers.forEach((ans, i) => {
            if (ans === correctOnes[i]) score++;
        });
        
        if (score === 8) {
            window.showVnFeedback(true, "như, như, tuy, nhưng, mà, cho, như, như", "Tuyệt vời! Em đã điền đúng tất cả các kết từ. Khả năng sử dụng ngôn ngữ của em rất đáng khen ngợi!");
        } else if (score >= 4) {
            window.showVnFeedback(false, "Gần đúng rồi!", 'Em đã điền đúng ' + score + '/8 ô. Hãy kiểm tra lại những ô còn thiếu hoặc chưa chính xác nhé!');
        } else if (score > 0) {
            window.showVnFeedback(false, "Cố gắng lên nào!", 'Em mới đúng được ' + score + ' ô thôi. Đọc kỹ lại các câu tục ngữ/ca dao để chọn kết từ phù hợp hơn nhé.');
        } else {
            window.showVnFeedback(false, "Hãy thử lại nhé!", "Dường như em chưa điền đúng ô nào. Gợi ý: Các từ cần dùng là 'như', 'tuy... nhưng', 'mà', 'cho'.");
        }
    };
    </script>
</div>
`,
    "quizPool": [
        {
            "question": "Trong các từ sau, từ nào là kết từ?",
            "options": ["Học sinh", "Và", "Chạy", "Đẹp"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào sau đây là đại từ dùng để xưng hô?",
            "options": ["Bàn ghế", "Họ", "Hoa hồng", "Xôn xao"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cặp kết từ 'Vì... nên...' biểu thị mối quan hệ gì?",
            "options": ["Tương phản", "Giả thiết - kết quả", "Nguyên nhân - kết quả", "Tăng tiến"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu 'Nam rất chăm chỉ, còn Bắc thì lười biếng', từ 'còn' là loại từ gì?",
            "options": ["Đại từ", "Kết từ", "Danh từ", "Động từ"],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Chọn cặp kết từ phù hợp: '... trời mưa to ... chúng em vẫn đi học đúng giờ.'",
            "options": ["Vì... nên...", "Nếu... thì...", "Tuy... nhưng...", "Chẳng những... mà còn..."],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Đại từ 'thế' trong câu 'Mẹ bảo sao thì làm thế' thay thế cho điều gì?",
            "options": ["Thay thế cho danh từ", "Thay thế cho một hoạt động", "Thay thế cho tính chất", "Dùng để trỏ người"],
            "answer": 1,
            "level": 3
        },
        {
            "question": "Kết từ nào dùng để nối các từ ngữ có quan hệ lựa chọn?",
            "options": ["Và", "Với", "Hay", "Nhưng"],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Trong câu 'Chúng tôi là học sinh lớp 5', từ 'chúng tôi' là đại từ thuộc ngôi thứ mấy?",
            "options": ["Ngôi thứ nhất số ít", "Ngôi thứ nhất số nhiều", "Ngôi thứ hai", "Ngôi thứ ba"],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Cặp kết từ 'Chẳng những... mà còn...' biểu thị mối quan hệ gì?",
            "options": ["Nguyên nhân - kết quả", "Tăng tiến", "Tương phản", "Giả thiết"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mục đích chính của việc dùng đại từ thay thế trong đoạn văn là gì?",
            "options": ["Làm câu văn dài hơn", "Tránh lặp từ ngữ", "Giúp câu văn khó hiểu hơn", "Tạo nhịp điệu"],
            "answer": 1,
            "level": 2
        }
    ]
};