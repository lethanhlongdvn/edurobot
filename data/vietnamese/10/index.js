export const lesson10 = {
    "topic": "Tiếng Việt 5",
    "week": "2",
    "period": "10",
    "title": "VIẾT: LẬP DÀN Ý CHO BÀI VĂN KỂ CHUYỆN SÁNG TẠO",
    "desc": "Bài học hướng dẫn học sinh cách chuẩn bị, lập dàn ý chi tiết cho bài văn kể chuyện sáng tạo theo 3 cách: sáng tạo thêm chi tiết, thay đổi kết thúc, hoặc đóng vai nhân vật.",
    "subject": "Viết",
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
                Biết cách chuẩn bị trước khi lập dàn ý: lựa chọn câu chuyện, nhớ lại nội dung, chọn cách sáng tạo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Lập được dàn ý hoàn chỉnh (mở bài, thân bài, kết bài) cho bài văn kể chuyện sáng tạo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Biết góp ý, chỉnh sửa dàn ý và chia sẻ với người thân.
            </li>
        </ul>
    </div>

    <!-- 📋 CHỌN ĐỀ BÀI -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-5">
        <h3 class="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-3">
            <span class="p-1.5 bg-sky-600 text-white rounded-lg text-sm">📋</span>
            Chọn 1 trong 2 đề dưới đây:
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <button onclick="chonDeVn10(1)" id="vn10-de1-btn" class="text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group">
                <p class="font-black text-sky-900 text-2xl md:text-3xl group-hover:text-sky-700 transition-colors">Đề 1</p>
                <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">Viết bài văn kể sáng tạo câu chuyện <em class="text-sky-800 font-bold">Thanh âm của gió</em> hoặc <em class="text-sky-800 font-bold">Cánh đồng hoa</em>.</p>
            </button>

            <button onclick="chonDeVn10(2)" id="vn10-de2-btn" class="text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group">
                <p class="font-black text-emerald-900 text-2xl md:text-3xl group-hover:text-emerald-700 transition-colors">Đề 2</p>
                <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">Viết bài văn kể sáng tạo một câu chuyện có nhân vật chính là <em class="text-emerald-800 font-bold">con vật</em> hoặc <em class="text-emerald-800 font-bold">đồ vật</em>.</p>
            </button>
        </div>
        <div id="fb-vn10-de" class="hidden text-base font-bold px-4 py-2 rounded-xl"></div>
    </div>

    <!-- 1️⃣ BƯỚC 1: CHUẨN BỊ (Sơ đồ tư duy) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-sky-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>
        <div class="relative z-10 space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chuẩn bị</h3>
            </div>

            <!-- Sơ đồ tư duy tương tác -->
            <div class="bg-sky-50/30 p-6 md:p-8 rounded-[32px] border border-sky-100">
                <!-- Nhánh 1: Lựa chọn câu chuyện -->
                <div class="space-y-6">
                    <div class="flex flex-col md:flex-row gap-4 items-start w-full">
                        <div class="space-y-4 flex-1 w-full">
                            <!-- Nhánh: Lựa chọn câu chuyện -->
                            <div class="bg-sky-100/70 p-4 rounded-2xl border border-sky-100">
                                <p class="font-black text-sky-900 text-2xl md:text-3xl mb-2">📖 Lựa chọn câu chuyện (theo yêu cầu của đề bài)</p>
                                <div class="relative">
                                    <input type="text" id="vn10-ten-chuyen" class="w-full p-3 pr-14 text-2xl md:text-3xl border-2 border-sky-100 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-600 outline-none transition-all font-medium" placeholder="Em chọn kể câu chuyện gì? (VD: Thanh âm của gió)">
                                    <button onclick="toggleMicVn10('vn10-ten-chuyen')" id="btn-mic-vn10-ten-chuyen" class="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                                </div>
                            </div>

                            <!-- Nhánh: Nhớ lại câu chuyện -->
                            <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 space-y-3">
                                <p class="font-black text-amber-900 text-2xl md:text-3xl">🧠 Nhớ lại câu chuyện</p>
                                <div class="grid grid-cols-1 gap-4">
                                    <div class="space-y-1">
                                        <label class="text-xl md:text-2xl font-black text-amber-600">🌄 Bối cảnh</label>
                                        <div class="relative">
                                            <textarea id="vn10-boi-canh" rows="3" class="w-full p-3 pr-14 text-2xl md:text-3xl border-2 border-amber-100 rounded-xl focus:border-amber-500 outline-none transition-all font-medium resize-none" placeholder="Câu chuyện xảy ra ở đâu, khi nào?"></textarea>
                                            <button onclick="toggleMicVn10('vn10-boi-canh')" id="btn-mic-vn10-boi-canh" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-xl md:text-2xl font-black text-amber-600">👤 Nhân vật</label>
                                        <div class="relative">
                                            <textarea id="vn10-nhan-vat" rows="3" class="w-full p-3 pr-14 text-2xl md:text-3xl border-2 border-amber-100 rounded-xl focus:border-amber-500 outline-none transition-all font-medium resize-none" placeholder="Có những nhân vật nào?"></textarea>
                                            <button onclick="toggleMicVn10('vn10-nhan-vat')" id="btn-mic-vn10-nhan-vat" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-xl md:text-2xl font-black text-amber-600">📜 Diễn biến</label>
                                        <div class="relative">
                                            <textarea id="vn10-dien-bien" rows="3" class="w-full p-3 pr-14 text-2xl md:text-3xl border-2 border-amber-100 rounded-xl focus:border-amber-500 outline-none transition-all font-medium resize-none" placeholder="Sự việc chính diễn ra thế nào?"></textarea>
                                            <button onclick="toggleMicVn10('vn10-dien-bien')" id="btn-mic-vn10-dien-bien" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Nhánh: Lựa chọn cách sáng tạo -->
                            <div class="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 space-y-3">
                                <p class="font-black text-rose-900 text-2xl md:text-3xl">✨ Lựa chọn cách sáng tạo</p>
                                <div class="flex flex-wrap gap-3">
                                    <button onclick="chonCachSangTao(1)" id="vn10-cach1-btn" class="px-5 py-3 bg-white border-2 border-rose-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-rose-400 active:scale-95 transition-all">
                                        🌟 Sáng tạo thêm chi tiết
                                    </button>
                                    <button onclick="chonCachSangTao(2)" id="vn10-cach2-btn" class="px-5 py-3 bg-white border-2 border-rose-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-rose-400 active:scale-95 transition-all">
                                        🔄 Thay đổi cách kết thúc
                                    </button>
                                    <button onclick="chonCachSangTao(3)" id="vn10-cach3-btn" class="px-5 py-3 bg-white border-2 border-rose-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-rose-400 active:scale-95 transition-all">
                                        🎭 Đóng vai nhân vật
                                    </button>
                                </div>
                                <div id="fb-vn10-cach" class="hidden text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nút Nộp Bài Chuẩn Bị -->
            <div class="flex flex-col items-center gap-4 pt-6">
                <button onclick="nopPhanChuanBiVn10()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-2xl md:text-3xl rounded-full shadow-xl transition-all active:scale-[0.98] flex items-center gap-3">
                    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-lg shadow-sm">✓</div>
                    <span>NỘP BÀI CHUẨN BỊ</span>
                </button>
                <div id="fb-vn10-chuanbi" class="hidden text-2xl md:text-3xl font-bold px-6 py-4 rounded-2xl w-full text-center shadow-md"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 2️⃣ BƯỚC 2: LẬP DÀN Ý -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Lập dàn ý</h3>
            </div>

            <!-- MỞ BÀI -->
            <div class="bg-sky-100/50 p-5 md:p-6 rounded-[28px] border border-sky-100 space-y-3">
                <div class="flex items-center gap-3">
                    <div class="px-4 py-2 bg-sky-600 text-white font-black rounded-xl text-xl md:text-2xl shadow-sm">Mở bài</div>
                    <p class="text-2xl md:text-3xl text-gray-800 font-medium italic">Giới thiệu tên câu chuyện, tên tác giả,... (Nếu đóng vai nhân vật, em cần giới thiệu mình là nhân vật nào.)</p>
                </div>
                <div class="relative">
                    <textarea id="vn10-mo-bai" rows="3" class="w-full p-4 pr-14 text-2xl md:text-3xl border-2 border-sky-100 rounded-2xl focus:border-sky-500 focus:ring-2 focus:ring-sky-600 outline-none transition-all resize-none font-medium" placeholder="VD: Em xin kể lại câu chuyện 'Thanh âm của gió' của tác giả..."></textarea>
                    <button onclick="toggleMicVn10('vn10-mo-bai')" id="btn-mic-vn10-mo-bai" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                </div>
            </div>

            <!-- THÂN BÀI -->
            <div class="bg-emerald-50/50 p-5 md:p-6 rounded-[28px] border border-emerald-100 space-y-3">
                <div class="flex items-center gap-3 flex-wrap">
                    <div class="px-4 py-2 bg-emerald-600 text-white font-black rounded-xl text-xl md:text-2xl shadow-sm">Thân bài</div>
                    <p class="text-2xl md:text-3xl text-gray-800 font-medium italic flex-1">Kể lại câu chuyện theo trình tự hợp lí, có chi tiết sáng tạo.</p>
                </div>

                <!-- Gợi ý 3 cách sáng tạo -->
                <div class="bg-white/80 p-4 rounded-xl border border-emerald-100 space-y-2">
                    <p class="text-xl md:text-2xl font-black text-emerald-800 uppercase tracking-wider">✨ 3 cách kể sáng tạo:</p>
                    <ul class="text-2xl md:text-3xl text-gray-800 space-y-1.5 font-medium ml-2">
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-900 font-black shrink-0">–</span>
                            <span><strong>Sáng tạo thêm chi tiết</strong> (có thể lựa chọn sáng tạo một hoặc nhiều chi tiết).</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-900 font-black shrink-0">–</span>
                            <span><strong>Thay đổi cách kết thúc</strong> theo tưởng tượng của em.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-emerald-900 font-black shrink-0">–</span>
                            <span><strong>Đóng vai nhân vật</strong> để kể lại câu chuyện (chú ý cách xưng hô, cách thể hiện lời nói, suy nghĩ, cảm xúc phù hợp với nhân vật).</span>
                        </li>
                    </ul>
                </div>

                <div class="relative">
                    <textarea id="vn10-than-bai" rows="6" class="w-full p-4 pr-14 text-2xl md:text-3xl border-2 border-emerald-100 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 outline-none transition-all resize-none font-medium" placeholder="Liệt kê các ý chính của thân bài:&#10;- Sự việc 1: ...&#10;- Sự việc 2: ...&#10;- Chi tiết sáng tạo: ..."></textarea>
                    <button onclick="toggleMicVn10('vn10-than-bai')" id="btn-mic-vn10-than-bai" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                </div>
            </div>

            <!-- KẾT BÀI -->
            <div class="bg-amber-50/50 p-5 md:p-6 rounded-[28px] border border-amber-100 space-y-3">
                <div class="flex items-center gap-3">
                    <div class="px-4 py-2 bg-amber-500 text-white font-black rounded-xl text-xl md:text-2xl shadow-sm">Kết bài</div>
                    <p class="text-2xl md:text-3xl text-gray-800 font-medium italic">Nêu suy nghĩ, cảm xúc,... về câu chuyện hoặc nêu kết thúc dưới góc nhìn nhân vật (nếu đóng vai kể chuyện).</p>
                </div>
                <div class="relative">
                    <textarea id="vn10-ket-bai" rows="3" class="w-full p-4 pr-14 text-2xl md:text-3xl border-2 border-amber-100 rounded-2xl focus:border-amber-500 focus:ring-2 focus:ring-amber-600 outline-none transition-all resize-none font-medium" placeholder="VD: Câu chuyện giúp em hiểu rằng..."></textarea>
                    <button onclick="toggleMicVn10('vn10-ket-bai')" id="btn-mic-vn10-ket-bai" class="absolute right-3 top-3 p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all" title="Nói để nhập văn bản"><span class="text-lg">🎤</span></button>
                </div>
            </div>
        </div>
    </section>

    <!-- 3️⃣ BƯỚC 3: GÓP Ý VÀ CHỈNH SỬA -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-5">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Góp ý và chỉnh sửa</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-100 space-y-3">
                    <p class="font-black text-rose-900 text-2xl md:text-3xl flex items-center gap-2">📝 Nội dung câu chuyện</p>
                    <ul class="text-2xl md:text-3xl text-gray-800 space-y-2 font-medium">
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check1" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check1">Câu chuyện có đầy đủ mở bài, thân bài, kết bài?</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check2" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check2">Các sự việc được kể theo trình tự hợp lí?</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check3" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check3">Nội dung câu chuyện đúng so với bản gốc?</label>
                        </li>
                    </ul>
                </div>

                <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-100 space-y-3">
                    <p class="font-black text-rose-900 text-2xl md:text-3xl flex items-center gap-2">✨ Cách sáng tạo</p>
                    <ul class="text-2xl md:text-3xl text-gray-800 space-y-2 font-medium">
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check4" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check4">Có ít nhất 1 chi tiết sáng tạo rõ ràng?</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check5" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check5">Chi tiết sáng tạo phù hợp với câu chuyện?</label>
                        </li>
                        <li class="flex items-start gap-2">
                            <input type="checkbox" id="vn10-check6" class="mt-1.5 w-6 h-6 accent-rose-600 shrink-0">
                            <label for="vn10-check6">Dùng lời nói, cảm xúc phù hợp với nhân vật?</label>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-start gap-3">
                <span class="text-lg md:text-2xl shrink-0">🏠</span>
                <p class="text-2xl md:text-3xl text-sky-800 font-bold">Chia sẻ với người thân dàn ý bài viết của em và trao đổi về cách sáng tạo cho câu chuyện.</p>
            </div>

            <!-- Nút kiểm tra dàn ý -->
            <div class="flex justify-end items-center gap-4"><button onclick="xoaDanYVn10()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="kiemTraDanYVn10();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn10-dany" class="hidden text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn10()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bài văn kể chuyện sáng tạo gồm mấy phần chính?",
            "options": [
                "2 phần: mở bài và kết bài",
                "3 phần: mở bài, thân bài, kết bài",
                "4 phần: mở bài, nội dung, kết luận, phụ lục",
                "1 phần: thân bài"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần mở bài của bài văn kể chuyện sáng tạo cần có những gì?",
            "options": [
                "Nêu cảm xúc về câu chuyện",
                "Giới thiệu tên câu chuyện, tên tác giả,...",
                "Liệt kê các sự việc chính",
                "Kể toàn bộ diễn biến"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi đóng vai nhân vật để kể lại câu chuyện, phần mở bài cần giới thiệu thêm điều gì?",
            "options": [
                "Giới thiệu tên tác giả bản gốc",
                "Giới thiệu mình là nhân vật nào",
                "Giới thiệu cảm xúc của người đọc",
                "Kể ngay sự việc đầu tiên"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Có mấy cách kể chuyện sáng tạo được nêu trong bài?",
            "options": [
                "2 cách",
                "3 cách",
                "4 cách",
                "5 cách"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cách kể sáng tạo nào sau đây KHÔNG được nhắc đến trong bài?",
            "options": [
                "Sáng tạo thêm chi tiết",
                "Thay đổi cách kết thúc",
                "Thay đổi hoàn toàn nội dung câu chuyện",
                "Đóng vai nhân vật"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "'Sáng tạo thêm chi tiết' nghĩa là gì?",
            "options": [
                "Bỏ bớt chi tiết so với bản gốc",
                "Thêm vào những chi tiết mới do em tưởng tượng",
                "Sao chép thêm chi tiết từ câu chuyện khác",
                "Chỉ kể những chi tiết chính"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi 'đóng vai nhân vật' kể chuyện, em cần chú ý điều gì?",
            "options": [
                "Kể bằng ngôi thứ ba",
                "Cách xưng hô, lời nói, suy nghĩ, cảm xúc phù hợp với nhân vật",
                "Không cần thay đổi gì so với bản gốc",
                "Chỉ kể phần kết thúc"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần kết bài của bài văn kể chuyện sáng tạo cần nêu điều gì?",
            "options": [
                "Liệt kê lại toàn bộ nhân vật",
                "Suy nghĩ, cảm xúc về câu chuyện hoặc kết thúc dưới góc nhìn nhân vật",
                "Giới thiệu tên tác giả",
                "Kể lại phần mở đầu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bước 'Chuẩn bị' gồm những việc nào?",
            "options": [
                "Viết ngay bài văn hoàn chỉnh",
                "Lựa chọn câu chuyện, nhớ lại nội dung, chọn cách sáng tạo",
                "Chỉ cần đọc lại câu chuyện",
                "Góp ý và chỉnh sửa bài viết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Khi nhớ lại câu chuyện, em cần nhớ những yếu tố nào?",
            "options": [
                "Chỉ cần nhớ tên câu chuyện",
                "Bối cảnh, nhân vật, diễn biến",
                "Chỉ cần nhớ phần kết",
                "Nhớ tên tác giả là đủ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đề 1 yêu cầu kể sáng tạo câu chuyện nào?",
            "options": [
                "Hạt thóc hoặc Tuổi Ngựa",
                "Thanh âm của gió hoặc Cánh đồng hoa",
                "Bến sông tuổi thơ",
                "Bất kỳ câu chuyện nào em thích"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đề 2 yêu cầu nhân vật chính của câu chuyện phải là gì?",
            "options": [
                "Một bạn nhỏ",
                "Con vật hoặc đồ vật",
                "Một người lớn",
                "Một nhân vật lịch sử"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Bước 'Góp ý và chỉnh sửa' cần kiểm tra những gì?",
            "options": [
                "Chỉ kiểm tra chính tả",
                "Nội dung câu chuyện và cách sáng tạo các chi tiết",
                "Chỉ kiểm tra phần mở bài",
                "Đếm số trang bài viết"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sau khi lập dàn ý, em nên làm gì?",
            "options": [
                "Bỏ dàn ý và viết tự do",
                "Chia sẻ dàn ý với người thân và trao đổi về cách sáng tạo",
                "Chép lại dàn ý của bạn",
                "Không cần làm gì thêm"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Thân bài cần kể câu chuyện theo cách nào?",
            "options": [
                "Kể ngược từ cuối lên đầu",
                "Kể theo trình tự hợp lí, có chi tiết sáng tạo",
                "Chỉ kể phần em thích",
                "Kể tóm tắt bằng một câu"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC CHỌN ĐỀ BÀI ---
let deChonVn10 = null;

window.chonDeVn10 = function(de) {
    deChonVn10 = de;
    const btn1 = document.getElementById('vn10-de1-btn');
    const btn2 = document.getElementById('vn10-de2-btn');
    const fb = document.getElementById('fb-vn10-de');

    if (btn1 && btn2) {
        // Đặt lại style
        btn1.className = "text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";
        btn2.className = "text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";

        if (de === 1) {
            btn1.className = "text-left p-6 bg-sky-600 rounded-2xl border-2 border-sky-100 shadow-lg transition-all space-y-2 group text-white";
        } else {
            btn2.className = "text-left p-6 bg-emerald-600 rounded-2xl border-2 border-emerald-100 shadow-lg transition-all space-y-2 group text-white";
        }
    }

    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = de === 1
            ? "✅ Em đã chọn <strong>Đề 1</strong>: Kể sáng tạo câu chuyện <em>Thanh âm của gió</em> hoặc <em>Cánh đồng hoa</em>."
            : "✅ Em đã chọn <strong>Đề 2</strong>: Kể sáng tạo câu chuyện có nhân vật chính là con vật hoặc đồ vật.";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white";
    }
};

// --- LOGIC CHỌN CÁCH SÁNG TẠO ---
let cachSangTaoVn10 = null;
const mauCachSangTao = {
    1: { bg: "bg-sky-600", border: "border-sky-100", label: "Sáng tạo thêm chi tiết" },
    2: { bg: "bg-amber-500", border: "border-amber-100", label: "Thay đổi cách kết thúc" },
    3: { bg: "bg-rose-600", border: "border-rose-100", label: "Đóng vai nhân vật" }
};

window.chonCachSangTao = function(cach) {
    cachSangTaoVn10 = cach;

    // Đặt lại tất cả nút
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`vn10-cach${i}-btn`);
        if (btn) {
            btn.className = "px-5 py-3 bg-white border-2 border-rose-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-rose-400 active:scale-95 transition-all";
        }
    }

    // Đánh dấu nút đã chọn
    const btnChon = document.getElementById(`vn10-cach${cach}-btn`);
    const mau = mauCachSangTao[cach];
    if (btnChon && mau) {
        btnChon.className = `px-5 py-3 ${mau.bg} border-2 ${mau.border} text-white font-bold text-xl md:text-2xl rounded-xl shadow-sm`;
    }

    const fb = document.getElementById('fb-vn10-cach');
    if (fb) {
        fb.classList.remove('hidden');
        fb.innerHTML = `✅ Em chọn cách: <strong>${mau.label}</strong>`;
        fb.className = "text-xl md:text-2xl font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
    }
};

// --- LOGIC KIỂM TRA DÀN Ý ---
window.kiemTraDanYVn10 = function() {
    const moBai = (document.getElementById('vn10-mo-bai')?.value || '').trim();
    const thanBai = (document.getElementById('vn10-than-bai')?.value || '').trim();
    const ketBai = (document.getElementById('vn10-ket-bai')?.value || '').trim();
    const fb = document.getElementById('fb-vn10-dany');
    if (!fb) return;

    fb.classList.remove('hidden');

    const thieuPhan = [];
    if (moBai.length < 10) thieuPhan.push('Mở bài');
    if (thanBai.length < 15) thieuPhan.push('Thân bài');
    if (ketBai.length < 10) thieuPhan.push('Kết bài');

    if (thieuPhan.length === 0) {
        fb.innerHTML = "🎉 Tuyệt vời! Dàn ý của em đã có đầy đủ 3 phần: Mở bài, Thân bài, Kết bài. Hãy đọc lại và chỉnh sửa cho hoàn thiện nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = `⚠️ Em cần bổ sung thêm phần: <strong>${thieuPhan.join(', ')}</strong>. Hãy viết chi tiết hơn nhé!`;
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
    }
};

// --- XOÁ TẤT CẢ ---
window.xoaDanYVn10 = function() {
    const ids = ['vn10-ten-chuyen', 'vn10-boi-canh', 'vn10-nhan-vat', 'vn10-dien-bien', 'vn10-mo-bai', 'vn10-than-bai', 'vn10-ket-bai'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const fbIds = ['fb-vn10-de', 'fb-vn10-cach', 'fb-vn10-dany', 'fb-vn10-chuanbi'];
    fbIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Đặt lại nút đề
    deChonVn10 = null;
    cachSangTaoVn10 = null;
    const btn1 = document.getElementById('vn10-de1-btn');
    const btn2 = document.getElementById('vn10-de2-btn');
    if (btn1) btn1.className = "text-left p-6 bg-sky-50/60 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";
    if (btn2) btn2.className = "text-left p-6 bg-emerald-50/60 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-lg transition-all active:scale-[0.98] space-y-2 group";

    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`vn10-cach${i}-btn`);
        if (btn) btn.className = "px-5 py-3 bg-white border-2 border-rose-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-rose-400 active:scale-95 transition-all";
    }

    // Đặt lại checkbox
    for (let i = 1; i <= 6; i++) {
        const cb = document.getElementById(`vn10-check${i}`);
        if (cb) cb.checked = false;
    }
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn10 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 10',
            '✍️',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài Lập dàn ý cho bài văn kể chuyện sáng tạo!</p><p class="text-lg text-gray-800 mt-3">Hãy chia sẻ dàn ý với người thân và chuẩn bị viết bài văn hoàn chỉnh nhé.</p></div>'
        );
    }
};

// --- NỘP BÀI CHUẨN BỊ (TAB 1) ---
window.nopPhanChuanBiVn10 = function() {
    const tenChuyen = (document.getElementById('vn10-ten-chuyen')?.value || '').trim();
    const boiCanh = (document.getElementById('vn10-boi-canh')?.value || '').trim();
    const nhanVat = (document.getElementById('vn10-nhan-vat')?.value || '').trim();
    const dienBien = (document.getElementById('vn10-dien-bien')?.value || '').trim();
    const fb = document.getElementById('fb-vn10-chuanbi');
    if (!fb) return;

    fb.classList.remove('hidden');

    if (deChonVn10 === null) {
        fb.innerHTML = "⚠️ Em hãy chọn 1 trong 2 đề bài ở trên trước nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white mt-4";
        return;
    }
    if (tenChuyen.length < 2) {
        fb.innerHTML = "⚠️ Em hãy nhập tên câu chuyện mà em chọn nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white mt-4";
        return;
    }
    if (boiCanh.length < 5 || nhanVat.length < 5 || dienBien.length < 5) {
        fb.innerHTML = "⚠️ Em hãy nhớ lại và điền đầy đủ thông tin về Bối cảnh, Nhân vật và Diễn biến câu chuyện nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white mt-4";
        return;
    }
    if (cachSangTaoVn10 === null) {
        fb.innerHTML = "⚠️ Em hãy chọn 1 cách kể chuyện sáng tạo ở dưới nhé!";
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-amber-500 text-white mt-4";
        return;
    }

    fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành phần chuẩn bị xuất sắc. Hệ thống đang chuyển sang bước Lập dàn ý...";
    fb.className = "text-2xl md:text-3xl font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white mt-4";

    setTimeout(() => {
        if (typeof router !== 'undefined' && typeof router.switchTab === 'function') {
            router.switchTab('practice');
            // Cuộn lên đầu trang cho dễ thao tác
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 1510);
};

// --- SPEECH TO TEXT (GIỌNG NÓI THÀNH VĂN BẢN) ---
let boGhiAmVn10 = null;
window.toggleMicVn10 = function(targetId) {
    const input = document.getElementById(targetId);
    const micBtn = document.getElementById(`btn-mic-${targetId}`);
    if (!input) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Trình duyệt của em không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome nhé!');
        return;
    }

    // Nếu đang ghi âm -> dừng lại
    if (boGhiAmVn10) {
        boGhiAmVn10.stop();
        boGhiAmVn10 = null;
        if (micBtn) {
            micBtn.classList.remove('animate-pulse', 'bg-red-500');
            micBtn.classList.add('bg-rose-500');
            micBtn.querySelector('span').innerText = '🎤';
        }
        return;
    }

    try {
        boGhiAmVn10 = new SpeechRecognition();
        boGhiAmVn10.lang = 'vi-VN';
        boGhiAmVn10.interimResults = false;
        boGhiAmVn10.maxAlternatives = 1;

        boGhiAmVn10.onstart = function() {
            if (micBtn) {
                micBtn.classList.add('animate-pulse', 'bg-red-500');
                micBtn.classList.remove('bg-rose-500');
                micBtn.querySelector('span').innerText = '🛑';
            }
        };

        boGhiAmVn10.onresult = function(event) {
            const resultText = event.results[0][0].transcript;
            if (input.tagName === 'TEXTAREA') {
                input.value = input.value ? input.value + ' ' + resultText : resultText;
            } else {
                input.value = input.value ? input.value + ' ' + resultText : resultText;
            }
            input.dispatchEvent(new Event('input'));
        };

        boGhiAmVn10.onerror = function(event) {
            console.error('Lỗi nhận diện giọng nói:', event.error);
        };

        boGhiAmVn10.onend = function() {
            if (micBtn) {
                micBtn.classList.remove('animate-pulse', 'bg-red-500');
                micBtn.classList.add('bg-rose-500');
                micBtn.querySelector('span').innerText = '🎤';
            }
            boGhiAmVn10 = null;
        };

        boGhiAmVn10.start();
    } catch (e) {
        console.error('Không thể khởi động thu âm:', e);
        boGhiAmVn10 = null;
    }
};
