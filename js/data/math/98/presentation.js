// ===================================================================
// Tiết 98 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 2 - Luyện tập)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy trên lớp
// ===================================================================

export const lesson98Presentation = [
    {
        title: "BÀI 39: TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 2)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Luyện tập: Tìm hai số khi biết Hiệu và Tỉ số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 2</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ tiếp tục luyện tập giải các bài toán thực tế dạng Hiệu - Tỉ: vệ sinh môi trường, diện tích đất đai, chăn nuôi thủy sản và tính tuổi.
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
            <div class="h-full flex flex-col pt-8 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl">Luyện tập: Bài 1 & Bài 2</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">1</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-800">Thu gom rác thải trường học</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Loại A bằng 3/7 loại B. Loại A ít hơn loại B là 8 kg. Hỏi mỗi loại?
                        </p>
                        <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Hiệu số phần: 7 - 3 = 4 (phần)</p>
                            <p>• Rác loại A: 8 : 4 × 3 = 6 (kg)</p>
                            <p>• Rác loại B: 6 + 8 = 14 (kg)</p>
                        </div>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-emerald-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">2</span>
                            <h3 class="text-xl md:text-2xl font-black text-emerald-800">Mảnh đất hình chữ nhật</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Chiều dài hơn chiều rộng 10 m, chiều dài bằng 3/2 chiều rộng. Tính chu vi và diện tích?
                        </p>
                        <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Hiệu số phần: 3 - 2 = 1 (phần)</p>
                            <p>• Rộng: 20 m | Dài: 30 m</p>
                            <p>• Chu vi: (30 + 20) x 2 = 100 (m)</p>
                            <p>• Diện tích: 30 x 20 = 600 (m²)</p>
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
        title: "LUYỆN TẬP - Bài 3 & Bài 4",
        time: "18 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl">Luyện tập: Bài 3 & Bài 4</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-amber-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">3</span>
                            <h3 class="text-xl md:text-2xl font-black text-amber-800">Cá tra gia đình bác Năm</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Cá loại A bằng 5/2 loại B. Loại A hơn loại B là 6 tấn.
                        </p>
                        <div class="bg-amber-50 p-4 rounded-xl border border-amber-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Hiệu số phần: 5 - 2 = 3 (phần)</p>
                            <p>• Cá loại A: 10 tấn | Cá loại B: 4 tấn</p>
                            <p>• 10 tấn = 10 000 kg</p>
                            <p>• Tổng số tiền loại A: 10 000 × 29 500 = 295 000 000 đồng</p>
                        </div>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-indigo-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">4</span>
                            <h3 class="text-xl md:text-2xl font-black text-indigo-800">Tính tuổi mẹ và tuổi con</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Mẹ hơn con 25 tuổi. Sau 2 năm con bằng 2/7 mẹ. Tìm tuổi hiện nay?
                        </p>
                        <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Hiệu tuổi luôn không đổi là 25 tuổi</p>
                            <p>• Tuổi con sau 2 năm: 25 : (7 - 2) x 2 = 10 tuổi</p>
                            <p>• Hiện nay: Con: 8 tuổi | Mẹ: 33 tuổi</p>
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
