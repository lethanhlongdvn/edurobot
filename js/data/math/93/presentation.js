// ===================================================================
// Tiết 93 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV
// ===================================================================

export const lesson93Presentation = [
    {
        title: "BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic">Tỉ lệ bản đồ và ứng dụng</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ tìm hiểu khái niệm tỉ lệ bản đồ, ý nghĩa thực tế và giải các bài toán thực hành đo đạc.
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
        title: "KHÁM PHÁ - Tỉ lệ bản đồ là gì?",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-10 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khám phá: Ý nghĩa tỉ lệ bản đồ</h2>
                
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-6 max-w-4xl mx-auto">
                    <p class="text-3xl font-black text-blue-800">Tỉ số 1 : 10 000 cho biết điều gì?</p>
                    <div class="space-y-4 text-2xl font-bold text-slate-800">
                        <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-250">
                            • Hình ảnh khu vực thực tế được thu nhỏ lại <span class="text-blue-700 font-black">10 000 lần</span>.
                        </div>
                        <div class="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-250">
                            • Độ dài <span class="text-emerald-700 font-black">1 cm</span> trên bản đồ ứng với độ dài thật là <span class="text-emerald-700 font-black">10 000 cm</span> hay <span class="text-emerald-700 font-black">100 m</span> trong thực tế.
                        </div>
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
        title: "LUYỆN TẬP - Bài tập 1",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 1a & 1b</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">1a</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Tính chiều dài thật AB của khu vườn hoa cây cảnh (Tỉ lệ 1 : 1 000)</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">1b</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Tính khoảng cách MN trên bản đồ khi biết chiều rộng thật là 50 m</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy chuyển sang tab "Luyện tập" để điền kết quả vào bảng nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "LUYỆN TẬP - Bài tập 2",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 2</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">2</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-800">Tính quãng đường chặng đua Lạng Sơn - Hà Nội (dài 160 km) trên bản đồ tỉ lệ 1 : 1 000 000</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy đổi đơn vị từ km sang cm trước rồi thực hiện phép tính nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
