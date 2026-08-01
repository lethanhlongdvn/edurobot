// ===================================================================
// Tiết 97 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy trên lớp
// ===================================================================

export const lesson97Presentation = [
    {
        title: "BÀI 39: TÌM HAI SỐ KHI BIẾT HIỆU VÀ TÌM TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Tìm hai số khi biết Hiệu và Tỉ số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ làm quen với các bước giải bài toán Hiệu - Tỉ bằng sơ đồ đoạn thẳng tương tự bài toán Tổng - Tỉ.
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
        title: "KHÁM PHÁ - Bài toán Hiệu và Tỉ số",
        time: "12 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khám phá: Bài toán nhặt hạt dẻ</h2>
                
                <div class="bg-white/95 p-8 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4 max-w-4xl mx-auto">
                    <p class="text-2xl font-bold text-slate-700">Em ít hơn chị: 6 hạt dẻ. Tỉ số hạt dẻ em/chị: 3/5.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-xl md:text-2xl font-bold text-slate-800 space-y-3">
                        <p>• Bước 1: Hiệu số phần bằng nhau: 5 - 3 = 2 (phần)</p>
                        <p>• Bước 2: Số hạt dẻ của em: 6 : 2 x 3 = 9 (hạt dẻ)</p>
                        <p>• Bước 3: Số hạt dẻ của chị: 9 + 6 = 15 (hạt dẻ)</p>
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
                            <h3 class="text-xl md:text-2xl font-black text-blue-800">Tìm hai số trên bảng</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed">
                            - Cột A: Hiệu = 25, Tỉ = 4/9 $\rightarrow$ Số bé = 20, Số lớn = 45.<br>
                            - Cột B: Hiệu = 42, Tỉ = 7/4 $\rightarrow$ Số bé = 56, Số lớn = 98.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Cột A: 25 : (9 - 4) = 5 $\rightarrow$ Bé: 20 | Lớn: 45</p>
                            <p>• Cột B: 42 : (7 - 4) = 14 $\rightarrow$ Bé: 56 | Lớn: 98</p>
                        </div>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-emerald-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">2</span>
                            <h3 class="text-xl md:text-2xl font-black text-emerald-800">Giải đấu cờ vua trường học</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Nam nhiều hơn Nữ: 10 bạn. Số nữ bằng 2/3 số nam. Hỏi số nam, số nữ tham gia?
                        </p>
                        <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Hiệu số phần: 3 - 2 = 1 (phần)</p>
                            <p>• Số bạn nam: 10 : 1 × 3 = 30 (bạn)</p>
                            <p>• Số bạn nữ: 30 - 10 = 20 (bạn)</p>
                        </div>
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
