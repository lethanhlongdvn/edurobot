// ===================================================================
// Tiết 94 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 2)
// PRESENTATION: Slides trình chiếu hỗ trợ GV
// ===================================================================

export const lesson94Presentation = [
    {
        title: "BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 2)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic">Tỉ lệ bản đồ và ứng dụng</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Luyện tập (Tiết 2)</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ làm các bài toán luyện tập: tính khoảng cách ga tàu, vẽ bản đồ đoạn thẳng AB, AC và thực hành đo đạc thực tế.
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
        title: "LUYỆN TẬP - Bài 1 & Bài 2",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 1 & 2</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">1</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Tính quãng đường sắt thực tế ga Đà Nẵng - Nha Trang (Tỉ lệ 1 : 10 000 000)</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">2</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-800">Tìm chiều dài đoạn AB, AC trên bản đồ của Nam (Tỉ lệ 1 : 3 000)</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy chuyển sang tab "Luyện tập" để điền các bước giải nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "LUYỆN TẬP - Bài 3 & Bài 4",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 3 & 4</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">3</span>
                            <p class="text-2xl md:text-3xl font-black text-orange-800">Điền số còn thiếu vào bảng tỉ lệ bản đồ</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">4</span>
                            <p class="text-2xl md:text-3xl font-black text-amber-800">Đo độ dài thực tế cạnh bàn của em và tính độ dài thu nhỏ tỉ lệ 1 : 50</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy dùng thước kẻ để đo chiếc bàn học của mình nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
