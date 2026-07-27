export const lesson171 = {
    period: "171",
    title: "BÀI 74: ÔN TẬP MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT (TIẾT 2)",
    topic: "Ôn tập khả năng xảy ra và xác suất",
    week: "34",

    practice: `
        <div class="space-y-10 pb-10">

            <!-- Bài 1: Gieo hai xúc xắc -->
            <div id="lesson171_b1" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-blue-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">1</div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Chọn khả năng xảy ra trong mỗi trường hợp</h3>
                </div>
                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Gieo hai xúc xắc. Chọn khả năng xảy ra (Chắc chắn, Có thể, Không thể) trong mỗi trường hợp sau:
                    </p>
                    <img src="assets/images/toan/toan_tap_2/171/171-1-xuc-xac.png" class="max-w-[250px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Hai xúc xắc">

                    <div class="space-y-4 border-t border-blue-200 pt-4 font-bold text-lg">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>a) Tổng số chấm ở hai mặt trên của hai xúc xắc là số chẵn:</span>
                            <select id="171-1-1" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                <option value="">--Chọn--</option>
                                <option value="Chắc chắn">Chắc chắn</option>
                                <option value="Có thể">Có thể</option>
                                <option value="Không thể">Không thể</option>
                            </select>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>b) Tổng số chấm ở hai mặt trên của hai xúc xắc là 13:</span>
                            <select id="171-1-2" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                <option value="">--Chọn--</option>
                                <option value="Chắc chắn">Chắc chắn</option>
                                <option value="Có thể">Có thể</option>
                                <option value="Không thể">Không thể</option>
                            </select>
                        </div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>c) Tổng số chấm ở hai mặt trên của hai xúc xắc là số bé hơn 13 và lớn hơn 1:</span>
                            <select id="171-1-3" class="px-4 py-2 border-2 border-blue-300 rounded-xl font-bold bg-white outline-none">
                                <option value="">--Chọn--</option>
                                <option value="Chắc chắn">Chắc chắn</option>
                                <option value="Có thể">Có thể</option>
                                <option value="Không thể">Không thể</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-171-1').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-171-1" onclick="window.check_171_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-171-1" class="hidden bg-blue-50 p-4 rounded-2xl border border-blue-200 text-lg font-bold text-blue-900 space-y-1">
                    <p>a) Có thể (có thể là chẵn như 1+1=2, hoặc lẻ như 1+2=3)</p>
                    <p>b) Không thể (tổng tối đa của 2 xúc xắc là 6 + 6 = 12)</p>
                    <p>c) Chắc chắn (tổng 2 xúc xắc luôn nằm trong khoảng từ 2 đến 12)</p>
                </div>
            </div>

            <!-- Bài 2: Rô-bốt bốc 3 quả bóng -->
            <div id="lesson171_b2" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-emerald-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">2</div>
                    <h3 class="text-xl md:text-2xl font-black text-emerald-700">Bài 2. Các khả năng xảy ra khi bốc 3 quả bóng</h3>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Trong hộp có <span class="font-black text-rose-600">2 quả bóng đỏ</span> và <span class="font-black text-blue-600">3 quả bóng xanh</span>. Nếu Rô-bốt lấy ra từ trong hộp cùng một lúc 3 quả bóng thì có các khả năng nào về màu của 3 quả bóng đó có thể xảy ra?
                    </p>
                    <img src="assets/images/toan/toan_tap_2/171/171-2-boc-bong.png" class="max-w-[350px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Rô-bốt lấy bóng">
                    
                    <div class="space-y-3 font-bold text-lg border-t border-emerald-200 pt-4">
                        <p class="text-emerald-900 font-black">Chọn tất cả các khả năng có thể xảy ra (bấm chọn):</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <label class="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-emerald-200 cursor-pointer">
                                <input type="checkbox" id="chk-171-2-1" class="w-5 h-5 accent-emerald-600">
                                <span>2 quả bóng đỏ và 1 quả bóng xanh</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-emerald-200 cursor-pointer">
                                <input type="checkbox" id="chk-171-2-2" class="w-5 h-5 accent-emerald-600">
                                <span>1 quả bóng đỏ và 2 quả bóng xanh</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-emerald-200 cursor-pointer">
                                <input type="checkbox" id="chk-171-2-3" class="w-5 h-5 accent-emerald-600">
                                <span>3 quả bóng xanh</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-emerald-200 cursor-pointer">
                                <input type="checkbox" id="chk-171-2-4" class="w-5 h-5 accent-emerald-600">
                                <span>3 quả bóng đỏ</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-171-2').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-171-2" onclick="window.check_171_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-171-2" class="hidden bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-lg font-bold text-emerald-900 space-y-1">
                    <p>Vì chỉ có 2 quả bóng đỏ nên KHÔNG THỂ lấy ra 3 quả bóng đỏ.</p>
                    <p>Các khả năng có thể xảy ra là:</p>
                    <p>- 2 quả đỏ và 1 quả xanh</p>
                    <p>- 1 quả đỏ và 2 quả xanh</p>
                    <p>- 3 quả xanh</p>
                </div>
            </div>

            <!-- Bài 3: Bảng kiểm kê xúc xắc của Việt -->
            <div id="lesson171_b3" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-amber-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">3</div>
                    <h3 class="text-xl md:text-2xl font-black text-amber-700">Bài 3. Kết quả gieo xúc xắc của Việt</h3>
                </div>
                <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Việt gieo xúc xắc nhiều lần rồi ghi lại kết quả nhận được như bảng dưới đây:
                    </p>
                    <img src="assets/images/toan/toan_tap_2/171/171-3-bang-xuc-xac.png" class="max-w-[550px] w-full mx-auto rounded-2xl shadow-lg border-4 border-white" alt="Bảng kết quả gieo xúc xắc">
                    
                    <div class="space-y-4 border-t border-amber-200 pt-4 font-bold text-lg">
                        <div class="flex items-center gap-3 flex-wrap">
                            <span>a) Mặt 5 chấm đã xuất hiện bao nhiêu lần?</span>
                            <input id="171-3-1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                            <span>lần.</span>
                        </div>
                        <div class="space-y-2 border-t border-amber-200 pt-3">
                            <p class="text-amber-900 font-black">b) Mặt nào xuất hiện nhiều lần nhất, mặt nào ít lần nhất?</p>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>- Nhiều lần nhất: Mặt</span>
                                <input id="171-3-2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>chấm.</span>
                            </div>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>- Ít lần nhất: Mặt</span>
                                <input id="171-3-3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-16 h-10 text-center border-2 border-amber-300 rounded-xl font-bold outline-none" placeholder="?">
                                <span>chấm.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-171-3').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-171-3" onclick="window.check_171_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-171-3" class="hidden bg-amber-50 p-4 rounded-2xl border border-amber-200 text-lg font-bold text-amber-900 space-y-1">
                    <p>a) Mặt 5 chấm xuất hiện: <span class="text-emerald-700">6 lần</span></p>
                    <p>b) Nhiều lần nhất: <span class="text-emerald-700">Mặt 4 chấm (7 lần)</span>; Ít lần nhất: <span class="text-emerald-700">Mặt 1 chấm (3 lần)</span></p>
                    <p>c) Các mặt xuất hiện bằng nhau: Mặt 6 và 3 (4 lần); Mặt 5 và 2 (6 lần).</p>
                </div>
            </div>

            <!-- Bài 4: Gieo hai đồng xu 25 lần -->
            <div id="lesson171_b4" class="ltTrang bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-t-[10px] border-rose-500 space-y-6">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-12 h-12 md:w-14 md:h-14 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow">4</div>
                    <h3 class="text-xl md:text-2xl font-black text-rose-700">Bài 4. Mai gieo hai đồng xu 25 lần</h3>
                </div>
                <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-lg md:text-xl leading-relaxed text-gray-800">
                        Mai gieo đồng thời hai đồng xu 25 lần, đếm số lần lặp lại kết quả: Hai mặt sấp (7 lần), Hai mặt ngửa (6 lần), Một mặt sấp, một mặt ngửa (12 lần).
                    </p>

                    <div class="space-y-4 border-t border-rose-200 pt-4 font-bold text-lg">
                        <p class="font-black text-rose-900 text-xl">a) Khả năng nào nhiều nhất, khả năng nào ít nhất?</p>
                        <div class="space-y-2">
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>- Nhiều nhất:</span>
                                <select id="171-4-1" class="px-4 py-2 border-2 border-rose-300 rounded-xl font-bold bg-white outline-none">
                                    <option value="">--Chọn--</option>
                                    <option value="Hai mặt sấp">Hai mặt sấp</option>
                                    <option value="Hai mặt ngửa">Hai mặt ngửa</option>
                                    <option value="Một mặt sấp, một mặt ngửa">Một mặt sấp, một mặt ngửa</option>
                                </select>
                            </div>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span>- Ít nhất:</span>
                                <select id="171-4-2" class="px-4 py-2 border-2 border-rose-300 rounded-xl font-bold bg-white outline-none">
                                    <option value="">--Chọn--</option>
                                    <option value="Hai mặt sấp">Hai mặt sấp</option>
                                    <option value="Hai mặt ngửa">Hai mặt ngửa</option>
                                    <option value="Một mặt sấp, một mặt ngửa">Một mặt sấp, một mặt ngửa</option>
                                </select>
                            </div>
                        </div>

                        <p class="font-black text-rose-900 text-xl border-t border-rose-200 pt-3">b) Tỉ số phần trăm của mỗi khả năng so với tổng 25 lần:</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hai mặt sấp:</span>
                                <input id="171-4-p1" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Hai mặt ngửa:</span>
                                <input id="171-4-p2" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span>Một sấp, một ngửa:</span>
                                <input id="171-4-p3" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" class="w-20 h-10 text-center border-2 border-rose-300 rounded-xl font-bold outline-none" placeholder="?%">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative flex justify-end items-center mt-4 gap-3">
                    <button onclick="document.getElementById('sol-171-4').classList.toggle('hidden')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow active:scale-95 transition-all">Hiện bài giải</button>
                    <button id="btn-check-171-4" onclick="window.check_171_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
                <div id="sol-171-4" class="hidden bg-rose-50 p-4 rounded-2xl border border-rose-200 text-lg font-bold text-rose-900 space-y-1">
                    <p>a) Nhiều nhất: Một mặt sấp, một mặt ngửa (12 lần). Ít nhất: Hai mặt ngửa (6 lần).</p>
                    <p>b) Hai mặt sấp: 7 : 25 × 100 = <span class="text-emerald-700">28%</span></p>
                    <p>Hai mặt ngửa: 6 : 25 × 100 = <span class="text-emerald-700">24%</span></p>
                    <p>Một sấp, một ngửa: 12 : 25 × 100 = <span class="text-emerald-700">48%</span></p>
                </div>
            </div>

        </div>
    `,

    quizPool: [
        { question: "Tổng số chấm 2 xúc xắc là số chẵn thuộc khả năng nào?", options: ["Có thể", "Chắc chắn", "Không thể", "Không biết"], answer: 0 },
        { question: "Tổng số chấm 2 xúc xắc là 13 thuộc khả năng nào?", options: ["Không thể", "Có thể", "Chắc chắn", "Hiếm khi"], answer: 0 },
        { question: "Tổng số chấm 2 xúc xắc bé hơn 13 và lớn hơn 1 thuộc khả năng nào?", options: ["Chắc chắn", "Có thể", "Không thể", "Đôi khi"], answer: 0 },
        { question: "Trong hộp có 2 đỏ 3 xanh, bốc 3 quả thì KHÔNG THỂ xảy ra trường hợp nào?", options: ["3 quả đỏ", "3 quả xanh", "2 đỏ 1 xanh", "1 đỏ 2 xanh"], answer: 0 },
        { question: "Mặt 5 chấm xuất hiện bao nhiêu lần trên bảng thống kê xúc xắc?", options: ["6 lần", "7 lần", "4 lần", "5 lần"], answer: 0 },
        { question: "Mặt nào xuất hiện nhiều lần nhất trên bảng xúc xắc?", options: ["Mặt 4 chấm (7 lần)", "Mặt 5 chấm", "Mặt 6 chấm", "Mặt 2 chấm"], answer: 0 },
        { question: "Mặt nào xuất hiện ít lần nhất trên bảng xúc xắc?", options: ["Mặt 1 chấm (3 lần)", "Mặt 6 chấm", "Mặt 3 chấm", "Mặt 2 chấm"], answer: 0 },
        { question: "Gieo 2 đồng xu 25 lần, kết quả nào xuất hiện nhiều nhất?", options: ["Một mặt sấp, một mặt ngửa (12 lần)", "Hai mặt sấp", "Hai mặt ngửa", "Bằng nhau"], answer: 0 },
        { question: "Tỉ số phần trăm của 'Hai mặt sấp' (7/25) là?", options: ["28%", "24%", "48%", "30%"], answer: 0 },
        { question: "Tỉ số phần trăm của 'Hai mặt ngửa' (6/25) là?", options: ["24%", "28%", "48%", "25%"], answer: 0 },
        { question: "Tỉ số phần trăm của 'Một mặt sấp, một mặt ngửa' (12/25) là?", options: ["48%", "50%", "40%", "28%"], answer: 0 },
        { question: "Hai mặt nào có số lần xuất hiện bằng nhau trên bảng xúc xắc?", options: ["Mặt 6 và 3 (4 lần), Mặt 5 và 2 (6 lần)", "Mặt 1 và 4", "Mặt 2 và 3", "Không có mặt nào"], answer: 0 },
        { question: "Tối đa tổng số chấm của 2 con xúc xắc là bao nhiêu?", options: ["12", "13", "14", "6"], answer: 0 },
        { question: "Tối thiểu tổng số chấm của 2 con xúc xắc là bao nhiêu?", options: ["2", "1", "0", "3"], answer: 0 },
        { question: "Tổng tỉ số phần trăm của 3 khả năng gieo đồng xu là?", options: ["100%", "90%", "95%", "80%"], answer: 0 }
    ]
};

window.lesson171 = lesson171;

window.check_171_1 = function() {
    const checks = [
        {id:'171-1-1', ans:['Có thể']},
        {id:'171-1-2', ans:['Không thể']},
        {id:'171-1-3', ans:['Chắc chắn']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        if (c.ans.includes(el.value)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) Có thể<br>b) Không thể<br>c) Chắc chắn",
        "",
        "Gợi ý: a) Có thể chẵn hoặc lẻ. b) Tổng tối đa là 6+6=12 nên không thể là 13. c) Tổng luôn từ 2 đến 12 nên chắc chắn.",
        "a) Có thể.<br>b) Không thể.<br>c) Chắc chắn.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Khả năng gieo xúc xắc", Math.round(correct/checks.length*100), "btn-check-171-1", 0, checks.length, correct);
};

window.check_171_2 = function() {
    const c1 = document.getElementById('chk-171-2-1')?.checked;
    const c2 = document.getElementById('chk-171-2-2')?.checked;
    const c3 = document.getElementById('chk-171-2-3')?.checked;
    const c4 = document.getElementById('chk-171-2-4')?.checked;
    const isCorrect = (c1 && c2 && c3 && !c4);
    window.showMathFeedback(isCorrect,
        "Các khả năng có thể xảy ra: 2 đỏ 1 xanh; 1 đỏ 2 xanh; 3 xanh",
        "",
        "Gợi ý: Chỉ có 2 quả bóng đỏ nên không thể lấy ra 3 quả bóng đỏ.",
        "Chỉ có 2 bóng đỏ nên KHÔNG THỂ bốc được 3 bóng đỏ.<br>Các trường hợp đúng: 2 đỏ 1 xanh, 1 đỏ 2 xanh, 3 xanh.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Bốc bóng từ hộp", isCorrect?100:0, "btn-check-171-2", 0, 1, isCorrect?1:0);
};

window.check_171_3 = function() {
    const checks = [
        {id:'171-3-1', ans:['6']},
        {id:'171-3-2', ans:['4']},
        {id:'171-3-3', ans:['1']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim();
        if (c.ans.includes(v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) 6 lần<br>b) Nhiều nhất: Mặt 4 chấm; Ít nhất: Mặt 1 chấm",
        "",
        "Gợi ý: Đếm số vạch kiểm đếm từng mặt. Mặt 4 có 7 lần (nhiều nhất), Mặt 1 có 3 lần (ít nhất).",
        "a) Mặt 5 có 6 lần.<br>b) Nhiều nhất: Mặt 4 chấm. Ít nhất: Mặt 1 chấm.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Thống kê gieo xúc xắc", Math.round(correct/checks.length*100), "btn-check-171-3", 0, checks.length, correct);
};

window.check_171_4 = function() {
    const checks = [
        {id:'171-4-1', ans:['Một mặt sấp, một mặt ngửa']},
        {id:'171-4-2', ans:['Hai mặt ngửa']},
        {id:'171-4-p1', ans:['28%','28']},
        {id:'171-4-p2', ans:['24%','24']},
        {id:'171-4-p3', ans:['48%','48']},
    ];
    let correct = 0;
    checks.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        const v = el.value.trim().replace(/\s/g,'');
        if (c.ans.some(a => a.replace(/\s/g,'') === v)) { el.classList.add('bg-green-100','border-green-500'); el.classList.remove('bg-red-100','border-red-500'); correct++; }
        else { el.classList.add('bg-red-100','border-red-500'); el.classList.remove('bg-green-100','border-green-500'); }
    });
    const isCorrect = correct === checks.length;
    window.showMathFeedback(isCorrect,
        "a) Nhiều nhất: Một sấp, một ngửa; Ít nhất: Hai mặt ngửa<br>b) Sấp-Sấp: 28%, Ngửa-Ngửa: 24%, Sấp-Ngửa: 48%",
        "",
        "Gợi ý: Tỉ số % = số lần : 25 × 100%. (7/25=28%, 6/25=24%, 12/25=48%).",
        "a) Nhiều nhất: Một sấp một ngửa (12 lần). Ít nhất: Hai mặt ngửa (6 lần).<br>b) Sấp-Sấp: 28%, Ngửa-Ngửa: 24%, Sấp-Ngửa: 48%.<br>Chúc mừng em!"
    );
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. Gieo hai đồng xu", Math.round(correct/checks.length*100), "btn-check-171-4", 0, checks.length, correct);
};

// import './logic.js';
