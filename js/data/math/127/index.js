/**
 * BÀI 55. LUYỆN TẬP CHUNG (TIẾT 1) - TIẾT 127
 * Standardized by EduRobot Protocol
 */

export const metadata = {
    topic: "Hình hộp chữ nhật & Hình lập phương",
    week: 26,
    period: 127,
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 1)",
    description: "Ôn tập về hình khai triển, tính diện tích và thể tích của hình hộp chữ nhật, hình lập phương.",
    book_page: "Toán 5 Tập 2 - Trang 60",
    version: "1.1.0"
};

export const lessonInfo = {
    ...metadata,
    hero: {
        icon: "🏗️",
        title: "Luyện Tập Tổng Hợp",
        subtitle: "Thành thạo diện tích và thể tích",
        gradient: "from-blue-600 to-cyan-500"
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
            question: "Mai có thể gấp hình khai triển ở trên thành chiếc hộp nào?",
            image: "assets/images/toan/toan_tap_2/127-1-de.webp",
            options: [
                { id: "A", text: "Hộp A", image: "assets/images/toan/toan_tap_2/127-1-A.webp" },
                { id: "B", text: "Hộp B", image: "assets/images/toan/toan_tap_2/127-1-B.webp" },
                { id: "C", text: "Hộp C", image: "assets/images/toan/toan_tap_2/127-1-C.webp" },
                { id: "D", text: "Hộp D", image: "assets/images/toan/toan_tap_2/127-1-D.webp" }
            ],
            answer: "B",
            solution: "Khi gấp hình khai triển này, mặt màu đỏ và mặt màu xanh dương sẽ ở vị trí đối diện nhau. Đối chiếu với các hình, chỉ có Hộp B là phù hợp với quy luật gấp này.",
            score: 100
        },
        {
            id: "ex2",
            title: "Hoàn thành bảng sau",
            type: "table-input",
            headers: ["Hình lập phương", "Hộp thứ nhất", "Hộp thứ hai"],
            rows: [
                { label: "Độ dài cạnh", values: ["8 dm", "0,5 m"] },
                {
                    label: "Diện tích xung quanh",
                    inputs: [
                        { id: "sxq1", unit: "dm²", answer: "256" },
                        { id: "sxq2", unit: "m²", answer: "1" }
                    ]
                },
                {
                    label: "Diện tích toàn phần",
                    inputs: [
                        { id: "stp1", unit: "dm²", answer: "384" },
                        { id: "stp2", unit: "m²", answer: "1,5" }
                    ]
                }
            ],
            solution: "• Hộp thứ nhất: Cạnh 8 dm<br>- Sxq = 8 × 8 × 4 = 256 (dm²)<br>- Stp = 8 × 8 × 6 = 384 (dm²)<br>• Hộp thứ hai: Cạnh 0,5 m<br>- Sxq = 0,5 × 0,5 × 4 = 1 (m²)<br>- Stp = 0,5 × 0,5 × 6 = 1,5 (m²)",
            score: 100
        },
        {
            id: "ex3",
            title: "Tính thể tích chiếc hộp",
            type: "word-problem",
            question: "Nam làm một chiếc hộp từ hình khai triển dưới đây. Tính thể tích của chiếc hộp đó.",
            image: "assets/images/toan/toan_tap_2/127-3.webp",
            hint: "Dựa vào hình khai triển, ta thấy đây là hình hộp chữ nhật có chiều dài 12 cm, chiều rộng 5 cm và chiều cao 3 cm.",
            answer: "180",
            unit: "cm³",
            solution: "Dựa vào hình khai triển, chiếc hộp có:<br>- Chiều dài: 12 cm<br>- Chiều rộng: 5 cm<br>- Chiều cao: 3 cm<br>Thể tích của chiếc hộp là:<br>12 × 5 × 3 = 180 (cm³)<br>Đáp số: 180 cm³.",
            score: 100
        },
        {
            id: "ex4",
            title: "Việt sơn hộp gỗ",
            type: "word-problem",
            question: "Việt có một chiếc hộp gỗ (có nắp) dạng hình hộp chữ nhật có chiều dài 25 cm, chiều rộng 20 cm và chiều cao 10 cm. Việt đã sơn màu nâu lên các mặt xung quanh và màu vàng lên 2 mặt đáy. Tính diện tích phần được sơn màu nâu.",
            image: "assets/images/toan/toan_tap_2/127-4.webp",
            hint: "Diện tích phần sơn màu nâu chính là diện tích xung quanh của hình hộp chữ nhật.",
            answer: "900",
            unit: "cm²",
            solution: "Diện tích phần được sơn màu nâu là:<br>(25 + 20) × 2 × 10 = 900 (cm²)<br>Đáp số: 900 cm².",
            score: 100
        }
    ],
    quizPool: [
        { "question": "Muốn tính diện tích xung quanh hình lập phương, ta lấy:", "options": ["S một mặt × 4", "S một mặt × 6", "cạnh × cạnh", "cạnh × 4"], "answer": 0, "level": 1 },
        { "question": "Diện tích một mặt hình lập phương cạnh 3 cm là:", "options": ["9 cm²", "6 cm²", "3 cm²", "27 cm²"], "answer": 0, "level": 1 },
        { "question": "Hình nào có 6 mặt đều là hình chữ nhật?", "options": ["Hình lập phương", "Hình hộp chữ nhật", "Hình cầu", "Hình trụ"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần hình lập phương bằng diện tích một mặt nhân với:", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },
        { "question": "Hình hộp chữ nhật có mấy mặt xung quanh?", "options": ["2", "4", "6", "8"], "answer": 1, "level": 1 },
        { "question": "Diện tích xung quanh HLP cạnh 5 cm là:", "options": ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], "answer": 1, "level": 2 },
        { "question": "Diện tích toàn phần HLP cạnh 4 cm là:", "options": ["16 cm²", "64 cm²", "96 cm²", "64 cm³"], "answer": 2, "level": 2 },
        { "question": "Sxq của HHCN chiều dài 5cm, rộng 3cm, cao 2cm là:", "options": ["16 cm²", "32 cm²", "62 cm²", "30 cm²"], "answer": 1, "level": 2 },
        { "question": "HHCN dài 5m, rộng 2m, cao 1m. Chu vi mặt đáy là:", "options": ["10 m", "14 m", "7 m", "14 m²"], "answer": 1, "level": 2 },
        { "question": "Một cái hộp không nắp hình LP cạnh 1 dm. Số mặt cần tính là:", "options": ["4 mặt", "5 mặt", "6 mặt", "1 mặt"], "answer": 1, "level": 2 },
        { "question": "Stp của HLP là 150 cm². Diện tích 1 mặt là:", "options": ["15 cm²", "25 cm²", "30 cm²", "50 cm²"], "answer": 1, "level": 3 },
        { "question": "HHCN dài 8cm, rộng 6cm, cao 5cm. Stp là:", "options": ["140 cm²", "236 cm²", "48 cm²", "240 cm²"], "answer": 1, "level": 3 },
        { "question": "Nếu tăng cạnh HLP lên gấp 2 lần, thì Sxq tăng gấp mấy lần?", "options": ["2 lần", "4 lần", "8 lần", "Không đổi"], "answer": 1, "level": 3 },
        { "question": "Quyển hộp gỗ HHCN kích thước 25×20×10 cm. Sxq là:", "options": ["900 cm²", "1000 cm²", "500 cm²", "1900 cm²"], "answer": 0, "level": 3 },
        { "question": "Một căn phòng HHCN dài 8m, rộng 5m, cao 4m. Sxq của tường là:", "options": ["104 m²", "40 m²", "184 m²", "200 m²"], "answer": 0, "level": 3 }
    ]
};

// --- Logic Layer ---

const state = {
    ex1: null,
    scores: { ex1: 0, ex2: 0, ex3: 0, ex4: 0 },
    attempts: { ex1: 0, ex2: 0, ex3: 0, ex4: 0 }
};

window.lesson127 = {
    selectMCQ: (option) => {
        state.ex1 = option;
        const buttons = document.querySelectorAll('.mcq-btn');
        buttons.forEach(btn => btn.classList.remove('active', 'ring-4', 'ring-blue-400', 'border-blue-400'));
        const selected = document.getElementById(`btn-127-ex1-${option}`);
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
            "Mặt đỏ và mặt xanh dương đối diện nhau.",
            lessonInfo.exercises[0].solution
        );

        window.submitMathLesson(
            "Tiết 127 - Bài 1: Chọn hình khai triển",
            state.scores.ex1,
            "btn-submit-ex1",
            state.attempts.ex1,
            1,
            isCorrect ? 1 : 0
        );
    },

    submitEx2: () => {
        state.attempts.ex2++;
        const answers = {
            sxq1: document.getElementById('ans-127-sxq1').value.trim(),
            sxq2: document.getElementById('ans-127-sxq2').value.trim().replace(',', '.'),
            stp1: document.getElementById('ans-127-stp1').value.trim(),
            stp2: document.getElementById('ans-127-stp2').value.trim().replace(',', '.')
        };

        const results = [
            answers.sxq1 === "256",
            answers.sxq2 === "1" || answers.sxq2 === "1.0",
            answers.stp1 === "384",
            answers.stp2 === "1.5" || answers.stp2 === "1.50"
        ];

        const correctCount = results.filter(r => r).length;
        const isCorrect = correctCount === 4;
        state.scores.ex2 = Math.round((correctCount / 4) * 100);

        window.showMathFeedback(
            isCorrect,
            "256, 1, 384, 1.5",
            Object.values(answers).join(", "),
            "Áp dụng công thức Sxq = a×a×4 và Stp = a×a×6.",
            lessonInfo.exercises[1].solution
        );

        window.submitMathLesson(
            "Tiết 127 - Bài 2: Hoàn thành bảng HLP",
            state.scores.ex2,
            "btn-submit-ex2",
            state.attempts.ex2,
            4,
            correctCount
        );
    },

    submitEx3: () => {
        state.attempts.ex3++;
        const solutionText = document.getElementById('ans-127-ex3').value.trim();
        const hasCorrectResult = solutionText.includes("180");
        const isCorrect = hasCorrectResult && solutionText.length > 15;
        state.scores.ex3 = isCorrect ? 100 : (hasCorrectResult ? 50 : 0);

        window.showMathFeedback(
            isCorrect,
            "180 cm³",
            solutionText,
            "Thể tích = 12 × 5 × 3 = 180.",
            lessonInfo.exercises[2].solution
        );

        window.submitMathLesson(
            "Tiết 127 - Bài 3: Thể tích hình khai triển",
            state.scores.ex3,
            "btn-submit-ex3",
            state.attempts.ex3,
            1,
            isCorrect ? 1 : 0
        );
    },

    submitEx4: () => {
        state.attempts.ex4++;
        const solutionText = document.getElementById('ans-127-ex4').value.trim();
        const hasCorrectResult = solutionText.includes("900");
        const isCorrect = hasCorrectResult && solutionText.length > 15;
        state.scores.ex4 = isCorrect ? 100 : (hasCorrectResult ? 50 : 0);

        window.showMathFeedback(
            isCorrect,
            "900 cm²",
            solutionText,
            "Sxq = (25 + 20) × 2 × 10 = 900.",
            lessonInfo.exercises[3].solution
        );

        window.submitMathLesson(
            "Tiết 127 - Bài 4: Diện tích sơn hộp gỗ",
            state.scores.ex4,
            "btn-submit-ex4",
            state.attempts.ex4,
            1,
            isCorrect ? 1 : 0
        );
    },

    render: () => {
        const { hero, principles, exercises } = lessonInfo;

        // View Content
        const viewHTML = `
      <div class="space-y-12 animate-fade-in">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br ${hero.gradient} rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div class="text-8xl md:text-9xl animate-bounce-slow">${hero.icon}</div>
            <div class="text-center md:text-left">
              <h1 class="text-5xl md:text-7xl font-black mb-3 tracking-tight">${hero.title}</h1>
              <p class="text-2xl md:text-3xl font-medium text-white/90 italic">${hero.subtitle}</p>
            </div>
          </div>
        </div>

        <!-- Principles -->
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

        // Practice Content
        const practiceHTML = `
      <div class="space-y-16 pb-20">
        <!-- Exercise 1 -->
        <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-blue-50">
          <div class="flex items-start gap-6 mb-10">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">1</div>
            <div>
              <h2 class="text-4xl font-black text-blue-900 dark:text-blue-100">${exercises[0].title}</h2>
              <p class="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-2">${exercises[0].question}</p>
            </div>
          </div>
          
          <div class="flex justify-center mb-10 p-6 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
            <img src="${exercises[0].image}" class="max-w-full h-auto rounded-3xl shadow-md">
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            ${exercises[0].options.map(opt => `
              <button id="btn-127-ex1-${opt.id}" onclick="window.lesson127.selectMCQ('${opt.id}')"
                class="mcq-btn group p-4 bg-white dark:bg-slate-700 border-4 border-blue-100 dark:border-slate-600 rounded-[32px] transition-all hover:scale-105 active:scale-95">
                <img src="${opt.image}" class="w-full h-auto mb-4 rounded-xl group-hover:scale-110 transition-transform">
                <span class="text-2xl font-black text-gray-400 group-[.active]:text-blue-600 transition-colors">${opt.text}</span>
              </button>
            `).join('')}
          </div>

          <div class="mt-12 flex justify-center">
            <button id="btn-submit-ex1" onclick="window.lesson127.submitEx1()"
              class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-4">
              NỘP BÀI 1 <span class="text-3xl">🚀</span>
            </button>
          </div>
        </div>

        <!-- Exercise 2 -->
        <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-emerald-50">
          <div class="flex items-start gap-6 mb-10">
            <div class="w-16 h-16 bg-emerald-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">2</div>
            <h2 class="text-4xl font-black text-emerald-900 dark:text-emerald-100">${exercises[1].title}</h2>
          </div>

          <div class="overflow-x-auto rounded-[32px] border-4 border-emerald-100 shadow-inner">
            <table class="w-full text-center border-collapse">
              <thead>
                <tr class="bg-emerald-50 dark:bg-emerald-900/30">
                  <th class="p-8 text-2xl font-black text-emerald-800 border-b-4 border-emerald-100">Hình lập phương</th>
                  <th class="p-8 text-2xl font-black text-emerald-800 border-l-4 border-b-4 border-emerald-100">Hộp thứ nhất</th>
                  <th class="p-8 text-2xl font-black text-emerald-800 border-l-4 border-b-4 border-emerald-100">Hộp thứ hai</th>
                </tr>
              </thead>
              <tbody class="text-2xl font-bold">
                <tr class="border-b-2 border-emerald-50">
                  <td class="p-8 bg-emerald-50/20 text-emerald-700">Độ dài cạnh</td>
                  <td class="p-8 border-l-4 border-emerald-100 text-3xl font-black text-blue-600 font-mono">8 dm</td>
                  <td class="p-8 border-l-4 border-emerald-100 text-3xl font-black text-blue-600 font-mono">0,5 m</td>
                </tr>
                <tr class="border-b-2 border-emerald-50">
                  <td class="p-8 bg-emerald-50/20 text-emerald-700">Diện tích xung quanh</td>
                  <td class="p-8 border-l-4 border-emerald-100">
                    <div class="flex items-center justify-center gap-2">
                      <input type="text" id="ans-127-sxq1" class="w-32 p-3 text-center bg-emerald-50 text-emerald-700 font-black rounded-xl outline-none focus:ring-4 focus:ring-emerald-400 border-2 border-emerald-200" placeholder="?">
                      <span class="text-gray-500">dm²</span>
                    </div>
                  </td>
                  <td class="p-8 border-l-4 border-emerald-100">
                    <div class="flex items-center justify-center gap-2">
                      <input type="text" id="ans-127-sxq2" class="w-32 p-3 text-center bg-emerald-50 text-emerald-700 font-black rounded-xl outline-none focus:ring-4 focus:ring-emerald-400 border-2 border-emerald-200" placeholder="?">
                      <span class="text-gray-500">m²</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="p-8 bg-emerald-50/20 text-emerald-700">Diện tích toàn phần</td>
                  <td class="p-8 border-l-4 border-emerald-100">
                    <div class="flex items-center justify-center gap-2">
                      <input type="text" id="ans-127-stp1" class="w-32 p-3 text-center bg-blue-50 text-blue-700 font-black rounded-xl outline-none focus:ring-4 focus:ring-blue-400 border-2 border-blue-200" placeholder="?">
                      <span class="text-gray-500">dm²</span>
                    </div>
                  </td>
                  <td class="p-8 border-l-4 border-emerald-100">
                    <div class="flex items-center justify-center gap-2">
                      <input type="text" id="ans-127-stp2" class="w-32 p-3 text-center bg-blue-50 text-blue-700 font-black rounded-xl outline-none focus:ring-4 focus:ring-blue-400 border-2 border-blue-200" placeholder="?">
                      <span class="text-gray-500">m²</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-12 flex justify-center">
            <button id="btn-submit-ex2" onclick="window.lesson127.submitEx2()"
              class="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-4">
              NỘP BÀI 2 <span class="text-3xl">📝</span>
            </button>
          </div>
        </div>

        <!-- Exercise 3 & 4 (Word Problems) -->
        <div class="grid grid-cols-1 gap-16">
          ${[exercises[2], exercises[3]].map((ex, idx) => `
            <div class="bg-white dark:bg-slate-800 p-10 rounded-[50px] shadow-2xl border-2 border-${idx === 0 ? 'orange' : 'amber'}-50">
              <div class="flex items-start gap-6 mb-10">
                <div class="w-16 h-16 bg-${idx === 0 ? 'orange' : 'amber'}-600 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg">${idx + 3}</div>
                <div>
                  <h2 class="text-4xl font-black text-${idx === 0 ? 'orange' : 'amber'}-900 dark:text-blue-100">${ex.title}</h2>
                  <p class="text-2xl font-bold text-gray-700 mt-2">${ex.question}</p>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row gap-10">
                <div class="lg:w-1/2 p-6 bg-white dark:bg-slate-900 rounded-[40px] border-2 border-${idx === 0 ? 'orange' : 'amber'}-100">
                  <img src="${ex.image}" class="w-full h-auto rounded-3xl shadow-sm">
                </div>
                <div class="lg:w-1/2 flex flex-col">
                  <div class="bg-${idx === 0 ? 'orange' : 'amber'}-50 p-6 rounded-3xl mb-6 border-l-8 border-${idx === 0 ? 'orange' : 'amber'}-500 italic text-xl font-bold text-${idx === 0 ? 'orange' : 'amber'}-800">
                    💡 Gợi ý: ${ex.hint}
                  </div>
                  <div class="relative flex-grow">
                     <p class="text-lg font-black text-${idx === 0 ? 'orange' : 'amber'}-600 uppercase mb-4">📝 Bài làm</p>
                    <textarea id="ans-127-ex${idx + 3}" rows="6" 
                      class="w-full p-8 bg-${idx === 0 ? 'orange' : 'amber'}-50/30 rounded-[32px] border-3 border-${idx === 0 ? 'orange' : 'amber'}-100 outline-none focus:ring-4 focus:ring-${idx === 0 ? 'orange' : 'amber'}-400 text-3xl font-black leading-relaxed"
                      placeholder="Trình bày bài giải tại đây..."></textarea>
                  </div>
                  <div class="mt-8 flex justify-center gap-6">
                    <button onclick="window.submitWordProblemAILocal('127-${idx + 3}')" class="w-20 h-20 bg-${idx === 0 ? 'orange' : 'amber'}-100 text-${idx === 0 ? 'orange' : 'amber'}-600 rounded-3xl font-black text-4xl shadow-md border-3 border-${idx === 0 ? 'orange' : 'amber'}-200 transform transition-transform hover:rotate-12">E</button>
                    <button id="btn-submit-ex${idx + 3}" onclick="window.lesson127.submitEx${idx + 3}()"
                      class="flex-grow bg-${idx === 0 ? 'orange' : 'amber'}-600 hover:bg-${idx === 0 ? 'orange' : 'amber'}-700 text-white px-10 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-95">
                      NỘP BÀI ${idx + 3} 🌟
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Finale Quiz -->
        <div class="bg-gradient-to-br from-blue-700 to-emerald-600 p-12 rounded-[60px] text-white shadow-3xl text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-white/5 backdrop-blur-sm animate-pulse-slow"></div>
          <div class="relative z-10 space-y-8">
            <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl italic">Đã sẵn sàng cho Quiz?</h2>
            <p class="text-2xl md:text-3xl font-medium text-white/90 italic w-full mx-auto leading-relaxed">Hãy chứng tỏ bản thân là "Bậc thầy hình học" bằng cách vượt qua bộ câu hỏi thử thách nhé!</p>
            <button onclick="document.getElementById('tab-quiz')?.click(); window.scrollTo({top: 0, behavior: 'smooth'});"
              class="bg-yellow-400 text-blue-900 hover:bg-white px-16 py-6 rounded-[32px] font-black text-3xl uppercase tracking-tighter shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-6 mx-auto group">
              CHINH PHỤC NGAY <span class="text-4xl group-hover:translate-x-3 transition-transform">🏆</span>
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

