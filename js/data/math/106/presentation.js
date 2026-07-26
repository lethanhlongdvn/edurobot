// ===================================================================
// Tiết 106 - Bài 44: Luyện tập chung (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson106Presentation = [
    {
        title: "BÀI 44: LUYỆN TẬP CHUNG (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Luyện tập chung</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Luyện tập chung (Tiết 1)</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 106 - Tuần 22</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Ôn tập đổi phân số ra %, tỉ lệ bản đồ, bài toán Tổng - Tỉ và giảm giá % khi mua sắm.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 1 & BÀI 2 - ÔN TẬP TỈ SỐ & BẢN ĐỒ",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 1 & Bài 2</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-2">
                        <p class="text-blue-700 font-black text-2xl">Bài 1: Nối tỉ số với %</p>
                        <p>A (6/10) = <span class="text-blue-700">60%</span></p>
                        <p>B (17/20) = <span class="text-blue-700">85%</span></p>
                        <p>C (25/50) = <span class="text-blue-700">50%</span></p>
                        <p>D (12/100) = <span class="text-blue-700">12%</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-2">
                        <p class="text-amber-700 font-black text-2xl">Bài 2: Tỉ lệ bản đồ</p>
                        <p>• 1:2000 & 2cm → Thực tế: <span class="text-amber-700">0,04 km</span></p>
                        <p>• 1:2000 & 1,6km → Bản đồ: <span class="text-amber-700">80 cm</span></p>
                        <p>• 1:500000 & 1,5cm → Thực tế: <span class="text-amber-700">7,5 km</span></p>
                        <p>• 1:500000 & 10km → Bản đồ: <span class="text-amber-700">2 cm</span></p>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 3 & BÀI 4 - GIẢI TOÁN TỔNG TỈ & MUA SẮM",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 3 & Bài 4</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-emerald-700 font-black text-2xl">Bài 3: Thỏ và rùa hái nấm (Tổng - Tỉ)</p>
                        <p>Tổng: 84 cây; Tỉ số Thỏ/Rùa = 2/5</p>
                        <p>Tổng số phần = 2 + 5 = 7 (phần)</p>
                        <p>Thỏ hái: 84 : 7 × 2 = <span class="text-emerald-700">24 cây</span></p>
                        <p>Rùa hái: 84 − 24 = <span class="text-emerald-700">60 cây</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-rose-700 font-black text-2xl">Bài 4: Mua ti vi giảm giá 8%</p>
                        <p>Giá niêm yết: 15 000 000 đồng</p>
                        <p>a) Số tiền giảm: 15 000 000 × 8% = <span class="text-rose-700">1 200 000đ</span></p>
                        <p>b) Giá sau giảm: 15 000 000 − 1 200 000 = <span class="text-rose-700">13 800 000đ</span></p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
