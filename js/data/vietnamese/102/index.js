export const lesson102 = {
    "topic": "Tiếng Việt 5",
    "week": "15",
    "period": "102",
    "title": "ĐỌC: TẬP HÁT QUAN HỌ",
    "desc": "Bài 28 – Đọc hiểu bài \"Tập hát quan họ\" (Nguyễn Phan Hách). Tìm hiểu khung cảnh buổi tập hát, cách hát từng điệu quan họ và cảm nhận về nghệ thuật hát quan họ truyền thống.",
    "subject": "Đọc",
    "theme": "Với cộng đồng",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-600">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-600 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Đọc trôi chảy toàn bài, ngắt nghỉ đúng nhịp. Đọc diễn cảm thể hiện giọng kể nhẹ nhàng, trữ tình phù hợp với nội dung về nghệ thuật hát quan họ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Hiểu nội dung bài: Cảm nhận được vẻ đẹp nghệ thuật hát quan họ, tình yêu và niềm tự hào với di sản văn hoá dân tộc.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 font-black">•</span>
                Mở rộng vốn từ về nghệ thuật truyền thống: Phân loại được các từ ngữ thuộc nhóm Môn nghệ thuật, Hoạt động nghệ thuật, Người biểu diễn.
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-5xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Khởi động</h3>
        </div>
        <p class="text-lg md:text-xl font-bold text-gray-700">💬 Nói vài điều em biết về một môn nghệ thuật truyền thống của nước ta. Em hãy chọn một môn để tìm hiểu:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto" id="p102-kd-cards">
            <!-- Quan họ -->
            <button onclick="chonNgheThuat102('quanho')" id="btn-kd-quanho" class="group p-5 bg-sky-50 hover:bg-sky-100 border-2 border-sky-200 hover:border-sky-400 rounded-3xl transition-all text-center space-y-3 cursor-pointer active:scale-95">
                <div class="text-3xl md:text-5xl">🎶</div>
                <p class="text-xl md:text-2xl font-black text-sky-900">Quan họ</p>
                <p class="text-sm font-semibold text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity">Dân ca Bắc Ninh</p>
            </button>
            <!-- Ca trù -->
            <button onclick="chonNgheThuat102('catru')" id="btn-kd-catru" class="group p-5 bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 hover:border-amber-400 rounded-3xl transition-all text-center space-y-3 cursor-pointer active:scale-95">
                <div class="text-3xl md:text-5xl">🪘</div>
                <p class="text-xl md:text-2xl font-black text-amber-900">Ca trù</p>
                <p class="text-sm font-semibold text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity">Di sản văn hoá phi vật thể</p>
            </button>
            <!-- Cải lương -->
            <button onclick="chonNgheThuat102('cailuong')" id="btn-kd-cailuong" class="group p-5 bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 hover:border-rose-400 rounded-3xl transition-all text-center space-y-3 cursor-pointer active:scale-95">
                <div class="text-3xl md:text-5xl">🎭</div>
                <p class="text-xl md:text-2xl font-black text-rose-900">Cải lương</p>
                <p class="text-sm font-semibold text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity">Sân khấu Nam Bộ</p>
            </button>
        </div>
        <div id="fb-vn102-kd" class="hidden p-5 rounded-2xl font-bold text-lg max-w-3xl mx-auto"></div>
    </div>

    <!-- 📖 BÀI ĐỌC -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
<!-- Câu 1 -->
        <div class="space-y-4 bg-sky-50/30 p-5 rounded-3xl border border-sky-100">
            <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-lg shrink-0">1</span>
                <p class="text-lg md:text-xl font-black text-sky-900">Các liền chị tập hát trong khung cảnh như thế nào?</p>
            </div>
            <div class="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-sky-50">
                    <input type="radio" name="p102-c1" value="a" class="w-5 h-5 text-blue-600">
                    <span>Trong vườn táo mùa xuân, nắng ấm xuyên qua tàng cây; đêm trăng hè, gió lùa từ hồ sen mát rượi.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-sky-50">
                    <input type="radio" name="p102-c1" value="b" class="w-5 h-5 text-blue-600">
                    <span>Trong nhà hát lớn với sân khấu rộng rãi, ánh đèn sáng rực.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-sky-50">
                    <input type="radio" name="p102-c1" value="c" class="w-5 h-5 text-blue-600">
                    <span>Trên cánh đồng lúa chín vàng, gió mùa thu lành lạnh.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau102(1);" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn102-c1" class="hidden p-4 rounded-xl text-lg font-bold text-center"></div>
        </div>

        <!-- Câu 2 -->
        <div class="space-y-4 bg-emerald-50/30 p-5 rounded-3xl border border-emerald-100">
            <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">2</span>
                <p class="text-lg md:text-xl font-black text-emerald-900">Tìm những chi tiết miêu tả các liền chị lúc tập hát.</p>
            </div>
            <div class="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-emerald-50">
                    <input type="radio" name="p102-c2" value="a" class="w-5 h-5 text-emerald-800">
                    <span>Chít khăn đen, má đỏ hồng, ngồi trên những phiến đá xanh, ngân rung nhả chữ tròn vành rõ tiếng.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-emerald-50">
                    <input type="radio" name="p102-c2" value="b" class="w-5 h-5 text-emerald-800">
                    <span>Mặc trang phục sân khấu lộng lẫy, đứng thẳng hàng trên sân khấu.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-emerald-50">
                    <input type="radio" name="p102-c2" value="c" class="w-5 h-5 text-emerald-800">
                    <span>Ngồi quanh bàn tròn, vừa ăn trái cây vừa hát.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau102(2);" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn102-c2" class="hidden p-4 rounded-xl text-lg font-bold text-center"></div>
        </div>

        <!-- Câu 3: Bảng đối chiếu điệu hát -->
        <div class="space-y-4 bg-amber-50/30 p-5 rounded-3xl border border-amber-100">
            <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-lg shrink-0">3</span>
                <p class="text-lg md:text-xl font-black text-amber-900">Bà Trưởng dạy các liền chị hát mỗi điệu quan họ dưới đây ra sao? Hãy nối điệu hát với cách hát phù hợp.</p>
            </div>
            <p class="text-base font-bold text-amber-700 text-center">👆 Chọn một điệu hát ở cột trái, rồi chọn cách hát ở cột phải để ghép đôi.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" id="p102-c3-matching">
                <!-- Cột trái: Điệu hát -->
                <div class="space-y-3">
                    <p class="font-black text-center text-amber-900 text-base border-b border-amber-200 pb-2">🎵 Điệu hát</p>
                    <button onclick="chonDieuHat102('ngoloi')" id="btn-dh-ngoloi" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-black text-lg text-amber-900 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer">Ngỏ lời</button>
                    <button onclick="chonDieuHat102('thuongnhau')" id="btn-dh-thuongnhau" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-black text-lg text-amber-900 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer">Thương nhau</button>
                    <button onclick="chonDieuHat102('giaban')" id="btn-dh-giaban" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-black text-lg text-amber-900 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer">Giã bạn</button>
                </div>
                <!-- Cột phải: Cách hát -->
                <div class="space-y-3">
                    <p class="font-black text-center text-amber-900 text-base border-b border-amber-200 pb-2">🎤 Cách hát</p>
                    <button onclick="chonCachHat102('luuluyen')" id="btn-ch-luuluyen" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-bold text-base text-amber-800 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer text-left">Hát giọng lưu luyến, dùng dằng, đau đáu, nghe buồn</button>
                    <button onclick="chonCachHat102('thenthung')" id="btn-ch-thenthung" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-bold text-base text-amber-800 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer text-left">Hát giọng thẹn thùng, e ấp, tiếng hát như nước suối</button>
                    <button onclick="chonCachHat102('nongchay')" id="btn-ch-nongchay" class="w-full p-4 bg-white border-2 border-amber-200 rounded-2xl font-bold text-base text-amber-800 hover:bg-amber-100 transition-all active:scale-95 cursor-pointer text-left">Hát nồng cháy, thiết tha</button>
                </div>
            </div>
            <div id="fb-vn102-c3-pairs" class="space-y-2 max-w-3xl mx-auto"></div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau3_102();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn102-c3" class="hidden p-4 rounded-xl text-lg font-bold text-center"></div>
        </div>

        <!-- Câu 4 -->
        <div class="space-y-4 bg-rose-50/30 p-5 rounded-3xl border border-rose-100">
            <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-full bg-rose-600 text-white font-black flex items-center justify-center text-lg shrink-0">4</span>
                <p class="text-lg md:text-xl font-black text-rose-900">Những chi tiết dưới đây giúp em hiểu điều gì về nhân vật "tôi"?</p>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-rose-100 space-y-2 max-w-2xl mx-auto text-base font-bold text-rose-800">
                <p>– Ngày nào cũng đến nhà bà Trưởng nghe các liền chị tập hát quan họ.</p>
                <p>– Ngân nga mãi điệp khúc của điệu <em>Giã bạn</em> trong tâm trí.</p>
                <p>– Mong ngóng đến ngày chính mình được hát các giai điệu đó.</p>
            </div>
            <div class="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-rose-50">
                    <input type="radio" name="p102-c4" value="a" class="w-5 h-5 text-rose-800">
                    <span>Nhân vật "tôi" rất yêu mến và say mê nghệ thuật hát quan họ, mong ước được tự mình hát lên những giai điệu ấy.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-rose-50">
                    <input type="radio" name="p102-c4" value="b" class="w-5 h-5 text-rose-800">
                    <span>Nhân vật "tôi" chỉ tò mò muốn xem buổi tập hát cho vui chứ không thực sự yêu thích.</span>
                </label>
                <label class="flex items-center gap-3 font-bold cursor-pointer text-lg p-3 bg-white rounded-xl border border-gray-100 select-none hover:bg-rose-50">
                    <input type="radio" name="p102-c4" value="c" class="w-5 h-5 text-rose-800">
                    <span>Nhân vật "tôi" buồn bã vì không có khả năng hát quan họ.</span>
                </label>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau102(4);" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn102-c4" class="hidden p-4 rounded-xl text-lg font-bold text-center"></div>
        </div>

        <!-- Câu 5: Tự luận + AI Thầy E -->
        <div class="space-y-4 bg-teal-50/30 p-5 rounded-3xl border border-teal-100">
            <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-full bg-teal-600 text-white font-black flex items-center justify-center text-lg shrink-0">5</span>
                <p class="text-lg md:text-xl font-black text-teal-900">Dựa vào tranh minh hoạ và nội dung bài đọc, nêu cảm nhận của em về nghệ thuật hát quan họ.</p>
            </div>
            <div class="max-w-2xl mx-auto space-y-3">
                <textarea id="ans-vn102-c5" rows="4" placeholder="Ví dụ: Theo em, nghệ thuật hát quan họ là một nét đẹp văn hoá truyền thống rất đáng tự hào vì..." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-teal-500 font-bold bg-white text-gray-800 leading-relaxed"></textarea>
                <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCau5_102();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                <div id="fb-vn102-c5" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-10 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: Phân loại từ ngữ -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">
                Tìm trong và ngoài bài đọc 2 – 3 từ cho mỗi nhóm dưới đây:
            </h3>
        </div>

        <p class="text-lg font-bold text-gray-600 text-center">👆 Nhấn vào từ ngữ bên dưới, rồi nhấn vào nhóm mà em muốn xếp từ đó vào.</p>

        <!-- Kho từ -->
        <div class="flex flex-wrap gap-3 justify-center p-4 bg-gray-50 rounded-2xl border border-gray-100" id="p102-word-bank">
            <button onclick="chonTu102(this)" data-word="ca trù" data-group="mon" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">ca trù</button>
            <button onclick="chonTu102(this)" data-word="hát" data-group="hoatdong" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">hát</button>
            <button onclick="chonTu102(this)" data-word="ca nương" data-group="nguoi" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">ca nương</button>
            <button onclick="chonTu102(this)" data-word="quan họ" data-group="mon" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">quan họ</button>
            <button onclick="chonTu102(this)" data-word="múa" data-group="hoatdong" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">múa</button>
            <button onclick="chonTu102(this)" data-word="nghệ sĩ" data-group="nguoi" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">nghệ sĩ</button>
            <button onclick="chonTu102(this)" data-word="cải lương" data-group="mon" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">cải lương</button>
            <button onclick="chonTu102(this)" data-word="biểu diễn" data-group="hoatdong" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">biểu diễn</button>
            <button onclick="chonTu102(this)" data-word="liền chị" data-group="nguoi" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">liền chị</button>
            <button onclick="chonTu102(this)" data-word="chèo" data-group="mon" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">chèo</button>
            <button onclick="chonTu102(this)" data-word="đàn" data-group="hoatdong" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">đàn</button>
            <button onclick="chonTu102(this)" data-word="liền anh" data-group="nguoi" class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-bold text-base hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer active:scale-95">liền anh</button>
        </div>

        <!-- 3 nhóm -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="space-y-2">
                <button onclick="xepVaoNhom102('mon')" id="p102-nhom-mon" class="w-full p-4 bg-sky-50 border-2 border-sky-300 rounded-2xl font-black text-lg text-sky-900 text-center hover:bg-sky-100 transition-all cursor-pointer min-h-[100px]">
                    <p class="text-base mb-2">☁️ Môn nghệ thuật</p>
                    <div id="p102-list-mon" class="flex flex-wrap gap-2 justify-center"></div>
                </button>
            </div>
            <div class="space-y-2">
                <button onclick="xepVaoNhom102('hoatdong')" id="p102-nhom-hoatdong" class="w-full p-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl font-black text-lg text-emerald-900 text-center hover:bg-emerald-100 transition-all cursor-pointer min-h-[100px]">
                    <p class="text-base mb-2">☁️ Hoạt động nghệ thuật</p>
                    <div id="p102-list-hoatdong" class="flex flex-wrap gap-2 justify-center"></div>
                </button>
            </div>
            <div class="space-y-2">
                <button onclick="xepVaoNhom102('nguoi')" id="p102-nhom-nguoi" class="w-full p-4 bg-rose-50 border-2 border-rose-300 rounded-2xl font-black text-lg text-rose-900 text-center hover:bg-rose-100 transition-all cursor-pointer min-h-[100px]">
                    <p class="text-base mb-2">☁️ Người biểu diễn</p>
                    <div id="p102-list-nguoi" class="flex flex-wrap gap-2 justify-center"></div>
                </button>
            </div>
        </div>

        <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBT1_102();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
        <div id="fb-vn102-bt1" class="hidden p-4 rounded-xl text-lg font-bold text-center"></div>
    </section>

    <!-- BÀI TẬP 2: Viết câu + AI Thầy E -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-blue-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-blue-600">
                Sử dụng 1 – 2 từ ngữ đã tìm được ở bài tập 1 để đặt câu giới thiệu một môn nghệ thuật truyền thống.
            </h3>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
            <textarea id="ans-vn102-bt2" rows="3" placeholder="Ví dụ: Ca trù là một môn nghệ thuật truyền thống đặc sắc, trong đó ca nương vừa hát vừa gõ phách tạo nên âm thanh quyến rũ." class="w-full p-4 text-xl rounded-2xl border border-gray-200 outline-none focus:border-blue-500 font-bold bg-white text-gray-800 leading-relaxed"></textarea>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraBT2_102();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn102-bt2" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </section>
</div>
`,
    "quizPool": [
        {
            "question": "Bà Trưởng trước đây giữ vai trò gì trong nghệ thuật quan họ?",
            "options": [
                "Trưởng bè quan họ nữ nổi tiếng",
                "Người soạn lời ca quan họ",
                "Chủ tịch hội phụ nữ làng",
                "Nghệ nhân chơi đàn bầu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhà bà Trưởng có đặc điểm gì nổi bật?",
            "options": [
                "Có hồ thả sen, vườn trồng táo, đường vào cong như cổ ngỗng",
                "Có vườn cam rộng lớn và ao cá ngoài sân",
                "Là ngôi nhà gạch hai tầng nằm giữa phố huyện",
                "Nằm trên đỉnh đồi cao, bốn bề là rừng thông"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệu 'Ngỏ lời' phải hát với giọng như thế nào?",
            "options": [
                "Giọng thẹn thùng, e ấp, tiếng hát như nước suối thượng nguồn",
                "Giọng mạnh mẽ, oai hùng, vang dội",
                "Giọng trầm buồn, ai oán, da diết",
                "Giọng vui tươi, sôi nổi, hào hứng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệu 'Thương nhau' phải hát với giọng ra sao?",
            "options": [
                "Nồng cháy, thiết tha",
                "Thẹn thùng, e ấp",
                "Lưu luyến, dùng dằng",
                "Hào hứng, rộn ràng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Điệu 'Giã bạn' là điệu gì trong canh hát quan họ?",
            "options": [
                "Là điệu kết thúc hội hát, để mọi người ai về quê ấy",
                "Là điệu mở đầu chào khách đến hội",
                "Là điệu hát giữa buổi để nghỉ giải lao",
                "Là điệu hát dành riêng cho trẻ em"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "'Liền chị' có nghĩa là gì?",
            "options": [
                "Người nữ hát quan họ",
                "Người chị cả trong gia đình",
                "Bà trưởng bè hát quan họ",
                "Người phụ nữ may áo dài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "'Tàng cây' có nghĩa là gì?",
            "options": [
                "Bóng mát của cây hoặc tán lá xum xuê của cây",
                "Gốc cây cổ thụ to lớn",
                "Rễ cây ăn sâu dưới đất",
                "Cành cây khô rụng xuống đất"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Các liền chị tập hát vào mùa xuân ở đâu?",
            "options": [
                "Trong vườn táo, ngồi trên những phiến đá xanh",
                "Trên thuyền giữa hồ sen",
                "Trong ngôi đình làng cổ kính",
                "Ngoài cánh đồng lúa xanh mướt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nhân vật 'tôi' trong bài có tâm trạng như thế nào sau khi rời nhà bà Trưởng?",
            "options": [
                "Vẫn ngân nga điệp khúc Giã bạn trong tâm trí, mong ngóng ngày được tự hát",
                "Nhanh chóng quên hết mọi giai điệu đã nghe",
                "Buồn chán vì phải về nhà sớm",
                "Chạy sang nhà hàng xóm kể chuyện"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài 'Tập hát quan họ' do tác giả nào viết?",
            "options": [
                "Nguyễn Phan Hách",
                "Nguyễn Nhật Ánh",
                "Tô Hoài",
                "Võ Quảng"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Thứ tự 3 điệu quan họ được bà Trưởng dạy trong bài là gì?",
            "options": [
                "Ngỏ lời → Thương nhau → Giã bạn",
                "Giã bạn → Ngỏ lời → Thương nhau",
                "Thương nhau → Giã bạn → Ngỏ lời",
                "Ngỏ lời → Giã bạn → Thương nhau"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Khung cảnh vào mùa hè khi các liền chị tập hát có gì đặc biệt?",
            "options": [
                "Đêm trăng, gió lùa từ hồ sen trước nhà thổi lên mát rượi",
                "Nắng chói chang, trời oi bức",
                "Mưa rào xối xả, gió lạnh buốt",
                "Tuyết rơi trắng xóa khắp vườn"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào dưới đây thuộc nhóm 'Người biểu diễn'?",
            "options": [
                "Liền chị",
                "Ca trù",
                "Biểu diễn",
                "Quan họ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào dưới đây thuộc nhóm 'Hoạt động nghệ thuật'?",
            "options": [
                "Biểu diễn",
                "Nghệ sĩ",
                "Cải lương",
                "Ca nương"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Qua bài đọc, hát quan họ thể hiện nét đẹp văn hóa vùng miền nào?",
            "options": [
                "Vùng Kinh Bắc (Bắc Ninh)",
                "Vùng Tây Nguyên",
                "Vùng đồng bằng sông Cửu Long",
                "Vùng Tây Bắc"
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// ===== KHỞI ĐỘNG: Chọn môn nghệ thuật =====
window.chonNgheThuat102 = function(mon) {
    const fb = document.getElementById('fb-vn102-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    // Xoá highlight cũ
    ['quanho', 'catru', 'cailuong'].forEach(m => {
        const btn = document.getElementById('btn-kd-' + m);
        if (btn) btn.classList.remove('ring-4', 'ring-blue-400', 'scale-105');
    });
    // Highlight nút đang chọn
    const activeBtn = document.getElementById('btn-kd-' + mon);
    if (activeBtn) activeBtn.classList.add('ring-4', 'ring-blue-400', 'scale-105');

    const moTa = {
        quanho: '🎶 <strong>Quan họ</strong> là loại hình dân ca đặc trưng của vùng Kinh Bắc (Bắc Ninh, Bắc Giang), được UNESCO công nhận là di sản văn hoá phi vật thể của nhân loại năm 2009. Quan họ thường được hát đối đáp giữa bên nam (liền anh) và bên nữ (liền chị) với giai điệu trữ tình, mượt mà.',
        catru: '🪘 <strong>Ca trù</strong> là loại hình nghệ thuật truyền thống đặc sắc, thường được biểu diễn bởi ca nương (người hát), kép đàn (người chơi đàn đáy) và quan viên (người đánh trống chầu). Ca trù được UNESCO vinh danh năm 2009.',
        cailuong: '🎭 <strong>Cải lương</strong> là bộ môn nghệ thuật sân khấu ca kịch đặc trưng của vùng Nam Bộ, ra đời đầu thế kỷ 20. Cải lương kết hợp giữa ca nhạc, diễn xuất và múa, mang đậm bản sắc văn hoá miền Nam.'
    };

    fb.innerHTML = moTa[mon] || '';
    fb.className = 'p-5 rounded-2xl font-bold text-lg max-w-3xl mx-auto bg-blue-50 text-blue-600 border border-blue-200';
};

// ===== CÂU HỎI TRẮC NGHIỆM (Câu 1, 2, 4) =====
window.kiemTraCau102 = function(cau) {
    const dapAnDung = { 1: 'a', 2: 'a', 4: 'a' };
    const giaithich = {
        1: 'Các liền chị tập hát trong vườn táo mùa xuân (nắng ấm xuyên qua tàng cây) và đêm trăng hè (gió lùa từ hồ sen mát rượi).',
        2: 'Các liền chị chít khăn đen, má đỏ hồng, ngồi trên những phiến đá xanh, ngân rung nhả chữ tròn vành rõ tiếng.',
        4: 'Nhân vật "tôi" rất yêu mến và say mê nghệ thuật hát quan họ, ngày nào cũng đến nghe, về nhà vẫn ngân nga và mong ngóng ngày được tự mình hát.'
    };

    const selected = document.querySelector(`input[name="p102-c${cau}"]:checked`)?.value;
    const fb = document.getElementById(`fb-vn102-c${cau}`);
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!selected) {
        fb.innerHTML = '⚠️ Em hãy chọn một đáp án nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-amber-100 text-amber-900';
        return;
    }

    if (selected === dapAnDung[cau]) {
        fb.innerHTML = `🎉 Chính xác! ${giaithich[cau]}`;
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-emerald-100 text-emerald-900';
    } else {
        fb.innerHTML = '❌ Chưa đúng rồi. Em hãy đọc lại bài và thử lại nhé!';
        fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-rose-100 text-rose-900';
    }
};

// ===== CÂU 3: Ghép đôi điệu hát - cách hát =====
(function() {
    let _dieuDangChon = null;
    let _daPairs = {};

    window.chonDieuHat102 = function(dieu) {
        _dieuDangChon = dieu;
        // Highlight nút điệu hát
        ['ngoloi', 'thuongnhau', 'giaban'].forEach(d => {
            const btn = document.getElementById('btn-dh-' + d);
            if (btn) {
                btn.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-100');
                if (d === dieu) btn.classList.add('ring-4', 'ring-blue-500', 'bg-blue-100');
            }
        });
    };

    window.chonCachHat102 = function(cach) {
        if (!_dieuDangChon) {
            const fb = document.getElementById('fb-vn102-c3');
            if (fb) {
                fb.classList.remove('hidden');
                fb.innerHTML = '⚠️ Em hãy chọn một điệu hát ở cột trái trước nhé!';
                fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-amber-100 text-amber-900';
            }
            return;
        }

        // Lưu cặp ghép
        _daPairs[_dieuDangChon] = cach;

        // Hiển thị danh sách đã ghép
        const pairsDiv = document.getElementById('fb-vn102-c3-pairs');
        if (pairsDiv) {
            const tenDieu = { ngoloi: 'Ngỏ lời', thuongnhau: 'Thương nhau', giaban: 'Giã bạn' };
            const tenCach = {
                thenthung: 'Giọng thẹn thùng, e ấp, như nước suối',
                nongchay: 'Nồng cháy, thiết tha',
                luuluyen: 'Lưu luyến, dùng dằng, đau đáu'
            };
            let html = '';
            for (const [d, c] of Object.entries(_daPairs)) {
                html += `<div class="flex items-center gap-2 p-2 bg-blue-50 rounded-xl"><span class="font-black text-blue-600">${tenDieu[d]}</span> <span class="text-blue-400">→</span> <span class="font-bold text-blue-700 text-lg md:text-3xl">${tenCach[c]}</span></div>`;
            }
            pairsDiv.innerHTML = html;
        }

        // Reset highlight
        _dieuDangChon = null;
        ['ngoloi', 'thuongnhau', 'giaban'].forEach(d => {
            const btn = document.getElementById('btn-dh-' + d);
            if (btn) btn.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-100');
        });
    };

    window.kiemTraCau3_102 = function() {
        const fb = document.getElementById('fb-vn102-c3');
        if (!fb) return;
        fb.classList.remove('hidden');

        const dapAnDung = { ngoloi: 'thenthung', thuongnhau: 'nongchay', giaban: 'luuluyen' };
        const keys = Object.keys(dapAnDung);

        if (Object.keys(_daPairs).length < 3) {
            fb.innerHTML = '⚠️ Em cần ghép đủ 3 cặp điệu hát – cách hát nhé!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-amber-100 text-amber-900';
            return;
        }

        const allCorrect = keys.every(k => _daPairs[k] === dapAnDung[k]);
        if (allCorrect) {
            fb.innerHTML = '🎉 Tuyệt vời! Em đã ghép đúng cả 3 điệu hát: <strong>Ngỏ lời</strong> – giọng thẹn thùng, e ấp; <strong>Thương nhau</strong> – nồng cháy, thiết tha; <strong>Giã bạn</strong> – lưu luyến, dùng dằng, đau đáu.';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-emerald-100 text-emerald-900';
        } else {
            fb.innerHTML = '❌ Có cặp ghép chưa đúng. Em hãy đọc lại bài và ghép lại nhé!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-rose-100 text-rose-900';
            _daPairs = {};
            const pairsDiv = document.getElementById('fb-vn102-c3-pairs');
            if (pairsDiv) pairsDiv.innerHTML = '';
        }
    };
})();

// ===== CÂU 5: AI Thầy E chấm tự luận =====
window.kiemTraCau5_102 = function() {
    const text = document.getElementById('ans-vn102-c5').value.trim();
    const fb = document.getElementById('fb-vn102-c5');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5><p class="text-lg">Em hãy viết cảm nhận của mình về nghệ thuật hát quan họ trước khi gửi Thầy E nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 15) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5><p class="text-lg">Câu trả lời của em hơi ngắn (hiện tại có ${words.length} từ). Hãy viết thêm ý để diễn đạt cảm nhận đầy đủ hơn nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300';
        return;
    }

    // Kiểm tra từ khóa liên quan
    const keywords = ['quan họ', 'truyền thống', 'văn hoá', 'văn hóa', 'đẹp', 'yêu', 'tự hào', 'bảo tồn', 'hát', 'giai điệu', 'liền chị', 'thiết tha', 'dân ca', 'bắc ninh', 'di sản', 'trữ tình', 'ngọt ngào', 'mượt mà', 'cảm xúc', 'ấn tượng', 'xúc động', 'nồng cháy', 'say mê'];
    const hasKeyword = keywords.some(kw => text.toLowerCase().includes(kw));

    if (!hasKeyword) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Em hãy bổ sung thêm những từ ngữ liên quan đến nghệ thuật hát quan họ như: <em>truyền thống, giai điệu, trữ tình, tự hào, di sản...</em> để bài viết sát với nội dung bài đọc hơn nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    fb.innerHTML = `<div class="flex items-start gap-4 animate-fade-in"><span class="text-xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá:</h5><p class="text-lg mb-2">Cảm nhận của em về nghệ thuật hát quan họ rất sâu sắc và chân thành! Em đã thể hiện được sự yêu mến, trân trọng đối với di sản văn hoá dân tộc. Bài viết có nội dung phong phú và ngôn ngữ biểu cảm tốt.</p><span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span></div></div>`;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-md';
};

// ===== LUYỆN TẬP BT1: Phân loại từ ngữ =====
(function() {
    let _tuDangChon = null;

    window.chonTu102 = function(btn) {
        // Bỏ highlight cũ
        const allBtns = document.querySelectorAll('#p102-word-bank button');
        allBtns.forEach(b => b.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-100'));

        // Click lần 1: chọn. Click lần 2: bỏ
        if (_tuDangChon === btn) {
            _tuDangChon = null;
            return;
        }

        _tuDangChon = btn;
        btn.classList.add('ring-4', 'ring-blue-500', 'bg-blue-100');
    };

    window.xepVaoNhom102 = function(nhom) {
        if (!_tuDangChon) return;

        const word = _tuDangChon.dataset.word;
        const listEl = document.getElementById('p102-list-' + nhom);
        if (!listEl) return;

        // Kiểm tra trùng lặp
        const existing = listEl.querySelectorAll('span[data-w]');
        for (const e of existing) {
            if (e.dataset.w === word) return;
        }

        // Tạo tag
        const colorMap = { mon: 'sky', hoatdong: 'emerald', nguoi: 'rose' };
        const color = colorMap[nhom] || 'gray';
        const tag = document.createElement('span');
        tag.dataset.w = word;
        tag.className = `inline-flex items-center gap-1 px-3 py-1 bg-${color}-100 text-${color}-900 rounded-full text-sm font-bold cursor-pointer`;
        tag.innerHTML = `${word} <span class="text-${color}-400 hover:text-${color}-600" onclick="xoaTu102(this, '${nhom}', '${word}')">✕</span>`;
        listEl.appendChild(tag);

        // Ẩn nút từ kho
        _tuDangChon.classList.add('opacity-30', 'pointer-events-none');
        _tuDangChon.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-100');
        _tuDangChon = null;
    };

    window.xoaTu102 = function(closeBtn, nhom, word) {
        // Xoá tag
        const tag = closeBtn.parentElement;
        if (tag) tag.remove();

        // Hiện lại nút trong kho
        const allBtns = document.querySelectorAll('#p102-word-bank button');
        allBtns.forEach(b => {
            if (b.dataset.word === word) {
                b.classList.remove('opacity-30', 'pointer-events-none');
            }
        });
    };

    window.kiemTraBT1_102 = function() {
        const fb = document.getElementById('fb-vn102-bt1');
        if (!fb) return;
        fb.classList.remove('hidden');

        // Lấy từ đã xếp
        const getWords = (nhom) => {
            const listEl = document.getElementById('p102-list-' + nhom);
            if (!listEl) return [];
            return Array.from(listEl.querySelectorAll('span[data-w]')).map(el => el.dataset.w);
        };

        const monWords = getWords('mon');
        const hoatdongWords = getWords('hoatdong');
        const nguoiWords = getWords('nguoi');

        if (monWords.length === 0 && hoatdongWords.length === 0 && nguoiWords.length === 0) {
            fb.innerHTML = '⚠️ Em chưa xếp từ nào vào các nhóm. Hãy chọn từ rồi nhấn vào nhóm tương ứng nhé!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-amber-100 text-amber-900';
            return;
        }

        // Đáp án chuẩn
        const dapAn = {
            mon: ['ca trù', 'quan họ', 'cải lương', 'chèo'],
            hoatdong: ['hát', 'múa', 'biểu diễn', 'đàn'],
            nguoi: ['ca nương', 'nghệ sĩ', 'liền chị', 'liền anh']
        };

        let dungMon = monWords.filter(w => dapAn.mon.includes(w)).length;
        let dungHD = hoatdongWords.filter(w => dapAn.hoatdong.includes(w)).length;
        let dungNguoi = nguoiWords.filter(w => dapAn.nguoi.includes(w)).length;

        let saiMon = monWords.filter(w => !dapAn.mon.includes(w)).length;
        let saiHD = hoatdongWords.filter(w => !dapAn.hoatdong.includes(w)).length;
        let saiNguoi = nguoiWords.filter(w => !dapAn.nguoi.includes(w)).length;

        const tongDung = dungMon + dungHD + dungNguoi;
        const tongSai = saiMon + saiHD + saiNguoi;

        if (tongSai === 0 && tongDung >= 6) {
            fb.innerHTML = `🎉 Xuất sắc! Em đã phân loại đúng tất cả ${tongDung} từ ngữ vào đúng nhóm!`;
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-emerald-100 text-emerald-900';
        } else if (tongSai === 0 && tongDung >= 3) {
            fb.innerHTML = `👍 Tốt lắm! Em đã phân loại đúng ${tongDung} từ. Hãy thử thêm để đạt tối thiểu 2 từ cho mỗi nhóm nhé!`;
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-blue-100 text-blue-600';
        } else if (tongSai > 0) {
            fb.innerHTML = `❌ Có ${tongSai} từ bị xếp sai nhóm. Em hãy kiểm tra lại và sửa nhé!`;
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-rose-100 text-rose-900';
        } else {
            fb.innerHTML = '⚠️ Em hãy xếp thêm từ vào các nhóm nhé!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center bg-amber-100 text-amber-900';
        }
    };
})();

// ===== LUYỆN TẬP BT2: Viết câu + AI Thầy E =====
window.kiemTraBT2_102 = function() {
    const text = document.getElementById('ans-vn102-bt2').value.trim();
    const fb = document.getElementById('fb-vn102-bt2');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E nhắc nhở:</h5><p class="text-lg">Em hãy viết một câu giới thiệu về một môn nghệ thuật truyền thống trước khi gửi Thầy E nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 8) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-rose-900">AI Thầy E góp ý:</h5><p class="text-lg">Câu văn của em hơi ngắn (chỉ có ${words.length} từ). Hãy viết hoàn chỉnh thành một câu đầy đủ chủ ngữ – vị ngữ và bổ sung thêm chi tiết nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-900 border border-rose-300';
        return;
    }

    // Kiểm tra từ nghệ thuật truyền thống
    const artWords = ['ca trù', 'quan họ', 'cải lương', 'chèo', 'tuồng', 'hát', 'múa', 'biểu diễn', 'đàn', 'ca nương', 'nghệ sĩ', 'liền chị', 'liền anh', 'nghệ thuật', 'truyền thống'];
    const hasArt = artWords.some(kw => text.toLowerCase().includes(kw));

    if (!hasArt) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Em nên sử dụng ít nhất 1 – 2 từ ngữ đã tìm được ở bài tập 1 (ví dụ: <em>ca trù, quan họ, liền chị, biểu diễn...</em>) để câu giới thiệu sát với yêu cầu đề bài nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    // Kiểm tra xem câu có dấu chấm câu cuối không
    const lastChar = text.charAt(text.length - 1);
    const hasPunctuation = ['.', '!', '?', '。'].includes(lastChar);

    if (!hasPunctuation) {
        fb.innerHTML = `<div class="flex items-start gap-4"><span class="text-2xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-amber-900">AI Thầy E góp ý:</h5><p class="text-lg">Câu văn của em viết hay nhưng chưa có dấu chấm câu ở cuối. Em hãy bổ sung dấu chấm (.) để hoàn chỉnh câu nhé!</p></div></div>`;
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-900 border border-amber-300';
        return;
    }

    fb.innerHTML = `<div class="flex items-start gap-4 animate-fade-in"><span class="text-xl md:text-3xl">👨‍🏫</span><div><h5 class="font-black text-xl mb-1 text-emerald-900">AI Thầy E đánh giá:</h5><p class="text-lg mb-2">Câu giới thiệu của em rất hay! Em đã biết sử dụng từ ngữ phù hợp để giới thiệu môn nghệ thuật truyền thống một cách sinh động và hấp dẫn. Câu văn đầy đủ ý, đúng ngữ pháp.</p><span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span></div></div>`;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-md';
};
