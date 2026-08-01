// ===================================================================
// Tiết 100 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 2 - Luyện tập)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson100Presentation = [
    {
        title: "BÀI 40: TÌM TỈ SỐ PHẦN TRĂM CỦA HAI SỐ (TIẾT 2 - LUYỆN TẬP)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Luyện tập</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Tìm tỉ số phần trăm của hai số</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 2</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Luyện tập tìm tỉ số phần trăm, tính toán với % và giải bài toán thực tế về cây trồng và biểu đồ thể thao.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 1 - Tìm tỉ số phần trăm",
        time: "8 phút",
        content: `
            <div class="h-full flex flex-col pt-10 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase text-shadow-xl">Bài 1: Tìm tỉ số phần trăm</h2>
                <div class="bg-white/95 p-8 rounded-3xl shadow-2xl text-left space-y-5 max-w-4xl mx-auto">
                    <p class="font-extrabold text-blue-700 text-xl">a) Theo mẫu: 50 : 13 = 3,8461... = 384,61%</p>
                    <div class="grid grid-cols-2 gap-6 text-xl font-bold text-slate-800">
                        <div class="bg-blue-50 p-4 rounded-2xl"><p>27 và 41:</p><p class="text-blue-700 mt-1">27 : 41 = 0,6585... = 65,85%</p></div>
                        <div class="bg-blue-50 p-4 rounded-2xl"><p>71 và 33:</p><p class="text-blue-700 mt-1">71 : 33 = 2,1515... = 215,15%</p></div>
                    </div>
                    <div class="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200">
                        <p class="font-extrabold text-amber-800 text-xl">b) Trắc nghiệm: Tỉ số phần trăm của 41 và 73 là:</p>
                        <p class="text-xl font-bold text-slate-700 mt-2">41 : 73 = 0,5616... = 56,16%</p>
                        <p class="text-2xl font-black text-emerald-700 mt-1">→ Đáp án đúng: C. 56,16%</p>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 2 - Tính với tỉ số phần trăm",
        time: "8 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 2: Tính (theo mẫu)</h2>
                <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-4 max-w-5xl mx-auto">
                    <div class="grid grid-cols-3 gap-4 text-xl font-bold text-slate-800">
                        <div class="bg-violet-50 p-4 rounded-2xl space-y-1">
                            <p class="text-violet-700 font-extrabold">Câu a:</p>
                            <p>57% + 43,5% = <span class="text-violet-700">100,5%</span></p>
                            <p>100,5% − 57% = <span class="text-violet-700">43,5%</span></p>
                            <p>100,5% − 43,5% = <span class="text-violet-700">57%</span></p>
                        </div>
                        <div class="bg-emerald-50 p-4 rounded-2xl space-y-1">
                            <p class="text-emerald-700 font-extrabold">Câu b:</p>
                            <p>12% × 6 = <span class="text-emerald-700">72%</span></p>
                            <p>72% : 6 = <span class="text-emerald-700">12%</span></p>
                            <p>72% : 12 = <span class="text-emerald-700">6%</span></p>
                        </div>
                        <div class="bg-amber-50 p-4 rounded-2xl space-y-2">
                            <p class="text-amber-700 font-extrabold">Lưu ý:</p>
                            <p class="text-slate-700">Cộng, trừ % như cộng, trừ số thập phân rồi giữ nguyên dấu %.</p>
                            <p class="text-slate-700">Nhân, chia % với số tự nhiên tương tự.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 3 & 4 - Thực hành",
        time: "14 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 3 & 4: Thực hành</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-emerald-700 font-black text-xl">Bài 3: Tết trồng cây</p>
                        <p class="font-bold text-slate-700 text-lg">Kế hoạch: 600 cây. Nửa thời gian: 360 cây. Tổng: 690 cây.</p>
                        <p>a) 360 : 600 = 60% kế hoạch</p>
                        <p>b) 690 : 600 = 115% → Vượt 15%</p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-orange-700 font-black text-xl">Bài 4: Biểu đồ thể thao</p>
                        <p class="font-bold text-slate-700 text-lg">Tổng: 6+18+13+13 = 50 học sinh</p>
                        <div class="text-lg space-y-1 font-bold">
                            <p>Cờ vua: 6/50 = <span class="text-orange-700">12%</span></p>
                            <p>Bóng đá: 18/50 = <span class="text-orange-700">36%</span></p>
                            <p>Bơi: 13/50 = <span class="text-orange-700">26%</span></p>
                            <p>Võ dân tộc: 13/50 = <span class="text-orange-700">26%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
