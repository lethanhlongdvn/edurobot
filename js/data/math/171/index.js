export const lesson171 = {
    period: "171",
    title: "BÀI 74: ÔN TẬP THỐNG KÊ VÀ XÁC SUẤT (TIẾT 2)",
    topic: "Thống kê và xác suất",
    week: "35",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP XÁC SUẤT</h3>
                <div class="flex flex-col gap-6">
                    <div class="p-8 bg-white rounded-[2.5rem] shadow-xl border-t-8 border-green-500 flex items-center gap-8">
                        <div class="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-3xl md:text-5xl">✅</div>
                        <div>
                            <h4 class="text-xl md:text-3xl font-black text-green-600 mb-2 uppercase">Chắc chắn</h4>
                            <p class="text-lg md:text-2xl text-gray-700 font-bold">Sự việc luôn luôn xảy ra trong mọi trường hợp.</p>
                        </div>
                    </div>
                    <div class="p-8 bg-white rounded-[2.5rem] shadow-xl border-t-8 border-orange-500 flex items-center gap-8">
                        <div class="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center text-3xl md:text-5xl">❓</div>
                        <div>
                            <h4 class="text-xl md:text-3xl font-black text-orange-600 mb-2 uppercase">Có thể</h4>
                            <p class="text-lg md:text-2xl text-gray-700 font-bold">Sự việc có thể xảy ra hoặc không xảy ra.</p>
                        </div>
                    </div>
                    <div class="p-8 bg-white rounded-[2.5rem] shadow-xl border-t-8 border-rose-500 flex items-center gap-8">
                        <div class="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 bg-rose-100 rounded-full flex items-center justify-center text-3xl md:text-5xl">❌</div>
                        <div>
                            <h4 class="text-xl md:text-3xl font-black text-rose-600 mb-2 uppercase">Không thể</h4>
                            <p class="text-lg md:text-2xl text-gray-700 font-bold">Sự việc không bao giờ xảy ra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson171_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Bài 1. Chọn quả bóng</h3>
                </div>
                
                <div class="p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-200">
                    <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8 italic">
                        Trong túi có <span class="text-blue-600">3 quả bóng ĐỎ</span> và <span class="text-orange-600">2 quả bóng VÀNG</span>. Lấy ngẫu nhiên <span class="text-rose-600">4 quả bóng</span>. Điền từ thích hợp vào chỗ trống:
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex flex-wrap items-center gap-4 text-lg md:text-2xl font-bold bg-white p-6 rounded-2xl shadow-md border-l-8 border-blue-400">
                            <span>a) Lấy được ít nhất 2 quả bóng đỏ là việc</span>
                            <select id="171-1-a" class="p-2 border-b-4 border-blue-300 outline-none text-blue-700 font-black bg-blue-50 rounded-lg">
                                <option value="">-- Chọn --</option>
                                <option value="co-the">có thể</option>
                                <option value="khong-the">không thể</option>
                                <option value="chac-chan">chắc chắn</option>
                            </select>
                        </div>
                        <div class="flex flex-wrap items-center gap-4 text-lg md:text-2xl font-bold bg-white p-6 rounded-2xl shadow-md border-l-8 border-orange-400">
                            <span>b) Lấy được 4 quả bóng vàng là việc</span>
                            <select id="171-1-b" class="p-2 border-b-4 border-orange-300 outline-none text-orange-700 font-black bg-orange-50 rounded-lg">
                                <option value="">-- Chọn --</option>
                                <option value="co-the">có thể</option>
                                <option value="khong-the">không thể</option>
                                <option value="chac-chan">chắc chắn</option>
                            </select>
                        </div>
                        <div class="flex flex-wrap items-center gap-4 text-lg md:text-2xl font-bold bg-white p-6 rounded-2xl shadow-md border-l-8 border-green-400">
                            <span>c) Lấy được ít nhất 1 quả bóng đỏ là việc</span>
                            <select id="171-1-c" class="p-2 border-b-4 border-green-300 outline-none text-green-700 font-black bg-green-50 rounded-lg">
                                <option value="">-- Chọn --</option>
                                <option value="co-the">có thể</option>
                                <option value="khong-the">không thể</option>
                                <option value="chac-chan">chắc chắn</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-171-1" onclick="window.check_171_1()" class="w-16 h-16 md:w-24 md:h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-3xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson171_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg rotate-1">2</div>
                    <h3 class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Bài 2. Xúc xắc may mắn</h3>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-10 items-center">
                    <img src="assets/images/toan/toan_tap_2/99/" alt="Xúc xắc" class="w-full lg:w-1/3 max-w-sm rounded-[3rem] shadow-2xl border-8 border-green-100">
                    <div class="w-full lg:w-2/3 space-y-6">
                        <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                            Việt gieo một con xúc xắc 6 mặt. Các khẳng định sau ĐÚNG hay SAI?
                        </p>
                        <div class="grid grid-cols-1 gap-4">
                            <div class="flex items-center justify-between p-6 bg-green-50 rounded-[2rem] border-2 border-green-200">
                                <span class="text-lg md:text-2xl font-black text-green-800">1. Số chấm là số lẻ là việc <span class="underline underline-offset-4">có thể</span>.</span>
                                <button onclick="window.check_171_2('1', true)" class="w-20 h-14 bg-green-600 text-white rounded-xl text-xl font-black hover:bg-green-700 active:scale-95 transition-all">ĐÚNG</button>
                            </div>
                            <div class="flex items-center justify-between p-6 bg-orange-50 rounded-[2rem] border-2 border-orange-200">
                                <span class="text-lg md:text-2xl font-black text-orange-800">2. Số chấm bằng 7 là việc <span class="underline underline-offset-4">có thể</span>.</span>
                                <button onclick="window.check_171_2('2', false)" class="w-20 h-14 bg-orange-600 text-white rounded-xl text-xl font-black hover:bg-orange-700 active:scale-95 transition-all">SAI</button>
                            </div>
                            <div class="flex items-center justify-between p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-200">
                                <span class="text-lg md:text-2xl font-black text-blue-800">3. Số chấm nhỏ hơn 7 là việc <span class="underline underline-offset-4">chắc chắn</span>.</span>
                                <button onclick="window.check_171_2('3', true)" class="w-20 h-14 bg-blue-600 text-white rounded-xl text-xl font-black hover:bg-blue-700 active:scale-95 transition-all">ĐÚNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson171_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Bài 3. Lấy thẻ số</h3>
                </div>
                
                <div class="p-10 bg-orange-50 rounded-[3rem] border-4 border-orange-200 shadow-inner">
                    <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-10 text-center">
                        Mai có 5 tấm thẻ ghi các số: <span class="text-orange-700 font-black">2, 3, 5, 7, 8</span>. Mai lấy ngẫu nhiên 2 tấm thẻ.
                        <br>
                        Khả năng nào sau đây là <span class="text-rose-600 underline underline-offset-4">không thể</span>?
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button onclick="window.check_171_3('A')" class="p-8 bg-white hover:bg-orange-100 rounded-[2.5rem] border-4 border-orange-300 text-lg md:text-2xl font-black text-orange-800 transition-all shadow-lg active:scale-95">
                            A. Tổng 2 số bằng 5
                        </button>
                        <button onclick="window.check_171_3('B')" class="p-8 bg-white hover:bg-orange-100 rounded-[2.5rem] border-4 border-orange-300 text-lg md:text-2xl font-black text-orange-800 transition-all shadow-lg active:scale-95">
                            B. Tổng 2 số bằng 15
                        </button>
                        <button onclick="window.check_171_3('C')" class="p-8 bg-white hover:bg-orange-100 rounded-[2.5rem] border-4 border-orange-300 text-lg md:text-2xl font-black text-orange-800 transition-all shadow-lg active:scale-95">
                            C. Tổng 2 số bằng 20
                        </button>
                        <button onclick="window.check_171_3('D')" class="p-8 bg-white hover:bg-orange-100 rounded-[2.5rem] border-4 border-orange-300 text-lg md:text-2xl font-black text-orange-800 transition-all shadow-lg active:scale-95">
                            D. Tổng 2 số là số chẵn
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson171_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-4xl font-black text-rose-800 uppercase tracking-wide">Bài 4. Quay vòng quay</h3>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div class="space-y-6">
                        <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                            Dự đoán khả năng kim dừng lại ở các phần:
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-6 bg-rose-50 rounded-3xl border-2 border-rose-200">
                                <span class="text-lg md:text-2xl font-black text-rose-800">Dừng ở phần SÀNH ĐIỆU:</span>
                                <span class="text-xl md:text-3xl font-black text-rose-600 uppercase">Có thể</span>
                            </div>
                            <div class="flex items-center justify-start p-6 bg-blue-50 rounded-3xl border-2 border-blue-200">
                                <span class="text-lg md:text-2xl font-black text-blue-800">Dừng ở phần MÀU ĐỎ:</span>
                                <div class="flex items-center gap-3">
                                    <input id="171-4-1" type="text" class="w-40 h-14 text-center border-4 border-blue-400 rounded-xl outline-none text-xl md:text-2xl font-black text-blue-700" placeholder="?">
                                </div>
                            </div>
                            <div class="flex items-center justify-start p-6 bg-green-50 rounded-3xl border-2 border-green-200">
                                <span class="text-lg md:text-2xl font-black text-green-800">Dừng ở phần CÓ CHỮ:</span>
                                <div class="flex items-center gap-3">
                                    <input id="171-4-2" type="text" class="w-40 h-14 text-center border-4 border-green-400 rounded-xl outline-none text-xl md:text-2xl font-black text-green-700" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/96/" alt="Vòng quay" class="w-full rounded-full shadow-2xl animate-spin-slow border-[16px] border-white ring-8 ring-rose-100">
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-171-4" onclick="window.check_171_4()" class="w-16 h-16 md:w-24 md:h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-3xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Tung đồng xu, khả năng xuất hiện mặt ngửa là:", options: ["Có thể", "Chắc chắn", "Không thể", "Luôn luôn"], answer: 0 },
        { question: "Mặt Trời mọc ở hướng Tây là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Hàng ngày"], answer: 0 },
        { question: "Tháng Hai có 30 ngày là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Năm nhuận"], answer: 0 },
        { question: "Gieo xúc xắc 1 lần được mặt 15 chấm là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Hên xui"], answer: 0 },
        { question: "Trong túi chỉ có kẹo dâu. Lấy được kẹo dâu là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Khó xảy ra"], answer: 0 },
        { question: "Hôm nay là thứ Hai, ngày mai là thứ Ba là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Tùy tháng"], answer: 0 },
        { question: "Số chia hết cho 2 là số lẻ là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Bình thường"], answer: 0 },
        { question: "Một tam giác có 4 góc là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Vô lý"], answer: 0 },
        { question: "Trong 10 tấm thẻ 1-10, lấy được số lớn hơn 0 là:", options: ["Chắc chắn", "Có thể", "Không thể", "Ít khi"], answer: 0 },
        { question: "Quay vòng quay có màu Xanh và Đỏ. Dừng ở màu Vàng:", options: ["Không thể", "Có thể", "Chắc chắn", "Ngẫu nhiên"], answer: 0 },
        { question: "Tổng hai số tự nhiên là một số tự nhiên là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Sai"], answer: 0 },
        { question: "Kết quả của phép tính 2 + 3 = 6 là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Luôn đúng"], answer: 0 },
        { question: "Một người sống thọ 500 tuổi là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Thỉnh thoảng"], answer: 0 },
        { question: "Mai đi học muộn là việc:", options: ["Có thể", "Chắc chắn", "Không thể", "Luôn luôn"], answer: 0 },
        { question: "Mua một vé số và trúng giải độc đắc là việc:", options: ["Có thể", "Chắc chắn", "Không thể", "Dễ dàng"], answer: 0 },
        { question: "Con voi biết bay là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Trong phim"], answer: 0 },
        { question: "Trái Đất quay quanh Mặt Trời là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Thỉnh thoảng"], answer: 0 },
        { question: "1 + 1 bằng 2 là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Sai rồi"], answer: 0 },
        { question: "Thả một viên đá vào nước, nó sẽ chìm là việc:", options: ["Chắc chắn", "Có thể", "Không thể", "Tùy đá"], answer: 0 },
        { question: "Lớp học có 30 học sinh nữ, lấy 1 bạn là nam là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Bình thường"], answer: 0 },
        { question: "Đội tuyển Việt Nam thắng World Cup 2026 là việc:", options: ["Có thể", "Chắc chắn", "Không thể", "Khó tin"], answer: 0 },
        { question: "Hai đường thẳng song song cắt nhau là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Ở vô cực"], answer: 0 },
        { question: "Cây táo nở ra bông hoa hồng là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Ghép cây"], answer: 0 },
        { question: "Trong hộp có 10 bi xanh. Lấy 2 bi đỏ là việc:", options: ["Không thể", "Có thể", "Chắc chắn", "Sai lầm"], answer: 0 },
        { question: "Số chẵn chia hết cho 5 là việc:", options: ["Có thể", "Chắc chắn", "Không thể", "Luôn luôn"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_171_1 = () => {
    const a = document.getElementById('171-1-a').value;
    const b = document.getElementById('171-1-b').value;
    const c = document.getElementById('171-1-c').value;

    let score = 0;
    if (a === 'chac-chan') score++;
    if (b === 'khong-the') score++;
    if (c === 'chac-chan') score++;

    const isCorrect = score === 3;
    const rightAnswer = "a) chắc chắn, b) không thể, c) chắc chắn";
    const studentAnswer = `a) ${a || '?'}, b) ${b || '?'}, c) ${c || '?'}`;
    const guidance = "Em hãy xem xét số lượng bóng đỏ (3) và bóng vàng (2). Nếu lấy 4 quả, dù có lấy hết bóng vàng (2 quả) thì vẫn phải lấy thêm ít nhất bao nhiêu quả bóng đỏ? Từ đó suy ra câu trả lời.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Trong túi có 3 bóng đỏ và 2 bóng vàng. Lấy ngẫu nhiên 4 quả bóng.<br>
        - a) Vì chỉ có 2 quả bóng vàng, nên khi lấy 4 quả, chắc chắn phải có ít nhất 2 quả bóng đỏ (Trường hợp ít bóng đỏ nhất là 2 đỏ + 2 vàng). Vậy là <b>chắc chắn</b>.<br>
        - b) Vì trong túi chỉ có 2 quả bóng vàng, nên việc lấy được 4 quả bóng vàng là <b>không thể</b>.<br>
        - c) Theo câu a, ít nhất phải lấy được 2 quả bóng đỏ, nên việc lấy được ít nhất 1 quả bóng đỏ là việc <b>chắc chắn</b>.<br>
        Đáp án: a) chắc chắn, b) không thể, c) chắc chắn.<br>
        Em có tư duy về xác suất rất tốt!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Chọn quả bóng", Math.round(score / 3 * 100), "btn-check-171-1", 0, 3, score);
    }
};

window.check_171_2 = (id, expected) => {
    const isCorrect = expected;
    const rightAnswer = expected ? "ĐÚNG" : "SAI";
    const studentAnswer = expected ? "ĐÚNG" : "SAI"; // Mocking since it's a direct button click

    let guidance = "";
    let solution = "";

    if (id === '1') {
        guidance = "Con xúc xắc có các mặt 1, 2, 3, 4, 5, 6. Em xem trong đó có số lẻ không nhé.";
        solution = `
            <b>Lời giải chi tiết:</b><br>
            Các mặt của xúc xắc là {1, 2, 3, 4, 5, 6}. Trong đó các số lẻ là {1, 3, 5}.<br>
            Do đó, việc xuất hiện số chấm là số lẻ là việc <b>có thể</b> xảy ra.<br>
            Khẳng định là ĐÚNG.
        `;
    } else if (id === '2') {
        guidance = "Con xúc xắc thông thường chỉ có tối đa mấy chấm nhỉ?";
        solution = `
            <b>Lời giải chi tiết:</b><br>
            Xúc xắc 6 mặt chỉ có số chấm từ 1 đến 6. Không có mặt nào có 7 chấm.<br>
            Do đó, việc số chấm bằng 7 là <b>không thể</b>.<br>
            Khẳng định "Số chấm bằng 7 là có thể" là SAI.
        `;
    } else if (id === '3') {
        guidance = "Tất cả các số từ 1 đến 6 có nhỏ hơn 7 không em?";
        solution = `
            <b>Lời giải chi tiết:</b><br>
            Tất cả các mặt {1, 2, 3, 4, 5, 6} đều nhỏ hơn 7.<br>
            Do đó, việc số chấm nhỏ hơn 7 là việc luôn luôn xảy ra, tức là <b>chắc chắn</b>.<br>
            Khẳng định là ĐÚNG.
        `;
    }

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Xúc xắc (Câu " + id + ")", isCorrect ? 100 : 0, "lesson171_b2", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_171_3 = (choice) => {
    const isCorrect = choice === 'C';
    const rightAnswer = "C. Tổng 2 số bằng 20";
    const studentAnswer = choice;
    const guidance = "Em hãy tìm tổng lớn nhất của hai thẻ bất kỳ trong bộ (2, 3, 5, 7, 8). Nếu tổng lớn nhất vẫn nhỏ hơn 20 thì việc có tổng bằng 20 là gì?";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Các thẻ số là: 2, 3, 5, 7, 8.<br>
        - A. 2 + 3 = 5 (Có thể)<br>
        - B. 7 + 8 = 15 (Có thể)<br>
        - C. Hai thẻ có tổng lớn nhất là 7 + 8 = 15. Vì 15 < 20 nên việc lấy được 2 thẻ có tổng bằng 20 là <b>không thể</b>.<br>
        - D. 3 + 5 = 8 hoặc 7 + 5 = 12 (Số chẵn - Có thể)<br>
        Vậy khả năng không thể là C.<br>
        Chúc mừng em đã chọn đúng đáp án!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Lấy thẻ số", isCorrect ? 100 : 0, "lesson171_b3", 0, 1, isCorrect ? 1 : 0);
    }
};

window.check_171_4 = () => {
    const v1 = document.getElementById('171-4-1').value.trim().toLowerCase();
    const v2 = document.getElementById('171-4-2').value.trim().toLowerCase();

    let score = 0;
    if (v1 === 'khong the' || v1 === 'không thể') score++;
    if (v2 === 'chac chan' || v2 === 'chắc chắn') score++;

    const isCorrect = score === 2;
    const rightAnswer = "Không thể, Chắc chắn";
    const studentAnswer = `Màu đỏ: ${v1 || '?'}, Có chữ: ${v2 || '?'}`;
    const guidance = "Em hãy quan sát vòng quay: Có phần nào màu đỏ không? Tất cả các phần có chứa chữ không? Từ đó em sẽ biết khả năng xảy ra là gì.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Quan sát vòng quay trong hình:<br>
        - Không có phần nào được tô màu đỏ. Vậy dừng ở phần màu đỏ là <b>không thể</b>.<br>
        - Tất cả các phần (Vàng, Xanh, Cam...) đều có viết chữ trên đó. Vậy dừng ở phần có chữ là việc <b>chắc chắn</b>.<br>
        Đáp án: Không thể, Chắc chắn.<br>
        Em quan sát hình ảnh rất kỹ đấy! Rất tốt.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Quay vòng quay", Math.round(score / 2 * 100), "btn-check-171-4", 0, 2, score);
    }
};

