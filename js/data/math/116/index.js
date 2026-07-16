const metadata = {
    "lessonInfo": {
        "period": "116",
        "week": "24",
        "topic": "Hình học và Đo lường",
        "title": "HÌNH KHAI TRIỂN (LUYỆN TẬP)",
        "desc": "Luyện tập về hình khai triển của hình hộp chữ nhật, hình lập phương và hình trụ."
    },
    "exercises": [
        {
            "id": "116_1",
            "type": "multiple_choice_image",
            "statement": "Hình bên là khai triển của hình nào dưới đây?",
            "options": ["A", "B", "C"],
            "answer": "B",
            "image": "assets/images/toan/toan_tap_2/116_b1_de.webp"
        },
        {
            "id": "116_3",
            "type": "selection",
            "statement": "Bấm vào nhân vật cầm hình khai triển ĐÚNG của hình lập phương:",
            "options": ["Mai", "Nam", "Việt"],
            "answer": "Việt"
        },
        {
            "id": "116_4",
            "type": "selection",
            "statement": "Rô-bốt cần cắt đi 1 hình chữ nhật nào để phần còn lại là hình khai triển của HHCN?",
            "options": ["màu tím", "màu xanh lá", "màu xanh dương", "màu đỏ", "màu cam", "màu vàng nhạt", "màu trắng"],
            "answer": ["màu xanh lá", "màu vàng nhạt"]
        }
    ],
    "quizPool": [
        { "question": "Hình khai triển của hình lập phương gồm mấy hình vuông bằng nhau?", "options": ["4", "5", "6", "8"], "answer": 2, "level": "easy" },
        { "question": "Khi gấp một tấm bìa hình chữ nhật thành hình trụ, chiều rộng tấm bìa là?", "options": ["Chu vi đáy", "Đường kính đáy", "Chiều cao hình trụ", "Bán kính đáy"], "answer": 2, "level": "medium" },
        { "question": "Hình khai triển của hình trụ gồm một hình chữ nhật và mấy hình tròn?", "options": ["1", "2", "3", "0"], "answer": 1, "level": "easy" },
        { "question": "Hình nào sau đây có mặt bên là hình chữ nhật và hai đáy là hình tròn?", "options": ["HHCN", "HLP", "Hình trụ", "Hình cầu"], "answer": 2, "level": "easy" },
        { "question": "Các mặt của hình lập phương có đặc điểm gì?", "options": ["Là các hình chữ nhật bằng nhau", "Là các hình vuông bằng nhau", "Là các hình tròn bằng nhau", "Là các hình tam giác bằng nhau"], "answer": 1, "level": "easy" },
        { "question": "Muốn tính diện tích xung quanh hình trụ ta lấy chu vi đáy nhân với?", "options": ["Bán kính", "Đường kính", "Chiều cao", "Cạnh"], "answer": 2, "level": "medium" },
        { "question": "Hình lập phương có mấy đỉnh?", "options": ["4", "6", "8", "12"], "answer": 2, "level": "easy" },
        { "question": "Một hình trụ có 2 hình tròn đáy nằm ở đâu?", "options": ["Cùng một phía", "Đối diện nhau qua mặt xung quanh", "Nằm trong mặt xung quanh", "Chồng lên nhau"], "answer": 1, "level": "medium" },
        { "question": "Hình khai triển nào của HLP có dạng chữ 'T'?", "options": ["Gồm 6 hình vuông", "Gồm 4 hình vuông", "Gồm 5 hình vuông", "Không có dạng đó"], "answer": 0, "level": "medium" },
        { "question": "Chu vi đáy hình trụ bằng bao nhiêu lần bán kính nhân 3,14?", "options": ["1 lần", "2 lần", "3 lần", "4 lần"], "answer": 1, "level": "medium" },
        { "question": "Mặt xung quanh của hình trụ khi trải phẳng là hình gì?", "options": ["Hình chữ nhật", "Hình vuông", "Hình bầu dục", "Hình tròn"], "answer": 0, "level": "easy" },
        { "question": "Hình khai triển của HHCN có mấy cặp mặt bằng nhau?", "options": ["1 cặp", "2 cặp", "3 cặp", "4 cặp"], "answer": 2, "level": "medium" },
        { "question": "Để gấp được HLP từ 6 hình vuông, các hình vuông phải?", "options": ["Rời rạc", "Xếp thành hàng ngang", "Liên kết theo quy tắc khai triển", "Nằm đè lên nhau"], "answer": 2, "level": "medium" },
        { "question": "Đáy của hình trụ là hình gì?", "options": ["Hình vuông", "Hình tam giác", "Hình tròn", "Hình lục giác"], "answer": 2, "level": "easy" },
        { "question": "Tên gọi khác của HHCN có các cạnh bằng nhau là gì?", "options": ["Hình trụ", "Hình cầu", "Hình lập phương", "Hình thoi"], "answer": 2, "level": "easy" }
    ]
};

export const lesson116 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "116",
    "title": "HÌNH KHAI TRIỂN (LUYỆN TẬP)",
    "desc": "Luyện tập về hình khai triển của hình hộp chữ nhật, hình lập phương và hình trụ.",
    "content": `
        <div class="theory-section space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-left">
            <div class="glass-card p-10 rounded-[3rem] border border-blue-50 shadow-2xl relative overflow-hidden bg-white/80 backdrop-blur-xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎯</div>
                    <h3 class="text-4xl font-black text-slate-800 uppercase italic">Mục tiêu bài học</h3>
                </div>
                <ul class="list-none space-y-4 text-left">
                    <li class="flex items-center gap-3 text-2xl font-bold text-slate-700">
                        <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
                        Củng cố nhận biết hình khai triển của HLP, HHCN và hình trụ.
                    </li>
                    <li class="flex items-center gap-3 text-2xl font-bold text-slate-700">
                        <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
                        Rèn luyện kỹ năng tư duy không gian qua việc gấp hình.
                    </li>
                </ul>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 text-left">
            <!-- Bài 1 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">1</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Chọn hình khai triển đúng</p>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-100">
                    <div class="shrink-0 bg-white p-6 rounded-[2.5rem] shadow-sm">
                        <img src="assets/images/toan/toan_tap_2/116_b1_de.webp" class="h-48 md:h-64 object-contain">
                    </div>
                    <div class="grid grid-cols-3 gap-6 w-full">
                        <button onclick="window.select_116_1('A')" id="btn-116-1-A" class="bg-white p-4 rounded-3xl border-4 border-transparent hover:border-blue-400 transition-all flex flex-col items-center">
                            <span class="text-3xl font-black text-blue-500 mb-2">A</span>
                            <img src="assets/images/toan/toan_tap_2/116_b1_a.webp" class="h-24">
                        </button>
                        <button onclick="window.select_116_1('B')" id="btn-116-1-B" class="bg-white p-4 rounded-3xl border-4 border-transparent hover:border-blue-400 transition-all flex flex-col items-center">
                            <span class="text-3xl font-black text-blue-500 mb-2">B</span>
                            <img src="assets/images/toan/toan_tap_2/116_b1_b.webp" class="h-24">
                        </button>
                        <button onclick="window.select_116_1('C')" id="btn-116-1-C" class="bg-white p-4 rounded-3xl border-4 border-transparent hover:border-blue-400 transition-all flex flex-col items-center">
                            <span class="text-3xl font-black text-blue-500 mb-2">C</span>
                            <img src="assets/images/toan/toan_tap_2/116_b1_c.webp" class="h-24">
                        </button>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_116_1()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">2</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Thực hành gấp hình lập phương</p>
                </div>
                <div class="space-y-8">
                    <img src="assets/images/toan/toan_tap_2/116_b2_shapes.webp" class="w-full w-full mx-auto rounded-3xl">
                    <div class="bg-emerald-50 p-8 rounded-[3rem] border-2 border-emerald-100 text-center">
                        <p class="text-2xl font-bold text-emerald-800 mb-6">Hãy lấy giấy, kéo và hồ dán ra thực hành cùng Rô-bốt nhé!</p>
                        <img src="assets/images/toan/toan_tap_2/116_b2_robot.webp" class="w-full w-full mx-auto rounded-3xl shadow-lg mb-6">
                        <button onclick="window.confirm_116_2()" class="bg-emerald-600 text-white px-10 py-5 rounded-2xl text-2xl font-black shadow-lg hover:bg-emerald-700 transition-all">✂️ Thực hành xong!</button>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">3</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Ai cầm hình khai triển Đúng?</p>
                </div>

                <div class="bg-blue-50 p-10 rounded-[3rem] border-4 border-blue-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <button onclick="window.select_116_3('Mai')" id="btn-116-3-Mai" class="flex flex-col items-center gap-4 bg-white p-6 rounded-[2rem] border-4 border-transparent hover:border-blue-400 transition-all">
                        <img src="assets/images/toan/toan_tap_2/116_b3_a.webp" class="h-56 object-contain">
                        <span class="text-3xl font-black text-blue-700 uppercase">Mai</span>
                    </button>
                    <button onclick="window.select_116_3('Nam')" id="btn-116-3-Nam" class="flex flex-col items-center gap-4 bg-white p-6 rounded-[2rem] border-4 border-transparent hover:border-blue-400 transition-all">
                        <img src="assets/images/toan/toan_tap_2/116_b3_b.webp" class="h-56 object-contain">
                        <span class="text-3xl font-black text-blue-700 uppercase">Nam</span>
                    </button>
                    <button onclick="window.select_116_3('Việt')" id="btn-116-3-Việt" class="flex flex-col items-center gap-4 bg-white p-6 rounded-[2rem] border-4 border-transparent hover:border-blue-400 transition-all">
                        <img src="assets/images/toan/toan_tap_2/116_b3_c.webp" class="h-56 object-contain">
                        <span class="text-3xl font-black text-blue-700 uppercase">Việt</span>
                    </button>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_116_3()" class="w-24 h-24 bg-blue-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="glass-card p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="flex items-start gap-6 mb-12 text-left">
                    <div class="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0">4</div>
                    <p class="text-3xl md:text-4xl text-slate-800 leading-relaxed font-black uppercase tracking-tight">Cắt một hình chữ nhật</p>
                </div>
                
                <p class="text-2xl font-bold text-slate-600 mb-8 italic">Bấm vào hình chữ nhật muốn cắt để phần còn lại là hình khai triển HHCN:</p>

                <div class="w-full w-full mx-auto p-10 bg-slate-900 rounded-[3rem] shadow-2xl relative">
                    <div class="grid grid-cols-9 gap-1" style="grid-template-rows: repeat(3, 80px);">
                        <!-- Row 1 -->
                        <div onclick="window.toggle_116_4('màu tím', this)" class="col-start-2 col-span-3 border-4 border-black bg-[#9A51A1] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <!-- Row 2 -->
                        <div onclick="window.toggle_116_4('màu xanh lá', this)" class="col-start-1 col-span-1 border-4 border-black bg-[#4EAF4B] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <div onclick="window.toggle_116_4('màu xanh dương', this)" class="col-start-2 col-span-3 border-4 border-black bg-[#3770B8] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <div onclick="window.toggle_116_4('màu đỏ', this)" class="col-start-5 col-span-1 border-4 border-black bg-[#E83539] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <div onclick="window.toggle_116_4('màu cam', this)" class="col-start-6 col-span-3 border-4 border-black bg-[#F18821] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <div onclick="window.toggle_116_4('màu vàng nhạt', this)" class="col-start-9 col-span-1 border-4 border-black bg-[#FCEDB3] cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                        <!-- Row 3 -->
                        <div onclick="window.toggle_116_4('màu trắng', this)" class="col-start-2 col-span-3 border-4 border-black bg-white cursor-pointer hover:scale-105 transition-all rounded-md shadow-inner"></div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <button onclick="window.check_116_4()" class="w-24 h-24 bg-orange-600 text-white rounded-3xl font-black text-5xl shadow-xl hover:scale-105 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>

        <script>
        let ans1 = null, ans3 = null, selected4 = null;

        window.select_116_1 = function(c) {
            ans1 = c;
            ['A','B','C'].forEach(v => document.getElementById('btn-116-1-'+v).className = (v===c ? "bg-blue-50 p-4 rounded-3xl border-4 border-blue-500 shadow-md transition-all scale-105" : "bg-white p-4 rounded-3xl border-4 border-transparent hover:border-blue-400 transition-all flex flex-col items-center"));
        };

        window.confirm_116_2 = function() {
            window.showMathFeedback(true, "Thực hành", "Hoàn thành", "Giỏi quá!", \`<div class="text-left text-2xl font-bold text-emerald-700">Chúc mừng em đã khéo tay hoàn thành mô hình!</div>\`);
            window.submitMathLesson("Tiết 116 - Bài 2", 100, "116_2", 0, 1, 1);
        };

        window.select_116_3 = function(c) {
            ans3 = c;
            ['Mai','Nam','Việt'].forEach(v => document.getElementById('btn-116-3-'+v).className = (v===c ? "flex flex-col items-center gap-4 bg-blue-50 p-6 rounded-[2rem] border-4 border-blue-500 shadow-xl transition-all scale-105" : "flex flex-col items-center gap-4 bg-white p-6 rounded-[2rem] border-4 border-transparent hover:border-blue-400 transition-all"));
        };

        window.toggle_116_4 = function(color, el) {
            selected4 = color;
            document.querySelectorAll('.grid > div').forEach(d => d.style.opacity = "1");
            el.style.opacity = "0.3";
        };

        window.check_116_1 = function() {
            const isCorrect = ans1 === 'B';
            window.showMathFeedback(isCorrect, "B", ans1, "Quan sát các mặt bên và hai đáy tròn của hình trụ nhé.", \`<p class="text-left text-xl font-bold text-emerald-700">Chính xác!</p>\`);
            window.submitMathLesson("Tiết 116 - Bài 1", isCorrect ? 100 : 0, "btn-116-1-B", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_116_3 = function() {
            const isCorrect = ans3 === 'Việt';
            window.showMathFeedback(isCorrect, "Việt", ans3, "Hãy kiểm tra kĩ vị trí các mặt khi gấp lại.", \`<p class="text-left text-xl font-bold text-emerald-700">Đúng rồi! Bạn Việt cầm hình khai triển chuẩn.</p>\`);
            window.submitMathLesson("Tiết 116 - Bài 3", isCorrect ? 100 : 0, "btn-116-3-Việt", 0, 1, isCorrect ? 1 : 0);
        };

        window.check_116_4 = function() {
            const isCorrect = (selected4 === 'màu xanh lá' || selected4 === 'màu vàng nhạt');
            window.showMathFeedback(isCorrect, "Màu xanh lá hoặc Vàng nhạt", selected4, "Cắt đi một mặt thừa để đảm bảo có 3 cặp mặt bằng nhau.", \`<p class="text-left text-xl font-bold text-emerald-700">Tuyệt vời! Em đã tìm được mặt thừa.</p>\`);
            window.submitMathLesson("Tiết 116 - Bài 4", isCorrect ? 100 : 0, "116_4", 0, 1, isCorrect ? 1 : 0);
        };
        </script>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
\${JSON.stringify(metadata)}
--- END_METADATA --- */

