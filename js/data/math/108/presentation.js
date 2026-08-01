// ===================================================================
// Tiết 108 - Bài 45: Thể tích của một hình
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson108Presentation = [
    {
        title: "BÀI 45: THỂ TÍCH CỦA MỘT HÌNH",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Chủ đề 8: Thể tích. Đơn vị đo thể tích</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Thể tích của một hình</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 108 - Tuần 22</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Hình hộp chữ nhật, hình lập phương & so sánh thể tích giữa các hình qua số lượng hình lập phương nhỏ.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Thể tích của một hình",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Khám phá thể tích</h2>
                <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-4 max-w-5xl mx-auto text-lg font-bold text-slate-800">
                    <p class="text-blue-800 font-extrabold text-xl">1. Hình hộp chữ nhật & Hình lập phương:</p>
                    <p>• Hình hộp chữ nhật có <span class="text-blue-700">3 kích thước</span>: chiều dài, chiều rộng, chiều cao.</p>
                    <p>• Hình lập phương có <span class="text-blue-700">6 mặt</span> là các hình vuông bằng nhau.</p>
                    <p class="text-amber-800 font-extrabold text-xl pt-2">2. So sánh thể tích:</p>
                    <p>• Hình nằm hoàn toàn trong hình khác $\rightarrow$ Thể tích bé hơn.</p>
                    <p>• Hai hình gồm cùng số hình lập phương nhỏ như nhau $\rightarrow$ Thể tích bằng nhau.</p>
                    <p>• Tách một hình thành hai hình nhỏ $\rightarrow$ Thể tích hình ban đầu bằng tổng thể tích hai hình nhỏ.</p>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "HOẠT ĐỘNG & LUYỆN TẬP",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Hoạt động & Luyện tập</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-blue-700 font-black text-2xl">Hoạt động: Đếm khối lập phương</p>
                        <p>a) Hình A gồm <span class="text-blue-700">12</span> hình lập phương nhỏ (3 × 2 × 2).</p>
                        <p>b) Hình B gồm <span class="text-blue-700">18</span> hình lập phương nhỏ (3 × 3 × 2).</p>
                        <p>c) Thể tích hình B <span class="text-blue-700 font-extrabold">lớn hơn</span> thể tích hình A.</p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-emerald-700 font-black text-2xl">Luyện tập: So sánh & Xếp hình</p>
                        <p>Bài 1: Hình C (6 khối) = Hình D (6 khối) $\rightarrow$ <span class="text-emerald-700">Đáp án B</span></p>
                        <p>Bài 2a: Thể tích ban đầu = Tổng thể tích A + B ($6 + 2 = 8$ khối)</p>
                        <p>Bài 2b: Xếp 8 khối hàng ngang $\rightarrow$ Dài 8 cm, Rộng 1 cm, Cao 1 cm.</p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
