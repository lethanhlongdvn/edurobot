/**
 * BÀI 55. LUYỆN TẬP CHUNG (TIẾT 2) - TIẾT 128
 * Standardized by EduRobot Protocol
 */

export const metadata = {
    topic: "Hình hộp chữ nhật & Hình lập phương",
    week: 26,
    period: 128,
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 2)",
    description: "Ôn tập tổng hợp về Diện tích xung quanh, Diện tích toàn phần và Thể tích.",
    book_page: "Toán 5 Tập 2 - Trang 61",
    version: "1.1.0"
};

export const lessonInfo = {
    ...metadata,
    hero: {
        icon: "📐",
        title: "Vận Dụng Tổng Hợp",
        subtitle: "Thử thách giải toán thực tế",
        gradient: "from-blue-700 to-blue-600"
    },
    principles: [
        {
            title: "Hình hộp chữ nhật",
            icon: "📦",
            color: "blue",
            items: [
                "Sxq = (a + b) × 2 × c",
                "Stp = Sxq + (a × b) × 2",
                "V = a × b × c"
            ]
        },
        {
            title: "Hình lập phương",
            icon: "🧊",
            color: "emerald",
            items: [
                "Sxq = a × a × 4",
                "Stp = a × a × 6",
                "V = a × a × a"
            ]
        }
    ],
    exercises: [
        {
            id: "ex1",
            title: "Chọn câu trả lời đúng",
            type: "mcq-image",
            question: "Hình nào dưới đây là hình khai triển của một hình hộp chữ nhật?",
            options: [
                { id: "A", text: "Hình A", image: "assets/images/toan/toan_tap_2/128-1-A.webp" },
                { id: "B", text: "Hình B", image: "assets/images/toan/toan_tap_2/128-1-B.webp" },
                { id: "C", text: "Hình C", image: "assets/images/toan/toan_tap_2/128-1-C.webp" },
                { id: "D", text: "Hình D", image: "assets/images/toan/toan_tap_2/128-1-D.webp" }
            ],
            answer: "D",
            solution: "Hình D có cấu tạo gồm 6 mặt với các cặp mặt đối diện bằng nhau ở vị trí hợp lý khi gấp lại. Các hình còn lại khi gấp sẽ bị chồng mặt hoặc thiếu mặt.",
            score: 100
        },
        {
            id: "ex2",
            title: "Tính thể tích mỗi hình",
            type: "dual-calculation",
            parts: [
                {
                    id: "a",
                    label: "a) Hình hộp chữ nhật",
                    image: "assets/images/toan/toan_tap_2/128-2-a.webp",
                    question: "Chiều dài 2 dm, rộng 1 dm, cao 1,5 dm.",
                    answer: "3",
                    unit: "dm³",
                    solution: "Thể tích hình hộp chữ nhật là:<br>2 × 1 × 1,5 = 3 (dm³)<br>Đáp số: 3 dm³."
                },
                {
                    id: "b",
                    label: "b) Hình lập phương",
                    image: "assets/images/toan/toan_tap_2/128-2-b.webp",
                    question: "Cạnh 15 cm.",
                    answer: "3375",
                    unit: "cm³",
                    solution: "Thể tích hình lập phương là:<br>15 × 15 × 15 = 3375 (cm³)<br>Đáp số: 3375 cm³."
                }
            ],
            score: 100
        },
        {
            id: "ex3",
            title: "Diện tích lát gạch bể bơi",
            type: "word-problem",
            question: "Một bể bơi dạng hình hộp chữ nhật có chiều dài 25 m, chiều rộng 8 m và sâu 1,4 m. Người ta lát ở đáy và xung quanh hồ bơi bằng những viên gạch hoa. Tính diện tích lát gạch.",
            image: "assets/images/toan/toan_tap_2/128-3.webp",
            hint: "Bể bơi không có nắp nên diện tích lát gạch bằng Diện tích xung quanh + 1 diện tích đáy.",
            answer: "292",
            unit: "m²",
            solution: "Diện tích xung quanh bể bơi là:<br>(25 + 8) × 2 × 1,4 = 92.4 (m²)<br>Diện tích đáy bể bơi là:<br>25 × 8 = 200 (m²)<br>Diện tích lát gạch là:<br>92.4 + 200 = 292.4 (m²)<br>Đáp số: 292,4 m².",
            score: 100
        },
        {
            id: "ex4",
            title: "Xếp hộp loa lên xe tải",
            type: "word-problem",
            question: "Chú Tư xếp các hộp đựng loa lên xe tải có kích thước thùng xe là dài 2 m, rộng 1,2 m, cao 1,5 m. Biết các hộp loa dạng hình hộp chữ nhật cao 0,3 m, rộng 0,4 m, dài 0,5 m. Hỏi chú Tư có thể xếp được 64 hộp như vậy hay không?",
            image: "assets/images/toan/toan_tap_2/128-4.webp",
            hint: "Cách 1: Tính thể tích thùng xe và thể tích 64 hộp loa để so sánh. Cách 2: Tính số lớp hộp có thể xếp theo mỗi chiều.",
            answer: "Có",
            unit: "",
            solution: "Cách 1: Tính số lượng hộp loa xếp được:<br>- Chiều dài: 2 : 0,5 = 4 (hộp)<br>- Chiều rộng: 1,2 : 0,4 = 3 (hộp)<br>- Chiều cao: 1,5 : 0,3 = 5 (hộp)<br>Số hộp loa xếp được tối đa là: 4 × 3 × 5 = 60 (hộp).<br>Vì 60 < 64 nên chú Tư KHÔNG thể xếp được 64 hộp.<br>Cách 2 (Thể tích):<br>V-thùng = 2 × 1,2 × 1,5 = 3,6 (m³)<br>V-64hộp = 0,5 × 0,4 × 0,3 × 64 = 3,84 (m³)<br>Vì 3,6 < 3,84 nên không thể xếp hết.",
            score: 100
        }
    ],
    quizPool: [
        { "question": "Muốn tính diện tích xung quanh HHCN, ta lấy chu vi đáy nhân với:", "options": ["Chiều dài", "Chiều rộng", "Chiều cao (c)", "Diện tích đáy"], "answer": 2, "level": 1 },
        { "question": "Thể tích HLP cạnh 2 cm là:", "options": ["4 cm³", "8 cm³", "12 cm³", "16 cm³"], "answer": 1, "level": 1 },
        { "question": "HHCN có 3 kích thước: 4dm, 3dm, 2dm. Thể tích là:", "options": ["24 dm³", "24 dm²", "14 dm³", "9 dm³"], "answer": 0, "level": 1 },
        { "question": "Sxq của HLP cạnh 5m là:", "options": ["25 m²", "100 m²", "150 m²", "125 m²"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần HLP bằng diện tích một mặt nhân với mấy?", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },
        { "question": "HHCN dài 5cm, rộng 4cm, cao 3cm. Diện tích mặt đáy là:", "options": ["20 cm²", "12 cm²", "15 cm²", "60 cm²"], "answer": 0, "level": 2 },
        { "question": "HLP có cạnh 0,5m. Thể tích là:", "options": ["0,25 m³", "0,125 m³", "1,25 m³", "0,125 m²"], "answer": 1, "level": 2 },
        { "question": "Chu vi đáy của HHCN là 20cm, cao c là 5cm. Sxq là:", "options": ["100 cm²", "100 cm³", "50 cm²", "400 cm²"], "answer": 0, "level": 2 },
        { "question": "Một hình khai triển của HHCN gồm có mấy mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "8 mặt"], "answer": 2, "level": 2 },
        { "question": "Đơn vị đo thể tích thường gặp là:", "options": ["cm", "cm²", "cm³", "kg"], "answer": 2, "level": 2 },
        { "question": "HLP có Sxq là 36 cm². Thể tích của nó là:", "options": ["9 cm³", "27 cm³", "54 cm³", "81 cm³"], "answer": 1, "level": 3 },
        { "question": "Gấp cạnh HLP lên 3 lần thì thể tích tăng lên:", "options": ["3 lần", "9 lần", "27 lần", "81 lần"], "answer": 2, "level": 3 },
        { "question": "HHCN có thể tích 60 cm³, dài 5cm, rộng 4cm. Chiều cao c là:", "options": ["3 cm", "4 cm", "5 cm", "12 cm"], "answer": 0, "level": 3 },
        { "question": "Bể bơi dài 10m, rộng 5m, cao c là 2m. Thể tích nước đầy bể là:", "options": ["50 m³", "100 m³", "70 m³", "100 m²"], "answer": 1, "level": 3 },
        { "question": "Để tính diện tích lát gạch bể bơi (không nắp), ta tính:", "options": ["Sxq", "Stp", "Sxq + S-đáy", "Sxq + 2 × S-đáy"], "answer": 2, "level": 3 }
    ]
};

// --- Logic Layer ---

const state = {
    ex1: null,
    scores: { ex1: 0, ex2: 0, ex3: 0, ex4: 0 },
    attempts: { ex1: 0, ex2: 0, ex3: 0, ex4: 0 }
};

window.lesson128 = {
    selectMCQ: (option) => {
        state.ex1 = option;
        const buttons = document.querySelectorAll('.mcq-btn');
        buttons.forEach(btn => btn.classList.remove('active', 'ring-4', 'ring-blue-400', 'border-blue-400'));
        const selected = document.getElementById(`btn-128-ex1-${option}`);
        if (selected) selected.classList.add('active', 'ring-4', 'ring-blue-400', 'border-blue-400');
    },

    submitEx1: () => {
        state.attempts.ex1++;
        const isCorrect = state.ex1 === lessonInfo.exercises[0].answer;
        state.scores.ex1 = isCorrect ? 100 : 0;

        window.showMathFeedback(
            isCorrect,
            lessonInfo.exercises[0].answer,
            state.ex1 || "Chưa chọn",
            "D là hình duy nhất khi gấp lại tạo thành HHCN hợp lệ.",
            lessonInfo.exercises[0].solution
        );

        window.submitMathLesson(
            "Tiết 128 - Bài 1: Chọn hình khai triển HHCN",
            state.scores.ex1,
            "btn-submit-ex1",
            state.attempts.ex1,
            1,
            isCorrect ? 1 : 0
        );
    },

    submitEx2: () => {
        state.attempts.ex2++;
        const valA = document.getElementById('ans-128-2-a').value.trim().replace(',', '.');
        const valB = document.getElementById('ans-128-2-b').value.trim();

        const results = [
            valA === "3" || valA === "3.0" || valA === "3,0",
            valB === "3375"
        ];

        const correctCount = results.filter(r => r).length;
        const isCorrect = correctCount === 2;
        state.scores.ex2 = Math.round((correctCount / 2) * 100);

        window.showMathFeedback(
            isCorrect,
            "a: 3; b: 3375",
            `a: ${valA}; b: ${valB}`,
            "Sử dụng công thức V = a × b × c và V = a × a × a.",
            lessonInfo.exercises[1].solution
        );

        window.submitMathLesson(
            "Tiết 128 - Bài 2: Tính thể tích HHCN & HLP",
            state.scores.ex2,
            "btn-submit-ex2",
            state.attempts.ex2,
            2,
            correctCount
        );
    },

    submitEx3: () => {
        state.attempts.ex3++;
        const solutionText = document.getElementById('ans-128-ex3').value.trim();
        const hasCorrectResult = solutionText.includes("292");
        const isCorrect = hasCorrectResult && solutionText.length > 20;
        state.scores.ex3 = isCorrect ? 100 : (hasCorrectResult ? 50 : 0);

        window.showMathFeedback(
            isCorrect,
            "292,4 m²",
            solutionText,
            "Diện tích lát gạch = Sxq + S-đáy = 92,4 + 200 = 292,4.",
            lessonInfo.exercises[2].solution
        );

        window.submitMathLesson(
            "Tiết 128 - Bài 3: Diện tích lát gạch bể bơi",
            state.scores.ex3,
            "btn-submit-ex3",
            state.attempts.ex3,
            1,
            isCorrect ? 1 : 0
        );
    },

    submitEx4: () => {
        state.attempts.ex4++;
        const solutionText = document.getElementById('ans-128-ex4').value.trim().toLowerCase();
        const isCorrectResult = solutionText.includes("không") || solutionText.includes("khong");
        const isCorrect = isCorrectResult && solutionText.length > 20;
        state.scores.ex4 = isCorrect ? 100 : (isCorrectResult ? 50 : 0);

        window.showMathFeedback(
            isCorrect,
            "Không thể xếp được",
            solutionText,
            "Thùng xe chỉ xếp được tối đa 60 hộp loa.",
            lessonInfo.exercises[3].solution
        );

        window.submitMathLesson(
            "Tiết 128 - Bài 4: Xếp hộp loa lên xe tải",
            state.scores.ex4,
            "btn-submit-ex4",
            state.attempts.ex4,
            1,
            isCorrect ? 1 : 0
        );
    },

    render: () => {
        const { hero, principles, exercises } = lessonInfo;

        const viewHTML = `
      <div class="space-y-12 animate-fade-in">
        <div class="bg-gradient-to-br ${hero.gradient} rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div class="text-8xl md:text-9xl animate-pulse">${hero.icon}</div>
            <div class="text-center md:text-left">
              <h1 class="text-5xl md:text-7xl font-black mb-3 tracking-tight">${hero.title}</h1>
              <p class="text-2xl md:text-3xl font-medium text-white/90 italic">${hero.subtitle}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${principles.map(p => `
            <div class="bg-white dark:bg-slate-800 p-8 rounded-[40px] border-2 border-${p.color}-100 shadow-xl relative group">
              <h4 class="text-3xl font-black text-${p.color}-700 mb-6 flex items-center gap-4">
                <span class="w-14 h-14 bg-${p.color}-600 text-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">${p.icon}</span>
                ${p.title}
              </h4>
              <ul class="space-y-4">
                ${p.items.map(item => `
                  <li class="flex items-center gap-4 text-2xl font-bold p-4 bg-${p.color}-50 dark:bg-${p.color}-900/20 rounded-2xl border border-${p.color}-100">
                    <span class="w-2 h-2 rounded-full bg-${p.color}-500"></span>
                    <span class="font-mono">${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;

        const practiceHTML = `
      <div class="space-y-16 pb-20">
        <!-- Ex 1 -->
        <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-blue-50">
          <div class="flex items-start gap-6 mb-10">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">1</div>
            <div>
              <h2 class="text-4xl font-black text-blue-900 dark:text-blue-100">${exercises[0].title}</h2>
              <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-2">${exercises[0].question}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            ${exercises[0].options.map(opt => `
              <button id="btn-128-ex1-${opt.id}" onclick="window.lesson128.selectMCQ('${opt.id}')"
                class="mcq-btn group p-6 bg-white dark:bg-slate-700 border-4 border-blue-100 dark:border-slate-600 rounded-[32px] transition-all hover:scale-105 active:scale-95 shadow-md">
                <img src="${opt.image}" class="w-full h-auto mb-6 rounded-2xl group-hover:scale-110 transition-transform">
                <span class="text-2xl font-black text-gray-400 group-[.active]:text-blue-600">${opt.text}</span>
              </button>
            `).join('')}
          </div>
          <div class="flex justify-center">
            <button id="btn-submit-ex1" onclick="window.lesson128.submitEx1()"
              class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-4">
              NỘP BÀI 1 <span class="text-3xl">🚀</span>
            </button>
          </div>
        </div>

        <!-- Ex 2 -->
        <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-emerald-50">
          <div class="flex items-start gap-6 mb-10">
            <div class="w-16 h-16 bg-emerald-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">2</div>
            <h2 class="text-4xl font-black text-emerald-900 dark:text-emerald-100">${exercises[1].title}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            ${exercises[1].parts.map((part, pIdx) => `
              <div class="bg-${pIdx === 0 ? 'emerald' : 'blue'}-50/30 p-8 rounded-[40px] border-2 border-${pIdx === 0 ? 'emerald' : 'blue'}-100 flex flex-col items-center">
                <h3 class="text-2xl font-black text-${pIdx === 0 ? 'emerald' : 'blue'}-700 mb-6 uppercase tracking-tight">${part.label}</h3>
                <img src="${part.image}" class="w-full max-w-[240px] h-auto mb-8 rounded-2xl shadow-sm">
                <p class="text-xl font-bold text-gray-600 mb-6">${part.question}</p>
                <div class="flex items-center gap-4">
                  <span class="text-2xl font-black text-gray-400">V =</span>
                  <input type="text" id="ans-128-2-${part.id}" class="w-32 p-4 text-center bg-white text-3xl font-black text-${pIdx === 0 ? 'emerald' : 'blue'}-600 rounded-[20px] shadow-inner outline-none focus:ring-4 focus:ring-${pIdx === 0 ? 'emerald' : 'blue'}-300 transition-all" placeholder="?">
                  <span class="text-2xl font-black text-gray-400">${part.unit}</span>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="mt-12 flex justify-center">
            <button id="btn-submit-ex2" onclick="window.lesson128.submitEx2()"
              class="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-4">
              NỘP BÀI 2 <span class="text-3xl">📐</span>
            </button>
          </div>
        </div>

        <!-- Ex 3 & 4 -->
        <div class="grid grid-cols-1 gap-16">
          ${[exercises[2], exercises[3]].map((ex, idx) => `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-${idx === 0 ? 'emerald' : 'purple'}-50">
              <div class="flex items-start gap-6 mb-10">
                <div class="w-16 h-16 bg-${idx === 0 ? 'emerald' : 'purple'}-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">${idx + 3}</div>
                <div>
                  <h2 class="text-4xl font-black text-${idx === 0 ? 'emerald' : 'purple'}-900 dark:text-blue-100">${ex.title}</h2>
                  <p class="text-2xl font-bold text-gray-700 mt-2">${ex.question}</p>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row gap-10">
                <div class="lg:w-1/2 p-6 bg-white dark:bg-slate-900 rounded-[40px] border-2 border-${idx === 0 ? 'emerald' : 'purple'}-100">
                  <img src="${ex.image}" class="w-full h-auto rounded-3xl shadow-sm">
                </div>
                <div class="lg:w-1/2 flex flex-col">
                  <div class="bg-${idx === 0 ? 'emerald' : 'purple'}-50 p-6 rounded-3xl mb-6 border-l-8 border-${idx === 0 ? 'emerald' : 'purple'}-500 italic text-xl font-bold text-${idx === 0 ? 'emerald' : 'purple'}-800">
                    💡 Gợi ý: ${ex.hint}
                  </div>
                  <p class="text-lg font-black text-${idx === 0 ? 'emerald' : 'purple'}-600 uppercase mb-4 tracking-tighter">📝 Bài làm</p>
                  <textarea id="ans-128-ex${idx + 3}" rows="6" 
                    class="w-full p-8 bg-${idx === 0 ? 'emerald' : 'purple'}-50/30 rounded-[32px] border-3 border-${idx === 0 ? 'emerald' : 'purple'}-100 outline-none focus:ring-4 focus:ring-${idx === 0 ? 'emerald' : 'purple'}-400 text-3xl font-black leading-relaxed"
                    placeholder="Trình bày bài giải tại đây..."></textarea>
                  <div class="mt-8 flex justify-center gap-6">
                    <button onclick="window.submitWordProblemAILocal('128-${idx + 3}')" class="w-20 h-20 bg-${idx === 0 ? 'emerald' : 'purple'}-100 text-${idx === 0 ? 'emerald' : 'purple'}-600 rounded-3xl font-black text-4xl shadow-md border-3 border-${idx === 0 ? 'emerald' : 'purple'}-200 transform hover:rotate-12 transition-transform">E</button>
                    <button id="btn-submit-ex${idx + 3}" onclick="window.lesson128.submitEx${idx + 3}()"
                      class="flex-grow bg-${idx === 0 ? 'emerald' : 'purple'}-600 hover:bg-${idx === 0 ? 'emerald' : 'purple'}-700 text-white px-10 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95">
                      NỘP BÀI ${idx + 3} 🌟
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="bg-gradient-to-br from-emerald-600 to-blue-700 p-12 rounded-[60px] text-white shadow-3xl text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div class="relative z-10 space-y-8">
            <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">CHINH PHỤC QUIZ THÁCH THỨC!</h2>
            <p class="text-2xl md:text-3xl font-medium text-white/90 italic w-full mx-auto">Vượt qua mọi câu hỏi để hoàn thành bài luyện tập hôm nay nhé!</p>
            <button onclick="document.getElementById('tab-quiz')?.click(); window.scrollTo({top: 0, behavior: 'smooth'});"
              class="bg-yellow-400 text-blue-900 hover:bg-white px-16 py-6 rounded-[32px] font-black text-3xl uppercase tracking-tighter shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-6 mx-auto group">
              BẮT ĐẦU NGAY <span class="text-4xl group-hover:translate-x-3 transition-transform">🏆</span>
            </button>
          </div>
        </div>
      </div>
    `;

        const contentArea = document.getElementById('lesson-content-area');
        const practiceArea = document.getElementById('lesson-practice-area');
        if (contentArea) contentArea.innerHTML = viewHTML;
        if (practiceArea) practiceArea.innerHTML = practiceHTML;
    }
};

