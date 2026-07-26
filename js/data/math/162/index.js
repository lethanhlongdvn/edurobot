export const lesson162 = {
    period: "162",
    title: "BÀI 71. ÔN TẬP HÌNH HỌC (TIẾT 1)",
    topic: "Luyện tập (Trang 113)",
    week: "33",

    content: `
        <div class="space-y-10">
            <div class="bg-blue-50 p-8 rounded-[2rem] border-4 border-blue-200 shadow-lg text-xl md:text-3xl">
                <h3 class="text-2xl md:text-3xl font-black text-blue-700 mb-6 uppercase tracking-wider text-center">Ôn tập công thức hình học (Phần 1)</h3>
                <p class="text-xl md:text-3xl text-gray-700 leading-relaxed font-black uppercase mb-8 border-b-4 border-blue-100 pb-2">
                    Kiến thức cần nhớ:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500">
                        <h4 class="font-black text-blue-600 mb-4 uppercase hover:scale-105 transition-transform">1. Hình chữ nhật & Hình vuông</h4>
                        <ul class="space-y-3 text-xl md:text-2xl font-bold">
                            <li class="flex items-center gap-2">• Chu vi HCN: <span class="text-blue-600">(a + b) × 2</span></li>
                            <li class="flex items-center gap-2">• Diện tích HCN: <span class="text-blue-600">a × b</span></li>
                            <li class="flex items-center gap-2">• Chu vi HV: <span class="text-blue-600">a × 4</span></li>
                            <li class="flex items-center gap-2">• Diện tích HV: <span class="text-blue-600">a × a</span></li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-orange-500">
                        <h4 class="font-black text-orange-600 mb-4 uppercase hover:scale-105 transition-transform">2. Hình tam giác & Hình thang</h4>
                        <ul class="space-y-3 text-xl md:text-2xl font-bold">
                            <li class="flex items-center gap-2">• Diện tích Tam giác: <span class="text-orange-600">(a × h) : 2</span></li>
                            <li class="flex items-center gap-2">• Diện tích Hình thang: <span class="text-orange-600">(a + b) × h : 2</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-12 pb-10">
            <!-- Bài 1 -->
            <div id="lesson162_b1" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-blue-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-blue-700 uppercase tracking-wide">Bài 1. Chu vi và diện tích hình chữ nhật, hình vuông</h3>
                </div>
                
                <div class="space-y-10">
                    <div class="p-8 bg-blue-50 rounded-[2.5rem] border-4 border-blue-200">
                        <p class="text-2xl md:text-3xl font-black text-blue-800 mb-6 uppercase">a) Hoàn thành công thức:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="bg-white p-6 rounded-3xl shadow-md border-2 border-blue-100 flex flex-col items-center gap-4">
                                <img src="assets/images/toan/toan_tap_2/98/" class="h-32 object-contain mb-2" alt="Hình chữ nhật">
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>P = (</span>
                                    <input id="162-1-1" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                    <span>+</span>
                                    <input id="162-1-2" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                    <span>) × 2</span>
                                </div>
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>S =</span>
                                    <input id="162-1-3" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                    <span>×</span>
                                    <input id="162-1-4" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-3xl shadow-md border-2 border-blue-100 flex flex-col items-center gap-4">
                                <img src="assets/images/toan/toan_tap_2/99/" class="h-32 object-contain mb-2" alt="Hình vuông">
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>P =</span>
                                    <input id="162-1-5" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                    <span>× 4</span>
                                </div>
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>S =</span>
                                    <input id="162-1-6" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                    <span>×</span>
                                    <input id="162-1-7" class="w-12 h-10 text-center border-b-4 border-blue-500 outline-none" placeholder="?">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 bg-gray-50 rounded-[2.5rem] border-4 border-gray-200">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 mb-6 uppercase">b) Giải toán:</p>
                        <p class="text-2xl md:text-3xl font-bold leading-relaxed mb-8 italic">
                            "Một mảnh vườn trồng hoa dạng hình vuông có cạnh 60 m, một mảnh vườn trồng rau dạng hình chữ nhật có chiều dài gấp đôi chiều rộng. Biết chu vi của hai mảnh vườn bằng nhau."
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                            <div class="flex items-center gap-4 text-2xl md:text-3xl font-black">
                                <span class="text-blue-600">- Diện tích vườn hoa:</span>
                                <input id="162-1-8" class="w-32 h-14 text-center border-4 border-blue-400 rounded-xl outline-none" placeholder="...">
                                <span class="text-xl md:text-2xl">m²</span>
                            </div>
                            <div class="flex items-center gap-4 text-2xl md:text-3xl font-black">
                                <span class="text-green-600">- Diện tích vườn rau:</span>
                                <input id="162-1-9" class="w-32 h-14 text-center border-4 border-green-400 rounded-xl outline-none" placeholder="...">
                                <span class="text-xl md:text-2xl">m²</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-162-1" onclick="window.check_162_1()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="lesson162_b2" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-orange-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-orange-700 uppercase tracking-wide">Bài 2. Diện tích hình tam giác, hình thang</h3>
                </div>
                
                <div class="space-y-10">
                    <div class="p-8 bg-orange-50 rounded-[2.5rem] border-4 border-orange-200">
                        <p class="text-2xl md:text-3xl font-black text-orange-800 mb-6 uppercase">a) Hoàn thành công thức:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="bg-white p-6 rounded-3xl shadow-md border-2 border-orange-100 flex flex-col items-center gap-4">
                                <img src="assets/images/toan/toan_tap_2/98/" class="h-32 object-contain mb-2" alt="Hình tam giác">
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>S = (</span>
                                    <input id="162-2-1" class="w-10 border-b-4 border-orange-500 text-center outline-none" placeholder="?">
                                    <span>×</span>
                                    <input id="162-2-2" class="w-10 border-b-4 border-orange-500 text-center outline-none" placeholder="?">
                                    <span>) / 2</span>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-3xl shadow-md border-2 border-orange-100 flex flex-col items-center gap-4">
                                <img src="assets/images/toan/toan_tap_2/99/" class="h-32 object-contain mb-2" alt="Hình thang">
                                <div class="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl font-black">
                                    <span>S = (</span>
                                    <input id="162-2-3" class="w-10 border-b-4 border-orange-500 text-center outline-none" placeholder="?">
                                    <span>+</span>
                                    <input id="162-2-4" class="w-10 border-b-4 border-orange-500 text-center outline-none" placeholder="?">
                                    <span>) ×</span>
                                    <input id="162-2-5" class="w-10 border-b-4 border-orange-500 text-center outline-none" placeholder="?">
                                    <span>/ 2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 bg-gray-50 rounded-[2.5rem] border-4 border-gray-200">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 mb-6 uppercase">b) Giải toán:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div class="space-y-6">
                                <p class="text-2xl md:text-3xl font-bold leading-relaxed italic text-blue-900">
                                    "Có một mảnh đất dạng hình thang với kích thước như hình bên."
                                </p>
                                <div class="space-y-4">
                                    <div class="flex flex-wrap items-center gap-2 text-xl md:text-2xl font-black">
                                        <span>- S tam giác ACD:</span>
                                        <input id="162-2-6" class="w-24 h-12 text-center border-4 border-orange-400 rounded-xl outline-none" placeholder="...">
                                        <span>m²</span>
                                    </div>
                                    <div class="flex flex-wrap items-center gap-2 text-xl md:text-2xl font-black">
                                        <span>- S hình thang ABCD:</span>
                                        <input id="162-2-7" class="w-24 h-12 text-center border-4 border-orange-400 rounded-xl outline-none" placeholder="...">
                                        <span>m²</span>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/images/toan/toan_tap_2/109/" class="w-full h-auto rounded-2xl shadow-xl border-4 border-white" alt="Mảnh đất">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-162-2" onclick="window.check_162_2()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="lesson162_b3" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-green-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-wide">Bài 3. Hình tròn</h3>
                </div>
                
                <div class="space-y-10">
                    <div class="p-8 bg-green-50 rounded-[2.5rem] border-4 border-green-200">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div class="space-y-8">
                                <p class="text-2xl md:text-3xl font-black text-green-800 uppercase">a) Công thức:</p>
                                <div class="space-y-4 text-xl md:text-2xl font-black">
                                    <div class="flex items-center gap-2">
                                        <span>C = d × 3,14 =</span>
                                        <input id="162-3-1" class="w-14 border-b-4 border-green-500 text-center outline-none" placeholder="r">
                                        <span>× 2 × 3,14</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span>S =</span>
                                        <input id="162-3-2" class="w-12 border-b-4 border-green-500 text-center outline-none" placeholder="r">
                                        <span>×</span>
                                        <input id="162-3-3" class="w-12 border-b-4 border-green-500 text-center outline-none" placeholder="r">
                                        <span>× 3,14</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <img src="assets/images/toan/toan_tap_2/162/" class="h-40 object-contain" alt="Hình tròn">
                            </div>
                        </div>
                    </div>

                    <div class="p-8 bg-gray-50 rounded-[2.5rem] border-4 border-gray-200">
                        <p class="text-2xl md:text-3xl font-black text-gray-800 mb-6 uppercase">b) Giải toán:</p>
                        <div class="flex flex-col md:flex-row gap-8 items-center">
                            <div class="flex-1 space-y-6">
                                <p class="text-2xl md:text-3xl font-bold leading-relaxed italic text-green-900">
                                    "Một đĩa sứ trang trí có dạng hình tròn đường kính 24 cm. Tính diện tích của chiếc đĩa đó."
                                </p>
                                <div class="flex items-center gap-4 text-2xl md:text-3xl font-black">
                                    <span class="text-green-600">S đĩa:</span>
                                    <input id="162-3-4" class="w-32 h-14 text-center border-4 border-green-400 rounded-xl outline-none" placeholder="...">
                                    <span>cm²</span>
                                </div>
                            </div>
                            <img src="assets/images/toan/toan_tap_2/103/" class="h-48 object-contain rounded-full shadow-lg border-4 border-white" alt="Đĩa">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-162-3" onclick="window.check_162_3()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="lesson162_b4" class="bg-white p-10 rounded-[3rem] shadow-2xl border-t-[12px] border-rose-500">
                <div class="flex items-center gap-6 mb-10">
                    <div class="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg">4</div>
                    <h3 class="text-2xl md:text-3xl font-black text-rose-700 uppercase tracking-wide">Bài 4. Diện tích còn lại</h3>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div class="space-y-8">
                        <p class="text-2xl md:text-3xl font-bold leading-relaxed italic text-rose-900">
                            "Một tờ bìa hình vuông có độ dài cạnh là 20 cm. Người ta cắt ra một hình tròn to nhất có thể. Tính diện tích phần còn lại của tờ bìa."
                        </p>
                        <div class="bg-rose-50 p-8 rounded-3xl border-4 border-rose-200">
                            <span class="text-2xl md:text-3xl font-black text-rose-900 block mb-4 uppercase">Diện tích phần còn lại:</span>
                            <div class="flex items-center gap-4 text-3xl md:text-4xl font-black">
                                <input id="162-4-1" class="w-40 h-16 text-center border-4 border-rose-400 rounded-2xl outline-none shadow-xl" placeholder="...">
                                <span class="text-rose-600">cm²</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center bg-white p-6 rounded-[3rem] border-2 border-rose-100 shadow-inner">
                        <img src="assets/images/toan/toan_tap_2/96/" class="w-full max-w-[300px] object-contain drop-shadow-2xl" alt="Bình minh">
                    </div>
                </div>

                <div class="flex justify-end mt-12">
                    <button id="btn-check-162-4" onclick="window.check_162_4()" class="w-20 h-20 bg-[#ff7b29] text-white rounded-[2rem] font-black text-4xl md:text-5xl shadow-xl hover:brightness-110 active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { question: "Chu vi hình chữ nhật có dài a, rộng b là:", options: ["(a + b) × 2", "a + b + 2", "a × b", "(a + b) × 4"], answer: 0 },
        { question: "Diện tích hình vuông có cạnh a là:", options: ["a × a", "a × 4", "a × 2", "a + a"], answer: 0 },
        { question: "Chu vi hình tròn có bán kính r là:", options: ["r × 2 × 3,14", "r × r × 3,14", "r × 3,14", "r + 3,14 × 2"], answer: 0 },
        { question: "Diện tích hình tam giác có đáy a, cao h là:", options: ["(a × h) : 2", "a × h", "a + h", "(a + h) : 2"], answer: 0 },
        { question: "Diện tích hình thang có đáy a, b và cao h là:", options: ["(a + b) × h : 2", "(a + b) × h", "a + b × h : 2", "a × b × h"], answer: 0 },
        { question: "Diện tích hình vuông cạnh 60m là:", options: ["3600 m²", "240 m²", "120 m²", "360 m²"], answer: 0 },
        { question: "Chu vi hình vuông cạnh 60m là:", options: ["240 m", "3600 m", "120 m", "60 m"], answer: 0 },
        { question: "Chu vi hình chữ nhật có chu vi bằng hình vuông cạnh 60m là:", options: ["240 m", "120 m", "480 m", "360 m"], answer: 0 },
        { question: "Hcn có chu vi 240m, chiều dài gấp đôi chiều rộng. Rộng là:", options: ["40 m", "80 m", "60 m", "120 m"], answer: 0 },
        { question: "Hcn có chu vi 240m, chiều dài gấp đôi chiều rộng. Dài là:", options: ["80 m", "40 m", "120 m", "160 m"], answer: 0 },
        { question: "Diện tích hcn có dài 80m, rộng 40m là:", options: ["3200 m²", "120 m²", "240 m²", "320 m²"], answer: 0 },
        { question: "Đường kính hình tròn là 24cm. Bán kính là:", options: ["12 cm", "24 cm", "48 cm", "6 cm"], answer: 0 },
        { question: "Diện tích đĩa sứ hình tròn đường kính 24cm là:", options: ["452,16 cm²", "150,72 cm²", "75,36 cm²", "1808,64 cm²"], answer: 0 },
        { question: "Diện tích hình tròn có bán kính 10cm là:", options: ["314 cm²", "31,4 cm²", "62,8 cm²", "157 cm²"], answer: 0 },
        { question: "Một tam giác có đáy 12cm, cao 10cm. S là:", options: ["60 cm²", "120 cm²", "22 cm²", "11 cm²"], answer: 0 },
        { question: "Hình thang có đáy 15cm, 9cm; cao 10cm. S là:", options: ["120 cm²", "240 cm²", "150 cm²", "90 cm²"], answer: 0 },
        { question: "Chu vi hình vuông là 20cm. S là:", options: ["25 cm²", "20 cm²", "16 cm²", "400 cm²"], answer: 0 },
        { question: "S hình vuông là 49 cm². Chu vi là:", options: ["28 cm", "14 cm", "7 cm", "49 cm"], answer: 0 },
        { question: "Bán kính hình tròn tăng gấp đôi thì chu vi tăng:", options: ["2 lần", "4 lần", "3,14 lần", "Không đổi"], answer: 0 },
        { question: "Bán kính hình tròn tăng gấp đôi thì diện tích tăng:", options: ["4 lần", "2 lần", "8 lần", "16 lần"], answer: 0 },
        { question: "1 m² bằng bao nhiêu dm²?", options: ["100", "10", "1000", "0,1"], answer: 0 },
        { question: "1 ha bằng bao nhiêu m²?", options: ["10 000", "100", "1 000", "100 000"], answer: 0 },
        { question: "Đường kính 6dm, chu vi hình tròn là:", options: ["18,84 dm", "9,42 dm", "113,04 dm", "3,14 dm"], answer: 0 },
        { question: "Cạnh hcn là 5m and 3m. Chu vi là:", options: ["16 m", "15 m", "8 m", "30 m"], answer: 0 },
        { question: "Diện tích hình thang có trung bình cộng 2 đáy là 10cm, cao 5cm là:", options: ["50 cm²", "100 cm²", "25 cm²", "15 cm²"], answer: 0 }
    ]
};

// --- Logic Functions ---
window.check_162_1 = () => {
    const v = (id) => document.getElementById('162-1-' + id).value.trim().toLowerCase();
    let score = 0;
    const correctVals = { '1': ['a', 'b'], '2': ['b', 'a'], '3': ['a', 'b'], '4': ['b', 'a'], '5': 'a', '6': 'a', '7': 'a', '8': '3600', '9': '3200' };

    if (correctVals['1'].includes(v('1'))) score++;
    if (correctVals['2'].includes(v('2'))) score++;
    if (correctVals['3'].includes(v('3'))) score++;
    if (correctVals['4'].includes(v('4'))) score++;
    if (v('5') === correctVals['5']) score++;
    if (v('6') === correctVals['6']) score++;
    if (v('7') === correctVals['7']) score++;
    if (v('8') === correctVals['8']) score++;
    if (v('9') === correctVals['9']) score++;

    const total = 9;
    const isCorrect = score === total;
    const rightAnswer = "a) HCN: P=(a+b)x2, S=axb; HV: P=ax4, S=axa; b) S hoa=3600, S rau=3200";
    const studentAnswer = "Đã điền các ô trống";
    const guidance = "Em hãy nhớ lại công thức tính chu vi và diện tích của hình chữ nhật và hình vuông. Với bài toán giải, hãy tính chu vi hình vuông trước để tìm chu vi hình chữ nhật, từ đó tìm được chiều dài và chiều rộng mảnh vườn rau.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Rất tốt! Em đã nắm vững các công thức hình học cơ bản. 📐</p>
            <div class="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>a) Công thức đúng là:</p>
                <p>• HCN: P = (a + b) × 2 ; S = a × b.</p>
                <p>• HV: P = a × 4 ; S = a × a.</p>
                <p>b) Giải toán:</p>
                <p>• Diện tích vườn hoa hình vuông: 60 × 60 = <b>3600</b> (m²).</p>
                <p>• Chu vi vườn hoa (cũng là chu vi vườn rau): 60 × 4 = 240 (m).</p>
                <p>• Nửa chu vi vườn rau: 240 : 2 = 120 (m).</p>
                <p>• Sơ đồ vườn rau: Rộng 1 phần, Dài 2 phần. Tổng 3 phần ứng với 120m.</p>
                <p>• Chiều rộng vườn rau: 120 : 3 = 40 (m). Chiều dài vườn rau: 40 × 2 = 80 (m).</p>
                <p>• Diện tích vườn rau: 80 × 40 = <b>3200</b> (m²).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 1. Điền công thức & Giải toán", Math.round(score / total * 100), "btn-check-162-1", 0, total, score);
};

window.check_162_2 = () => {
    const v = (id) => document.getElementById('162-2-' + id).value.trim().toLowerCase();
    let score = 0;
    if (v('1') === 'a') score++;
    if (v('2') === 'h') score++;
    if ((v('3') === 'a' && v('4') === 'b') || (v('3') === 'b' && v('4') === 'a')) score += 2;
    if (v('5') === 'h') score++;
    if (v('6') === '625') score++;
    if (v('7') === '1000') score++;

    const total = 7;
    const isCorrect = score === total;
    const rightAnswer = "a) S_tamgiac=(axh):2; S_thang=(a+b)xh:2; b) S ACD=625m2; S ABCD=1000m2";
    const studentAnswer = "Đã điền các ô trống";
    const guidance = "Em hãy kiểm tra lại công thức tính diện tích hình tam giác và hình thang. Ở câu b, diện tích tam giác ACD = (DC x AH) : 2. Diện tích hình thang ABCD = ((AB + DC) x AH) : 2.";
    const solution = `
        <div class="space-y-4">
            <p class="font-bold text-green-700">Chính xác! Em đã tính toán diện tích mảnh đất rất giỏi. 🌟</p>
            <div class="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 text-left text-xl md:text-2xl">
                <p><b>Lời giải chi tiết:</b></p>
                <p>a) Công thức:</p>
                <p>• Tam giác: S = (a &times; h) / 2.</p>
                <p>• Hình thang: S = (a + b) &times; h / 2.</p>
                <p>b) Giải toán:</p>
                <p>• Diện tích tam giác ACD là: (50 &times; 25) : 2 = <b>625</b> (m²).</p>
                <p>• Diện tích hình thang ABCD là: ((30 + 50) &times; 25) : 2 = <b>1000</b> (m²).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 2. Diện tích tam giác & thang", Math.round(score / total * 100), "btn-check-162-2", 0, total, score);
};

window.check_162_3 = () => {
    const v = (id) => document.getElementById('162-3-' + id).value.trim().toLowerCase().replace(',', '.');
    let score = 0;
    if (v('1') === 'r') score++;
    if (v('2') === 'r') score++;
    if (v('3') === 'r') score++;
    if (v('4') === '452.16' || v('4') === '452.160' || v('4') === '452,16') score++;

    const total = 4;
    const isCorrect = score === total;
    const rightAnswer = "a) C=dx3,14=rx2x3,14; S=rxrx3,14; b) S đĩa=314 cm2";
    const studentAnswer = "Đã điền các ô trống";
    const guidance = "Đừng quên công thức tính chu vi và diện tích hình tròn nhé! Chu vi bằng đường kính x 3,14; diện tích bằng bán kính x bán kính x 3,14.";
    const solution = `
        <div class="space-y-4 text-xl md:text-2xl">
            <p class="font-bold text-green-700">Rất tốt! Em đã nắm vững kiến thức về hình tròn. ⭕</p>
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>a) Công thức: C = d &times; 3,14 = r &times; 2 &times; 3,14 ; S = r &times; r &times; 3,14.</p>
                <p>b) Giải toán: Bán kính đĩa sứ là 24 : 2 = 12 (cm). Diện tích đĩa sứ hình tròn: 12 &times; 12 &times; 3,14 = <b>452,16</b> (cm²).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 3. Hình tròn", Math.round(score / total * 100), "btn-check-162-3", 0, total, score);
};

window.check_162_4 = () => {
    const val = document.getElementById('162-4-1').value.trim().replace(',', '.');
    const isCorrect = val === '86';
    const rightAnswer = "86 cm²";
    const studentAnswer = val + " cm²";
    const guidance = "Đừng quên công thức tính diện tích hình tròn nhé! S = r x r x 3,14. Ở bài 4, vì cắt hình tròn to nhất có thể từ hình vuông cạnh 20cm nên đường kính hình tròn chính bằng 20cm, tức bán kính là 10cm.";
    const solution = `
        <div class="space-y-4 text-xl md:text-2xl">
            <p class="font-bold text-green-700">Xuất sắc! Em đã tính toán phần diện tích còn lại rất chính xác. 🧠</p>
            <div class="bg-rose-50 p-4 rounded-xl border-2 border-rose-200 text-left">
                <p><b>Lời giải chi tiết:</b></p>
                <p>1. Diện tích hình vuông là: 20 &times; 20 = 400 (cm²).</p>
                <p>2. Vì cắt hình tròn to nhất nên đường kính hình tròn bằng cạnh hình vuông (d = 20cm), suy ra bán kính r = 10cm.</p>
                <p>3. Diện tích hình tròn là: 10 &times; 10 &times; 3,14 = 314 (cm²).</p>
                <p>4. Diện tích phần còn lại: 400 - 314 = <b>86</b> (cm²).</p>
            </div>
        </div>
    `;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);
    if (window.submitMathLesson) window.submitMathLesson("Bài 4. S còn lại", isCorrect ? 100 : 0, "btn-check-162-4", 0, 1, isCorrect ? 1 : 0);
};

window.lesson162 = lesson162;

