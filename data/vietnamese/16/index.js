export const lesson16 = {
    "topic": "Tiếng Việt 5",
    "week": "3",
    "period": "16",
    "title": "LTVC: LUYỆN TẬP VỀ ĐẠI TỪ",
    "desc": "Bài học giúp học sinh thực hành phân biệt đại từ xưng hô, đại từ thay thế và đại từ nghi vấn thông qua các đoạn văn mẫu sinh động từ sách giáo khoa.",
    "subject": "Luyện từ và câu",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <style>
    .vn16-text-btn {
        background: transparent;
        border: none;
        padding: 2px 4px;
        margin: 0 1px;
        border-radius: 4px;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        cursor: pointer;
        transition: all 0.2s;
        outline: none;
        display: inline-block;
    }
    .vn16-text-btn:focus {
        outline: none;
    }
    .vn16-text-btn-a:hover {
        background-color: #e0f2fe; /* bg-sky-100 */
    }
    .vn16-text-btn-b:hover {
        background-color: #d1fae5; /* bg-emerald-100 */
    }
    </style>
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
                Tìm được các từ dùng để xưng hô trong đoạn văn và nhận xét được thái độ của người nói thông qua các từ đó.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Lựa chọn được đại từ thay thế thích hợp điền vào chỗ trống và xác định từ ngữ được thay thế ở câu trước.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Nhận biết đại từ nghi vấn và xác định đúng mục đích sử dụng tương ứng.
            </li>
        </ul>
    </div>

    <!-- 📝 BÀI 1: TÌM TỪ XƯNG HÔ VÀ NHẬN XÉT THÁI ĐỘ -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Tìm các từ dùng để xưng hô và nhận xét thái độ của người nói</h3>
        </div>

        <!-- Tab Headers -->
        <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-3 mb-6">
            <button onclick="switchTabVn16(0)" id="vn16-tab-0" class="px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm">
                Đoạn văn a
            </button>
            <button onclick="switchTabVn16(1)" id="vn16-tab-1" class="px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                Đoạn văn b
            </button>
        </div>

        <!-- Tab Contents -->
        <div class="space-y-4">
            <!-- Đoạn a -->
            <div id="vn16-tab-content-0" class="block space-y-4">
                <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-4">
                    <p class="text-xs font-black text-sky-800 uppercase tracking-widest">Đoạn văn a</p>
                    <div class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-2 bg-white p-4 rounded-xl shadow-inner border border-sky-50 select-none">
                        <p>
                            <button onclick="chonTuXungHoVn16('a', 'Trông', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Trông</button>
                            <button onclick="chonTuXungHoVn16('a', 'thấy', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">thấy</button>
                            <button onclick="chonTuXungHoVn16('a', 'tôi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">tôi</button>
                            <button onclick="chonTuXungHoVn16('a', 'theo', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">theo</button>
                            <button onclick="chonTuXungHoVn16('a', 'mẹ', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">mẹ</button>
                            <button onclick="chonTuXungHoVn16('a', 'vào', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">vào</button>
                            <button onclick="chonTuXungHoVn16('a', 'đến', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đến</button>
                            <button onclick="chonTuXungHoVn16('a', 'cổng', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">cổng</button>,
                            <button onclick="chonTuXungHoVn16('a', 'bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'buông', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">buông</button>
                            <button onclick="chonTuXungHoVn16('a', 'cái', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">cái</button>
                            <button onclick="chonTuXungHoVn16('a', 'chổi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">chổi</button>,
                            <button onclick="chonTuXungHoVn16('a', 'chạy', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">chạy</button>
                            <button onclick="chonTuXungHoVn16('a', 'ra', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ra</button>
                            <button onclick="chonTuXungHoVn16('a', 'nắm', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">nắm</button>
                            <button onclick="chonTuXungHoVn16('a', 'tay', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">tay</button>
                            <button onclick="chonTuXungHoVn16('a', 'tôi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">tôi</button>.
                        </p>
                        <p>
                            – 
                            <button onclick="chonTuXungHoVn16('a', 'Cu', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Cu</button>
                            <button onclick="chonTuXungHoVn16('a', 'Dũng', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Dũng</button>
                            <button onclick="chonTuXungHoVn16('a', 'lớn', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">lớn</button>
                            <button onclick="chonTuXungHoVn16('a', 'ngần', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ngần</button>
                            <button onclick="chonTuXungHoVn16('a', 'này', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">này</button>
                            <button onclick="chonTuXungHoVn16('a', 'rồi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">rồi</button>
                            <button onclick="chonTuXungHoVn16('a', 'ư', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ư</button>?
                        </p>
                        <p>[...]</p>
                        <p>
                            <button onclick="chonTuXungHoVn16('a', 'Bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">Bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'xăng xái', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">xăng xái</button>
                            <button onclick="chonTuXungHoVn16('a', 'xuống', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">xuống</button>
                            <button onclick="chonTuXungHoVn16('a', 'bếp', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">bếp</button>
                            <button onclick="chonTuXungHoVn16('a', 'lấy', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">lấy</button>
                            <button onclick="chonTuXungHoVn16('a', 'dao', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">dao</button>
                            <button onclick="chonTuXungHoVn16('a', 'ra', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ra</button>
                            <button onclick="chonTuXungHoVn16('a', 'vườn', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">vườn</button>
                            <button onclick="chonTuXungHoVn16('a', 'chặt', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">chặt</button>
                            <button onclick="chonTuXungHoVn16('a', 'mía', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">mía</button>
                            <button onclick="chonTuXungHoVn16('a', 'đem', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đem</button>
                            <button onclick="chonTuXungHoVn16('a', 'vào', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">vào</button>.
                        </p>
                        <p>
                            – 
                            <button onclick="chonTuXungHoVn16('a', 'Mía', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Mía</button>
                            <button onclick="chonTuXungHoVn16('a', 'ngọt', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ngọt</button>
                            <button onclick="chonTuXungHoVn16('a', 'lắm', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">lắm</button>, 
                            <button onclick="chonTuXungHoVn16('a', 'mẹ con', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">mẹ con</button>
                            <button onclick="chonTuXungHoVn16('a', 'ăn', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ăn</button>
                            <button onclick="chonTuXungHoVn16('a', 'đi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đi</button>
                            <button onclick="chonTuXungHoVn16('a', 'cho', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">cho</button>
                            <button onclick="chonTuXungHoVn16('a', 'đỡ', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đỡ</button>
                            <button onclick="chonTuXungHoVn16('a', 'khát', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">khát</button>.
                        </p>
                        <p>
                            <button onclick="chonTuXungHoVn16('a', 'Bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">Bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'róc', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">róc</button>, 
                            <button onclick="chonTuXungHoVn16('a', 'bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'tiện', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">tiện</button>, 
                            <button onclick="chonTuXungHoVn16('a', 'bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'chẻ', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">chẻ</button>
                            <button onclick="chonTuXungHoVn16('a', 'từng', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">từng</button>
                            <button onclick="chonTuXungHoVn16('a', 'khẩu', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">khẩu</button>
                            <button onclick="chonTuXungHoVn16('a', 'mía', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">mía</button>
                            <button onclick="chonTuXungHoVn16('a', 'đưa', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đưa</button>
                            <button onclick="chonTuXungHoVn16('a', 'cho', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">cho</button>
                            <button onclick="chonTuXungHoVn16('a', 'tôi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">tôi</button>:
                        </p>
                        <p>
                            – 
                            <button onclick="chonTuXungHoVn16('a', 'Ăn', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Ăn</button>
                            <button onclick="chonTuXungHoVn16('a', 'đi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đi</button>! 
                            <button onclick="chonTuXungHoVn16('a', 'Cháu', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">Cháu</button>
                            <button onclick="chonTuXungHoVn16('a', 'ăn', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">ăn</button>
                            <button onclick="chonTuXungHoVn16('a', 'đi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đi</button>! 
                            <button onclick="chonTuXungHoVn16('a', 'Răng', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">Răng</button>
                            <button onclick="chonTuXungHoVn16('a', 'bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'yếu', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">yếu</button>
                            <button onclick="chonTuXungHoVn16('a', 'rồi', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">rồi</button>, 
                            <button onclick="chonTuXungHoVn16('a', 'bà', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="true">bà</button>
                            <button onclick="chonTuXungHoVn16('a', 'chả', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">chả</button>
                            <button onclick="chonTuXungHoVn16('a', 'nhai', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">nhai</button>
                            <button onclick="chonTuXungHoVn16('a', 'được', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">được</button>
                            <button onclick="chonTuXungHoVn16('a', 'đâu', this)" class="vn16-text-btn vn16-text-btn-a vn16-btn-xungho-a" data-correct="false">đâu</button>.
                        </p>
                    </div>
                    <p class="text-xs text-gray-800 text-right italic">(Theo Vũ Tú Nam)</p>
                    
                    <div class="flex justify-end items-center gap-4"><button onclick="datLaiTuXungHoVn16(" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="kiemTraTuXungHoVn16(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn16-txh-a" class="hidden text-2xl md:text-3xl font-bold px-3 py-1.5 rounded-lg text-center"></div>

                    <p class="text-sm font-bold text-sky-800">👉 Nhận xét thái độ của người bà đối với cháu:</p>
                    <div class="space-y-2">
                        <button onclick="chonThaiDoVn16('a', 0)" id="vn16-tda-0" class="w-full text-left p-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-sky-100 transition-all">A. Thái độ lạnh lùng, xa cách.</button>
                        <button onclick="chonThaiDoVn16('a', 1)" id="vn16-tda-1" class="w-full text-left p-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-sky-100 transition-all">B. Thái độ âu yếm, yêu thương, trìu mến.</button>
                    </div>
                    <div id="fb-vn16-tda" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg"></div>
                </div>
            </div>

            <!-- Đoạn b -->
            <div id="vn16-tab-content-1" class="hidden space-y-4">
                <div class="bg-sky-50/30 p-5 rounded-2xl border border-sky-100 space-y-4">
                    <p class="text-xs font-black text-sky-800 uppercase tracking-widest">Đoạn văn b</p>
                    <div class="serif-font text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-2 bg-white p-4 rounded-xl shadow-inner border border-sky-50 select-none">
                        <p>
                            <button onclick="chonTuXungHoVn16('b', 'Cánh cam', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">Cánh cam</button>
                            <button onclick="chonTuXungHoVn16('b', 'vùng', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">vùng</button>
                            <button onclick="chonTuXungHoVn16('b', 'chạy', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">chạy</button>,
                            <button onclick="chonTuXungHoVn16('b', 'nhớn nhác', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">nhớn nhác</button>
                            <button onclick="chonTuXungHoVn16('b', 'tìm', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">tìm</button>
                            <button onclick="chonTuXungHoVn16('b', 'lối thoát', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">lối thoát</button>.
                            <button onclick="chonTuXungHoVn16('b', 'Chuột cống', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">Chuột cống</button>
                            <button onclick="chonTuXungHoVn16('b', 'cười', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">cười</button>
                            <button onclick="chonTuXungHoVn16('b', 'phá', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">phá</button>
                            <button onclick="chonTuXungHoVn16('b', 'lên', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">lên</button>:
                        </p>
                        <p>
                            – 
                            <button onclick="chonTuXungHoVn16('b', 'Ha ha', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">Ha ha</button>!
                            <button onclick="chonTuXungHoVn16('b', 'Ta', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">Ta</button>
                            <button onclick="chonTuXungHoVn16('b', 'đã', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">đã</button>
                            <button onclick="chonTuXungHoVn16('b', 'cho', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">cho</button>
                            <button onclick="chonTuXungHoVn16('b', 'bịt kín', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">bịt kín</button>
                            <button onclick="chonTuXungHoVn16('b', 'tất cả', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">tất cả</button>
                            <button onclick="chonTuXungHoVn16('b', 'lối', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">lối</button>
                            <button onclick="chonTuXungHoVn16('b', 'ra vào', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">ra vào</button>.
                            <button onclick="chonTuXungHoVn16('b', 'Nhà ngươi', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">Nhà ngươi</button>
                            <button onclick="chonTuXungHoVn16('b', 'chớ', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">chớ</button>
                            <button onclick="chonTuXungHoVn16('b', 'có', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">có</button>
                            <button onclick="chonTuXungHoVn16('b', 'nhọc công', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">nhọc công</button>
                            <button onclick="chonTuXungHoVn16('b', 'vô ích', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">vô ích</button>!
                            <button onclick="chonTuXungHoVn16('b', 'Tất cả', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">Tất cả</button>
                            <button onclick="chonTuXungHoVn16('b', 'các ngươi', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">các ngươi</button>
                            <button onclick="chonTuXungHoVn16('b', 'đã', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">đã</button>
                            <button onclick="chonTuXungHoVn16('b', 'trở thành', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">trở thành</button>
                            <button onclick="chonTuXungHoVn16('b', 'nô lệ', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">nô lệ</button>
                            <button onclick="chonTuXungHoVn16('b', 'của', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">của</button>
                            <button onclick="chonTuXungHoVn16('b', 'ta', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">ta</button>.
                            <button onclick="chonTuXungHoVn16('b', 'Dưới', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">Dưới</button>
                            <button onclick="chonTuXungHoVn16('b', 'cống', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">cống</button>
                            <button onclick="chonTuXungHoVn16('b', 'này', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">này</button>,
                            <button onclick="chonTuXungHoVn16('b', 'ta', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">ta</button>
                            <button onclick="chonTuXungHoVn16('b', 'là', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">là</button>
                            <button onclick="chonTuXungHoVn16('b', 'chúa tể', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">chúa tể</button>,
                            <button onclick="chonTuXungHoVn16('b', 'các ngươi', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="true">các ngươi</button>
                            <button onclick="chonTuXungHoVn16('b', 'không', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">không</button>
                            <button onclick="chonTuXungHoVn16('b', 'biết', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">biết</button>
                            <button onclick="chonTuXungHoVn16('b', 'sao', this)" class="vn16-text-btn vn16-text-btn-b vn16-btn-xungho-b" data-correct="false">sao</button>?
                        </p>
                    </div>
                    <p class="text-xs text-gray-800 text-right italic">(Theo Vũ Tú Nam)</p>
                    
                    <div class="flex justify-end items-center gap-4"><button onclick="datLaiTuXungHoVn16('b')" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="kiemTraTuXungHoVn16('b');" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn16-txh-b" class="hidden text-2xl md:text-3xl font-bold px-3 py-1.5 rounded-lg text-center"></div>

                    <p class="text-sm font-bold text-sky-800">👉 Nhận xét thái độ của Chuột cống đối với Cánh cam:</p>
                    <div class="space-y-2">
                        <button onclick="chonThaiDoVn16('b', 0)" id="vn16-tdb-0" class="w-full text-left p-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-sky-100 transition-all">A. Thái độ kiêu căng, ngạo mạn, hống hách.</button>
                        <button onclick="chonThaiDoVn16('b', 1)" id="vn16-tdb-1" class="w-full text-left p-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-sky-100 transition-all">B. Thái độ ôn hòa, lịch sự, tôn trọng đối phương.</button>
                    </div>
                    <div id="fb-vn16-tdb" class="hidden text-sm font-bold px-3 py-1.5 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-6 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- Tab Headers phụ cho Luyện tập -->
    <div class="flex justify-center md:justify-end gap-2 border-b border-gray-100 pb-3">
        <button onclick="switchPracTabVn16(0)" id="vn16-prac-tab-0" class="px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm">
            📝 Bài tập 2 (Đại từ thay thế)
        </button>
        <button onclick="switchPracTabVn16(1)" id="vn16-prac-tab-1" class="px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
            📝 Bài tập 3 (Đại từ nghi vấn)
        </button>
    </div>

    <!-- Vùng nội dung các tab phụ -->
    <div class="space-y-6">
        <!-- TAB PHỤ 1: BÀI TẬP 2 -->
        <div id="vn16-prac-content-0" class="block space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
                <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chọn đại từ thích hợp điền vào chỗ bông hoa và xác định từ ngữ được thay thế</h3>
                    </div>

                    <!-- List các từ gợi ý -->
                    <div class="flex flex-wrap gap-2 justify-center p-3 bg-white rounded-2xl border border-sky-100 shadow-sm">
                        <span class="px-4 py-2 bg-amber-500 text-amber-900 font-black rounded-lg text-base">đó</span>
                        <span class="px-4 py-2 bg-amber-500 text-amber-900 font-black rounded-lg text-base">ấy</span>
                        <span class="px-4 py-2 bg-amber-500 text-amber-900 font-black rounded-lg text-base">thế</span>
                        <span class="px-4 py-2 bg-amber-500 text-amber-900 font-black rounded-lg text-base">vậy</span>
                        <span class="px-4 py-2 bg-amber-500 text-amber-900 font-black rounded-lg text-base">này</span>
                    </div>

                    <!-- Câu hỏi điền bông hoa -->
                    <div class="space-y-4">
                        <!-- Câu a -->
                        <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                                <strong>a.</strong> Cô dạy mình động tác bơi ếch. Động tác 
                                <select id="vn16-b2-a" class="mx-1 p-1 bg-amber-50 border-2 border-amber-100 rounded font-bold text-amber-600">
                                    <option value="">...</option>
                                    <option value="đó">đó</option>
                                    <option value="ấy">ấy</option>
                                    <option value="thế">thế</option>
                                    <option value="vậy">vậy</option>
                                    <option value="này">này</option>
                                </select>
                                thật lạ.
                            </p>
                            <div class="flex flex-col md:flex-row gap-2 items-start md:items-center">
                                <label class="text-lg md:text-2xl font-bold text-gray-800">👉 Đại từ trên thay thế cho cụm từ nào ở câu trước?</label>
                                <select id="vn16-b2-a-ref" class="p-1 border border-gray-100 rounded font-bold text-gray-800 text-base md:text-2xl max-w-full">
                                    <option value="">Chọn cụm từ...</option>
                                    <option value="cô dạy">cô dạy</option>
                                    <option value="động tác bơi ếch">động tác bơi ếch</option>
                                    <option value="thật lạ">thật lạ</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu b -->
                        <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                                <strong>b.</strong> Cây lạc tiên ra quả quanh năm. Vì 
                                <select id="vn16-b2-b" class="mx-1 p-1 bg-amber-50 border-2 border-amber-100 rounded font-bold text-amber-600">
                                    <option value="">...</option>
                                    <option value="đó">đó</option>
                                    <option value="ấy">ấy</option>
                                    <option value="thế">thế</option>
                                    <option value="vậy">vậy</option>
                                    <option value="này">này</option>
                                </select>
                                , con đường luôn phảng phất mùi lạc tiên chín.
                            </p>
                            <div class="flex flex-col md:flex-row gap-2 items-start md:items-center">
                                <label class="text-lg md:text-2xl font-bold text-gray-800">👉 Đại từ trên thay thế cho từ ngữ/câu nào ở câu trước?</label>
                                <select id="vn16-b2-b-ref" class="p-1 border border-gray-100 rounded font-bold text-gray-800 text-base md:text-2xl max-w-full">
                                    <option value="">Chọn từ ngữ/câu...</option>
                                    <option value="Cây lạc tiên ra quả quanh năm">Cây lạc tiên ra quả quanh năm</option>
                                    <option value="Cây lạc tiên">Cây lạc tiên</option>
                                    <option value="quanh năm">quanh năm</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu c -->
                        <div class="bg-white p-5 rounded-2xl border border-sky-100 space-y-3">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                                <strong>c.</strong> Mây đen đã kéo đến đầy trời. Nhưng bọn trẻ chẳng chú ý đến điều 
                                <select id="vn16-b2-c" class="mx-1 p-1 bg-amber-50 border-2 border-amber-100 rounded font-bold text-amber-600">
                                    <option value="">...</option>
                                    <option value="đó">đó</option>
                                    <option value="ấy">ấy</option>
                                    <option value="thế">thế</option>
                                    <option value="vậy">vậy</option>
                                    <option value="này">này</option>
                                </select>
                                .
                            </p>
                            <div class="flex flex-col md:flex-row gap-2 items-start md:items-center">
                                <label class="text-lg md:text-2xl font-bold text-gray-800">👉 Đại từ trên thay thế cho điều nào ở câu trước?</label>
                                <select id="vn16-b2-c-ref" class="p-1 border border-gray-100 rounded font-bold text-gray-800 text-base md:text-2xl max-w-full">
                                    <option value="">Chọn nội dung...</option>
                                    <option value="bọn trẻ chẳng chú ý">bọn trẻ chẳng chú ý</option>
                                    <option value="Mây đen đã kéo đến đầy trời">Mây đen đã kéo đến đầy trời</option>
                                    <option value="Mây đen">Mây đen</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai2Vn16();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn16-b2" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
                </div>
            </section>
        </div>

        <!-- TAB PHỤ 2: BÀI TẬP 3 -->
        <div id="vn16-prac-content-1" class="hidden space-y-6 animate-in fade-in duration-300">
            <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
                <div class="p-6 md:p-8 bg-emerald-50/30 rounded-[32px] space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800">Tìm đại từ nghi vấn trong các câu sau và xác định mục đích sử dụng tương ứng</h3>
                    </div>

                    <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Hãy chọn mục đích sử dụng chính xác ở mỗi câu hỏi dưới đây:</p>

                    <div class="space-y-4">
                        <!-- Câu a -->
                        <div class="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium">a. Anh muốn gặp <strong class="text-emerald-800">ai</strong>?</p>
                            <div class="flex items-center gap-2 select-none">
                                <label class="text-base md:text-xl font-bold text-gray-800">Mục đích:</label>
                                <select id="vn16-b3-a" class="p-2 border border-emerald-100 rounded-xl font-bold text-emerald-800 text-lg md:text-2xl bg-emerald-50/30 outline-none max-w-full">
                                    <option value="">Chọn mục đích...</option>
                                    <option value="1">Hỏi về số lượng</option>
                                    <option value="2">Hỏi về người</option>
                                    <option value="3">Hỏi về thời gian</option>
                                    <option value="4">Hỏi về địa điểm</option>
                                    <option value="5">Hỏi về nguyên nhân</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu b -->
                        <div class="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium">b. <strong class="text-emerald-800">Sao</strong> con về muộn thế?</p>
                            <div class="flex items-center gap-2 select-none">
                                <label class="text-base md:text-xl font-bold text-gray-800">Mục đích:</label>
                                <select id="vn16-b3-b" class="p-2 border border-emerald-100 rounded-xl font-bold text-emerald-800 text-lg md:text-2xl bg-emerald-50/30 outline-none max-w-full">
                                    <option value="">Chọn mục đích...</option>
                                    <option value="1">Hỏi về số lượng</option>
                                    <option value="2">Hỏi về người</option>
                                    <option value="3">Hỏi về thời gian</option>
                                    <option value="4">Hỏi về địa điểm</option>
                                    <option value="5">Hỏi về nguyên nhân</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu c -->
                        <div class="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium">c. Bạn làm được <strong class="text-emerald-800">mấy</strong> bài tập rồi?</p>
                            <div class="flex items-center gap-2 select-none">
                                <label class="text-base md:text-xl font-bold text-gray-800">Mục đích:</label>
                                <select id="vn16-b3-c" class="p-2 border border-emerald-100 rounded-xl font-bold text-emerald-800 text-lg md:text-2xl bg-emerald-50/30 outline-none max-w-full">
                                    <option value="">Chọn mục đích...</option>
                                    <option value="1">Hỏi về số lượng</option>
                                    <option value="2">Hỏi về người</option>
                                    <option value="3">Hỏi về thời gian</option>
                                    <option value="4">Hỏi về địa điểm</option>
                                    <option value="5">Hỏi về nguyên nhân</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu d -->
                        <div class="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium">d. <strong class="text-emerald-800">Bao giờ</strong> cháu về quê?</p>
                            <div class="flex items-center gap-2 select-none">
                                <label class="text-base md:text-xl font-bold text-gray-800">Mục đích:</label>
                                <select id="vn16-b3-d" class="p-2 border border-emerald-100 rounded-xl font-bold text-emerald-800 text-lg md:text-2xl bg-emerald-50/30 outline-none max-w-full">
                                    <option value="">Chọn mục đích...</option>
                                    <option value="1">Hỏi về số lượng</option>
                                    <option value="2">Hỏi về người</option>
                                    <option value="3">Hỏi về thời gian</option>
                                    <option value="4">Hỏi về địa điểm</option>
                                    <option value="5">Hỏi về nguyên nhân</option>
                                </select>
                            </div>
                        </div>

                        <!-- Câu e -->
                        <div class="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <p class="text-2xl md:text-3xl text-gray-800 font-medium">e. Nó ngồi ở <strong class="text-emerald-800">đâu</strong>?</p>
                            <div class="flex items-center gap-2 select-none">
                                <label class="text-base md:text-xl font-bold text-gray-800">Mục đích:</label>
                                <select id="vn16-b3-e" class="p-2 border border-emerald-100 rounded-xl font-bold text-emerald-800 text-lg md:text-2xl bg-emerald-50/30 outline-none max-w-full">
                                    <option value="">Chọn mục đích...</option>
                                    <option value="1">Hỏi về số lượng</option>
                                    <option value="2">Hỏi về người</option>
                                    <option value="3">Hỏi về thời gian</option>
                                    <option value="4">Hỏi về địa điểm</option>
                                    <option value="5">Hỏi về nguyên nhân</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBai3Vn16();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-vn16-b3" class="hidden text-base font-bold px-4 py-2 rounded-xl text-center"></div>
                </div>
            </section>
        </div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="nopBaiVn16()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Các từ xưng hô trong đoạn văn a (bài đọc bà cháu) gồm những từ nào?",
            "options": [
                "bà, cháu, tôi, mẹ con",
                "dao, mía, răng, chổi",
                "lớn, ngọt, ăn, chẻ",
                "xăng xái, yếu, nhai, đi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn b (Chuột cống và Cánh cam) sử dụng các từ xưng hô nào?",
            "options": [
                "ta, nhà ngươi, các ngươi",
                "cười, thoát, chạy",
                "cống, lối ra, chúa tể",
                "bịt kín, vô ích, chớ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Thái độ của người bà đối với cháu qua các từ xưng hô 'mẹ con, cháu, bà' là gì?",
            "options": [
                "Âu yếm, thân mật, ngập tràn tình yêu thương",
                "Xa cách, trang trọng, nghiêm khắc",
                "Giận dữ, oán trách",
                "Khinh thường, trịch thượng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ xưng hô 'ta' của Chuột cống thể hiện thái độ gì?",
            "options": [
                "Kiêu ngạo, hống hách, tự đề cao bản thân",
                "Khiêm tốn, nhún nhường",
                "Kính trọng người nghe",
                "Thân mật, gần gũi"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ thích hợp điền vào câu: 'Cô dạy mình động tác bơi ếch. Động tác ... thật lạ.' là từ nào?",
            "options": [
                "này (hoặc ấy, đó)",
                "thế",
                "vậy",
                "đâu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ thay thế trong câu: 'Cây lạc tiên ra quả quanh năm. Vì vậy...' thay cho từ ngữ nào?",
            "options": [
                "Cây lạc tiên ra quả quanh năm",
                "Cây lạc tiên",
                "con đường",
                "mùi lạc tiên chín"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ thích hợp điền vào câu: 'Mây đen đã kéo đến đầy trời. Nhưng bọn trẻ chẳng chú ý đến điều ...' là từ nào?",
            "options": [
                "đó (hoặc ấy)",
                "thế",
                "vậy",
                "này"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ nghi vấn 'ai' trong câu 'Anh muốn gặp ai?' dùng để làm gì?",
            "options": [
                "Hỏi về người",
                "Hỏi về đồ vật",
                "Hỏi về thời gian",
                "Hỏi về địa điểm"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Mục đích sử dụng của đại từ nghi vấn 'sao' trong câu 'Sao con về muộn thế?' là gì?",
            "options": [
                "Hỏi về thời gian",
                "Hỏi về địa điểm",
                "Hỏi về nguyên nhân",
                "Hỏi về số lượng"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đại từ nghi vấn 'mấy' trong câu 'Bạn làm được mấy bài tập rồi?' dùng để làm gì?",
            "options": [
                "Hỏi về thời gian",
                "Hỏi về số lượng",
                "Hỏi về người",
                "Hỏi về địa điểm"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Đại từ nghi vấn 'bao giờ' trong câu 'Bao giờ cháu về quê?' dùng để hỏi về điều gì?",
            "options": [
                "Mục đích",
                "Địa điểm",
                "Thời gian",
                "Người nói"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đại từ nghi vấn 'đâu' trong câu 'Nó ngồi ở đâu?' dùng để hỏi về điều gì?",
            "options": [
                "Thời gian",
                "Địa điểm",
                "Nguyên nhân",
                "Số lượng"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Đại từ thay thế gồm những từ nào dưới đây?",
            "options": [
                "tôi, tớ, cậu, chúng ta",
                "đó, ấy, thế, vậy, này",
                "ai, gì, nào, sao, đâu",
                "ông, bà, cha, mẹ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây là đại từ nghi vấn dùng để hỏi về nguyên nhân?",
            "options": [
                "tại sao (sao, vì sao)",
                "bao giờ",
                "ai",
                "đâu"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong tiếng Việt, đại từ nghi vấn có vai trò gì chính?",
            "options": [
                "Dùng để trỏ vào sự vật, hoạt động",
                "Dùng để hỏi về người, sự vật, số lượng, nơi chốn, thời gian, nguyên nhân...",
                "Dùng để thay thế danh từ",
                "Dùng để chỉ hành động của nhân vật"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC CHUYỂN TAB ĐOẠN VĂN ---
window.switchTabVn16 = function(tabIdx) {
    for (let i = 0; i < 2; i++) {
        const tabBtn = document.getElementById(`vn16-tab-${i}`);
        const tabContent = document.getElementById(`vn16-tab-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-4 animate-in fade-in duration-300";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};

// --- LOGIC BÀI 1: CHỌN TỪ XƯNG HÔ ---
window.chonTuXungHoVn16 = function(doan, tu, btn) {
    if (!btn) return;
    
    // Toggle class and dataset
    if (btn.dataset.selected === 'true') {
        btn.dataset.selected = 'false';
        btn.classList.remove('bg-sky-600', 'bg-emerald-600', 'text-white', 'font-bold', 'shadow-sm');
    } else {
        btn.dataset.selected = 'true';
        btn.classList.remove('bg-sky-100', 'bg-emerald-100');
        const bgCls = doan === 'a' ? 'bg-sky-600' : 'bg-emerald-600';
        btn.classList.add(bgCls, 'text-white', 'font-bold', 'shadow-sm');
    }
    
    // Ẩn phản hồi cũ khi thay đổi lựa chọn
    const fb = document.getElementById(`fb-vn16-txh-${doan}`);
    if (fb) fb.classList.add('hidden');
};

window.kiemTraTuXungHoVn16 = function(doan) {
    const buttons = document.querySelectorAll(`.vn16-btn-xungho-${doan}`);
    const fb = document.getElementById(`fb-vn16-txh-${doan}`);
    if (!fb) return;
    
    let isCorrect = true;
    let selectedCorrectCount = 0;
    let totalCorrectCount = 0;
    let incorrectSelectedCount = 0;
    
    buttons.forEach(btn => {
        const isWordCorrect = btn.getAttribute('data-correct') === 'true';
        const isSelected = btn.dataset.selected === 'true';
        
        btn.classList.remove('bg-emerald-600', 'bg-rose-600', 'text-white', 'font-bold', 'text-amber-600', 'bg-amber-50', 'border', 'border-amber-300', 'animate-pulse');
        
        if (isWordCorrect) {
            totalCorrectCount++;
            if (isSelected) {
                selectedCorrectCount++;
                btn.classList.add('bg-emerald-600', 'text-white', 'font-bold');
            } else {
                isCorrect = false;
                btn.classList.add('text-amber-600', 'bg-amber-50', 'border', 'border-amber-300', 'font-bold', 'animate-pulse');
            }
        } else {
            if (isSelected) {
                incorrectSelectedCount++;
                isCorrect = false;
                btn.classList.add('bg-rose-600', 'text-white', 'font-bold');
            } else {
                // Keep default state
            }
        }
    });
    
    fb.classList.remove('hidden');
    
    if (isCorrect && selectedCorrectCount === totalCorrectCount) {
        fb.innerHTML = `🎉 Chính xác! Em đã tìm đúng toàn bộ ${totalCorrectCount} từ xưng hô trong đoạn văn!`;
        fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-emerald-600 text-white mt-3 text-center";
    } else {
        if (selectedCorrectCount === 0 && incorrectSelectedCount === 0) {
            fb.innerHTML = "⚠️ Em hãy click vào các từ dùng để xưng hô trong đoạn văn trước nhé!";
            fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-amber-500 text-white mt-3 text-center";
        } else {
            fb.innerHTML = `⚠️ Chưa chính xác. Em đã chọn đúng ${selectedCorrectCount}/${totalCorrectCount} từ xưng hô${incorrectSelectedCount > 0 ? `, chọn nhầm ${incorrectSelectedCount} từ không phải xưng hô` : ''}. Các từ viền vàng là từ xưng hô bị sót.`;
            fb.className = "text-2xl md:text-3xl font-bold px-4 py-2 rounded-xl bg-rose-600 text-white mt-3 text-center";
        }
    }
};

window.datLaiTuXungHoVn16 = function(doan) {
    const buttons = document.querySelectorAll(`.vn16-btn-xungho-${doan}`);
    const fb = document.getElementById(`fb-vn16-txh-${doan}`);
    if (fb) fb.classList.add('hidden');
    
    buttons.forEach(btn => {
        btn.dataset.selected = 'false';
        btn.className = `vn16-text-btn vn16-text-btn-${doan} vn16-btn-xungho-${doan}`;
    });
};

// --- LOGIC BÀI 1: CHỌN THÁI ĐỘ ---
window.chonThaiDoVn16 = function(doan, idx) {
    const dung = (doan === 'a' && idx === 1) || (doan === 'b' && idx === 0);
    const fb = document.getElementById(`fb-vn16-td${doan}`);
    if (!fb) return;

    fb.classList.remove('hidden');
    
    // Reset nút
    for (let i = 0; i < 2; i++) {
        const btn = document.getElementById(`vn16-td${doan}-${i}`);
        if (btn) {
            btn.className = "w-full text-left p-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl md:text-2xl text-gray-800 hover:border-sky-100 transition-all";
        }
    }

    const btnChon = document.getElementById(`vn16-td${doan}-${idx}`);
    if (btnChon) {
        btnChon.className = dung 
            ? "w-full text-left p-3 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-sm border-2 border-emerald-100"
            : "w-full text-left p-3 bg-rose-600 text-white font-bold text-sm rounded-xl shadow-sm border-2 border-rose-100";
    }

    if (dung) {
        fb.innerHTML = doan === 'a' 
            ? "✅ Đúng! Bà xưng hô 'bà - cháu' và gọi con 'mẹ con' thể hiện tình cảm âu yếm, yêu thương sâu sắc."
            : "✅ Đúng! Chuột cống xưng 'ta', gọi 'nhà ngươi', 'các ngươi' thể hiện thái độ kiêu căng, ngạo mạn, hống hách.";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em hãy suy nghĩ kĩ về từ xưng hô và biểu cảm của nhân vật nhé!";
        fb.className = "text-sm font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white";
    }
};

// --- LOGIC BÀI 2: KIỂM TRA ĐẠI TỪ THAY THẾ ---
window.kiemTraBai2Vn16 = function() {
    const valA = document.getElementById('vn16-b2-a')?.value;
    const refA = document.getElementById('vn16-b2-a-ref')?.value;
    const valB = document.getElementById('vn16-b2-b')?.value;
    const refB = document.getElementById('vn16-b2-b-ref')?.value;
    const valC = document.getElementById('vn16-b2-c')?.value;
    const refC = document.getElementById('vn16-b2-c-ref')?.value;
    const fb = document.getElementById('fb-vn16-b2');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !refA || !valB || !refB || !valC || !refC) {
        fb.innerHTML = "⚠️ Em hãy chọn từ điền vào bông hoa và từ thay thế cho cả 3 câu nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
        return;
    }

    // Các đáp án đúng
    const dungA = (valA === 'này' || valA === 'đó' || valA === 'ấy') && refA === 'động tác bơi ếch';
    const dungB = (valB === 'vậy' || valB === 'thế') && refB === 'Cây lạc tiên ra quả quanh năm';
    const dungC = (valC === 'đó' || valC === 'ấy') && refC === 'Mây đen đã kéo đến đầy trời';

    if (dungA && dungB && dungC) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã điền chính xác các đại từ thay thế và tìm đúng từ ngữ được thay thế ở cả 3 câu!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Có câu chưa chính xác. Em hãy kiểm tra lại vị trí các bông hoa và cụm từ thay thế nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-rose-600 text-white";
    }
};

// --- LOGIC BÀI 3: KIỂM TRA MỤC ĐÍCH HỎI ---
window.kiemTraBai3Vn16 = function() {
    const valA = document.getElementById('vn16-b3-a')?.value;
    const valB = document.getElementById('vn16-b3-b')?.value;
    const valC = document.getElementById('vn16-b3-c')?.value;
    const valD = document.getElementById('vn16-b3-d')?.value;
    const valE = document.getElementById('vn16-b3-e')?.value;
    const fb = document.getElementById('fb-vn16-b3');

    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !valB || !valC || !valD || !valE) {
        fb.innerHTML = "⚠️ Em hãy lựa chọn mục đích sử dụng cho cả 5 câu nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-amber-500 text-white";
        return;
    }

    // So sánh đáp án: a -> 2 (người), b -> 5 (nguyên nhân), c -> 1 (số lượng), d -> 3 (thời gian), e -> 4 (địa điểm)
    const dung = valA === '2' && valB === '5' && valC === '1' && valD === '3' && valE === '4';

    if (dung) {
        fb.innerHTML = "🎉 Xuất sắc! Em đã phân loại chính xác mục đích hỏi của toàn bộ 5 đại từ nghi vấn!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-emerald-600 text-white";
    } else {
        fb.innerHTML = "⚠️ Một số mục đích hỏi chưa chính xác. Em hãy suy nghĩ lại kỹ càng nhé!";
        fb.className = "text-base font-bold px-4 py-3 rounded-xl bg-rose-600 text-white";
    }
};

// --- NỘP BÀI TỔNG THỂ ---
window.nopBaiVn16 = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 16',
            '🎓',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-2xl md:text-3xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài Luyện tập về đại từ!</p><p class="text-lg text-gray-800 mt-3">Em đã làm chủ các loại đại từ xưng hô, thay thế và nghi vấn trong tiếng Việt.</p></div>'
        );
    }
};

// --- LOGIC CHUYỂN TAB PHỤ LUYỆN TẬP ---
window.switchPracTabVn16 = function(tabIdx) {
    for (let i = 0; i < 2; i++) {
        const tabBtn = document.getElementById(`vn16-prac-tab-${i}`);
        const tabContent = document.getElementById(`vn16-prac-content-${i}`);
        if (tabBtn) {
            if (i === tabIdx) {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-black text-xl md:text-2xl transition-all bg-sky-600 text-white shadow-sm";
            } else {
                tabBtn.className = "px-5 py-2.5 rounded-xl font-bold text-xl md:text-2xl transition-all bg-gray-200 text-gray-700 hover:bg-gray-300";
            }
        }
        if (tabContent) {
            if (i === tabIdx) {
                tabContent.className = "block space-y-6 animate-in fade-in duration-300";
            } else {
                tabContent.className = "hidden";
            }
        }
    }
};
