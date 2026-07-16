const metadata = {
    "lessonInfo": {
        "period": "123",
        "week": "25",
        "topic": "Hình học và Đo lường",
        "title": "LUYỆN TẬP: THỂ TÍCH HÌNH HỘP CHỮ NHẬT",
        "desc": "Vận dụng tính toán thể tích vào thực tế (Trang 53)."
    },
    "exercises": [
        {
            "id": "123_1",
            "type": "selection",
            "statement": "Nam muốn xếp các khối gỗ dạng hình hộp chữ nhật (4cm, 1cm, 1cm) vào một chiếc hộp dạng hình hộp chữ nhật (8cm, 4cm, 4cm). Hỏi Nam có thể xếp được nhiều nhất bao nhiêu khối gỗ?",
            "options": ["8", "16", "32", "64"],
            "answer": "32",
            "image": "assets/images/toan/toan_tap_2/123-b1-box.webp"
        },
        {
            "id": "123_2",
            "type": "fill_in_blank",
            "statement": "Tính thể tích của khối gỗ hình chữ L. (Gợi ý: Chia khối gỗ thành 2 hình hộp chữ nhật nhỏ: 12x8x5 và 15x8x9).",
            "subQuestions": [
                { "id": "123-2-ans", "answer": "1560", "unit": "cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/123-b2-l-shape.webp"
        },
        {
            "id": "123_3",
            "type": "fill_in_blank",
            "statement": "Bể nước đáy 30cm x 20cm. Khi bỏ tảng đá vào, nước dâng từ 10cm lên 12cm. Tính thể tích tảng đá.",
            "subQuestions": [
                { "id": "123-3-ans", "answer": "1200", "unit": "cm³" }
            ],
            "image": "assets/images/toan/toan_tap_2/123-b3-stone.webp"
        }
    ],
    "quizPool": [
        { "question": "Công thức tính thể tích HHCN là?", "options": ["V = a × b", "V = (a + b) × c", "V = a × b × c", "V = a × a × a"], "answer": 2, "level": "easy" },
        { "question": "HHCN có: 5cm, 3cm, 2cm. Thể tích là?", "options": ["10 cm³", "30 cm³", "16 cm³", "26 cm³"], "answer": 1, "level": "easy" },
        { "question": "Khối ghép từ 5 khối lập phương 1cm³. Thể tích là?", "options": ["1 cm³", "5 cm³", "10 cm³", "25 cm³"], "answer": 1, "level": "easy" },
        { "question": "HHCN dài 10cm, rộng 4cm, cao 3cm. Thể tích là?", "options": ["120 cm³", "100 cm³", "70 cm³", "34 cm³"], "answer": 0, "level": "easy" },
        { "question": "Hộp V=20cm³. Xếp được bao nhiêu khối gỗ V=2cm³?", "options": ["5", "10", "20", "40"], "answer": 1, "level": "medium" },
        { "question": "HHCN có V=128cm³. Khối nhỏ V=4cm³ thì xếp được?", "options": ["16", "32", "64", "128"], "answer": 1, "level": "medium" },
        { "question": "Vật bỏ vào bể làm nước cao thêm 2cm. Đáy bể 50cm². V_vật là?", "options": ["50 cm³", "100 cm³", "25 cm³", "10 cm³"], "answer": 1, "level": "hard" },
        { "question": "Bể dài 10dm, rộng 6dm, nước cao 3dm. V_nước là?", "options": ["60 dm³", "180 dm³", "120 dm³", "300 dm³"], "answer": 1, "level": "medium" },
        { "question": "Khối L gồm 120cm³ và 50cm³. Tổng V là?", "options": ["70 cm³", "170 cm³", "6000 cm³", "340 cm³"], "answer": 1, "level": "easy" },
        { "question": "Bể 10dm x 6dm. Nước dâng từ 3dm lên 4dm. V_đá là?", "options": ["30 dm³", "40 dm³", "60 dm³", "120 dm³"], "answer": 2, "level": "hard" },
        { "question": "Hộp 8x4x4 cm. Khối nhỏ 4x1x1 cm. Xếp được?", "options": ["8", "16", "32", "64"], "answer": 2, "level": "hard" },
        { "question": "Bể V=240dm³, dài 10dm, rộng 6dm. Cao mực nước?", "options": ["2 dm", "4 dm", "6 dm", "8 dm"], "answer": 1, "level": "hard" },
        { "question": "Ghép 2 HHCN (5x3x2) thành 1 khối. Thể tích?", "options": ["30 cm³", "60 cm³", "90 cm³", "120 cm³"], "answer": 1, "level": "medium" },
        { "question": "Khối gỗ L gồm (8x5x3) và (8x6x5). Tổng V?", "options": ["120 cm³", "240 cm³", "360 cm³", "480 cm³"], "answer": 2, "level": "hard" },
        { "question": "Bể 20x10 dm. Nước dâng thêm 0,5 dm. V_đá?", "options": ["50 dm³", "100 dm³", "200 dm³", "1000 dm³"], "answer": 1, "level": "hard" }
    ]
};

export const lesson123 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="bg-rose-50 p-10 rounded-[3rem] border-4 border-rose-200 shadow-xl relative overflow-hidden">
                <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <img src="assets/images/toan/toan_tap_2/122-formula.webp" class="rounded-3xl shadow-xl border-4 border-white">
                    <div class="bg-white p-8 rounded-[2.5rem] shadow-inner border-2 border-rose-100 italic">
                        <h4 class="text-2xl font-black text-rose-600 uppercase mb-4 tracking-widest text-center">Ôn tập quy tắc</h4>
                        <p class="text-2xl font-bold text-slate-700 leading-relaxed text-center">
                            "Thể tích V của hình hộp chữ nhật bằng chiều dài a nhân với chiều rộng b rồi nhân với chiều cao c."
                        </p>
                        <div class="mt-6 bg-rose-600 p-6 rounded-3xl text-white text-center shadow-lg">
                            <p class="text-5xl font-black italic tracking-wide">V = a × b × c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-blue-50 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">1</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight italic">Số khối gỗ xếp được</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div class="space-y-8">
                         <p class="text-2xl font-bold text-slate-700 italic leading-snug">
                            "Nam muốn xếp khối gỗ (4x1x1 cm) vào hộp (8x4x4 cm). Hỏi xếp được nhiều nhất bao nhiêu khối?"
                         </p>
                         <div class="grid grid-cols-2 gap-4">
                            <button onclick="window.select_123_1('8')" id="btn-123-1-8" class="py-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-4xl font-black text-slate-400 hover:bg-blue-50 hover:border-blue-200 transition-all uppercase">8</button>
                            <button onclick="window.select_123_1('16')" id="btn-123-1-16" class="py-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-4xl font-black text-slate-400 hover:bg-blue-50 hover:border-blue-200 transition-all uppercase">16</button>
                            <button onclick="window.select_123_1('32')" id="btn-123-1-32" class="py-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-4xl font-black text-slate-400 hover:bg-blue-50 hover:border-blue-200 transition-all uppercase">32</button>
                            <button onclick="window.select_123_1('64')" id="btn-123-1-64" class="py-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-4xl font-black text-slate-400 hover:bg-blue-50 hover:border-blue-200 transition-all uppercase">64</button>
                         </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/123-b1-box.webp" class="rounded-[2.5rem] shadow-2xl border-4 border-white">
                </div>
                <div class="flex justify-center">
                    <button onclick="window.check_123_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-amber-900 border-amber-700 shadow-2xl relative overflow-hidden text-white">
                <div class="flex items-start gap-6 mb-12 text-left">
                     <div class="w-16 h-16 bg-yellow-400 text-amber-900 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">2</div>
                     <p class="text-3xl md:text-4xl text-white leading-relaxed font-black uppercase tracking-tight italic">Khối gỗ chữ L</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                     <div class="space-y-8">
                        <p class="text-2xl font-bold text-amber-100 italic leading-snug">
                            "Tính thể tích khối gỗ. Gợi ý: Chia thành (12x8x5) và (15x8x9)."
                        </p>
                        <div class="flex items-center gap-4 bg-white/10 p-6 rounded-[2.5rem] border border-white/20">
                             <input type="number" id="ans-123-2" class="w-full bg-transparent border-none text-center p-2 text-5xl font-black text-yellow-300 outline-none placeholder:text-white/20" placeholder="?">
                             <span class="text-3xl font-black text-amber-200 italic shrink-0">cm³</span>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/123-b2-l-shape.webp" class="rounded-[2.5rem] shadow-2xl border-4 border-white/20">
                </div>
                <div class="flex justify-center">
                     <button onclick="window.check_123_2()" class="w-24 h-24 bg-yellow-400 text-amber-900 rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-blue-50 border-blue-100 shadow-xl relative overflow-hidden">
                 <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">3</div>
                    <p class="text-3xl md:text-4xl text-blue-900 leading-relaxed font-black uppercase tracking-tight italic">Thể tích tảng đá</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <img src="assets/images/toan/toan_tap_2/123-b3-stone.webp" class="rounded-[2.5rem] border-4 border-white shadow-2xl order-2 md:order-1">
                    <div class="space-y-8 order-1 md:order-2">
                        <p class="text-2xl font-bold text-blue-900 italic leading-tight">
                            "Bể 30x20 cm. Nước dâng từ 10cm lên 12cm. Tính thể tích tảng đá."
                        </p>
                        <div class="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] border-2 border-blue-200 shadow-inner">
                            <input type="number" id="ans-123-3" class="w-full bg-transparent border-none text-center p-2 text-5xl font-black text-blue-600 outline-none placeholder:text-blue-100" placeholder="?">
                            <span class="text-3xl font-black text-blue-300 italic shrink-0">cm³</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-12">
                    <button onclick="window.check_123_3()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        let ans1 = null;
        window.select_123_1 = function(v) {
            ans1 = v;
            ['8','16','32','64'].forEach(o => {
                const b = document.getElementById('btn-123-1-'+o);
                if (o === v) {
                    b.className = "py-6 bg-blue-600 border-2 border-transparent rounded-[2rem] text-4xl font-black text-white shadow-xl scale-110 transition-all uppercase";
                } else {
                    b.className = "py-6 bg-slate-50 border-2 border-slate-200 rounded-[2rem] text-4xl font-black text-slate-400 hover:bg-blue-50 hover:border-blue-200 transition-all uppercase opacity-50";
                }
            });
        };

        window.check_123_1 = function() {
            const isCorrect = (ans1 === '32');
            window.showMathFeedback(isCorrect, "32", ans1, "V_hộp = 8x4x4=128. V_khối = 4x1x1=4. 128:4=32.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Chính xác! Ta lấy thể tích hộp lớn chia cho thể tích của mỗi khối gỗ nhỏ: 128 : 4 = 32.</p>\`
            );
            window.submitMathLesson("Tiết 123 - Bài 1", isCorrect ? 100 : 0, "btn-123-1-32", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_123_2 = function() {
            const v = document.getElementById('ans-123-2').value.trim();
            const isCorrect = (v === '1560');
            window.showMathFeedback(isCorrect, "1560", v, "V1 = 12x8x5 = 480. V2 = 15x8x9 = 1080. Tổng = 1560.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Đúng rồi! Thể tích khối gỗ chữ L là: 480 + 1080 = 1560 (cm³).</p>\`
            );
            window.submitMathLesson("Tiết 123 - Bài 2", isCorrect ? 100 : 0, "ans-123-2", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_123_3 = function() {
            const v = document.getElementById('ans-123-3').value.trim();
            const isCorrect = (v === '1200');
            window.showMathFeedback(isCorrect, "1200", v, "Thể tích dâng lên: 30 × 20 × (12 - 10) = 1200.", 
                \`<p class="text-left text-2xl font-bold text-emerald-700">Giỏi quá! Thể tích tảng đá chính là thể tích phần nước dâng lên: 30 × 20 × 2 = 1200 (cm³).</p>\`
            );
            window.submitMathLesson("Tiết 123 - Bài 3", isCorrect ? 100 : 0, "ans-123-3", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "presentation": [
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h1 class="text-6xl md:text-[5rem] font-black text-blue-600 mb-6 drop-shadow-md text-center w-full leading-tight">Bài 123: Ôn tập về Diện tích, Thể tích một số hình</h1>
                <p class="text-3xl text-gray-500 font-bold w-full text-center leading-relaxed">
                    Chúng ta cùng ôn lại các công thức quan trọng ngày hôm nay nhé!
                </p>
            </div>
        `,
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h2 class="text-5xl font-black text-orange-600 mb-12">1. Hình Hộp Chữ Nhật</h2>
                <div class="grid grid-cols-2 gap-10 w-full w-full">
                    <div class="bg-blue-50 p-10 rounded-3xl border-4 border-blue-200 text-center shadow-xl">
                        <h3 class="text-3xl font-black text-blue-800 mb-4">Diện tích xung quanh</h3>
                        <p class="text-2xl font-bold text-gray-700">Sxq = (a + b) × 2 × c</p>
                    </div>
                    <div class="bg-emerald-50 p-10 rounded-3xl border-4 border-emerald-200 text-center shadow-xl">
                        <h3 class="text-3xl font-black text-emerald-800 mb-4">Thể tích</h3>
                        <p class="text-2xl font-bold text-gray-700">V = a × b × c</p>
                    </div>
                </div>
            </div>
        `,
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h2 class="text-5xl font-black text-rose-600 mb-12">2. Hình Lập Phương</h2>
                <div class="grid grid-cols-2 gap-10 w-full w-full">
                    <div class="bg-blue-50 p-10 rounded-3xl border-4 border-blue-200 text-center shadow-xl">
                        <h3 class="text-3xl font-black text-blue-800 mb-4">Diện tích toàn phần</h3>
                        <p class="text-2xl font-bold text-gray-700">Stp = (a × a) × 6</p>
                    </div>
                    <div class="bg-amber-50 p-10 rounded-3xl border-4 border-amber-200 text-center shadow-xl">
                        <h3 class="text-3xl font-black text-amber-800 mb-4">Thể tích</h3>
                        <p class="text-2xl font-bold text-gray-700">V = a × a × a</p>
                    </div>
                </div>
            </div>
        `,
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h2 class="text-5xl font-black text-blue-600 mb-8 w-full w-full text-left">Bài tập 1</h2>
                <div class="bg-blue-50 p-10 rounded-[40px] shadow-xl w-full w-full border-4 border-blue-200 flex flex-col lg:flex-row gap-8 items-center">
                     <div class="w-full lg:w-3/5 space-y-6">
                        <p class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">Nam muốn xếp các khối gỗ dạng hình hộp chữ nhật <span class="text-blue-600">(4cm, 1cm, 1cm)</span> vào một chiếc hộp dạng hình hộp chữ nhật <span class="text-blue-600">(8cm, 4cm, 4cm)</span>.</p>
                        <p class="text-3xl md:text-4xl font-black text-blue-800">Hỏi Nam có thể xếp được nhiều nhất bao nhiêu khối gỗ?</p>
                     </div>
                     <div class="w-full lg:w-2/5 flex flex-col gap-4">
                        <img src="assets/images/toan/toan_tap_2/123-b1-box.webp" alt="Exercise 1" class="w-full rounded-3xl shadow-md border-4 border-white transform rotate-2">
                     </div>
                </div>
            </div>
        `,
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h2 class="text-5xl font-black text-amber-600 mb-8 w-full w-full text-left">Bài tập 2</h2>
                <div class="bg-amber-50 p-10 rounded-[40px] shadow-xl w-full w-full border-4 border-amber-200 flex flex-col lg:flex-row gap-8 items-center">
                     <div class="w-full lg:w-1/2 space-y-6">
                        <p class="text-3xl md:text-5xl font-black text-gray-800 leading-tight">Tính thể tích của khối gỗ có hình dạng và kích thước chữ L.</p>
                        <div class="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-sm mt-6">
                             <p class="text-2xl text-gray-600 italic font-bold">Gợi ý: Chia khối gỗ thành 2 hình hộp chữ nhật nhỏ để tính riêng từng phần.</p>
                        </div>
                     </div>
                     <div class="w-full lg:w-1/2 flex justify-center">
                        <img src="assets/images/toan/toan_tap_2/123-b2-l-shape.webp" alt="Exercise 2" class="w-full max-w-[450px] rounded-3xl shadow-lg border-8 border-white">
                     </div>
                </div>
            </div>
        `,
        `
            <div class="h-full flex flex-col justify-center items-center w-full px-10">
                <h2 class="text-5xl font-black text-blue-600 mb-8 w-full w-full text-left">Bài tập 3</h2>
                <div class="bg-blue-50 p-10 rounded-[40px] shadow-xl w-full w-full border-4 border-blue-200 flex flex-col lg:flex-row gap-8 items-center">
                     <div class="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                        <img src="assets/images/toan/toan_tap_2/123-b3-stone.webp" alt="Exercise 3" class="w-full max-w-[450px] rounded-3xl shadow-lg border-8 border-white">
                     </div>
                     <div class="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
                        <p class="text-3xl md:text-5xl font-black text-gray-800 leading-tight">Quan sát hình vẽ và tính <span class="text-blue-600">thể tích của tảng đá</span> nằm trong bể nước.</p>
                        <div class="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-sm mt-6">
                             <p class="text-2xl text-gray-600 italic font-bold">Gợi ý: Thể tích hòn đá chính bằng thể tích phần nước dâng lên.</p>
                        </div>
                     </div>
                </div>
            </div>
        `
    ],
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

