// ===================================================================
// Tiết 99 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy trên lớp
// ===================================================================

export const lesson99Presentation = [
    {
        title: "BÀI 40: TÌM TỈ SỐ PHẦN TRĂM CỦA HAI SỐ (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Tìm tỉ số phần trăm của hai số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ tìm hiểu cách tính thương dưới dạng số thập phân, rồi quy đổi về tỉ số phần trăm có kí hiệu %.
                    </p>
                </div>
            </div>
            <style>
                .title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Tỉ số phần trăm lớp bơi hè",
        time: "12 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khám phá: Lớp học bơi hè</h2>
                
                <div class="bg-white/95 p-8 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4 max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
                        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-150">
                            <p class="font-bold text-blue-800 mb-2">Lớp thứ nhất (50 bạn, 46 đạt chuẩn):</p>
                            <p class="font-extrabold text-slate-800">46 : 50 = 0,92 = 92%</p>
                        </div>
                        <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-150">
                            <p class="font-bold text-emerald-800 mb-2">Lớp thứ hai (40 bạn, 37 đạt chuẩn):</p>
                            <p class="font-extrabold text-slate-800">37 : 40 = 0,925 = 92,5%</p>
                        </div>
                    </div>
                    <div class="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 text-lg font-bold text-slate-800">
                        <p class="text-xl font-extrabold text-amber-700 mb-1">Muốn tìm tỉ số phần trăm của hai số:</p>
                        <p>1. Tìm thương của hai số.</p>
                        <p>2. Nhân thương đó với 100 và viết thêm kí hiệu % vào bên phải.</p>
                    </div>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "LUYỆN TẬP - Bài 1 & Bài 2",
        time: "18 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl">Hoạt động: Bài 1 & Bài 2</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">1</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-800">Tìm tỉ số phần trăm</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            - 90 và 300 $\rightarrow$ 30%.<br>
                            - 60 và 400 $\rightarrow$ 15%.<br>
                            - Muối trong nước biển: 1,4 : 40 = 0,035 = 3,5%.
                        </p>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-emerald-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">2</span>
                            <h3 class="text-xl md:text-2xl font-black text-emerald-800">Đội tình nguyện bảo vệ môi trường</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Đội có 60 bạn. Tìm tỉ số phần trăm:<br>
                            - Lớp 5A (18 bạn): 18 : 60 = 0,3 = 30%.<br>
                            - Lớp 5B (15 bạn): 15 : 60 = 0,25 = 25%.
                        </p>
                    </div>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
