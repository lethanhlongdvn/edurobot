// ===================================================================
// Tiết 91 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 1)
// PRESENTATION: Slides trình chiếu cho GV
// ===================================================================

export const lesson91Presentation = [
    {
        title: "BÀI 36: TỈ SỐ. TỈ SỐ PHẦN TRĂM",
        time: "60 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic">Tỉ số. Tỉ số phần trăm</h2>
                    <p class="text-3xl md:text-4xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Bài học giúp các em hiểu khái niệm tỉ số và tỉ số phần trăm qua các ví dụ thực tế.
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
        title: "KHÁM PHÁ - Tỉ số",
        time: "12 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-10 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Khám phá: Tỉ số</h2>

                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-8 max-w-4xl mx-auto">
                    <p class="text-3xl md:text-4xl font-bold text-slate-800 leading-relaxed">
                        Trong bến xe buýt, có <span class="text-blue-700 font-black">7 ô tô</span>, trong đó có <span class="text-emerald-700 font-black">3 ô tô điện</span> và <span class="text-orange-700 font-black">4 ô tô chạy xăng</span>.
                    </p>
                    <div class="grid grid-cols-2 gap-6 text-2xl md:text-3xl font-black">
                        <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-center">
                            <p class="text-slate-600 mb-2">Xe điện / Tổng</p>
                            <p class="text-blue-700 text-5xl">3 : 7</p>
                        </div>
                        <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 text-center">
                            <p class="text-slate-600 mb-2">Xe xăng / Tổng</p>
                            <p class="text-blue-700 text-5xl">4 : 7</p>
                        </div>
                        <div class="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-200 text-center">
                            <p class="text-slate-600 mb-2">Xe điện / Xe xăng</p>
                            <p class="text-cyan-700 text-5xl">3 : 4</p>
                        </div>
                        <div class="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-200 text-center">
                            <p class="text-slate-600 mb-2">Xe xăng / Xe điện</p>
                            <p class="text-cyan-700 text-5xl">4 : 3</p>
                        </div>
                    </div>
                    <div class="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl text-white text-center">
                        <p class="text-3xl md:text-4xl font-black italic">Tỉ số của a và b là a : b hay a/b (b ≠ 0)</p>
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
        title: "KHÁM PHÁ - Tỉ số phần trăm",
        time: "12 phút",
        content: `
            <div class="h-full flex flex-col pt-12 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-10 drop-shadow-lg uppercase tracking-wider text-shadow-xl text-center">Tỉ số phần trăm</h2>

                <div class="bg-white/95 p-10 rounded-3xl border-4 border-emerald-200 shadow-2xl text-left space-y-8 max-w-4xl mx-auto">
                    <p class="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed">
                        Khảo sát <span class="font-black text-emerald-700">100 bạn</span> thể thao:
                        Bơi = <span class="font-black text-blue-600">43 bạn</span>,
                        Cờ vua = <span class="font-black text-orange-600">31 bạn</span>,
                        Cầu lông = <span class="font-black text-rose-600">26 bạn</span>.
                    </p>
                    <div class="grid grid-cols-3 gap-6 text-center text-2xl md:text-3xl font-black">
                        <div class="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                            <p class="text-slate-600 mb-2">Bơi</p>
                            <p class="text-blue-700 text-5xl">43%</p>
                        </div>
                        <div class="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
                            <p class="text-slate-600 mb-2">Cờ vua</p>
                            <p class="text-orange-700 text-5xl">31%</p>
                        </div>
                        <div class="bg-rose-50 p-6 rounded-2xl border-2 border-rose-200">
                            <p class="text-slate-600 mb-2">Cầu lông</p>
                            <p class="text-rose-700 text-5xl">26%</p>
                        </div>
                    </div>
                    <div class="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-2xl text-white text-center space-y-3">
                        <p class="text-3xl md:text-4xl font-black">Tỉ số có mẫu số 100 → Tỉ số phần trăm</p>
                        <p class="text-2xl font-medium italic">43/100 = 43% → "Bốn mươi ba phần trăm"</p>
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
        title: "LUYỆN TẬP - Hoạt động 1 & 2",
        time: "20 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-7xl font-black text-white mb-12 drop-shadow-lg uppercase text-shadow-xl">Luyện tập</h2>
                <div class="bg-white/95 p-10 rounded-3xl border-4 border-blue-200 shadow-2xl space-y-8 max-w-3xl mx-auto">
                    <div class="text-left space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl">1</span>
                            <p class="text-2xl md:text-3xl font-black text-blue-800">Hoàn thành bảng tỉ số (theo mẫu)</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-2xl">2</span>
                            <p class="text-2xl md:text-3xl font-black text-emerald-800">Trạng nguyên nhí: Tìm tỉ số nữ/nam, nam/nữ, nữ/tổng</p>
                        </div>
                    </div>
                    <p class="text-2xl text-slate-500 italic font-bold mt-6">Chuyển sang tab "Luyện tập" để làm bài nhé!</p>
                </div>
            </div>
            <style>
               .text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }
            </style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
