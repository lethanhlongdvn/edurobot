// ===================================================================
// Tiết 101 - Bài 41: Tìm giá trị phần trăm của một số (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson101Presentation = [
    {
        title: "BÀI 41: TÌM GIÁ TRỊ PHẦN TRĂM CỦA MỘT SỐ (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Khám phá & Luyện tập</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Tìm giá trị phần trăm của một số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Học cách tìm giá trị phần trăm của một số và giải các bài toán thực tế liên quan đến giảm giá và đo lường.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Tìm giá trị phần trăm của một số",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase text-shadow-xl">Khám phá: Quy tắc tính</h2>
                <div class="bg-white/95 p-8 rounded-3xl shadow-2xl text-left space-y-6 max-w-4xl mx-auto">
                    <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 space-y-3">
                        <p class="text-2xl font-extrabold text-blue-800">Ví dụ: Tìm 60% của 300 tấn</p>
                        <p class="text-xl font-bold text-slate-800">Cách 1: (300 &times; 60) : 100 = 180 (tấn)</p>
                        <p class="text-xl font-bold text-slate-800">Cách 2: (300 : 100) &times; 60 = 180 (tấn)</p>
                    </div>
                    <div class="bg-pink-50 p-6 rounded-2xl border-2 border-pink-200">
                        <p class="text-2xl font-black text-pink-800 mb-2">💡 Quy tắc ghi nhớ:</p>
                        <p class="text-xl font-bold text-pink-900 leading-relaxed">
                            Muốn tìm 60% của 300 ta có thể lấy 300 nhân với 60 rồi chia cho 100 hoặc lấy 300 chia cho 100 rồi nhân với 60.
                        </p>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "HOẠT ĐỘNG - Bài 1 & Bài 2",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 1 & Bài 2: Luyện tập</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-blue-700 font-black text-2xl">Bài 1: Tính giá trị phần trăm</p>
                        <p class="text-xl font-bold text-slate-800">a) 70% của 120 m²: <span class="text-blue-700">84 m²</span></p>
                        <p class="text-xl font-bold text-slate-800">b) 24,5% của 2 kg: <span class="text-blue-700">0,49 kg</span></p>
                        <p class="text-xl font-bold text-slate-800">c) 0,8% của 15 000 000 đồng: <span class="text-blue-700">120 000 đồng</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-emerald-700 font-black text-2xl">Bài 2: Giảm giá ngày 1-6 (15%)</p>
                        <p class="text-xl font-bold text-slate-800">• Ba lô (250 000đ):</p>
                        <p class="text-lg pl-4 font-bold text-slate-700">250 000 &times; 15 : 100 = <span class="text-emerald-700 font-extrabold">37 500 đồng</span></p>
                        <p class="text-xl font-bold text-slate-800">• Thú bông (120 000đ):</p>
                        <p class="text-lg pl-4 font-bold text-slate-700">120 000 &times; 15 : 100 = <span class="text-emerald-700 font-extrabold">18 000 đồng</span></p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
