// ===================================================================
// Tiết 103 - Bài 42: Máy tính cầm tay (tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson103Presentation = [
    {
        title: "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 1)",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Khám phá & Luyện tập</p>
                    <h2 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Máy tính cầm tay</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 1</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Làm quen với các phím chức năng cơ bản trên máy tính cầm tay và thực hành thực hiện các phép tính đơn giản.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "KHÁM PHÁ - Các phím cơ bản",
        time: "10 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg uppercase text-shadow-xl">Khám phá: Các phím cơ bản</h2>
                <div class="bg-white/95 p-8 rounded-3xl shadow-2xl text-left space-y-4 max-w-4xl mx-auto">
                    <div class="grid grid-cols-2 gap-4 text-xl font-bold text-slate-800">
                        <p class="bg-red-50 p-3 rounded-xl border border-red-200">• <span class="text-red-600 font-black">ON/C</span>: Bật máy</p>
                        <p class="bg-slate-100 p-3 rounded-xl border border-slate-300">• <span class="text-slate-700 font-black">OFF</span>: Tắt máy</p>
                        <p class="bg-blue-50 p-3 rounded-xl border border-blue-200">• <span class="text-blue-700 font-black">0 - 9</span>: Nhập số</p>
                        <p class="bg-emerald-50 p-3 rounded-xl border border-emerald-200">• <span class="text-emerald-700 font-black">+, –, &times;, &divide;</span>: Phép tính</p>
                        <p class="bg-amber-50 p-3 rounded-xl border border-amber-200">• <span class="text-amber-700 font-black">=</span>: Hiện kết quả</p>
                        <p class="bg-rose-50 p-3 rounded-xl border border-rose-200">• <span class="text-rose-600 font-black">CE</span>: Xóa số vừa nhập</p>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "HOẠT ĐỘNG - Bài 1, 2 & 3",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Luyện tập: Thực hành bấm máy</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-blue-700 font-black text-2xl">Bài 2: Tính & kiểm tra</p>
                        <p class="text-xl font-bold text-slate-800">a) 1 975 + 2 025 = <span class="text-blue-700">4 000</span></p>
                        <p class="text-xl font-bold text-slate-800">b) 3 871 – 189 = <span class="text-blue-700">3 682</span></p>
                        <p class="text-xl font-bold text-slate-800">c) 475 &times; 81 = <span class="text-blue-700">38 475</span></p>
                        <p class="text-xl font-bold text-slate-800">d) 51 : 6 = <span class="text-blue-700">8,5</span></p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl text-left space-y-3">
                        <p class="text-indigo-700 font-black text-2xl">Bài 3: Biểu thức Rô-bốt</p>
                        <p class="text-xl font-bold text-slate-800">5 + 2 &times; 3 = ?</p>
                        <p class="text-lg font-bold text-slate-700">• Bấm máy liên tiếp từ trái sang phải: <span class="text-rose-600 font-black">21</span></p>
                        <p class="text-lg font-bold text-slate-700">• Quy tắc toán học (nhân trước cộng sau): <span class="text-emerald-600 font-black">11</span></p>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
