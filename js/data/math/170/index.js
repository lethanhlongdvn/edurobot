export const lesson170 = {
    period: "170",
    title: "BÀI 74: ÔN TẬP THỐNG KÊ VÀ XÁC SUẤT (TIẾT 1)",
    topic: "Thống kê và xác suất",
    week: "34",

    content: `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[3rem] border-4 border-blue-200 shadow-2xl">
                <h3 class="text-3xl md:text-5xl font-black text-blue-700 mb-6 uppercase text-center tracking-tight">ÔN TẬP THỐNG KÊ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-white rounded-3xl shadow-xl border-l-8 border-blue-500">
                        <h4 class="text-2xl md:text-3xl font-black text-blue-600 mb-3 uppercase">Biểu đồ tranh</h4>
                        <p class="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">Sử dụng hình ảnh để biểu thị số lượng. Mỗi hình có thể đại diện cho nhiều đối tượng.</p>
                    </div>
                    <div class="p-6 bg-white rounded-3xl shadow-xl border-l-8 border-green-500">
                        <h4 class="text-2xl md:text-3xl font-black text-green-600 mb-3 uppercase">Biểu đồ cột</h4>
                        <p class="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">Sử dụng độ cao của các cột để so sánh số liệu. Cột càng cao, giá trị càng lớn.</p>
                    </div>
                    <div class="p-6 bg-white rounded-3xl shadow-xl border-l-8 border-orange-500">
                        <h4 class="text-2xl md:text-3xl font-black text-orange-600 mb-3 uppercase">Biểu đồ quạt tròn</h4>
                        <p class="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">Biểu thị tỉ số phần trăm của từng phần so với tổng thể (100%).</p>
                    </div>
                    <div class="p-6 bg-white rounded-3xl shadow-xl border-l-8 border-rose-500">
                        <h4 class="text-2xl md:text-3xl font-black text-rose-600 mb-3 uppercase">Số trung bình cộng</h4>
                        <p class="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">Bằng tổng các số liệu chia cho số lượng các nhóm số liệu.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson170_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-4xl font-black text-blue-800 uppercase tracking-wide">Bài 1. Phân loại hình học</h3>
                </div>
                
                <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8">
                    Quan sát biểu đồ tranh và hoàn thành phân loại các hình:
                </p>
                
                <div class="flex flex-col items-center gap-8">
                    <img src="assets/images/toan/toan_tap_2/98/" alt="Biểu đồ tranh hình học" class="w-full w-full rounded-3xl shadow-xl border-4 border-blue-100">
                    
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-200">
                        <div class="space-y-4">
                            <p class="text-xl md:text-2xl font-black text-blue-600 uppercase underline decoration-2 underline-offset-4 mb-4">Theo màu sắc:</p>
                            <div class="flex items-center gap-4 text-xl md:text-2xl font-bold">
                                <span>Đỏ: 16 | Vàng:</span>
                                <input id="170-1-v" type="text" class="w-20 h-10 text-center border-b-4 border-blue-400 bg-transparent outline-none font-black text-blue-800" placeholder="?">
                                <span>| Xanh:</span>
                                <input id="170-1-x" type="text" class="w-20 h-10 text-center border-b-4 border-blue-400 bg-transparent outline-none font-black text-blue-800" placeholder="?">
                            </div>
                        </div>
                        <div class="space-y-4">
                            <p class="text-xl md:text-2xl font-black text-green-600 uppercase underline decoration-2 underline-offset-4 mb-4">Theo hình dạng:</p>
                            <div class="flex flex-wrap items-center gap-4 text-xl md:text-2xl font-bold">
                                <span>Tròn: 15 | Thang:</span>
                                <input id="170-1-th" type="text" class="w-20 h-10 text-center border-b-4 border-green-400 bg-transparent outline-none font-black text-green-800" placeholder="?">
                                <span>| Tam giác:</span>
                                <input id="170-1-tg" type="text" class="w-20 h-10 text-center border-b-4 border-green-400 bg-transparent outline-none font-black text-green-800" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-170-1" onclick="window.check_170_1()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson170_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg rotate-1">2</div>
                    <h3 class="text-2xl md:text-4xl font-black text-green-800 uppercase tracking-wide">Bài 2. Phân loại rác thải</h3>
                </div>
                
                <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8">
                    Từ <span class="text-green-700 underline underline-offset-4">1 tấn rác</span>, Rô-bốt phân loại được: <span class="text-blue-600">95kg thủy tinh</span>, <span class="text-orange-600">150kg kim loại</span>, <span class="text-rose-600">105kg giấy</span>, và <span class="text-cyan-600">120kg nhựa</span>.
                </p>

                <div class="bg-green-50 p-8 rounded-[2.5rem] border-2 border-green-200">
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        <div class="p-4 bg-white rounded-2xl shadow-md border-b-8 border-blue-400">
                            <p class="text-xl font-black text-gray-500 uppercase mb-2">Thủy tinh</p>
                            <p class="text-2xl md:text-4xl font-black text-blue-600">95 kg</p>
                        </div>
                        <div class="p-4 bg-white rounded-2xl shadow-md border-b-8 border-orange-400">
                            <p class="text-xl font-black text-gray-500 uppercase mb-2">Kim loại</p>
                            <input id="170-2-b" type="text" class="w-20 h-10 text-center border-b-2 border-orange-300 outline-none text-2xl md:text-3xl font-black text-orange-600" placeholder="?">
                        </div>
                        <div class="p-4 bg-white rounded-2xl shadow-md border-b-8 border-rose-400">
                            <p class="text-xl font-black text-gray-500 uppercase mb-2">Giấy</p>
                            <input id="170-2-c" type="text" class="w-20 h-10 text-center border-b-2 border-rose-300 outline-none text-2xl md:text-3xl font-black text-rose-600" placeholder="?">
                        </div>
                        <div class="p-4 bg-white rounded-2xl shadow-md border-b-8 border-cyan-400">
                            <p class="text-xl font-black text-gray-500 uppercase mb-2">Nhựa</p>
                            <input id="170-2-d" type="text" class="w-20 h-10 text-center border-b-2 border-cyan-300 outline-none text-2xl md:text-3xl font-black text-cyan-600" placeholder="?">
                        </div>
                        <div class="p-4 bg-white rounded-2xl shadow-md border-b-8 border-gray-400">
                            <p class="text-xl font-black text-rose-600 uppercase mb-2">Còn lại</p>
                            <input id="170-2-cl" type="text" class="w-20 h-10 text-center border-b-2 border-gray-300 outline-none text-2xl md:text-3xl font-black text-gray-600" placeholder="?">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-170-2" onclick="window.check_170_2()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson170_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg -rotate-1">3</div>
                    <h3 class="text-2xl md:text-4xl font-black text-orange-800 uppercase tracking-wide">Bài 3. Cà phê Tây Nguyên</h3>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div class="space-y-6">
                        <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold">
                            Quan sát biểu đồ cột về diện tích cà phê (ha) các tỉnh Tây Nguyên và hoàn thành bảng:
                        </p>
                        <div class="grid grid-cols-2 gap-6 bg-orange-50 p-8 rounded-[2rem] border-2 border-orange-200">
                            <div class="flex flex-col gap-2">
                                <span class="text-xl md:text-2xl font-black text-orange-700 uppercase">Gia Lai:</span>
                                <input id="170-3-gl" type="text" class="h-14 text-center border-4 border-orange-300 rounded-xl outline-none text-2xl md:text-3xl font-black text-orange-800" placeholder="?">
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-xl md:text-2xl font-black text-orange-700 uppercase">Đắk Nông:</span>
                                <input id="170-3-dn" type="text" class="h-14 text-center border-4 border-orange-300 rounded-xl outline-none text-2xl md:text-3xl font-black text-orange-800" placeholder="?">
                            </div>
                            <div class="flex flex-col gap-2 col-span-2 mt-4 pt-4 border-t-4 border-orange-200">
                                <span class="text-xl md:text-2xl font-black text-rose-600 uppercase">Trung bình cộng 5 tỉnh:</span>
                                <input id="170-3-tb" type="text" class="h-20 text-center border-4 border-rose-400 rounded-3xl outline-none text-4xl md:text-5xl font-black text-rose-700 shadow-xl" placeholder="...">
                            </div>
                        </div>
                    </div>
                    <img src="assets/images/toan/toan_tap_2/98/" alt="Biểu đồ cột cà phê" class="w-full rounded-[2.5rem] shadow-2xl border-4 border-orange-100">
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-170-3" onclick="window.check_170_3()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson170_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500 relative overflow-hidden">
                <div class="flex items-center gap-6 mb-8">
                    <div class="w-20 h-20 flex-shrink-0 bg-rose-600 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-4xl font-black text-rose-800 uppercase tracking-wide">Bài 4. Biểu đồ quạt khán giả</h3>
                </div>
                
                <p class="text-2xl md:text-3xl text-gray-700 leading-relaxed font-bold mb-8">
                    Tính tỉ số phần trăm số khán giả ở mỗi khán đài (Tổng cộng <span class="text-rose-600">20 000 khán giả</span>):
                </p>

                <div class="flex flex-col lg:flex-row gap-10 items-center">
                    <img src="assets/images/toan/toan_tap_2/96/" alt="Biểu đồ quạt khán giả" class="w-full lg:w-1/2 rounded-[3rem] shadow-2xl">
                    <div class="w-full lg:w-1/2 grid grid-cols-1 gap-4 bg-rose-50 p-8 rounded-[2.5rem] border-2 border-rose-200">
                        <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md border-l-8 border-yellow-400">
                            <span class="text-xl md:text-2xl font-black text-gray-700">Khán đài A (6000):</span>
                            <span class="text-2xl md:text-3xl font-black text-yellow-600">30 %</span>
                        </div>
                        <div class="flex items-center justify-start p-4 bg-white rounded-2xl shadow-md border-l-8 border-orange-500">
                            <span class="text-xl md:text-2xl font-black text-gray-700">Khán đài B (8000):</span>
                            <div class="flex items-center gap-2">
                                <input id="170-4-b" type="text" class="w-24 h-12 text-center border-4 border-orange-300 rounded-xl outline-none text-xl md:text-2xl font-black text-orange-600" placeholder="?">
                                <span class="text-xl md:text-2xl font-black text-orange-600">%</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-start p-4 bg-white rounded-2xl shadow-md border-l-8 border-green-500">
                            <span class="text-xl md:text-2xl font-black text-gray-700">Khán đài C (3600):</span>
                            <div class="flex items-center gap-2">
                                <input id="170-4-c" type="text" class="w-24 h-12 text-center border-4 border-green-300 rounded-xl outline-none text-xl md:text-2xl font-black text-green-600" placeholder="?">
                                <span class="text-xl md:text-2xl font-black text-green-600">%</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-start p-4 bg-white rounded-2xl shadow-md border-l-8 border-blue-500">
                            <span class="text-xl md:text-2xl font-black text-gray-700">Khán đài D:</span>
                            <div class="flex items-center gap-2">
                                <input id="170-4-d" type="text" class="w-24 h-12 text-center border-4 border-blue-300 rounded-xl outline-none text-xl md:text-2xl font-black text-blue-600" placeholder="?">
                                <span class="text-xl md:text-2xl font-black text-blue-600">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-10">
                    <button id="btn-check-170-4" onclick="window.check_170_4()" class="w-24 h-24 bg-[#ff7b29] text-white rounded-3xl font-black text-4xl md:text-5xl shadow-[0_10px_0_0_#c45a1d] hover:translate-y-1 hover:shadow-[0_6px_0_0_#c45a1d] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Biểu đồ cột có các giá trị 4, 6, 8. Trung bình cộng là?", options: ["6", "5", "7", "18"], answer: 0 },
        { question: "Màu đỏ chiếm một nửa biểu đồ quạt. Tỉ lệ là?", options: ["50%", "25%", "75%", "100%"], answer: 0 },
        { question: "Một mốc ngôi sao = 5 người. 8 ngôi sao là bao nhiêu người?", options: ["40 người", "13 người", "35 người", "45 người"], answer: 0 },
        { question: "Biểu đồ quạt: A=20%, B=35%, C=15%. D chiếm bao nhiêu %?", options: ["30%", "40%", "25%", "20%"], answer: 0 },
        { question: "Trong 400 sản phẩm, có 80 lỗi. Tỉ lệ lỗi là?", options: ["20%", "10%", "25%", "15%"], answer: 0 },
        { question: "Ưu điểm lớn nhất của biểu đồ cột là gì?", options: ["Dễ so sánh số liệu", "Đẹp mắt", "Tiết kiệm giấy", "Dễ vẽ"], answer: 0 },
        { question: "Số liệu: 15, 25, 35. Số trung bình cộng là?", options: ["25", "20", "30", "15"], answer: 0 },
        { question: "Tổng các phần trên biểu đồ quạt luôn bằng:", options: ["100%", "50%", "75%", "200%"], answer: 0 },
        { question: "Một hình tròn tương ứng bao nhiêu độ trong toán học?", options: ["360 độ", "180 độ", "90 độ", "100 độ"], answer: 0 },
        { question: "Nếu 1/4 hình tròn là màu đỏ, thì tỉ lệ màu đỏ là:", options: ["25%", "20%", "30%", "50%"], answer: 0 },
        { question: "Biểu đồ tranh dùng 1 quả cam = 12kg. 5 quả cam nặng:", options: ["60 kg", "17 kg", "50 kg", "72 kg"], answer: 0 },
        { question: "Thống kê chiều cao: 1m40, 1m50, 1m60. TBC là:", options: ["1m50", "1m45", "1m55", "1m40"], answer: 0 },
        { question: "1 tấn rác có 200kg hữu cơ. Tỉ lệ hữu cơ là:", options: ["20%", "2%", "40%", "10%"], answer: 0 },
        { question: "Tỉ số của 30 và 120 là bao nhiêu %?", options: ["25%", "30%", "20%", "40%"], answer: 0 },
        { question: "Góc 90 độ trên biểu đồ tròn tương ứng bao nhiêu %?", options: ["25%", "30%", "50%", "20%"], answer: 0 },
        { question: "Sắp xếp 12, 5, 20, 8 giảm dần:", options: ["20, 12, 8, 5", "5, 8, 12, 20", "20, 12, 5, 8", "12, 20, 8, 5"], answer: 0 },
        { question: "Diện tích 1500ha, 2000ha, 2500ha. TBC là:", options: ["2000 ha", "1800 ha", "2200 ha", "2500 ha"], answer: 0 },
        { question: "Biểu đồ quạt: Chạy 40%, Đá bóng 30%. Tổng cộng:", options: ["70%", "80%", "10%", "50%"], answer: 0 },
        { question: "Cách tính trung bình cộng của 4 số n1, n2, n3, n4?", options: ["(n1+n2+n3+n4):4", "(n1+n2+n3+n4):2", "n1+n2+n3+n4", "(n1+n2+n3+n4)x4"], answer: 0 },
        { question: "Khán đài có 2000 người, khán đài A 600 người. Tỉ lệ A:", options: ["30%", "60%", "20%", "40%"], answer: 0 },
        { question: "Phần bảng biểu nào giúp theo dõi số liệu nhanh nhất?", options: ["Biểu đồ", "Văn bản", "Số lẻ", "Màu sắc"], answer: 0 },
        { question: "Một tuần bán được 700 trà sữa. TBC mỗi ngày bán:", options: ["100 ly", "70 ly", "50 ly", "200 ly"], answer: 0 },
        { question: "Biểu đồ tròn còn gọi là gì?", options: ["Biểu đồ quạt", "Biểu đồ cột", "Biểu đồ đường", "Biểu đồ tranh"], answer: 0 },
        { question: "Số liệu 0, 10, 20. TBC là:", options: ["10", "15", "0", "30"], answer: 0 },
        { question: "Viết số 'Một trăm linh năm nghìn' bằng số:", options: ["105 000", "100 500", "150 000", "100 005"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_170_1 = () => {
    const v = (id) => document.getElementById(id).value.trim();
    let score = 0;
    const ansV = v('170-1-v');
    const ansX = v('170-1-x');
    const ansTH = v('170-1-th');
    const ansTG = v('170-1-tg');

    if (ansV === '14') score++;
    if (ansX === '12') score++;
    if (ansTH === '11') score++;
    if (ansTG === '9') score++;

    const isCorrect = score === 4;
    const rightAnswer = "Vàng: 14, Xanh: 12, Thang: 11, Tam giác: 9";
    const studentAnswer = `Vàng: ${ansV || '?'}, Xanh: ${ansX || '?'}, Thang: ${ansTH || '?'}, Tam giác: ${ansTG || '?'}`;
    const guidance = "Em hãy đếm kỹ số lượng mỗi loại hình trong biểu đồ tranh nhé. Lưu ý quan sát cả màu sắc và hình dạng của từng hình.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Quan sát biểu đồ tranh, ta đếm được:<br>
        - Theo màu sắc: Đỏ có 16 hình, Vàng có 14 hình, Xanh có 12 hình.<br>
        - Theo hình dạng: Hình tròn có 15 hình, Hình thang có 11 hình, Hình tam giác có 9 hình.<br>
        Vậy các số cần điền là: Vàng: 14; Xanh: 12; Hình thang: 11; Hình tam giác: 9.<br>
        Em có đôi mắt quan sát rất tinh tường!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 1. Phân loại hình học", Math.round(score / 4 * 100), "btn-check-170-1", 0, 4, score);
    }
};

window.check_170_2 = () => {
    const v = (id) => document.getElementById(id).value.trim();
    const ansB = v('170-2-b');
    const ansC = v('170-2-c');
    const ansD = v('170-2-d');
    const ansCL = v('170-2-cl');

    let score = 0;
    if (ansB === '150') score++;
    if (ansC === '105') score++;
    if (ansD === '120') score++;
    if (ansCL === '530') score++;

    const isCorrect = score === 4;
    const rightAnswer = "Kim loại: 150, Giấy: 105, Nhựa: 120, Còn lại: 530";
    const studentAnswer = `KL: ${ansB || '?'}, Giấy: ${ansC || '?'}, Nhựa: ${ansD || '?'}, Còn lại: ${ansCL || '?'}`;
    const guidance = "Em hãy điền các số liệu đã cho vào bảng. Đối với phần 'Còn lại', em lấy 1000 kg (1 tấn) trừ đi tổng khối lượng của 4 loại rác đã biết nhé!";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Điền các số liệu bài cho vào bảng: Kim loại: 150 kg; Giấy: 105 kg; Nhựa: 120 kg.<br>
        Đổi 1 tấn = 1000 kg.<br>
        Tổng khối lượng 4 loại rác đã biết là: 95 + 150 + 105 + 120 = 470 (kg).<br>
        Khối lượng rác còn lại là: 1000 - 470 = 530 (kg).<br>
        Các số cần điền lần lượt là: 150, 105, 120, 530.<br>
        Em làm bài rất tốt, hãy tiếp tục phát huy nhé!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 2. Phân loại rác thải", Math.round(score / 4 * 100), "btn-check-170-2", 0, 4, score);
    }
};

window.check_170_3 = () => {
    const gl = document.getElementById('170-3-gl').value.trim().replace(/ /g, '');
    const dn = document.getElementById('170-3-dn').value.trim().replace(/ /g, '');
    const tb = document.getElementById('170-3-tb').value.trim().replace(/ /g, '');

    let score = 0;
    if (gl === '75000') score++;
    if (dn === '115000') score++;
    if (tb === '132500') score++;

    const isCorrect = score === 3;
    const rightAnswer = "Gia Lai: 75000, Đắk Nông: 115000, TBC: 132500";
    const studentAnswer = `GL: ${gl || '?'}, ĐN: ${dn || '?'}, TBC: ${tb || '?'}`;
    const guidance = "Em hãy nhìn độ cao của các cột tương ứng với các tỉnh Gia Lai và Đắk Nông để tìm số liệu. Để tính trung bình cộng, em cộng diện tích của cả 5 tỉnh lại rồi chia cho 5.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Dựa vào biểu đồ cột, ta có số liệu:<br>
        - Gia Lai: 75 000 ha.<br>
        - Đắk Nông: 115 000 ha.<br>
        Tổng diện tích cà phê của 5 tỉnh là:<br>
        210 000 + 75 000 + 115 000 + 172 500 + 90 000 = 662 500 (ha).<br>
        Trung bình cộng diện tích cà phê của mỗi tỉnh là:<br>
        662 500 : 5 = 132 500 (ha).<br>
        Đáp số: Gia Lai: 75 000; Đắk Nông: 115 000; TBC: 132 500.<br>
        Tuyệt vời! Em đã hoàn thành bài tập rất xuất sắc.
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 3. Cà phê Tây Nguyên", Math.round(score / 3 * 100), "btn-check-170-3", 0, 3, score);
    }
};

window.check_170_4 = () => {
    const b = document.getElementById('170-4-b').value.trim();
    const c = document.getElementById('170-4-c').value.trim();
    const d = document.getElementById('170-4-d').value.trim();

    let score = 0;
    if (b === '40') score++;
    if (c === '18') score++;
    if (d === '12') score++;

    const isCorrect = score === 3;
    const rightAnswer = "Khán đài B: 40%, C: 18%, D: 12%";
    const studentAnswer = `B: ${b || '?'}, C: ${c || '?'}, D: ${d || '?'}`;
    const guidance = "Tỉ số phần trăm = (Số khán giả : Tổng số khán giả) × 100. Em hãy tính lần lượt cho khán đài B và C. Riêng khán đài D, em có thể lấy 100% trừ đi tổng tỉ lệ phần trăm của A, B, C.";
    const solution = `
        <b>Lời giải chi tiết:</b><br>
        Tổng số khán giả là: 20 000 người.<br>
        - Tỉ số phần trăm khán giả ở khán đài B là: 8 000 : 20 000 = 0,4 = 40%.<br>
        - Tỉ số phần trăm khán giả ở khán đài C là: 3 600 : 20 000 = 0,18 = 18%.<br>
        - Số khán giả ở khán đài D là: 20 000 - (6 000 + 8 000 + 3 600) = 2 400 (người).<br>
        - Tỉ số phần trăm khán giả ở khán đài D là: 2 400 : 20 000 = 0,12 = 12%.<br>
        (Hoặc: 100% - 30% - 40% - 18% = 12%)<br>
        Đáp số: B: 40%; C: 18%; D: 12%.<br>
        Kỹ năng tính toán của em thật đáng nể!
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) {
        window.submitMathLesson("Bài 4. Biểu đồ quạt", Math.round(score / 3 * 100), "btn-check-170-4", 0, 3, score);
    }
};

