export const lesson42 = {
    "topic": "Tiếng Việt 5",
    "week": "6",
    "period": "42",
    "title": "NÓI VÀ NGHE: BẢO TỒN ĐỘNG VẬT HOANG DÃ",
    "desc": "Bài học giúp học sinh thực hành thảo luận nhóm về chủ đề bảo tồn động vật hoang dã: tìm hiểu thực trạng, nhận thức được tầm quan trọng và nêu được những việc cần làm để bảo vệ các loài động vật hoang dã.",
    "subject": "Nói & Nghe",
    "theme": "Măng non",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Thảo luận được về thực trạng và nguy cơ tuyệt chủng của nhiều loài động vật hoang dã.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Khẳng định được tầm quan trọng của việc bảo tồn động vật hoang dã với con người và thiên nhiên.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nêu được những việc cần làm để bảo tồn động vật hoang dã một cách cụ thể, thiết thực.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Em biết gì về động vật hoang dã?</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Chọn đáp án đúng cho mỗi câu hỏi dưới đây:</p>

        <div class="space-y-6 font-bold text-emerald-800 text-lg md:text-xl">
            <!-- Câu hỏi 1 -->
            <div class="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-3">
                <p>❓ Động vật hoang dã là những loài động vật sống:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button onclick="checkKdVn42(1, this, true)" class="p-3 bg-white hover:bg-emerald-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95">Tự do trong môi trường tự nhiên, không do con người nuôi dưỡng</button>
                    <button onclick="checkKdVn42(1, this, false)" class="p-3 bg-white hover:bg-emerald-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95">Trong chuồng trại do con người chăm sóc và nuôi dưỡng</button>
                </div>
            </div>

            <!-- Câu hỏi 2 -->
            <div id="kd-q2-vn42" class="hidden p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-3">
                <p>❓ Trong số các hành động dưới đây, hành động nào giúp BẢO VỆ động vật hoang dã?</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button onclick="checkKdVn42(2, this, false)" class="p-3 bg-white hover:bg-emerald-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95">Săn bắt và buôn bán động vật quý hiếm</button>
                    <button onclick="checkKdVn42(2, this, true)" class="p-3 bg-white hover:bg-emerald-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95">Lập các khu bảo tồn và tuyên truyền không chặt phá rừng</button>
                </div>
            </div>

            <div id="fb-vn42-kd" class="hidden p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all"></div>
        </div>
    </div>

    <!-- 📖 KHÁM PHÁ (NỘI DUNG CHUẨN BỊ) -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl space-y-8">
        <div class="flex items-center justify-between border-b border-emerald-100 pb-4">
            <span class="text-emerald-900 font-black text-2xl md:text-3xl flex items-center gap-2">
                <span>📖</span> 1. Chuẩn bị
            </span>
        </div>

        <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 font-bold text-amber-600 text-base md:text-lg">
            <p>Tìm hiểu về động vật hoang dã và việc bảo tồn động vật hoang dã qua <strong>sách báo</strong>, <strong>in-tơ-nét</strong>.</p>
            <p class="mt-2 text-emerald-800">💡 <em>Gợi ý:</em> Một số cuốn sách về động vật hoang dã: <em>Sinh vật trú ẩn và săn mồi</em> (Rắt Ô-oen), <em>Khám phá rừng già – Động vật hoang dã</em> (Xti Pa-cơ),...</p>
        </div>

        <div class="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100 font-bold text-emerald-800 text-base md:text-lg">
            <p>📝 Ghi chép các thông tin quan trọng về những hoạt động bảo vệ động vật hoang dã.</p>
        </div>

        <!-- SVG Minh họa động vật hoang dã -->
        <div class="bg-emerald-50/20 p-4 rounded-3xl border border-emerald-100">
            <h4 class="font-black text-emerald-800 text-xl md:text-2xl mb-4 flex items-center gap-2">🦁 Một số loài động vật hoang dã đang cần bảo vệ:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button onclick="xemThongTinDongVat42('voi')" class="p-4 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-2xl font-black text-emerald-800 text-sm md:text-base shadow-sm transition-all active:scale-95 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 80 60" class="w-16 h-12">
                        <ellipse cx="35" cy="38" rx="22" ry="14" fill="#94a3b8"/>
                        <circle cx="55" cy="34" r="10" fill="#94a3b8"/>
                        <path d="M 58 40 Q 68 55 65 62" stroke="#94a3b8" stroke-width="5" fill="none" stroke-linecap="round"/>
                        <ellipse cx="28" cy="50" rx="5" ry="7" fill="#7c8fa0"/>
                        <ellipse cx="42" cy="50" rx="5" ry="7" fill="#7c8fa0"/>
                        <ellipse cx="50" cy="29" rx="4" ry="2" fill="#7c8fa0"/>
                        <circle cx="58" cy="31" r="2" fill="#1e242b"/>
                    </svg>
                    🐘 Voi châu Á
                </button>
                <button onclick="xemThongTinDongVat42('ho')" class="p-4 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-2xl font-black text-emerald-800 text-sm md:text-base shadow-sm transition-all active:scale-95 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 80 60" class="w-16 h-12">
                        <ellipse cx="38" cy="38" rx="24" ry="14" fill="#f42e0b"/>
                        <circle cx="58" cy="30" r="12" fill="#f42e0b"/>
                        <circle cx="58" cy="30" r="12" fill="none" stroke="#1c1942" stroke-width="2" stroke-dasharray="4 3"/>
                        <ellipse cx="28" cy="50" rx="4" ry="7" fill="#d97742"/>
                        <ellipse cx="45" cy="50" rx="4" ry="7" fill="#d97742"/>
                        <line x1="58" y1="35" x2="72" y2="38" stroke="#1c1942" stroke-width="1.5"/>
                        <line x1="58" y1="38" x2="72" y2="42" stroke="#1c1942" stroke-width="1.5"/>
                        <circle cx="58" cy="28" r="2" fill="#1e242b"/>
                    </svg>
                    🐯 Hổ Đông Dương
                </button>
                <button onclick="xemThongTinDongVat42('tewgiac')" class="p-4 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-2xl font-black text-emerald-800 text-sm md:text-base shadow-sm transition-all active:scale-95 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 80 60" class="w-16 h-12">
                        <ellipse cx="35" cy="40" rx="25" ry="13" fill="#78742c"/>
                        <circle cx="57" cy="35" r="10" fill="#78742c"/>
                        <path d="M 60 28 L 67 18" stroke="#57542e" stroke-width="5" stroke-linecap="round"/>
                        <ellipse cx="25" cy="51" rx="5" ry="7" fill="#57542e"/>
                        <ellipse cx="45" cy="51" rx="5" ry="7" fill="#57542e"/>
                        <path d="M 15 44 L 10 50" stroke="#78742c" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="60" cy="33" r="2" fill="#1e242b"/>
                    </svg>
                    🦏 Tê giác
                </button>
                <button onclick="xemThongTinDongVat42('culy')" class="p-4 bg-white hover:bg-emerald-50 border border-emerald-100 rounded-2xl font-black text-emerald-800 text-sm md:text-base shadow-sm transition-all active:scale-95 flex flex-col items-center gap-2">
                    <svg viewBox="0 0 80 60" class="w-16 h-12">
                        <ellipse cx="40" cy="42" rx="20" ry="12" fill="#c2442c"/>
                        <circle cx="40" cy="28" r="13" fill="#c2442c"/>
                        <circle cx="35" cy="26" r="4" fill="#1c1942" opacity="0.9"/>
                        <circle cx="45" cy="26" r="4" fill="#1c1942" opacity="0.9"/>
                        <circle cx="36" cy="25" r="2" fill="white"/>
                        <circle cx="46" cy="25" r="2" fill="white"/>
                        <path d="M 36 33 Q 40 36 44 33" stroke="#7c2d42" stroke-width="2" fill="none"/>
                        <line x1="40" y1="54" x2="40" y2="62" stroke="#c2442c" stroke-width="4"/>
                    </svg>
                    🐒 Cu li
                </button>
            </div>
            <!-- Khung thông tin động vật -->
            <div id="info-dongvat-42" class="hidden mt-4 p-5 bg-white border border-emerald-100 rounded-2xl text-base md:text-lg font-bold text-emerald-800 space-y-2 shadow-sm">
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 💬 BÀI TẬP 2: THẢO LUẬN NHÓM -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thảo luận</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Người điều hành nêu nội dung thảo luận. Từng bạn trình bày ý kiến đã chuẩn bị.</p>
            </div>
        </div>

        <!-- Hai nội dung thảo luận tương tác -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Thực tế -->
            <div onclick="xemGoiYVn42('thuc-te')" class="p-6 bg-rose-50/50 hover:bg-rose-100/70 border border-rose-100 rounded-3xl cursor-pointer transition-all shadow-sm">
                <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl md:text-3xl block">⚠️</span>
                    <h4 class="text-xl md:text-2xl font-black text-rose-800">Thực tế đáng lo ngại</h4>
                </div>
                <p class="text-gray-800 font-bold text-sm mb-3">Nhấp để xem các ví dụ thực tế từ sách giáo khoa</p>
                <div id="thuc-te" class="hidden p-4 bg-white rounded-2xl border border-rose-100 text-left font-bold text-gray-800 text-base space-y-2 mt-2">
                    <p>🔴 Nhiều loài động vật đang có nguy cơ <strong>tuyệt chủng</strong>, bị <strong>săn bắt, buôn bán trái phép</strong>.</p>
                    <p>🔴 <strong>Rừng bị chặt phá</strong> khiến môi trường sống của động vật hoang dã bị đe doạ.</p>
                    <p>🔴 Mất đi môi trường sống, nhiều loài không còn nơi sinh sản và kiếm ăn.</p>
                </div>
            </div>

            <!-- Những việc cần làm -->
            <div onclick="xemGoiYVn42('viec-lam')" class="p-6 bg-emerald-50/50 hover:bg-emerald-100/70 border border-emerald-100 rounded-3xl cursor-pointer transition-all shadow-sm">
                <div class="flex items-center gap-3 mb-3">
                    <span class="text-2xl md:text-3xl block">✅</span>
                    <h4 class="text-xl md:text-2xl font-black text-emerald-800">Những việc cần làm</h4>
                </div>
                <p class="text-gray-800 font-bold text-sm mb-3">Nhấp để xem các biện pháp bảo tồn</p>
                <div id="viec-lam" class="hidden p-4 bg-white rounded-2xl border border-emerald-100 text-left font-bold text-gray-800 text-base space-y-2 mt-2">
                    <p>✔️ <strong>Lập các khu bảo tồn</strong> thiên nhiên để bảo vệ môi trường sống cho động vật.</p>
                    <p>✔️ <strong>Tuyên truyền vận động</strong> không chặt phá rừng, không săn bắt, không buôn bán động vật hoang dã.</p>
                    <p>✔️ Ủng hộ các tổ chức bảo vệ thiên nhiên và môi trường.</p>
                </div>
            </div>
        </div>

        <!-- Cả nhóm trao đổi -->
        <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 space-y-3">
            <h4 class="font-black text-sky-800 text-lg md:text-xl">🤝 Cả nhóm trao đổi, góp ý và thống nhất ý kiến:</h4>
            <ul class="space-y-2 text-sky-800 font-bold text-base md:text-lg">
                <li class="flex items-start gap-2">
                    <span class="text-sky-800">+</span>
                    Khẳng định <strong>tầm quan trọng</strong> của việc bảo tồn động vật hoang dã.
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-sky-800">+</span>
                    Nhấn mạnh những <strong>việc cần làm</strong> để bảo tồn động vật hoang dã.
                </li>
            </ul>
        </div>
    </section>

    <!-- ⭐ BÀI TẬP 3: ĐÁNH GIÁ -->
    <section class="bg-white p-6 md:p-8 rounded-[36px] border border-emerald-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đánh giá</h3>
                <p class="text-xs font-bold text-gray-800 mt-1">Em hãy tự đánh giá phần thảo luận của mình và của các bạn trong nhóm:</p>
            </div>
        </div>

        <!-- Bảng đánh giá tương tác -->
        <div class="space-y-4">
            <p class="font-black text-emerald-800 text-base md:text-lg">📋 Nhấp vào các tiêu chí để đánh dấu hoàn thành:</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button id="tieu-chi-1" onclick="danhGiaTieuChi42(1)" class="p-5 bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-2xl font-black text-amber-600 text-center transition-all active:scale-95">
                    <span class="text-xl md:text-2xl block mb-2">📌</span>
                    <span class="text-sm md:text-base">Những thông tin quan trọng về thực trạng</span>
                </button>
                <button id="tieu-chi-2" onclick="danhGiaTieuChi42(2)" class="p-5 bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-2xl font-black text-amber-600 text-center transition-all active:scale-95">
                    <span class="text-xl md:text-2xl block mb-2">💡</span>
                    <span class="text-sm md:text-base">Ý kiến hay về giải pháp bảo tồn</span>
                </button>
                <button id="tieu-chi-3" onclick="danhGiaTieuChi42(3)" class="p-5 bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-2xl font-black text-amber-600 text-center transition-all active:scale-95">
                    <span class="text-xl md:text-2xl block mb-2">🌟</span>
                    <span class="text-sm md:text-base">Thống nhất ý kiến nhóm</span>
                </button>
            </div>
            <div id="fb-danh-gia-42" class="hidden p-4 rounded-xl text-center text-lg font-black transition-all"></div>
        </div>

        <!-- Ô tự luận: Cam kết hành động -->
        <div class="bg-emerald-50/20 p-6 rounded-3xl border border-emerald-100 space-y-4">
            <h4 class="font-black text-emerald-800 text-lg md:text-xl">✍️ Em sẽ làm gì để bảo vệ động vật hoang dã?</h4>
            <p class="font-bold text-gray-800 text-sm">Chia sẻ ít nhất 2 việc em có thể làm ngay bây giờ:</p>
            <textarea id="vn42-textarea-camket" rows="4" placeholder="Ví dụ: Em sẽ không mua và sử dụng sản phẩm từ động vật hoang dã. Em sẽ tuyên truyền với bạn bè và gia đình về tầm quan trọng của việc bảo vệ rừng và các loài động vật..." class="w-full p-4 border border-gray-100 rounded-2xl bg-white text-xl md:text-2xl font-semibold focus:border-emerald-500 outline-none shadow-sm"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="nopCamKetVn42();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn42-camket" class="hidden p-5 rounded-2xl text-base font-bold shadow-md transition-all duration-342"></div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiTiet42Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-sky-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Yêu cầu chính của tiết học 'Nói và nghe: Bảo tồn động vật hoang dã' là gì?",
            "options": [
                "Thảo luận về việc bảo tồn động vật hoang dã",
                "Viết bài văn tả một con vật hoang dã",
                "Kể lại chuyến đi thăm vườn thú",
                "Vẽ tranh về rừng nhiệt đới"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Để chuẩn bị cho tiết thảo luận, học sinh được yêu cầu tìm hiểu thông tin qua nguồn nào?",
            "options": [
                "Chỉ hỏi bạn bè trong lớp",
                "Sách báo và in-tơ-nét",
                "Tự tưởng tượng không cần tìm hiểu",
                "Nhờ bố mẹ viết hộ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Thực tế đáng lo ngại nào về động vật hoang dã được nêu trong sách giáo khoa?",
            "options": [
                "Động vật hoang dã ngày càng nhiều và khoẻ mạnh",
                "Nhiều loài đang có nguy cơ tuyệt chủng, bị săn bắt và buôn bán trái phép",
                "Các khu bảo tồn được mở rộng rất nhiều",
                "Con người đang trồng thêm nhiều rừng mới"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Rừng bị chặt phá ảnh hưởng đến động vật hoang dã như thế nào?",
            "options": [
                "Giúp động vật hoang dã có thêm thức ăn",
                "Không ảnh hưởng gì đến đời sống các loài vật",
                "Khiến môi trường sống của động vật hoang dã bị đe doạ",
                "Tạo thêm khu đất trống để động vật chạy nhảy"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Lập các khu bảo tồn thiên nhiên có tác dụng gì?",
            "options": [
                "Chỉ để thu hút khách du lịch",
                "Bảo vệ môi trường sống tự nhiên cho các loài động vật hoang dã",
                "Nhốt động vật vào trong chuồng cho dễ quản lý",
                "Thay thế hoàn toàn môi trường rừng tự nhiên"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Việc tuyên truyền vận động không chặt phá rừng có ý nghĩa gì đối với bảo tồn động vật hoang dã?",
            "options": [
                "Không có ý nghĩa vì rừng và động vật không liên quan",
                "Giúp bảo vệ môi trường sống tự nhiên của động vật hoang dã",
                "Chỉ giúp bảo vệ cây cối, không liên quan đến động vật",
                "Làm giảm nguồn thu nhập của người dân địa phương"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong phần thảo luận nhóm, sau khi các bạn trình bày ý kiến, cả nhóm cần làm gì?",
            "options": [
                "Im lặng và không góp ý thêm",
                "Chỉ nghe bạn giỏi nhất nói",
                "Trao đổi, góp ý và thống nhất ý kiến",
                "Đọc to bài văn mẫu trong sách"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Điều gì cần được khẳng định sau khi cả nhóm thảo luận xong?",
            "options": [
                "Tên của người điều hành thảo luận",
                "Số lượng loài động vật đã tuyệt chủng",
                "Tầm quan trọng của việc bảo tồn động vật hoang dã và những việc cần làm",
                "Địa điểm khu bảo tồn gần trường nhất"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Hành động nào sau đây là SAI khi muốn bảo vệ động vật hoang dã?",
            "options": [
                "Tuyên truyền không săn bắt động vật hoang dã",
                "Ủng hộ các tổ chức bảo vệ thiên nhiên",
                "Mua và sử dụng sản phẩm từ động vật hoang dã",
                "Không chặt phá rừng"
            ],
            "answer": 2,
            "level": 0
        },
        {
            "question": "Cuốn sách 'Sinh vật trú ẩn và săn mồi' được giới thiệu trong sách giáo khoa là của tác giả nào?",
            "options": [
                "Xti Pa-cơ",
                "Rắt Ô-oen",
                "Thi Sảnh",
                "Nguyễn Đình Thi"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong ba tiêu chí đánh giá phần thảo luận, tiêu chí nào KHÔNG được đề cập trong sách giáo khoa?",
            "options": [
                "Những thông tin quan trọng",
                "Ý kiến hay",
                "Điểm số cao nhất",
                "Cả hai tiêu chí 'Những thông tin quan trọng' và 'Ý kiến hay' đều được đề cập"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Học sinh cần ghi chép những thông tin gì trong bước chuẩn bị?",
            "options": [
                "Tên các loài động vật nuôi trong nhà",
                "Các thông tin quan trọng về những hoạt động bảo vệ động vật hoang dã",
                "Địa chỉ của các trang trại chăn nuôi",
                "Công thức nấu ăn từ thực vật"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Người điều hành trong buổi thảo luận nhóm có nhiệm vụ gì?",
            "options": [
                "Tự mình nói hết tất cả các ý kiến",
                "Nêu nội dung thảo luận để các bạn cùng trình bày",
                "Chấm điểm từng bạn trong nhóm",
                "Đọc to bài đọc trong sách giáo khoa"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Ngoài việc lập khu bảo tồn và tuyên truyền, em còn có thể làm gì để góp phần bảo vệ động vật hoang dã?",
            "options": [
                "Mua thêm nhiều đồ chơi có hình con vật",
                "Không mua và sử dụng sản phẩm từ động vật hoang dã, ủng hộ các tổ chức bảo vệ thiên nhiên",
                "Chỉ cần xem phim về động vật hoang dã là đủ",
                "Nuôi thật nhiều động vật hoang dã trong nhà để bảo vệ chúng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tên sách gợi ý thứ hai về động vật hoang dã trong sách giáo khoa là gì?",
            "options": [
                "Thế giới đại dương kì bí",
                "Sinh vật trú ẩn và săn mồi",
                "Khám phá rừng già – Động vật hoang dã",
                "Bách khoa toàn thư thiên nhiên"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Cuối trang sách giáo khoa trang 63, học sinh được dặn thêm phải làm gì?",
            "options": [
                "Viết một bài văn tả cảnh rừng già",
                "Sưu tầm tranh ảnh và tìm đọc thêm những thông tin về vịnh Hạ Long",
                "Học thuộc lòng danh sách động vật hoang dã",
                "Vẽ tranh về một loài động vật yêu thích"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC KHỞI ĐỘNG ---
let kdStep42 = 1;
window.checkKdVn42 = function(step, btn, isCorrect) {
    const fb = document.getElementById("fb-vn42-kd");
    if (!fb) return;

    fb.classList.remove("hidden");
    if (isCorrect) {
        btn.className = "p-3 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl text-left transition-all cursor-default scale-95";
        if (step === 1) {
            fb.innerHTML = "🎉 Chính xác! Động vật hoang dã sống tự do trong thiên nhiên.";
            fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
            setTimeout(() => {
                const q2 = document.getElementById("kd-q2-vn42");
                if (q2) q2.classList.remove("hidden");
                fb.classList.add("hidden");
            }, 1542);
        } else if (step === 2) {
            fb.innerHTML = "🎉 Xuất sắc! Em đã hiểu được hành động bảo vệ động vật hoang dã. Bắt đầu bài học thôi!";
            fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 mt-4 transition-all";
            if (typeof window.showMathFeedback === 'function') {
                window.showMathFeedback("Khởi động thành công", "🦁", "Chào mừng em bước vào bài học 'Bảo tồn động vật hoang dã'!");
            }
        }
    } else {
        btn.className = "p-3 bg-rose-600 text-white border-2 border-rose-100 rounded-2xl text-left transition-all cursor-default scale-95";
        fb.innerHTML = "❌ Chưa chính xác. Em hãy thử lại nhé!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-rose-50 text-rose-800 border border-rose-100 mt-4 transition-all";
        setTimeout(() => {
            btn.className = "p-3 bg-white hover:bg-emerald-50 border-2 border-gray-100 rounded-2xl text-left transition-all active:scale-95";
            fb.classList.add("hidden");
        }, 1542);
    }
};

// --- LOGIC XEM THÔNG TIN ĐỘNG VẬT ---
const thongTinDongVat42 = {
    voi: {
        ten: "🐘 Voi châu Á",
        trangThai: "Nguy cấp (EN)",
        nguyNhan: "Mất môi trường sống do rừng bị chặt phá, bị săn lấy ngà voi.",
        soLuong: "Khoảng 40.042 – 50.042 con còn lại trên thế giới.",
        baoTon: "Các khu bảo tồn và vườn quốc gia tại Việt Nam như Yok Đôn."
    },
    ho: {
        ten: "🐯 Hổ Đông Dương",
        trangThai: "Nguy cấp nghiêm trọng (CR)",
        nguyNhan: "Bị săn bắt vì lấy da và xương, môi trường rừng bị thu hẹp.",
        soLuong: "Khoảng vài trăm con còn lại ở Đông Nam Á.",
        baoTon: "Các chương trình tái thả hổ và bảo vệ hành lang xanh liên quốc gia."
    },
    tewgiac: {
        ten: "🦏 Tê giác một sừng",
        trangThai: "Tuyệt chủng tại Việt Nam (2042)",
        nguyNhan: "Bị săn bắt vì sừng được coi là dược liệu quý trong y học cổ truyền.",
        soLuong: "Tê giác Java đã tuyệt chủng hoàn toàn tại Việt Nam từ năm 2042.",
        baoTon: "Cần nghiêm cấm buôn bán sừng tê và nâng cao ý thức cộng đồng."
    },
    culy: {
        ten: "🐒 Cu li (Loris)",
        trangThai: "Dễ bị tổn thương (VU)",
        nguyNhan: "Bị buôn bán làm thú cưng, mất môi trường sống ở rừng nhiệt đới.",
        soLuong: "Số lượng ngày càng suy giảm do nạn buôn bán trái phép.",
        baoTon: "Nghiêm cấm nuôi nhốt làm thú cưng, bảo vệ rừng nhiệt đới."
    }
};

window.xemThongTinDongVat42 = function(loai) {
    const info = thongTinDongVat42[loai];
    const box = document.getElementById("info-dongvat-42");
    if (!box || !info) return;

    box.classList.remove("hidden");
    box.innerHTML = `
        <h5 class="text-xl font-black text-emerald-800">${info.ten}</h5>
        <p class="text-rose-800">⚠️ <strong>Tình trạng:</strong> ${info.trangThai}</p>
        <p>🌿 <strong>Nguyên nhân:</strong> ${info.nguyNhan}</p>
        <p>🔢 <strong>Số lượng:</strong> ${info.soLuong}</p>
        <p class="text-emerald-800">✅ <strong>Bảo tồn:</strong> ${info.baoTon}</p>
    `;
    box.className = "mt-4 p-5 bg-white border border-emerald-100 rounded-2xl text-base md:text-lg font-bold text-emerald-800 space-y-2 shadow-sm animate-in fade-in duration-342";
};

// --- LOGIC XEM GỢI Ý THẢO LUẬN ---
window.xemGoiYVn42 = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.contains("hidden") ? el.classList.remove("hidden") : el.classList.add("hidden");
};

// --- LOGIC ĐÁNH GIÁ TIÊU CHÍ ---
let tieuChiDone42 = { 1: false, 2: false, 3: false };

window.danhGiaTieuChi42 = function(n) {
    tieuChiDone42[n] = !tieuChiDone42[n];
    const btn = document.getElementById(`tieu-chi-${n}`);
    const fb = document.getElementById("fb-danh-gia-42");
    if (!btn || !fb) return;

    if (tieuChiDone42[n]) {
        btn.className = "p-5 bg-emerald-600 text-white border-2 border-emerald-100 rounded-2xl font-black text-center transition-all active:scale-95";
    } else {
        btn.className = "p-5 bg-amber-50 hover:bg-amber-500 border-2 border-amber-100 rounded-2xl font-black text-amber-600 text-center transition-all active:scale-95";
    }

    const doneCnt = Object.values(tieuChiDone42).filter(Boolean).length;
    fb.classList.remove("hidden");
    if (doneCnt === 3) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã đạt đủ cả 3 tiêu chí thảo luận xuất sắc!";
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-emerald-50 text-emerald-800 border border-emerald-100 transition-all";
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback("Đánh giá hoàn thành", "⭐", "Em đã đạt đủ cả 3 tiêu chí thảo luận!");
        }
    } else {
        fb.innerHTML = `✅ Đã đạt ${doneCnt}/3 tiêu chí. Tiếp tục hoàn thiện nhé!`;
        fb.className = "p-4 rounded-xl text-center text-lg font-black bg-amber-50 text-amber-600 border border-amber-100 transition-all";
    }
};

// --- LOGIC NỘP CAM KẾT ---
window.nopCamKetVn42 = function() {
    const val = document.getElementById("vn42-textarea-camket").value.trim();
    const fb = document.getElementById("fb-vn42-camket");
    if (!fb) return;
    fb.classList.remove("hidden");

    if (val.length < 20) {
        fb.innerHTML = "⚠️ Cam kết của em hơi ngắn. Hãy chia sẻ ít nhất 2 việc cụ thể em sẽ làm để bảo vệ động vật hoang dã nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-342";
        return;
    }

    const valLower = val.toLowerCase();
    const coHanhDong = valLower.includes("không") || valLower.includes("bảo vệ") || valLower.includes("tuyên truyền") || valLower.includes("ủng hộ") || valLower.includes("bảo tồn") || valLower.includes("rừng") || valLower.includes("săn bắt");

    if (!coHanhDong) {
        fb.innerHTML = "⚠️ Cam kết tốt! Nhưng em hãy nêu rõ hơn những hành động cụ thể (ví dụ: không mua sản phẩm từ động vật hoang dã, tuyên truyền với bạn bè,...) nhé!";
        fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-amber-500 text-white transition-all duration-342";
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-800">AI Thầy E nhận xét:</h5>
                <p class="text-lg mb-2">Thầy E rất vui vì em đã có những cam kết hành động thiết thực và ý nghĩa để bảo vệ động vật hoang dã. Những việc làm nhỏ của mỗi người, khi cộng lại sẽ tạo ra sự thay đổi lớn cho môi trường và các loài động vật!</p>
                <span class="px-3 py-1 bg-emerald-600 rounded-lg text-sm font-bold">Xếp loại: Cam kết xuất sắc ⭐</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl text-base font-bold shadow-md bg-emerald-600 text-white transition-all duration-342";
};

// --- NỘP TIẾT HỌC TOÀN CỤC ---
window.nopBaiTiet42Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 42',
            '🦁',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🏆</span><p class="text-xl md:text-2xl font-bold text-emerald-800">Chúc mừng em đã hoàn thành xuất sắc Tiết 42: Nói và nghe: Bảo tồn động vật hoang dã!</p><p class="text-xl text-gray-800 mt-3">Em đã hiểu được tầm quan trọng của bảo tồn thiên nhiên và sẵn sàng hành động để bảo vệ các loài động vật hoang dã quý hiếm!</p></div>'
        );
    }
};
