// ===================================================================
// Tiết 96 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 2 - Luyện tập)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson96Presentation = [
    {
        title: "BÀI 38: TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 2)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-12 animate-fade-in relative z-10 p-8">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/60 z-[-1] rounded-3xl blur-2xl"></div>
                <div class="space-y-6">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-widest">Chủ đề 7</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Luyện tập: Tìm hai số khi biết Tổng và Tỉ số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold tracking-wide uppercase">Tiết 2</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed max-w-3xl mx-auto">
                        Hôm nay chúng ta sẽ tiếp tục luyện tập giải các bài toán thực tế dạng Tổng - Tỉ, bao gồm các bài toán đo đạc, chăn nuôi và diện tích hình chữ nhật.
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
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl">Bài 1 & Bài 2</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-blue-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">1</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-800">Đoạn đường đi học của Páo</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed">
                            Đường dài 1 400 m gồm đoạn lên dốc và đoạn xuống dốc. Biết độ dài đoạn lên dốc bằng 3/4 độ dài đoạn xuống dốc.
                        </p>
                        <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Tổng số phần: 3 + 4 = 7 (phần)</p>
                            <p>• Lên dốc: 1 400 : 7 × 3 = 600 (m)</p>
                            <p>• Xuống dốc: 1 400 - 600 = 800 (m)</p>
                        </div>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-emerald-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">2</span>
                            <h3 class="text-xl md:text-2xl font-black text-emerald-800">Gian hàng tivi siêu thị</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed">
                            Có 36 chiếc ti vi loại 75" và 55". Số ti vi 55" gấp 3 lần số ti vi 75".
                        </p>
                        <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Tổng số phần: 1 + 3 = 4 (phần)</p>
                            <p>• Số tivi 75 inch: 36 : 4 = 9 (chiếc)</p>
                            <p>• Số tivi 55 inch: 36 - 9 = 27 (chiếc)</p>
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
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center animate-slide-up relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase tracking-wider text-shadow-xl">Bài 3 & Bài 4</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-amber-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">3</span>
                            <h3 class="text-xl md:text-2xl font-black text-amber-800">Trại chăn nuôi gà vịt</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed font-bold">
                            Cả gà và vịt có 34 000 con, số gà bằng 7/10 số vịt. Hỏi gà ít hơn vịt bao nhiêu con?
                        </p>
                        <div class="bg-amber-50 p-4 rounded-xl border border-amber-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Tổng số phần: 7 + 10 = 17 (phần)</p>
                            <p>• Số con gà: 34 000 : 17 × 7 = 14 000 (con)</p>
                            <p>• Số con vịt: 34 000 - 14 000 = 20 000 (con)</p>
                            <p>• Hiệu: 20 000 - 14 000 = 6 000 (con)</p>
                        </div>
                    </div>

                    <div class="bg-white/95 p-6 rounded-3xl border-4 border-indigo-200 shadow-2xl text-left space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">4</span>
                            <h3 class="text-xl md:text-2xl font-black text-indigo-800">Mảnh đất hình chữ nhật</h3>
                        </div>
                        <p class="text-lg text-slate-700 leading-relaxed">
                            Chu vi 130 m, chiều rộng bằng 5/8 chiều dài. Mở chiều dài thêm 10 m, chiều rộng thêm 20 m.
                        </p>
                        <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 font-bold text-slate-800 text-lg space-y-1">
                            <p>• Nửa chu vi: 130 : 2 = 65 (m)</p>
                            <p>• Rộng cũ: 25 m | Dài cũ: 40 m</p>
                            <p>• Rộng mới: 45 m | Dài mới: 50 m</p>
                            <p>• Diện tích mới: 50 × 45 = 2 250 (m²)</p>
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
