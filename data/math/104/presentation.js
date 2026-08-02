// ===================================================================
// Tiết 104 - Bài 42: Máy tính cầm tay (tiết 2)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson104Presentation = [
    {
        title: "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 2)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Khám phá & Luyện tập</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Máy tính cầm tay (Tiết 2)</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 104 - Tuần 21</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Tính % của một số, tính tỉ số phần trăm và giải các bài toán mua sắm, tiền gửi ngân hàng bằng máy tính cầm tay.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Sử dụng phím %",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Khám phá: Phím % trên máy tính</h2>
                <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-4 max-w-5xl mx-auto">
                    <div class="grid grid-cols-2 gap-6 text-xl font-bold text-slate-800">
                        <div class="bg-blue-50 p-5 rounded-2xl space-y-2">
                            <p class="text-blue-800 font-black">Ví dụ 1: Tính 5% của 780 000</p>
                            <p class="text-slate-700">Ấn phím: <span class="bg-slate-700 text-white px-2 py-1 rounded">7</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">8</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">0</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">0</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">0</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">0</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">×</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">5</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">%</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">=</span></p>
                            <p class="text-emerald-700 font-extrabold">Kết quả: 39 000</p>
                        </div>
                        <div class="bg-amber-50 p-5 rounded-2xl space-y-2">
                            <p class="text-amber-800 font-black">Ví dụ 2: Tỉ số % của 3 và 40</p>
                            <p class="text-slate-700">Ấn phím: <span class="bg-slate-700 text-white px-2 py-1 rounded">3</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">÷</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">4</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">0</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">%</span> <span class="bg-slate-700 text-white px-2 py-1 rounded">=</span></p>
                            <p class="text-emerald-700 font-extrabold">Kết quả: 7,5%</p>
                        </div>
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
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Hoạt động & Luyện tập</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3 text-lg font-bold">
                        <p class="text-blue-700 font-black text-xl">Luyện tập 1: Hoàn tiền 10%</p>
                        <p>a) Tổng: 275k + 599k + 120k = 994 000đ (&lt; 1 000 000đ) → <span class="text-rose-600">0 đồng</span></p>
                        <p>b) Tổng: 850k + 250k = 1 100 000đ</p>
                        <p>Tiền hoàn lại: 1 100 000 × 10% = <span class="text-emerald-700">110 000 đồng</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3 text-lg font-bold">
                        <p class="text-amber-700 font-black text-xl">Luyện tập 2: Tiền gửi ngân hàng</p>
                        <p>Tiền gửi: 250 000 000 đồng</p>
                        <p>Lãi suất: 8% / năm</p>
                        <p>Tiền lãi sau 1 năm là:</p>
                        <p class="text-2xl font-black text-blue-700">250 000 000 × 8% = 20 000 000 đồng</p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
