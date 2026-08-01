// ===================================================================
// Tiết 113 - Luyện tập chung (Tiết 1)
// PRESENTATION: Slides trình chiếu hỗ trợ GV giảng dạy
// ===================================================================

export const lesson113Presentation = [
    {
        title: "LUYỆN TẬP CHUNG",
        time: "5 phút",
        content: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-10 relative z-10 p-8">
                <div class="space-y-5">
                    <p class="text-3xl md:text-4xl font-bold text-blue-200 uppercase tracking-wide">Hình học và Đo lường</p>
                    <h2 class="text-5xl md:text-7xl font-black text-white drop-shadow-2xl title-glow uppercase italic leading-tight">Luyện tập chung (Tiết 1)</h2>
                    <p class="text-4xl md:text-5xl text-yellow-300 font-bold">Tiết 113 - Tuần 23</p>
                    <p class="text-2xl md:text-3xl text-cyan-200 font-medium leading-relaxed max-w-3xl mx-auto italic">
                        Ôn tập tổng hợp về đọc, viết số đo thể tích, ước lượng thể tích, đếm khối lập phương và đổi đơn vị đo.
                    </p>
                </div>
            </div>
            <style>.title-glow { text-shadow: 0 0 30px rgba(255,255,255,0.5); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 1 & BÀI 2 - ĐỌC VIẾT SỐ ĐO & ƯỚC LƯỢNG",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 1 & Bài 2</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-3">
                        <p class="text-blue-700 font-black text-2xl">Bài 1: Đọc viết số đo</p>
                        <p class="text-slate-600 text-sm">a) Một trăm phẩy không năm mét khối:</p>
                        <p class="text-blue-800 font-black pl-4">100,05 m³</p>
                        <p class="text-slate-600 text-sm">b) 0,015 m³:</p>
                        <p class="text-blue-800 font-black pl-4">Không phẩy không một năm mét khối</p>
                        <p class="text-slate-600 text-sm">c) Tám trăm hai mươi mốt đề-xi-mét khối:</p>
                        <p class="text-blue-800 font-black pl-4">821 dm³</p>
                        <p class="text-slate-600 text-sm">d) 100,2 cm³:</p>
                        <p class="text-blue-800 font-black pl-4">Một trăm phẩy hai xăng-ti-mét khối</p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-4">
                        <p class="text-emerald-700 font-black text-2xl">Bài 2: Ước lượng</p>
                        <p class="text-slate-700">Thể tích của khối băng lớn khoảng:</p>
                        <p class="text-emerald-800 font-black text-3xl pl-4">C. 1 m³</p>
                        <p class="text-slate-500 font-medium text-base italic leading-relaxed">
                            (Bởi vì kích thước khối băng lớn hơn 1 dm³ rất nhiều, tương đương chiều cao của con người đứng bên cạnh).
                        </p>
                    </div>
                </div>
            </div>
            <style>.text-shadow-xl { text-shadow: 2px 4px 10px rgba(0,0,0,0.8); }</style>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    },
    {
        title: "BÀI 3 & BÀI 4 - ĐẾM KHỐI & ĐỔI ĐƠN VỊ ĐO",
        time: "15 phút",
        content: `
            <div class="h-full flex flex-col pt-8 text-center relative z-10 px-8">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-5 drop-shadow-lg uppercase text-shadow-xl">Bài 3 & Bài 4</h2>
                <div class="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left text-lg font-bold">
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-4">
                        <p class="text-blue-700 font-black text-2xl">Bài 3: Thể tích hình khối</p>
                        <p class="text-slate-700">Hình bên gồm 44 hình lập phương nhỏ cạnh 1 cm.</p>
                        <p class="text-blue-800 font-black text-3xl">Thể tích: 44 cm³</p>
                        <p class="text-slate-500 font-medium text-base italic leading-relaxed">
                            (Gợi ý đếm theo từng lớp đứng hoặc tính thể tích khối bao quanh rồi trừ đi phần khuyết).
                        </p>
                    </div>
                    <div class="bg-white/95 p-6 rounded-3xl shadow-2xl space-y-4">
                        <p class="text-amber-700 font-black text-2xl">Bài 4: Số?</p>
                        <div class="grid grid-cols-2 gap-4 text-base">
                            <div>
                                <p>• 5 m³ = <span class="text-amber-700 font-black">5 000 dm³</span></p>
                                <p>• 480 dm³ = <span class="text-amber-700 font-black">0,48 m³</span></p>
                            </div>
                            <div>
                                <p>• 0,25 m³ = <span class="text-amber-700 font-black">250 000 cm³</span></p>
                                <p>• 5 000 cm³ = <span class="text-amber-700 font-black">0,005 m³</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        bgImage: "hinh_anh/toan/toan_tap_2/nen.png"
    }
];
