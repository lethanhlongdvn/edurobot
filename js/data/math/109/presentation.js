// ===================================================================
// Tiết 109 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson109Presentation = [
    {
        title: "BÀI 46: XĂNG-TI-MÉT KHỐI. ĐỀ-XI-MÉT KHỐI (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Đơn vị đo thể tích</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Xăng-ti-mét khối. Đề-xi-mét khối</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 109 - Tuần 22</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Tìm hiểu đơn vị cm³, dm³, mối quan hệ $1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$ và thực hành đổi số đo thể tích.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Đơn vị cm³ và dm³",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Khám phá đơn vị đo</h2>
                <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-4 max-w-5xl mx-auto text-lg font-bold text-slate-800">
                    <div class="grid grid-cols-2 gap-6">
                        <div class="bg-blue-50 p-5 rounded-2xl space-y-2">
                            <p class="text-blue-800 font-black text-xl">a) Xăng-ti-mét khối (cm³)</p>
                            <p>• Thể tích hình lập phương cạnh 1 cm.</p>
                            <p>• Viết tắt là: <span class="text-blue-700 font-extrabold text-2xl">cm³</span></p>
                        </div>
                        <div class="bg-amber-50 p-5 rounded-2xl space-y-2">
                            <p class="text-amber-800 font-black text-xl">b) Đề-xi-mét khối (dm³)</p>
                            <p>• Thể tích hình lập phương cạnh 1 dm.</p>
                            <p>• Viết tắt là: <span class="text-amber-700 font-extrabold text-2xl">dm³</span></p>
                        </div>
                    </div>
                    <div class="bg-emerald-50 p-5 rounded-2xl border-2 border-emerald-200 text-center text-xl font-extrabold text-emerald-900 space-y-1">
                        <p>c) Mối quan hệ giữa dm³ và cm³:</p>
                        <p class="text-3xl text-emerald-700 font-black">1 dm³ = 1 000 cm³</p>
                        <p class="text-xl text-slate-700">1 cm³ = 1/1 000 dm³</p>
                    </div>
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
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Hoạt động thực hành</h2>
                <div class="grid grid-cols-3 gap-4 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-5 rounded-3xl shadow-2xl space-y-2">
                        <p class="text-blue-700 font-black text-xl">Bài 1: Đọc & Viết</p>
                        <p>• 234 dm³: Hai trăm ba mươi tư đề-xi-mét khối</p>
                        <p>• 1 000 dm³: Một nghìn đề-xi-mét khối</p>
                        <p>• 0,8 cm³: Không phẩy tám xăng-ti-mét khối</p>
                    </div>
                    <div class="bg-white/95 p-5 rounded-3xl shadow-2xl space-y-2">
                        <p class="text-amber-700 font-black text-xl">Bài 2: Tính thể tích</p>
                        <p>a) 2 × 3 × 2 = <span class="text-amber-700">12 cm³</span></p>
                        <p>b) 3 × 3 × 3 = <span class="text-amber-700">27 cm³</span></p>
                    </div>
                    <div class="bg-white/95 p-5 rounded-3xl shadow-2xl space-y-2">
                        <p class="text-emerald-700 font-black text-xl">Bài 3: Đổi đơn vị</p>
                        <p>• 1 dm³ = 1 000 cm³</p>
                        <p>• 2 dm³ = 2 000 cm³</p>
                        <p>• 5 dm³ 6 cm³ = 5 006 cm³</p>
                        <p>• 5 000 cm³ = 5 dm³</p>
                        <p>• 8 700 cm³ = 8,7 dm³</p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
