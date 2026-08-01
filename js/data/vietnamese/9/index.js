export const lesson9 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "9",
    "title": "LUYỆN TỪ VÀ CÂU: ĐẠI TỪ",
    "desc": "Bài học giúp học sinh nhận biết đại từ dùng để thay thế, đại từ nghi vấn (dùng để hỏi) và đại từ xưng hô. Nắm vững khái niệm và vận dụng đại từ trong giao tiếp, viết văn.",
    "subject": "Luyện từ và câu",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-2xl md:text-3xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết đại từ dùng để thay thế, đại từ nghi vấn (dùng để hỏi) và đại từ xưng hô.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Phân biệt được đại từ chỉ người nói và đại từ chỉ người nghe trong văn bản.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết vận dụng đại từ xưng hô để viết câu đáp lời phù hợp trong giao tiếp.
            </li>
        </ul>
    </div>

    <!-- 📝 BÀI 1: Đại từ thay thế -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Những từ in đậm trong mỗi câu sau được dùng để thay cho từ ngữ nào?</h3>
        </div>

        <div class="space-y-5">
            <!-- Câu a -->
            <div class="bg-sky-50/40 p-5 rounded-2xl border border-sky-100 space-y-3" id="vn9-b1-a">
                <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                    <span class="font-black text-sky-800">a.</span> Nắng vàng óng. Lúa cũng <strong class="text-sky-800 underline decoration-2 decoration-sky-600 underline-offset-4">vậy</strong>.
                </p>
                <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Từ "vậy" thay cho từ ngữ nào?</p>
                <div class="flex flex-wrap gap-3" id="vn9-b1a-opts">
                    <button onclick="chonDapAnB1('a', 0)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Lúa</button>
                    <button onclick="chonDapAnB1('a', 1)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Vàng óng</button>
                    <button onclick="chonDapAnB1('a', 2)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Nắng</button>
                    <button onclick="chonDapAnB1('a', 3)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Óng ánh</button>
                </div>
                <div id="fb-vn9-b1a" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
            </div>

            <!-- Câu b -->
            <div class="bg-sky-50/40 p-5 rounded-2xl border border-sky-100 space-y-3" id="vn9-b1-b">
                <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                    <span class="font-black text-sky-800">b.</span> Cây tre này cao và thẳng. Các cây kia cũng <strong class="text-sky-800 underline decoration-2 decoration-sky-600 underline-offset-4">thế</strong>.
                </p>
                <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Từ "thế" thay cho từ ngữ nào?</p>
                <div class="flex flex-wrap gap-3" id="vn9-b1b-opts">
                    <button onclick="chonDapAnB1('b', 0)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Cây tre</button>
                    <button onclick="chonDapAnB1('b', 1)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Cao và thẳng</button>
                    <button onclick="chonDapAnB1('b', 2)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Các cây kia</button>
                    <button onclick="chonDapAnB1('b', 3)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Này</button>
                </div>
                <div id="fb-vn9-b1b" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
            </div>

            <!-- Câu c -->
            <div class="bg-sky-50/40 p-5 rounded-2xl border border-sky-100 space-y-3" id="vn9-b1-c">
                <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                    <span class="font-black text-sky-800">c.</span> Cánh đồng vàng ruộm báo hiệu một vụ mùa bội thu. <strong class="text-sky-800 underline decoration-2 decoration-sky-600 underline-offset-4">Đó</strong> là thành quả lao động vất vả, "một nắng hai sương" của các cô bác nông dân.
                </p>
                <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Từ "Đó" thay cho từ ngữ nào?</p>
                <div class="flex flex-wrap gap-3" id="vn9-b1c-opts">
                    <button onclick="chonDapAnB1('c', 0)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Cánh đồng vàng ruộm báo hiệu một vụ mùa bội thu</button>
                    <button onclick="chonDapAnB1('c', 1)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Các cô bác nông dân</button>
                    <button onclick="chonDapAnB1('c', 2)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Thành quả lao động</button>
                    <button onclick="chonDapAnB1('c', 3)" class="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-2xl md:text-3xl text-gray-800 hover:border-sky-400 active:scale-95 transition-all">Một nắng hai sương</button>
                </div>
                <div id="fb-vn9-b1c" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
            </div>
        </div>
    </div>

    <!-- 📝 BÀI 2: Đại từ nghi vấn (dùng để hỏi) -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Trong những đoạn trích dưới đây, từ nào được dùng để hỏi?</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 italic font-bold">👉 Hãy bấm vào từ dùng để hỏi trong mỗi đoạn trích.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <!-- Đoạn a -->
            <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 space-y-3 relative">
                <p class="text-xs font-black text-emerald-800 uppercase tracking-widest">Đoạn a</p>
                <div class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-1">
                    <p>
                        <button onclick="chonTuHoi('a', 'Cóc', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Cóc!</button>
                        <button onclick="chonTuHoi('a', 'Cóc', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Cóc!</button>
                        <button onclick="chonTuHoi('a', 'Cóc', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Cóc!</button>
                    </p>
                    <p>– 
                        <button onclick="chonTuHoi('a', 'Ai', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Ai</button>
                        <button onclick="chonTuHoi('a', 'gọi', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">gọi</button>
                        <button onclick="chonTuHoi('a', 'đó', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">đó</button>?
                    </p>
                    <p>– 
                        <button onclick="chonTuHoi('a', 'Tôi', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Tôi</button>
                        <button onclick="chonTuHoi('a', 'là', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">là</button>
                        <button onclick="chonTuHoi('a', 'thỏ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">thỏ...</button>
                    </p>
                </div>
                <p class="text-right text-xs text-gray-800 italic font-medium">(Vò Quảng)</p>
                <div id="fb-vn9-b2a" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg mt-2"></div>
            </div>

            <!-- Đoạn b -->
            <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 space-y-3 relative">
                <p class="text-xs font-black text-emerald-800 uppercase tracking-widest">Đoạn b</p>
                <div class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-1">
                    <p>
                        <button onclick="chonTuHoi('b', 'Bé', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Bé</button>
                        <button onclick="chonTuHoi('b', 'nằm', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nằm</button>
                        <button onclick="chonTuHoi('b', 'ngẫm', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">ngẫm</button>
                        <button onclick="chonTuHoi('b', 'nghĩ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nghĩ</button>
                    </p>
                    <p>– 
                        <button onclick="chonTuHoi('b', 'Nắng', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Nắng</button>
                        <button onclick="chonTuHoi('b', 'ngủ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">ngủ</button>
                        <button onclick="chonTuHoi('b', 'ở', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">ở</button>
                        <button onclick="chonTuHoi('b', 'đâu', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">đâu</button>?
                    </p>
                    <p>– 
                        <button onclick="chonTuHoi('b', 'Nắng', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Nắng</button>
                        <button onclick="chonTuHoi('b', 'ngủ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">ngủ</button>
                        <button onclick="chonTuHoi('b', 'nhà', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nhà</button>
                        <button onclick="chonTuHoi('b', 'nắng', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nắng</button>
                    </p>
                    <p>
                        <button onclick="chonTuHoi('b', 'Mai', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Mai</button>
                        <button onclick="chonTuHoi('b', 'lại', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">lại</button>
                        <button onclick="chonTuHoi('b', 'gặp', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">gặp</button>
                        <button onclick="chonTuHoi('b', 'nhau', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nhau.</button>
                    </p>
                </div>
                <p class="text-right text-xs text-gray-800 italic font-medium">(Thụy Anh)</p>
                <div id="fb-vn9-b2b" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg mt-2"></div>
            </div>

            <!-- Đoạn c -->
            <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 space-y-3 relative">
                <p class="text-xs font-black text-emerald-800 uppercase tracking-widest">Đoạn c</p>
                <div class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-1">
                    <p>
                        <button onclick="chonTuHoi('c', 'Mùa', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Mùa</button>
                        <button onclick="chonTuHoi('c', 'nào', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nào</button>
                        <button onclick="chonTuHoi('c', 'phượng', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">phượng</button>
                        <button onclick="chonTuHoi('c', 'vĩ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">vĩ</button>
                    </p>
                    <p>
                        <button onclick="chonTuHoi('c', 'Nở', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Nở</button>
                        <button onclick="chonTuHoi('c', 'đỏ', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">đỏ</button>
                        <button onclick="chonTuHoi('c', 'rực', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">rực</button>
                        <button onclick="chonTuHoi('c', 'trời', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">trời</button>
                    </p>
                    <p>
                        <button onclick="chonTuHoi('c', 'Ở', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Ở</button>
                        <button onclick="chonTuHoi('c', 'khắp', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">khắp</button>
                        <button onclick="chonTuHoi('c', 'nơi', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nơi</button>
                        <button onclick="chonTuHoi('c', 'nơi', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">nơi</button>
                    </p>
                    <p>
                        <button onclick="chonTuHoi('c', 'Ve', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">Ve</button>
                        <button onclick="chonTuHoi('c', 'kêu', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">kêu</button>
                        <button onclick="chonTuHoi('c', 'ra', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">ra</button>
                        <button onclick="chonTuHoi('c', 'rả', this)" class="hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none">rả?</button>
                    </p>
                </div>
                <p class="text-right text-xs text-gray-800 italic font-medium">(Câu đố)</p>
                <div id="fb-vn9-b2c" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg mt-2"></div>
            </div>
        </div>
    </div>

    <!-- 📖 BÀI 3: Đọc câu chuyện "Hạt thóc" -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60"></div>

        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đọc câu chuyện dưới đây và trả lời câu hỏi.</h3>
            </div>

            <!-- Nội dung truyện -->
            <div class="bg-amber-50/50 p-6 md:p-8 rounded-[32px] border border-amber-100 serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-4">
                <p class="font-black text-amber-600 text-center text-2xl md:text-3xl uppercase mb-4 tracking-wide">Hạt thóc</p>
                <p>Hạt thóc được mẹ lúa yêu thương, chiều chuộng nên rất kiêu. Thóc nói với ngô, khoai, sắn:</p>
                <p class="pl-4 border-l-4 border-amber-100">– <strong class="text-amber-600">Tôi</strong> là hạt vàng đấy, các <strong class="text-amber-600">bạn</strong> ạ. Chẳng ai bằng <strong class="text-amber-600">tôi</strong> được.</p>
                <p>Ngô liền nói:</p>
                <p class="pl-4 border-l-4 border-emerald-100">– <strong class="text-emerald-800">Cậu</strong> ơi, <strong class="text-emerald-800">tớ</strong> nghĩ <strong class="text-emerald-800">cậu</strong> chỉ là hạt vàng khi ở trên cánh đồng này thôi. Còn nếu ở trong bát cơm, chắc chắn <strong class="text-emerald-800">cậu</strong> sẽ bị gắp bỏ ra ngoài.</p>
                <p>Hạt thóc nghe xong, im lặng.</p>
                <p class="text-right text-xl md:text-2xl text-gray-800 italic font-medium">(Phan Tự Gia Bách)</p>
            </div>

            <!-- Câu hỏi 3a & 3b -->
            <div class="space-y-4">
                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-2xl md:text-3xl">
                            a. Các từ in đậm trong câu chuyện trên được dùng để làm gì?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 text-2xl md:text-3xl font-medium">
                        <p class="text-amber-600 font-bold mb-2">💡 Trả lời:</p>
                        <p>Các từ in đậm (<strong>tôi, bạn, cậu, tớ</strong>) được dùng để <strong>xưng hô</strong> – tức là chỉ người nói hoặc người nghe trong cuộc trò chuyện. Đây là <em>đại từ xưng hô</em>.</p>
                    </div>
                </details>

                <details class="group bg-white rounded-2xl border border-amber-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-6 text-left flex justify-between items-center cursor-pointer list-none hover:bg-amber-50/50 transition-colors">
                        <span class="font-bold text-gray-800 group-hover:text-amber-700 transition-colors text-2xl md:text-3xl">
                            b. Trong số các từ đó, những từ nào chỉ người nói, những từ nào chỉ người nghe?
                        </span>
                        <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform">
                            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </summary>
                    <div class="px-8 pb-6 text-gray-800 leading-relaxed border-t border-amber-50 pt-4 bg-amber-50/10 text-2xl md:text-3xl font-medium">
                        <p class="text-amber-600 font-bold mb-3">💡 Trả lời:</p>
                        <div class="grid grid-cols-1 gap-4">
                            <div class="bg-amber-100/60 p-5 rounded-xl border border-amber-100 text-2xl md:text-3xl">
                                <span class="font-black text-amber-600">🗣️ Chỉ người nói:</span>
                                <span class="text-amber-700 font-black ml-2">tôi, tớ</span>
                            </div>
                            <div class="bg-emerald-100/60 p-5 rounded-xl border border-emerald-100 text-2xl md:text-3xl">
                                <span class="font-black text-emerald-800">👂 Chỉ người nghe:</span>
                                <span class="text-emerald-900 font-black ml-2">bạn, cậu</span>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>

    <!-- 📌 GHI NHỚ -->
    <div class="bg-gradient-to-br from-sky-50 to-emerald-50 p-6 md:p-8 rounded-[36px] border-2 border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -left-10 -top-10 w-32 h-32 bg-sky-100/30 rounded-full blur-2xl"></div>
        <div class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-black text-sky-800 mb-5 flex items-center gap-3">
                <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md text-lg md:text-2xl">📌</span>
                Ghi nhớ
            </h3>
            <div class="space-y-4 text-gray-900 text-3xl md:text-4xl leading-relaxed font-bold">
                <p><strong class="text-sky-800">Đại từ</strong> là từ dùng để:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white/80 p-6 rounded-2xl border border-sky-100 shadow-md text-center">
                        <p class="text-3xl md:text-5xl mb-3">🔄</p>
                        <p class="font-black text-sky-900 text-2xl md:text-3xl mb-2">Thay thế</p>
                        <p class="text-xl md:text-2xl text-gray-800 font-bold">thế, vậy, đó, này,...</p>
                        <p class="text-base text-gray-800 mt-2 italic">(đại từ thay thế)</p>
                    </div>
                    <div class="bg-white/80 p-6 rounded-2xl border border-emerald-100 shadow-md text-center">
                        <p class="text-3xl md:text-5xl mb-3">❓</p>
                        <p class="font-black text-emerald-900 text-2xl md:text-3xl mb-2">Hỏi</p>
                        <p class="text-xl md:text-2xl text-gray-800 font-bold">ai, gì, nào, sao, bao nhiêu, đâu,...</p>
                        <p class="text-base text-gray-800 mt-2 italic">(đại từ nghi vấn)</p>
                    </div>
                    <div class="bg-white/80 p-6 rounded-2xl border border-amber-100 shadow-md text-center">
                        <p class="text-3xl md:text-5xl mb-3">🗣️</p>
                        <p class="font-black text-amber-900 text-2xl md:text-3xl mb-2">Xưng hô</p>
                        <p class="text-xl md:text-2xl text-gray-800 font-bold">tôi, tớ, chúng tôi, mày, chúng ta,...</p>
                        <p class="text-base text-gray-800 mt-2 italic">(đại từ xưng hô)</p>
                    </div>
                </div>
                <p class="text-2xl md:text-3xl text-gray-800 italic mt-6 leading-relaxed">Ngoài ra, trong tiếng Việt, có nhiều <strong>danh từ</strong> được dùng để xưng hô như <em>ông, bà, bố, mẹ, anh, chị, em, cháu, thầy, bạn,...</em></p>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI 4: Đóng vai viết câu đáp -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px]">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">4</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đóng vai hạt thóc, viết câu đáp lại lời của ngô</h3>
            </div>

            <div class="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 mb-6">
                <p class="text-2xl md:text-3xl text-amber-600 font-medium leading-relaxed italic">
                    📖 Nhắc lại lời ngô nói: <strong>"Cậu ơi, tớ nghĩ cậu chỉ là hạt vàng khi ở trên cánh đồng này thôi. Còn nếu ở trong bát cơm, chắc chắn cậu sẽ bị gắp bỏ ra ngoài."</strong>
                </p>
            </div>

            <p class="text-xl md:text-2xl text-gray-800 font-bold mb-4">👉 Hãy viết câu hạt thóc đáp lại, trong câu có sử dụng <strong class="text-sky-800">một đại từ</strong>:</p>

            <div class="space-y-4">
                <textarea id="vn9-b4-input" rows="4" class="w-full p-5 text-2xl md:text-3xl border-2 border-sky-100 rounded-2xl focus:border-sky-500 focus:ring-2 focus:ring-sky-600 outline-none transition-all resize-none font-medium" placeholder="Ví dụ: Tớ hiểu rồi, cậu nói đúng..."></textarea>
                <div class="flex justify-between items-center">
                    <button onclick="resetBai4Vn9()" class="px-5 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">XOÁ</button>
                    <button onclick="kiemTraBai4Vn9()" class="px-8 py-3 bg-sky-600 text-white font-black rounded-xl hover:bg-sky-600 transition-all text-base shadow-md">KIỂM TRA ĐẠI TỪ ✓</button>
                </div>
                <div id="fb-vn9-b4" class="hidden text-base font-bold px-4 py-3 rounded-xl"></div>
            </div>

            <!-- Gợi ý mẫu câu -->
            <details class="group mt-4">
                <summary class="cursor-pointer text-sm text-sky-800 font-bold hover:text-sky-800 transition-colors">💡 Xem gợi ý mẫu câu...</summary>
                <div class="mt-3 p-4 bg-sky-50/50 rounded-xl border border-sky-100 text-2xl md:text-3xl text-gray-800 space-y-2">
                    <p>• <em>"<strong>Tớ</strong> cảm ơn <strong>cậu</strong> đã nhắc nhở, <strong>tớ</strong> sẽ không kiêu căng nữa."</em></p>
                    <p>• <em>"<strong>Mình</strong> biết lỗi rồi. Chúng <strong>mình</strong> đều quan trọng như nhau."</em></p>
                </div>
            </details>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn9()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Đại từ là gì?",
            "options": [
                "Từ dùng để chỉ tên riêng của sự vật",
                "Từ dùng để thay thế, để hỏi hoặc để xưng hô",
                "Từ dùng để chỉ đặc điểm của sự vật",
                "Từ dùng để chỉ hoạt động, trạng thái"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Nắng vàng óng. Lúa cũng vậy.', từ 'vậy' thay cho từ ngữ nào?",
            "options": [
                "Lúa",
                "Vàng óng",
                "Nắng",
                "Cũng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu: 'Cây tre này cao và thẳng. Các cây kia cũng thế.', từ 'thế' thay cho từ ngữ nào?",
            "options": [
                "Cây tre",
                "Cao và thẳng",
                "Các cây kia",
                "Cũng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'Đó' trong câu: 'Cánh đồng vàng ruộm báo hiệu một vụ mùa bội thu. Đó là thành quả...' thuộc loại đại từ nào?",
            "options": [
                "Đại từ xưng hô",
                "Đại từ thay thế",
                "Đại từ nghi vấn",
                "Không phải đại từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu 'Ai gọi đó?', từ 'ai' là loại đại từ nào?",
            "options": [
                "Đại từ thay thế",
                "Đại từ nghi vấn (dùng để hỏi)",
                "Đại từ xưng hô",
                "Danh từ chỉ người"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây KHÔNG phải đại từ nghi vấn?",
            "options": [
                "ai",
                "đâu",
                "vậy",
                "nào"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu chuyện 'Hạt thóc', từ 'tôi' và 'tớ' dùng để chỉ ai?",
            "options": [
                "Người nghe",
                "Người nói",
                "Người được nhắc đến",
                "Sự vật"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu chuyện 'Hạt thóc', từ 'bạn' và 'cậu' dùng để chỉ ai?",
            "options": [
                "Người nói",
                "Người nghe",
                "Mẹ lúa",
                "Tác giả"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhóm từ nào dưới đây gồm toàn đại từ xưng hô?",
            "options": [
                "tôi, bạn, ai, gì",
                "tôi, tớ, cậu, chúng ta",
                "vậy, thế, đó, này",
                "ai, nào, sao, đâu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhóm từ nào dưới đây gồm toàn đại từ nghi vấn?",
            "options": [
                "tôi, mày, chúng tôi",
                "thế, vậy, đó",
                "ai, gì, nào, sao, bao nhiêu, đâu",
                "ông, bà, bố, mẹ"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Từ 'ông, bà, bố, mẹ, anh, chị, em' khi dùng để xưng hô thì thuộc loại từ nào?",
            "options": [
                "Đại từ xưng hô",
                "Danh từ dùng để xưng hô",
                "Động từ",
                "Tính từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'đâu' trong câu 'Nắng ngủ ở đâu?' là đại từ thuộc loại nào?",
            "options": [
                "Đại từ thay thế",
                "Đại từ nghi vấn",
                "Đại từ xưng hô",
                "Danh từ chỉ nơi chốn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ 'nào' trong câu 'Mùa nào phượng vĩ nở đỏ rực trời?' thuộc loại đại từ nào?",
            "options": [
                "Đại từ thay thế",
                "Đại từ nghi vấn",
                "Đại từ xưng hô",
                "Không phải đại từ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Câu nào dưới đây có chứa đại từ thay thế?",
            "options": [
                "Ai đã làm điều đó?",
                "Bạn ở đâu?",
                "Hoa đẹp. Bướm cũng vậy.",
                "Tôi là học sinh lớp 5."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Trong câu 'Chúng tôi rất yêu trường học của mình.', đại từ xưng hô là từ nào?",
            "options": [
                "trường học",
                "rất",
                "chúng tôi",
                "yêu"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};

// --- LOGIC BÀI 1: CHỌN ĐÁP ÁN ĐẠI TỪ THAY THẾ ---
const dapAnDungB1 = { a: 1, b: 1, c: 0 };
// a: "Vàng óng" (index 1), b: "Cao và thẳng" (index 1), c: "Cánh đồng vàng ruộm..." (index 0)

window.chonDapAnB1 = function(cau, idx) {
    const dung = dapAnDungB1[cau] === idx;
    const fbEl = document.getElementById(`fb-vn9-b1${cau}`);
    if (!fbEl) return;
    fbEl.classList.remove('hidden');

    if (dung) {
        fbEl.innerHTML = "🎉 Chính xác!";
        fbEl.className = "text-base font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    } else {
        fbEl.innerHTML = "⚠️ Chưa đúng, em hãy suy nghĩ lại nhé!";
        fbEl.className = "text-base font-bold px-4 py-2 rounded-xl bg-rose-600 text-white";
    }

    // Đánh dấu nút đã chọn
    const opts = document.getElementById(`vn9-b1${cau}-opts`);
    if (opts) {
        const buttons = opts.querySelectorAll('button');
        buttons.forEach((btn, i) => {
            if (i === idx) {
                btn.className = dung
                    ? "px-5 py-3 bg-emerald-600 border-2 border-emerald-100 text-white font-bold rounded-xl text-base shadow-sm"
                    : "px-5 py-3 bg-rose-600 border-2 border-rose-100 text-white font-bold rounded-xl text-base shadow-sm";
            }
        });
    }
};

// --- LOGIC BÀI 2: CHỌN TỪ DÙNG ĐỂ HỎI ---
const dapAnDungB2 = { a: 'ai', b: 'đâu', c: 'nào' };

window.chonTuHoi = function(doan, tu, element) {
    const dung = dapAnDungB2[doan] === tu.toLowerCase();
    const fbEl = document.getElementById(`fb-vn9-b2${doan}`);
    if (!fbEl) return;
    fbEl.classList.remove('hidden');

    if (dung) {
        fbEl.innerHTML = `✅ Đúng! Từ "${tu}" là đại từ nghi vấn (dùng để hỏi).`;
        fbEl.className = "text-sm font-bold px-3 py-1.5 rounded-lg mt-2 bg-emerald-600 text-white";
        if (element) {
            element.className = "bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded-md transition-all";
        }
    } else {
        fbEl.innerHTML = `⚠️ Từ "${tu}" không phải là từ dùng để hỏi. Em hãy thử lại nhé!`;
        fbEl.className = "text-sm font-bold px-3 py-1.5 rounded-lg mt-2 bg-rose-600 text-white";
        if (element) {
            element.className = "bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded-md transition-all";
            setTimeout(() => {
                element.className = "hover:bg-emerald-600 px-1 rounded transition-all cursor-pointer focus:outline-none";
            }, 129);
        }
    }
};

// --- LOGIC BÀI 4: KIỂM TRA ĐẠI TỪ TRONG CÂU VIẾT ---
const danhSachDaiTu = [
    'tôi', 'tớ', 'mình', 'ta', 'chúng tôi', 'chúng tớ', 'chúng mình', 'chúng ta',
    'cậu', 'bạn', 'mày', 'chúng mày', 'nó', 'họ', 'hắn',
    'ai', 'gì', 'nào', 'sao', 'đâu', 'bao nhiêu',
    'thế', 'vậy', 'đó', 'này', 'kia', 'ấy',
    'em', 'anh', 'chị', 'ông', 'bà', 'bố', 'mẹ', 'con', 'cháu', 'thầy'
];

window.kiemTraBai4Vn9 = function() {
    const input = document.getElementById('vn9-b4-input');
    const fb = document.getElementById('fb-vn9-b4');
    if (!input || !fb) return;

    const text = input.value.trim().toLowerCase();
    fb.classList.remove('hidden');

    if (text.length < 5) {
        fb.innerHTML = "⚠️ Em cần viết ít nhất một câu đáp lại lời ngô nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-rose-600 text-white";
        return;
    }

    // Tìm đại từ trong câu
    const timThay = danhSachDaiTu.filter(dt => {
        const regex = new RegExp(`(^|\\s|,|\\.)${dt}($|\\s|,|\\.|!)`, 'i');
        return regex.test(text);
    });

    if (timThay.length > 0) {
        fb.innerHTML = `🎉 Tuyệt vời! Em đã sử dụng đại từ: <strong>${timThay.join(', ')}</strong>. Câu trả lời rất hay!`;
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "🤔 Hình như câu của em chưa có đại từ. Hãy thử dùng các từ như: <strong>tớ, cậu, mình, chúng mình,...</strong>";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
    }
};

window.resetBai4Vn9 = function() {
    const input = document.getElementById('vn9-b4-input');
    const fb = document.getElementById('fb-vn9-b4');
    if (input) input.value = '';
    if (fb) fb.classList.add('hidden');
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn9 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 9',
            '🎓',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài Luyện từ và câu: Đại từ!</p><p class="text-lg text-gray-800 mt-3">Em đã nắm vững 3 loại đại từ: thay thế, nghi vấn và xưng hô.</p></div>'
        );
    }
};
