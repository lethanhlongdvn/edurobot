// ===================================================================
// Tiết 92 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 2)
// PRESENTATION: Slides trình chiếu cho GV (Soạn lại theo ảnh mới)
// ===================================================================

export const lesson92Presentation = [
    {
        title: "BÀI 36: TỈ SỐ. TỈ SỐ PHẦN TRĂM (TIẾT 2)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic">Tỉ số. Tỉ số phần trăm</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Luyện tập (Tiết 2)</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ cùng thực hành các bài tập viết tỉ số phần trăm, giải quyết các tình huống thực tế và điền Đúng/Sai.
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
        title: "KHỞI ĐỘNG - Ôn tập kiến thức",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-10 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khởi động: Nhắc lại kiến thức</h2>
                
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-8 max-w-4xl mx-auto">
                    <div class="space-y-6 text-2xl md:text-3xl font-bold text-slate-800">
                        <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                            <span class="text-blue-600 font-black">1. Tỉ số:</span>
                            Tỉ số của a và b là <span class="text-blue-700 font-black">a : b</span> hay <span class="text-blue-700 font-black">a/b</span> (b khác 0).
                        </div>
                        <div class="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200">
                            <span class="text-emerald-600 font-black">2. Tỉ số phần trăm:</span>
                            Các tỉ số có mẫu số bằng <span class="text-emerald-700 font-black">100</span> được gọi là tỉ số phần trăm (viết kèm kí hiệu <span class="text-emerald-700 font-black">%</span>).
                            Ví dụ: <span class="text-emerald-700 font-black">25/100 = 25%</span>.
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
        title: "LUYỆN TẬP - Bài 1 & Bài 2",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Bài 1 & 2</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">1</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Chọn câu trả lời đúng (Tỉ số học sinh tham gia tổng vệ sinh của các lớp)</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">2</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-800">Viết tỉ số thành tỉ số phần trăm (rút gọn hoặc quy đồng về mẫu số 100)</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Các em hãy chuyển sang tab "Luyện tập" để thực hành nhé!</p>
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
                            <p class="text-2xl md:text-3xl font-black text-orange-800">Điền Đúng (Đ) / Sai (S) về tỉ lệ giới tính khi sinh tại Hà Nội</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-md">4</span>
                            <p class="text-2xl md:text-3xl font-black text-amber-800">Tính tỉ số phần trăm xe ô tô đạt chuẩn và không đạt chuẩn tại trạm cân</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Hãy tư duy thật kỹ để hoàn thành các câu hỏi của bài tập nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
