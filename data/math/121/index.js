const metadata = {
    "lessonInfo": {
        "period": "121",
        "week": "25",
        "topic": "Hình học và Đo lường",
        "title": "Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương (tiết 2)",
        "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương."
    },
    "exercises": [
        {
            "id": "121_1",
            "type": "fill_in_blank",
            "statement": "Người ta cần dán các mảnh nhựa màu vừa đủ vào khung của những chiếc đèn hình lập phương như hình dưới đây. Hãy tính diện tích các mảnh nhựa màu cần sử dụng cho mỗi bóng đèn.",
            "subQuestions": [
                { "label": "Đèn 25 cm", "id": "121-1-a", "answer": "2500", "unit": "cm²" },
                { "label": "Đèn 15 cm", "id": "121-1-b", "answer": "900", "unit": "cm²" },
                { "label": "Đèn 30 cm", "id": "121-1-c", "answer": "3600", "unit": "cm²" }
            ],
            "solution": "Dán giấy màu vào khung đèn lập phương tức là dán 4 mặt xung quanh của chiếc đèn.<br>Diện tích mảnh nhựa màu cần dùng cho mỗi bóng đèn là:<br>- Đèn cạnh 25 cm: 25 x 25 x 4 = 2500 (cm²).<br>- Đèn cạnh 15 cm: 15 x 15 x 4 = 900 (cm²).<br>- Đèn cạnh 30 cm: 30 x 30 x 4 = 3600 (cm²)."
        },
        {
            "id": "121_2",
            "type": "fill_in_blank",
            "statement": "Mai muốn phủ các mặt xung quanh và mặt trên cùng của một chiếc bánh có dạng hình lập phương cạnh 10 cm bằng một lớp kem. Tính diện tích phần bánh cần phủ.",
            "subQuestions": [
                { "id": "121-2-ans", "answer": "500", "unit": "cm²" }
            ],
            "solution": "Phủ các mặt xung quanh và mặt trên cùng tức là phủ kem lên 5 mặt của chiếc bánh hình lập phương.<br>Diện tích phần bánh cần phủ kem là:<br>10 x 10 x 5 = 500 (cm²).<br>Đáp số: 500 cm²."
        },
        {
            "id": "121_3",
            "type": "fill_in_blank",
            "statement": "Rô-bốt cung cấp dịch vụ trang trí chậu cây với giá 25 đồng cho 1 cm² chậu cây. Nam muốn trang trí các mặt xung quanh của chậu cây có dạng hình lập phương cạnh 20 cm. Hãy tính số tiền mà Nam cần trả cho Rô-bốt.",
            "subQuestions": [
                { "id": "121-3-ans", "answer": "40000", "unit": "đồng" }
            ],
            "solution": "Diện tích xung quanh của chậu cây hình lập phương là:<br>20 x 20 x 4 = 1600 (cm²).<br>Số tiền Nam cần trả cho Rô-bốt để trang trí chậu cây là:<br>1600 x 25 = 40 000 (đồng).<br>Đáp số: 40 000 đồng."
        },
        {
            "id": "121_4",
            "type": "selection",
            "statement": "Nam có hai hình lập phương cạnh 4 cm. Bạn ấy đặt hai hình cạnh nhau để tạo thành một hình hộp chữ nhật. Mai nói rằng: 'Diện tích toàn phần của hình hộp chữ nhật gấp 2 lần diện tích toàn phần của hình lập phương.'. Hỏi Mai nhận xét như vậy có đúng không?",
            "options": ["Đúng", "Sai"],
            "answer": "Sai",
            "solution": "Diện tích toàn phần của một hình lập phương ban đầu là:<br>4 x 4 x 6 = 96 (cm²).<br>Hai lần diện tích toàn phần của hình lập phương là:<br>96 x 2 = 192 (cm²).<br>Khi ghép hai hình lập phương cạnh nhau, hai mặt của chúng tiếp xúc khít nhau và bị che đi, do đó diện tích toàn phần của hình hộp chữ nhật mới sẽ bằng tổng diện tích toàn phần của hai hình lập phương trừ đi 2 mặt bị che khuất:<br>192 - (4 x 4 x 2) = 160 (cm²).<br>Vì 160 cm² khác 192 cm², nên Mai nhận xét như vậy là sai."
        }
    ],
    "quizPool": [
        { "question": "Diện tích xung quanh hình lập phương cạnh a là?", "options": ["a x a x 4", "a x a x 6", "a x a", "a x 4"], "answer": 0, "level": "easy" },
        { "question": "Diện tích toàn phần hình lập phương cạnh a là?", "options": ["a x a x 4", "a x a x 6", "a x a", "a x 6"], "answer": 1, "level": "easy" },
        { "question": "Một hình lập phương cạnh 2 cm. Diện tích xung quanh là?", "options": ["16 cm²", "24 cm²", "8 cm²", "4 cm²"], "answer": 0, "level": "medium" },
        { "question": "Một hình lập phương cạnh 3 dm. Diện tích toàn phần là?", "options": ["54 dm²", "27 dm²", "36 dm²", "9 dm²"], "answer": 0, "level": "medium" },
        { "question": "Diện tích 1 mặt hình lập phương là 10 dm². Diện tích toàn phần là?", "options": ["40 dm²", "60 dm²", "20 dm²", "100 dm²"], "answer": 1, "level": "easy" },
        { "question": "Cạnh hình lập phương tăng 2 lần thì diện tích xung quanh tăng mấy lần?", "options": ["2", "4", "8", "6"], "answer": 1, "level": "hard" },
        { "question": "Hộp hình lập phương không nắp có mấy mặt?", "options": ["4", "5", "6", "2"], "answer": 1, "level": "easy" },
        { "question": "Hình lập phương cạnh 10 cm. Diện tích 5 mặt là?", "options": ["400 cm²", "500 cm²", "600 cm²", "100 cm²"], "answer": 1, "level": "medium" },
        { "question": "Diện tích toàn phần là tổng diện tích của mấy mặt hình lập phương?", "options": ["4 mặt", "5 mặt", "6 mặt", "2 mặt"], "answer": 2, "level": "easy" },
        { "question": "1 m² bằng bao nhiêu dm²?", "options": ["10", "100", "1000", "10000"], "answer": 1, "level": "medium" },
        { "question": "Khi ghép 2 khối lập phương khít nhau, ta mất đi diện tích mấy mặt?", "options": ["1 mặt", "2 mặt", "3 mặt", "0 mặt"], "answer": 1, "level": "medium" },
        { "question": "Hình lập phương có các mặt đều là hình gì?", "options": ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình tròn"], "answer": 0, "level": "easy" },
        { "question": "Diện tích xung quanh hình lập phương cạnh 0,5 m là?", "options": ["1 m²", "1,5 m²", "0,25 m²", "0,5 m²"], "answer": 0, "level": "medium" },
        { "question": "Diện tích một mặt hình lập phương là 25 cm². Độ dài cạnh của nó là?", "options": ["5 cm", "10 cm", "25 cm", "4 cm"], "answer": 0, "level": "easy" },
        { "question": "Hình lập phương có bao nhiêu cạnh bằng nhau?", "options": ["4 cạnh", "6 cạnh", "8 cạnh", "12 cạnh"], "answer": 3, "level": "easy" }
    ]
};

export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "121",
    "title": "Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương (tiết 2)",
    "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">🎯</div>
                    <h3 class="text-slate-800 italic text-xl md:text-xl font-black">Ôn tập công thức</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 text-center">
                        <p class="text-xl font-bold text-amber-700 mb-2 tracking-widest">Diện tích xung quanh</p>
                        <p class="text-3xl md:text-4xl font-black text-amber-600 italic">Sxq = (a × a) × 4</p>
                    </div>
                    <div class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100 text-center">
                        <p class="text-xl font-bold text-blue-700 mb-2 tracking-widest">Diện tích toàn phần</p>
                        <p class="text-3xl md:text-4xl font-black text-blue-600 italic">Stp = (a × a) × 6</p>
                    </div>
                </div>
                <div class="mt-8 bg-emerald-50 p-6 rounded-3xl border-l-8 border-emerald-500 font-bold text-xl md:text-xl text-emerald-900 italic">
                    "Lưu ý: Hộp không nắp tính diện tích 5 mặt. Khi ghép khối khít nhau, hãy chú ý các mặt tiếp xúc bị che khuất ở giữa!"
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">

                    <!-- Bài 1 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">1</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 1. Diện tích nhựa dán đèn</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Người ta cần dán các mảnh nhựa màu vừa đủ vào khung của những chiếc đèn hình lập phương như hình dưới đây. Hãy tính diện tích các mảnh nhựa màu cần sử dụng cho mỗi bóng đèn.</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                                <div class="space-y-6">
                                    <div class="bg-white p-6 rounded-3xl border border-slate-200">
                                        <p class="text-lg md:text-xl font-bold text-slate-500 mb-2 text-left">Đèn có cạnh 25 cm (cm²)</p>
                                        <input type="text" id="ans-121-1-a" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="?">
                                    </div>
                                    <div class="bg-white p-6 rounded-3xl border border-slate-200">
                                        <p class="text-lg md:text-xl font-bold text-slate-500 mb-2 text-left">Đèn có cạnh 15 cm (cm²)</p>
                                        <input type="text" id="ans-121-1-b" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="?">
                                    </div>
                                    <div class="bg-white p-6 rounded-3xl border border-slate-200">
                                        <p class="text-lg md:text-xl font-bold text-slate-500 mb-2 text-left">Đèn có cạnh 30 cm (cm²)</p>
                                        <input type="text" id="ans-121-1-c" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-3xl md:text-3xl font-black text-center text-blue-600 outline-none focus:ring-4 ring-blue-100" placeholder="?">
                                    </div>
                                </div>
                                <div class="bg-white p-4 rounded-2xl border border-slate-150 flex items-center justify-center h-80 lg:h-96">
                                    <img src="assets/images/toan/toan_tap_2/121/121-b1-lamps.webp" class="max-h-full max-w-full object-contain rounded-xl" alt="Mảnh nhựa dán khung đèn">
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-121-1" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Dán giấy màu vào khung đèn lập phương tức là dán 4 mặt xung quanh của chiếc đèn.<br>
                                Diện tích mảnh nhựa màu cần dùng cho mỗi bóng đèn là:<br>
                                - Đèn cạnh 25 cm: 25 x 25 x 4 = 2500 (cm²).<br>
                                - Đèn cạnh 15 cm: 15 x 15 x 4 = 900 (cm²).<br>
                                - Đèn cạnh 30 cm: 30 x 30 x 4 = 3600 (cm²).
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-121-1')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-121-1" onclick="window.submitEx121()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>

                    <!-- Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                 <div class="flex items-start gap-6">
                                     <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">2</div>
                                     <div class="space-y-2">
                                         <span class="text-xl font-black text-blue-700 block">Bài 2. Diện tích phủ kem</span>
                                         <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Mai muốn phủ các mặt xung quanh và mặt trên cùng của một chiếc bánh có dạng hình lập phương cạnh 10 cm bằng một lớp kem. Tính diện tích phần bánh cần phủ.</p>
                                     </div>
                                 </div>
                                 
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                                <div class="space-y-6">
                                    <p class="text-xl md:text-2xl font-bold text-slate-700 leading-tight italic">
                                        "Chiếc bánh hình lập phương cạnh 10 cm. Phủ các mặt xung quanh và mặt trên cùng (tổng cộng 5 mặt)."
                                    </p>
                                    <div class="flex items-center gap-4">
                                         <input type="text" id="ans-121-2" class="w-48 bg-white border border-slate-200 rounded-xl p-4 text-3xl md:text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-blue-100" placeholder="?">
                                         <span class="text-xl md:text-2xl font-black text-slate-500">cm²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-4 rounded-2xl border border-slate-150 flex items-center justify-center h-64 md:h-72">
                                    <img src="assets/images/toan/toan_tap_2/121/121-b2-mai-cake.webp" class="max-h-full max-w-full object-contain rounded-xl shadow-md" alt="Phủ kem lên bánh">
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-121-2" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Mai phủ kem lên 4 mặt xung quanh và 1 mặt trên của chiếc bánh hình lập phương (tổng cộng 5 mặt).<br>
                                Diện tích phần bánh cần phủ kem là:<br>
                                10 x 10 x 5 = 500 (cm²).<br>
                                Đáp số: 500 cm².
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-121-2')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-121-2" onclick="window.submitEx121()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>

                    <!-- Bài 3 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                             <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">3</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 3. Số tiền trang trí chậu cây</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Rô-bốt cung cấp dịch vụ trang trí chậu cây với giá 25 đồng cho 1 cm² chậu cây. Nam muốn trang trí các mặt xung quanh của chậu cây có dạng hình lập phương cạnh 20 cm. Hãy tính số tiền mà Nam cần trả cho Rô-bốt.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                                <div class="space-y-6">
                                    <p class="text-xl md:text-2xl font-bold text-slate-700 leading-tight italic">
                                        "Chậu cây cạnh 20 cm. Trang trí các mặt xung quanh (4 mặt). Đơn giá: 25 đồng/cm²."
                                    </p>
                                    <div class="flex items-center gap-4">
                                         <input type="text" id="ans-121-3" class="w-64 bg-white border border-slate-200 rounded-xl p-4 text-3xl md:text-4xl font-black text-blue-600 text-center outline-none focus:ring-4 ring-blue-100" placeholder="?">
                                         <span class="text-xl md:text-2xl font-black text-slate-500">đồng</span>
                                    </div>
                                </div>
                                <div class="bg-white p-4 rounded-2xl border border-slate-150 flex items-center justify-center h-64 md:h-72">
                                    <img src="assets/images/toan/toan_tap_2/121/121-b3-robot-pot.webp" class="max-h-full max-w-full object-contain rounded-xl shadow-md" alt="Robot vẽ chậu hoa">
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-121-3" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Diện tích trang trí xung quanh chậu cây hình lập phương là:<br>
                                20 x 20 x 4 = 1600 (cm²).<br>
                                Số tiền Nam cần trả cho Rô-bốt để trang trí chậu cây là:<br>
                                1600 x 25 = 40 000 (đồng).<br>
                                Đáp số: 40 000 đồng.
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-121-3')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-121-3" onclick="window.submitEx121()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>

                    <!-- Bài 4 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div class="flex justify-between items-start gap-6 mb-12 text-left">
                                <div class="flex items-start gap-6">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg shrink-0">4</div>
                                    <div class="space-y-2">
                                        <span class="text-xl font-black text-blue-700 block">Bài 4. Nhận xét của Mai</span>
                                        <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black tracking-tight">Nam có hai hình lập phương cạnh 4 cm. Bạn ấy đặt hai hình cạnh nhau để tạo thành một hình hộp chữ nhật. Mai nói rằng: 'Diện tích toàn phần của hình hộp chữ nhật gấp 2 lần diện tích toàn phần của hình lập phương.'. Hỏi Mai nhận xét như vậy có đúng không?</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                                <div class="space-y-6">
                                     <p class="text-xl md:text-2xl font-bold text-slate-700 italic leading-snug">
                                        "Ghép 2 lập phương cạnh 4 cm thành hình hộp chữ nhật. Diện tích toàn phần hình hộp mới gấp 2 lần diện tích toàn phần hình lập phương cũ."
                                     </p>
                                     <div class="flex gap-4 justify-center">
                                        <button onclick="window.select_121_4('Đúng')" id="btn-121-4-Dung" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all active:scale-95 text-slate-700">Đúng</button>
                                        <button onclick="window.select_121_4('Sai')" id="btn-121-4-Sai" class="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all active:scale-95 text-slate-700">Sai</button>
                                     </div>
                                </div>
                                <div class="bg-white p-4 rounded-2xl border border-slate-150 flex items-center justify-center h-64 md:h-72">
                                    <img src="assets/images/toan/toan_tap_2/121/121-b4-kids-cubes.webp" class="max-h-full max-w-full object-contain rounded-xl shadow-md" alt="Các bạn xếp hình lập phương">
                                </div>
                            </div>

                            <!-- Lời giải ẩn cho giáo viên -->
                            <div id="sol-121-4" class="hidden p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 text-xl md:text-3xl font-bold text-slate-900 leading-relaxed text-left w-full mb-8 shadow-inner">
                                <p class="text-2xl md:text-3xl font-black text-amber-900 mb-4">✍️ Bài giải chi tiết:</p>
                                Diện tích toàn phần của 1 hình lập phương ban đầu là: 4 x 4 x 6 = 96 (cm²).<br>
                                Hai lần diện tích toàn phần của hình lập phương là: 96 x 2 = 192 (cm²).<br>
                                Khi ghép hai hình lập phương cạnh nhau, hai mặt của chúng tiếp xúc khít nhau và bị che đi, do đó diện tích toàn phần của hình hộp chữ nhật mới bằng:<br>
                                192 - (4 x 4 x 2) = 160 (cm²).<br>
                                Vì 160 cm² khác 192 cm², nên Mai nhận xét như vậy là sai.
                            </div>

<div class="flex justify-end items-center gap-4 mt-8">
                        <button onclick="window.toggleSolution('sol-121-4')" class="bg-amber-500 hover:bg-amber-600 text-white text-xs md:text-sm font-black px-5 py-3 rounded-2xl active:scale-95 transition-all shadow-md shrink-0">Hiện bài giải</button>
                        <button id="btn-submit-121-4" onclick="window.submitEx121()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl font-black text-3xl md:text-4xl shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0">E</button>
                    </div></div>
                    </div>

                </div>
            </div>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

let ans4 = null;
window.select_121_4 = function(c) {
    ans4 = c;
    ['Dung','Sai'].forEach(v => {
        const btn = document.getElementById('btn-121-4-'+v);
        if (btn) {
            btn.className = (v===(c==='Đúng'?'Dung':'Sai') ? "flex-1 py-4 bg-blue-600 border-2 border-transparent rounded-2xl font-black text-2xl md:text-3xl text-white shadow-xl transition-all" : "flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-2xl md:text-3xl hover:border-blue-400 transition-all opacity-50 text-slate-700");
        }
    });
};

window.check_121_1 = function() {
    const vA = document.getElementById('ans-121-1-a').value.trim();
    const vB = document.getElementById('ans-121-1-b').value.trim();
    const vC = document.getElementById('ans-121-1-c').value.trim();
    const isCorrect = (vA === '2500' && vB === '900' && vC === '3600');
    window.showMathFeedback(isCorrect, "2500; 900; 3600", `${vA}, ${vB}, ${vC}`, "Dán giấy quanh đèn là tính diện tích xung quanh (Sxq = a x a x 4).", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Mảnh nhựa dán xung quanh đèn (4 mặt bên) là diện tích xung quanh hình lập phương:</p>
            <ul class="list-disc pl-6 space-y-2 text-xl md:text-2xl text-slate-700">
                <li>Đèn 25 cm: 25 x 25 x 4 = 2500 (cm²)</li>
                <li>Đèn 15 cm: 15 x 15 x 4 = 900 (cm²)</li>
                <li>Đèn 30 cm: 30 x 30 x 4 = 3600 (cm²)</li>
            </ul>
        </div>`
    );
    window.submitMathLesson("Tiết 121 - Bài 1", isCorrect ? 100 : 0, "ans-121-1-a", 0, 3, isCorrect ? 3 : 0);
};

window.check_121_2 = function() {
    const v = document.getElementById('ans-121-2').value.trim();
    const isCorrect = (v === '500');
    window.showMathFeedback(isCorrect, "500", v, "Bánh phủ kem 5 mặt (4 mặt xung quanh + 1 mặt trên). S = 10 x 10 x 5.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Mai cần phủ kem lên 4 mặt xung quanh và 1 mặt trên của chiếc bánh hình lập phương (tổng cộng 5 mặt).</p>
            <p class="text-xl md:text-2xl">Diện tích phần bánh cần phủ kem là:<br>10 x 10 x 5 = 500 (cm²).<br>Đáp số: 500 cm².</p>
        </div>`
    );
    window.submitMathLesson("Tiết 121 - Bài 2", isCorrect ? 100 : 0, "ans-121-2", 0, 1, isCorrect ? 1 : 0);
};

window.check_121_3 = function() {
    const v = document.getElementById('ans-121-3').value.trim();
    const isCorrect = (v === '40000');
    window.showMathFeedback(isCorrect, "40000", v, "Sxq = 20 x 20 x 4 = 1600 cm². Số tiền = 1600 x 25.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Diện tích trang trí xung quanh chậu cây hình lập phương là:<br>20 x 20 x 4 = 1600 (cm²).</p>
            <p class="text-xl md:text-2xl">Số tiền Nam cần trả cho Rô-bốt là:<br>1600 x 25 = 40 000 (đồng).<br>Đáp số: 40 000 đồng.</p>
        </div>`
    );
    window.submitMathLesson("Tiết 121 - Bài 3", isCorrect ? 100 : 0, "ans-121-3", 0, 1, isCorrect ? 1 : 0);
};

window.check_121_4 = function() {
    const isCorrect = (ans4 === 'Sai');
    window.showMathFeedback(isCorrect, "Sai", ans4, "Hai khối lập phương ghép cạnh nhau sẽ bị mất đi 2 mặt tiếp xúc ở giữa.", 
        `<div class="text-left space-y-4">
            <p class="text-2xl md:text-3xl font-bold text-emerald-600">Lời giải chi tiết:</p>
            <p class="text-xl md:text-2xl">Diện tích toàn phần 1 hình lập phương là: 4 x 4 x 6 = 96 (cm²).</p>
            <p class="text-xl md:text-2xl">Tổng diện tích toàn phần của 2 hình lập phương là: 96 x 2 = 192 (cm²).</p>
            <p class="text-xl md:text-2xl">Khi ghép 2 hình lập phương khít nhau để tạo thành hình hộp chữ nhật, diện tích toàn phần của hình hộp mới sẽ giảm đi diện tích của 2 mặt ghép khít nhau (bị che khuất):<br>192 - (4 x 4 x 2) = 160 (cm²).</p>
            <p class="text-xl md:text-2xl font-bold">Vậy diện tích toàn phần của hình hộp chữ nhật mới không bằng 2 lần diện tích toàn phần hình lập phương ban đầu. Nhận xét của bạn Mai là SAI.</p>
        </div>`
    );
    window.submitMathLesson("Tiết 121 - Bài 4", isCorrect ? 100 : 0, "btn-121-4-Sai", 0, 1, isCorrect ? 1 : 0);
};

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
