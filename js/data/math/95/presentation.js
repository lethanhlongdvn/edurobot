// ===================================================================
// Tiết 95 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV
// ===================================================================

export const lesson95Presentation = [
    {
        title: "BÀI 38: TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Tìm hai số khi biết Tổng và Tỉ số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ làm quen với phương pháp giải bài toán Tổng - Tỉ: Vẽ sơ đồ, tìm tổng số phần bằng nhau và tìm giá trị của mỗi phần.
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
        title: "KHÁM PHÁ - Bài toán quyên góp lịch",
        time: "12 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khám phá: Bài toán quyên góp lịch</h2>
                
                <div class="bg-white/95 p-8 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4 max-w-4xl mx-auto">
                    <p class="text-2xl font-bold text-slate-700">Tổng số lịch: 60 quyển. Tỉ số lớp 5A và lớp 5B: 7/8.</p>
                    <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-xl md:text-2xl font-bold text-slate-800 space-y-3">
                        <p>• Bước 1: Tổng số phần bằng nhau: 7 + 8 = 15 (phần)</p>
                        <p>• Bước 2: Số lịch lớp 5A: 60 : 15 x 7 = 28 (quyển)</p>
                        <p>• Bước 3: Số lịch lớp 5B: 60 - 28 = 32 (quyển)</p>
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
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 1 & Bài 2</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">1</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Tính số bò khoang và bò vàng trên bãi cỏ (Tổng: 49 con, Tỉ số: 2/5)</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">2</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-800">Tính doanh thu bán hàng mỗi buổi (Tổng: 18 000 000 đồng, Tỉ số: 3/2)</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy chuyển sang tab "Luyện tập" để điền bài giải nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
