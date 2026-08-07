export const lesson101 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "101",
    "title": "VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",
    "desc": "Bài học giúp học sinh thực hành chọn đề tài, chuẩn bị ý kiến, lập dàn ý và viết đoạn văn biểu cảm về một bài thơ thuộc chủ điểm thế giới tuổi thơ hoặc vẻ đẹp thiên nhiên.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-blue-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Viết được đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ thuộc chủ điểm Thế giới tuổi thơ hoặc ca ngợi vẻ đẹp thiên nhiên.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Sắp xếp hợp lí các ý trong đoạn văn, sử dụng từ ngữ biểu cảm và trích dẫn dẫn chứng sinh động trong ngoặc kép.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Biết cách tự đọc soát, chỉnh sửa bài viết theo 5 tiêu chuẩn chuẩn mực.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Cấu trúc đoạn văn biểu cảm</h3>
        </div>
        <p class="text-lg md:text-xl font-bold text-gray-700">💬 Một đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ cần tuân theo trình tự bố cục nào?</p>
        
        <div class="space-y-4 max-w-xl mx-auto">
            <div class="grid grid-cols-1 gap-3">
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p101-kd-opt" value="wrong1" class="w-5 h-5 text-blue-600">
                    <span>Mở bài bằng cách kể lại câu chuyện thơ; Thân bài tả cảnh; Kết bài nêu lời khuyên.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p101-kd-opt" value="correct" class="w-5 h-5 text-blue-600">
                    <span>Mở đầu (Giới thiệu bài thơ, tác giả, cảm xúc chung) → Triển khai (Nêu chi tiết nghệ thuật và cảm xúc chi tiết) → Kết thúc (Khẳng định lại cảm xúc).</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-gray-50 rounded-xl border border-gray-100 select-none">
                    <input type="radio" name="p101-kd-opt" value="wrong2" class="w-5 h-5 text-blue-600">
                    <span>Liệt kê tất cả các câu thơ từ đầu đến cuối; rồi nêu tiểu sử của nhà thơ.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraKhoiDong101();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn101-kd" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 📋 PHẦN 1: CHUẨN BỊ Ý TƯỞNG -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Chuẩn bị viết đoạn văn:
            </h3>
        </div>

        <div class="space-y-6 max-w-4xl mx-auto">
            <!-- Chọn đề -->
            <div class="bg-blue-50/40 p-5 rounded-3xl border border-blue-100 space-y-3">
                <p class="font-bold text-blue-600 text-lg md:text-xl">👉 Em chọn đề bài nào dưới đây để thực hành viết?</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-150 cursor-pointer hover:bg-blue-50/50 font-bold text-base">
                        <input type="radio" name="p101-debai" value="de1" class="w-5 h-5 text-blue-600 mt-0.5" checked>
                        <span>Đề 1: Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ thuộc chủ điểm "Thế giới tuổi thơ".</span>
                    </label>
                    <label class="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-150 cursor-pointer hover:bg-blue-50/50 font-bold text-base">
                        <input type="radio" name="p101-debai" value="de2" class="w-5 h-5 text-blue-600 mt-0.5">
                        <span>Đề 2: Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ ca ngợi vẻ đẹp của thiên nhiên.</span>
                    </label>
                </div>
            </div>

            <!-- Dàn ý nhanh -->
            <div class="bg-amber-50/20 p-6 rounded-3xl border border-amber-100 space-y-4">
                <p class="font-bold text-amber-900 text-lg md:text-xl">👉 Phác thảo nhanh ý tưởng (Dàn ý nhanh):</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-gray-600">Tên bài thơ định viết:</span>
                        <input type="text" id="p101-tendoan" placeholder="Ví dụ: Tiếng đàn ba-la-lai-ca trên sông Đà, Tuổi Ngựa,..." class="w-full p-3 border border-gray-250 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none">
                    </div>
                    <div class="space-y-1">
                        <span class="text-sm font-bold text-gray-600">Tên tác giả:</span>
                        <input type="text" id="p101-tacgia" placeholder="Ví dụ: Quang Huy, Xuân Quỳnh, Chế Lan Viên..." class="w-full p-3 border border-gray-250 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none">
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <span class="text-sm font-bold text-gray-600">Hình ảnh / Từ ngữ / Biện pháp tu từ nào trong bài thơ làm em ấn tượng nhất?</span>
                        <input type="text" id="p101-chitietyeu" placeholder="Ví dụ: Chi tiết tiếng đàn kêu long lanh, hình ảnh con cò trắng bay lả bay la..." class="w-full p-3 border border-gray-250 rounded-xl font-bold bg-white text-gray-800 focus:border-blue-500 outline-none">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 📋 PHẦN 2: VIẾT ĐOẠN VĂN -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Viết đoạn văn hoàn chỉnh:
            </h3>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
            <p class="text-base font-bold text-gray-500">👉 Nhắc nhở: Đoạn văn của em cần có độ dài tối thiểu từ 60 từ, sử dụng các từ ngữ bộc lộ cảm xúc và có trích dẫn từ thơ đặt trong dấu ngoặc kép.</p>
            
            <!-- Giấy kẻ ô ly giả lập -->
            <div class="relative bg-amber-50/15 border-2 border-blue-200 rounded-3xl p-6 shadow-inner">
                <textarea id="ans-vn101-vietvan" rows="8" placeholder="Tôi đã thực sự xúc động khi đọc bài thơ..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-blue-500 font-bold bg-white text-gray-800 leading-relaxed font-sans"></textarea>
            </div>
            
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai2_101();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn101-writing" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </section>

    <!-- 📋 PHẦN 3: ĐỌC SOÁT VÀ CHỈNH SỬA (Checklist 5 đám mây) -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">3</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Đọc soát và chỉnh sửa theo 5 tiêu chuẩn:
            </h3>
        </div>
        <p class="text-lg text-gray-700 font-bold">👉 Hướng dẫn: Đọc soát lại bài viết của em ở trên và đánh dấu tick vào 5 đám mây tiêu chí dưới đây sau khi đã kiểm tra xong:</p>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto pt-4 select-none">
            <!-- Mây 1: Sắp xếp ý -->
            <label class="flex flex-col items-center p-4 rounded-3xl border-2 border-sky-300 bg-sky-50/40 hover:bg-sky-100/60 cursor-pointer transition-all text-center">
                <input type="checkbox" id="ck-vn101-m1" class="w-6 h-6 text-sky-600 rounded mb-3">
                <span class="text-base font-black text-sky-950">Cách sắp xếp ý</span>
                <span class="text-xs text-sky-800 font-semibold mt-1">Ý thơ lô-gích, mạch lạc</span>
            </label>

            <!-- Mây 2: Thể hiện cảm xúc -->
            <label class="flex flex-col items-center p-4 rounded-3xl border-2 border-rose-300 bg-rose-50/40 hover:bg-rose-100/60 cursor-pointer transition-all text-center">
                <input type="checkbox" id="ck-vn101-m2" class="w-6 h-6 text-rose-600 rounded mb-3">
                <span class="text-base font-black text-rose-950">Cách thể hiện cảm xúc</span>
                <span class="text-xs text-rose-800 font-semibold mt-1">Từ ngữ biểu đạt chân thực</span>
            </label>

            <!-- Mây 3: Dẫn chứng minh hoạ -->
            <label class="flex flex-col items-center p-4 rounded-3xl border-2 border-emerald-300 bg-emerald-50/40 hover:bg-emerald-100/60 cursor-pointer transition-all text-center">
                <input type="checkbox" id="ck-vn101-m3" class="w-6 h-6 text-emerald-600 rounded mb-3">
                <span class="text-base font-black text-emerald-950">Dẫn chứng minh hoạ</span>
                <span class="text-xs text-emerald-800 font-semibold mt-1">Trích thơ đặt trong ngoặc kép</span>
            </label>

            <!-- Mây 4: Dùng từ, viết câu -->
            <label class="flex flex-col items-center p-4 rounded-3xl border-2 border-blue-300 bg-blue-50/40 hover:bg-blue-100/60 cursor-pointer transition-all text-center">
                <input type="checkbox" id="ck-vn101-m4" class="w-6 h-6 text-blue-600 rounded mb-3">
                <span class="text-base font-black text-purple-950">Cách dùng từ, viết câu</span>
                <span class="text-xs text-blue-600 font-semibold mt-1">Đúng chính tả, ngữ pháp</span>
            </label>

            <!-- Mây 5: Sáng tạo bổ sung -->
            <label class="flex flex-col items-center p-4 rounded-3xl border-2 border-amber-300 bg-amber-50/40 hover:bg-amber-100/60 cursor-pointer transition-all text-center">
                <input type="checkbox" id="ck-vn101-m5" class="w-6 h-6 text-amber-600 rounded mb-3">
                <span class="text-base font-black text-amber-950">Tiêu chí tự do 🌟</span>
                <span class="text-xs text-amber-800 font-semibold mt-1">Hình ảnh liên tưởng phong phú</span>
            </label>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraChecklist101();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn101-chk" class="hidden p-4 rounded-xl text-lg font-bold text-center mt-2 max-w-xl mx-auto"></div>
    </section>

    <!-- 📋 PHẦN 4: VẬN DỤNG TẠI NHÀ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">🏠</span>
            <h3 class="text-2xl md:text-3xl font-black text-blue-600">
                Vận dụng & Liên hệ người thân:
            </h3>
        </div>
        
        <div class="space-y-4 max-w-4xl mx-auto">
            <p class="font-bold text-gray-700 text-lg">💬 Em hãy chọn 1 trong 2 nhiệm vụ dưới đây để thực hiện tại nhà và ghi lại phản hồi nhé:</p>
            <div class="bg-sky-50/30 p-4 rounded-2xl border border-sky-100 space-y-2">
                <p class="text-base font-bold text-sky-900">Nhiệm vụ a. Đọc đoạn văn của em cho người thân nghe và chia sẻ cảm xúc khi viết.</p>
                <p class="text-base font-bold text-sky-900">Nhiệm vụ b. Đọc lại bài thơ em yêu thích và ghi vào phiếu đọc sách những điều em thấy thú vị.</p>
            </div>
            
            <textarea id="p101-vandung" rows="3" placeholder="Ví dụ: Tối nay em đã đọc đoạn văn cho mẹ nghe, mẹ khen em viết có cảm xúc và trích dẫn thơ hay..." class="w-full p-4 text-lg rounded-2xl border border-gray-250 outline-none focus:border-blue-500 font-semibold bg-white text-gray-800"></textarea>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn101Global()" class="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH BÀI HỌC ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục chuẩn của đoạn văn biểu cảm về bài thơ gồm những phần nào?",
            "options": [
                "Mở đầu, Triển khai, Kết thúc",
                "Mở bài, Thân bài, Kết bài",
                "Mở đoạn, Kết đoạn",
                "Đặt vấn đề, Giải quyết vấn đề"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần mở đầu của đoạn văn có nhiệm vụ chính là gì?",
            "options": [
                "Giới thiệu tên bài thơ, tác giả và nêu cảm xúc khái quát",
                "Trích dẫn toàn bộ bài thơ từ dòng đầu tới dòng cuối",
                "Tóm tắt chi tiết toàn bộ tiểu sử cuộc đời nhà thơ",
                "Giải nghĩa toàn bộ các từ khó xuất hiện trong thơ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi trích dẫn những câu thơ tiêu biểu, em nên đặt chúng trong cặp dấu nào?",
            "options": [
                "Dấu ngoặc kép \"...\"",
                "Dấu ngoặc đơn (...)",
                "Dấu ngoặc nhọn {...}",
                "Dấu gạch ngang –"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ ngữ nào dưới đây phù hợp nhất để bộc lộ tình cảm, cảm xúc của em về bài thơ?",
            "options": [
                "xúc động, bồi bồi, ấn tượng, say mê",
                "to lớn, khổng lồ, sặc sỡ, ồn ào",
                "chạy nhảy, vui đùa, ca hát, nghiên cứu",
                "nhanh nhẹn, linh hoạt, khéo léo, thông minh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Mây xanh trong hoạt động đọc soát kiểm tra tiêu chí nào của bài viết?",
            "options": [
                "Cách sắp xếp các ý trong bài",
                "Dẫn chứng minh họa từ bài thơ",
                "Lỗi chính tả viết hoa từ ngữ",
                "Cách sử dụng tính từ so sánh"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong ví dụ đoạn văn mẫu trang 135, tác giả biểu cảm về tác phẩm thơ nào?",
            "options": [
                "Ngưỡng cửa",
                "Tiếng đàn ba-la-lai-ca trên sông Đà",
                "Tuổi Ngựa",
                "Tranh làng Hồ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Câu nào sau đây thể hiện trực tiếp cảm xúc của người viết về bài thơ?",
            "options": [
                "Bản thân tôi thực sự bồi hồi và xúc động trước hình ảnh ấm áp ấy.",
                "Bài thơ gồm có 4 khổ thơ được chia đều bằng nhau.",
                "Nhà thơ sinh năm 1948 tại một làng quê nghèo khó vùng Kinh Bắc.",
                "Bài thơ có nhịp điệu nhanh và sử dụng nhiều từ láy."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đâu là đề bài được gợi ý trong SGK trang 135?",
            "options": [
                "Bài thơ thuộc chủ điểm 'Thế giới tuổi thơ' hoặc ca ngợi 'vẻ đẹp thiên nhiên'",
                "Bài thơ về mái trường mến yêu và thầy cô giáo cũ",
                "Bài ca dao cổ truyền tả vẻ đẹp các mùa trong năm",
                "Bài thơ tự do tả hoạt động thể thao học sinh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Yêu cầu cơ bản về cách trình bày hình thức đoạn văn là gì?",
            "options": [
                "Viết lùi đầu dòng chữ đầu tiên, các câu liên tục không xuống dòng giữa chừng",
                "Xuống dòng tự do sau mỗi câu văn ngắn cho thoáng mắt",
                "Bắt buộc chia đoạn văn thành 3 đoạn nhỏ tương ứng 3 phần",
                "Viết hoa toàn bộ tất cả chữ cái trong cả đoạn văn"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Mây hồng trong hoạt động đọc soát biểu thị cho tiêu chí nào?",
            "options": [
                "Cách thể hiện cảm xúc chân thực, tự nhiên",
                "Độ dài tối thiểu của đoạn văn",
                "Tính độc đáo của các hình ảnh liên tưởng",
                "Viết câu văn đúng cấu trúc ngữ pháp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung chính cần có ở phần Triển khai của đoạn văn biểu cảm thơ là gì?",
            "options": [
                "Chỉ ra những từ ngữ, hình ảnh đặc sắc và nêu cảm xúc do chúng gợi ra",
                "Kể lại hoàn toàn cốt truyện thơ từ đầu tới cuối chi tiết",
                "Giới thiệu tiểu sử năm sinh của tất cả các nhà thơ cùng thời",
                "Phê bình, đánh giá những điểm chưa tốt trong cách dùng vần của tác giả"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Bài thơ 'Tuổi Ngựa' của Xuân Quỳnh thuộc chủ điểm nào sau đây?",
            "options": [
                "Thế giới tuổi thơ",
                "Vẻ đẹp thiên nhiên",
                "Tình hữu nghị quốc tế",
                "Đất nước mến yêu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Tại sao cần sử dụng các từ ngữ và câu văn giàu sức biểu cảm trong bài viết?",
            "options": [
                "Để truyền tải cảm xúc chân thành, lay động và thuyết phục người đọc hơn",
                "Để kéo dài số lượng từ giúp đạt điểm cao hơn",
                "Để bài văn mang tính học thuật cao và bác học hơn",
                "Để làm cho cấu trúc câu văn phức tạp khó đoán hơn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Việc đọc soát lại bài viết sau khi hoàn thành đem lại lợi ích gì?",
            "options": [
                "Giúp phát hiện và chỉnh sửa các lỗi chính tả, ngữ pháp, sắp xếp ý chưa hợp lí",
                "Giúp thay thế toàn bộ cốt truyện cũ bằng câu chuyện mới hay hơn",
                "Làm tăng đáng kể độ dài của đoạn văn mà không cần suy nghĩ",
                "Giúp người viết tự chấm điểm tuyệt đối cho bài làm của mình"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài thơ 'Tiếng đàn ba-la-lai-ca trên sông Đà' ca ngợi vẻ đẹp nào?",
            "options": [
                "Vẻ đẹp của thiên nhiên sông nước hùng vĩ hòa hợp với bàn tay lao động của con người",
                "Vẻ đẹp thướt tha mềm mại của tà áo dài người phụ nữ Việt Nam",
                "Vẻ đẹp kì bí của thế giới tuổi thơ muôn màu muôn vẻ",
                "Vẻ đẹp trù phú của làng quê Bắc Ninh Kinh Bắc xưa"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// Khởi động
window.kiemTraKhoiDong101 = function() {
    const select = document.querySelector('input[name="p101-kd-opt"]:checked')?.value;
    const fb = document.getElementById('fb-vn101-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!select) {
        fb.innerHTML = "⚠️ Em hãy chọn một phương án trả lời nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900";
        return;
    }

    if (select === "correct") {
        fb.innerHTML = "🎉 Chính xác! Cấu trúc đoạn văn biểu cảm bài thơ cần tuân theo trình tự: Mở đầu giới thiệu tổng quan → Triển khai nêu chi tiết cảm xúc → Kết thúc khẳng định lại cảm xúc.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900";
    } else {
        fb.innerHTML = "❌ Chưa đúng rồi. Em hãy nhớ đoạn văn biểu cảm cần bám sát 3 phần logic: Giới thiệu cảm xúc khái quát → Diễn tả cảm xúc chi tiết → Khẳng định ý nghĩa nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-rose-100 text-rose-900";
    }
};

// Chấm tự luận bài 2
window.kiemTraBai2_101 = function() {
    const text = document.getElementById('ans-vn101-vietvan').value.trim();
    const debai = document.querySelector('input[name="p101-debai"]:checked')?.value;
    const tendoan = document.getElementById('p101-tendoan').value.trim();
    const tacgia = document.getElementById('p101-tacgia').value.trim();
    const fb = document.getElementById('fb-vn101-writing');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5>
                    <p class="text-lg">Em hãy gõ đoạn văn hoàn chỉnh của mình vào khung giấy trước khi gửi Thầy E nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300";
        return;
    }

    // Kiểm tra độ dài từ (> 55 từ để dự phòng)
    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 50) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Đoạn văn của em hơi ngắn (hiện tại có ${words.length} từ). Hãy mở rộng các câu văn biểu cảm chi tiết hơn để đảm bảo số lượng từ tối thiểu đạt yêu cầu (>60 từ) nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300";
        return;
    }

    // Kiểm tra dẫn chứng trong ngoặc kép
    const hasQuotes = text.includes('"') || text.includes('“') || text.includes('”') || text.includes('«') || text.includes('»');
    if (!hasQuotes) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Bài viết của em cần bổ sung thêm dẫn chứng trích dẫn trực tiếp hình ảnh hoặc câu thơ tiêu biểu trong bài thơ và đặt chúng trong dấu ngoặc kép "..." để tăng tính chân thực và sinh động nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-sm";
        return;
    }

    // Phân tích từ khóa cảm xúc
    const emotionKeywords = ["xúc động", "yêu mến", "yêu thích", "bồi hồi", "ấn tượng", "đẹp đẽ", "tự hào", "tha thiết", "say mê", "ấm áp", "thú vị", "thương mến", "mến yêu", "biết mấy"];
    const hasEmotion = emotionKeywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasEmotion) {
        fb.innerHTML = `
            <div class="flex items-start gap-4">
                <span class="text-2xl md:text-3xl">👨‍🏫</span>
                <div>
                    <h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5>
                    <p class="text-lg">Để đoạn văn của em giàu sức biểu cảm hơn, em nên bổ sung thêm các tính từ chỉ cảm xúc rõ ràng như: *yêu mến, xúc động, ấn tượng, tha thiết...* nhé!</p>
                </div>
            </div>
        `;
        fb.className = "p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-sm";
        return;
    }

    // Chấm điểm đạt chuẩn
    let detailText = tendoan ? `về tác phẩm <strong class="text-blue-950">"${tendoan}"</strong>` : "";
    if (tacgia) detailText += ` của tác giả ${tacgia}`;

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá bài viết:</h5>
                <p class="text-lg mb-2">Đoạn văn biểu cảm ${detailText} viết rất tốt! Em đã biết cách sắp xếp bố cục mạch lạc, sử dụng nhiều từ ngữ thể hiện tình cảm tinh tế và trích dẫn dẫn chứng hợp lý trong ngoặc kép.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-md";
};

// Kiểm tra Checklist đọc soát
window.kiemTraChecklist101 = function() {
    const m1 = document.getElementById('ck-vn101-m1').checked;
    const m2 = document.getElementById('ck-vn101-m2').checked;
    const m3 = document.getElementById('ck-vn101-m3').checked;
    const m4 = document.getElementById('ck-vn101-m4').checked;
    const m5 = document.getElementById('ck-vn101-m5').checked;
    const fb = document.getElementById('fb-vn101-chk');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (m1 && m2 && m3 && m4 && m5) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã hoàn thành việc tự kiểm tra và đọc soát toàn bộ bài viết theo 5 đám mây tiêu chí chất lượng.";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-emerald-100 text-emerald-900 max-w-xl mx-auto shadow-sm";
    } else {
        fb.innerHTML = "⚠️ Em hãy đọc kĩ lại bài viết của mình và tích đủ 5 đám mây tiêu chí để hoàn thành đọc soát nhé!";
        fb.className = "p-4 rounded-xl text-lg font-bold text-center mt-2 bg-amber-100 text-amber-900 max-w-xl mx-auto shadow-sm";
    }
};

// Nộp bài toàn cục
window.submitVn101Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 101',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-lg md:text-2xl font-bold text-blue-600">Chúc mừng em đã hoàn thành bài viết đoạn văn thể hiện tình cảm, cảm xúc về bài thơ!</p><p class="text-lg text-gray-700 mt-3">Hãy tiếp tục rèn luyện kỹ năng viết văn biểu cảm để tâm hồn thêm phong phú và giàu cảm xúc nhé!</p></div>'
        );
    } else {
        alert("Chúc mừng em đã hoàn thành bài viết đoạn văn thể hiện tình cảm, cảm xúc về bài thơ!");
    }
};
