// ===================================================================
// Tiết 112 - Luyện tập: Mét khối
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson112Presentation = [
    {
        title: "LUYỆN TẬP: MÉT KHỐI",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Hình học và Đo lường</p>
                    <h2 class="text-5xl md:text-7xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Luyện tập: Mét khối</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 112 - Tuần 23</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Luyện tập đổi đơn vị đo m³ - dm³ - cm³, ước lượng số đo phù hợp và tính toán thực tế hoá đơn nước sinh hoạt.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 1 & BÀI 2 - ƯỚC LƯỢNG THỂ TÍCH & ĐỔI ĐƠN VỊ",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 1 & Bài 2</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-blue-700 font-black text-2xl">Bài 1: Nối tương ứng</p>
                        <p>• Hình trái (tí hon): <span class="text-blue-700 font-black">1 cm³</span></p>
                        <p>• Hình giữa (vừa): <span class="text-blue-700 font-black">1 dm³</span></p>
                        <p>• Hình phải (lớn): <span class="text-blue-700 font-black">1 m³</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-amber-700 font-black text-2xl">Bài 2: Số?</p>
                        <div class="grid grid-cols-2 gap-4 text-base">
                            <div>
                                <p>• 2,5 m³ = <span class="text-amber-700 font-black">2 500 dm³</span></p>
                                <p>• 3 900 cm³ = <span class="text-amber-700 font-black">3,9 dm³</span></p>
                            </div>
                            <div>
                                <p>• 4 600 dm³ = <span class="text-amber-700 font-black">4,6 m³</span></p>
                                <p>• 7,5 triệu cm³ = <span class="text-amber-700 font-black">7,5 m³</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 3 - BÀI TOÁN TÍNH TIỀN NƯỚC",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 3: Giải toán</h2>
                <div class="bg-white/95 p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto text-left text-lg font-bold space-y-4">
                    <p class="text-emerald-700 font-black text-2xl">Bài giải chi tiết:</p>
                    <p class="text-slate-700">Số tiền cho 10 m³ nước đầu tiên là:</p>
                    <p class="text-blue-700 font-extrabold pl-6">5 973 × 10 = 59 730 (đồng)</p>
                    <p class="text-slate-700">Số tiền cho 5 m³ tiếp theo (15 − 10 = 5 m³) là:</p>
                    <p class="text-blue-700 font-extrabold pl-6">7 052 × 5 = 35 260 (đồng)</p>
                    <p class="text-slate-700">Tổng số tiền nước nhà Việt phải trả là:</p>
                    <p class="text-orange-700 font-extrabold pl-6">59 730 + 35 260 = 94 990 (đồng)</p>
                    <p class="text-right text-emerald-800 text-xl font-extrabold">Đáp số: 94 990 đồng</p>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
