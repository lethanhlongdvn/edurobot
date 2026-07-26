export const lesson157 = {
    period: "157",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 2)",
    topic: "Ôn tập các phép tính",
    week: "32",

    content: `
        <div class="space-y-6 md:space-y-10">
            <!-- Bài 1: Tính rồi thử lại -->
            <div class="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">1</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 1. Tính rồi thử lại (theo mẫu SGK)</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Câu a -->
                    <div class="bg-amber-50/50 p-5 rounded-2xl border border-amber-200 space-y-3">
                        <p class="font-bold text-amber-900 text-lg">a) 8 549 + 9 627</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính:</label>
                            <input type="text" id="157-1-1" class="w-full px-3 py-2 border-2 border-gray-300 rounded-xl font-bold text-center text-lg" placeholder="Kết quả phép cộng">
                        </div>
                        <div class="pt-2 border-t border-amber-200">
                            <label class="block text-amber-800 font-bold mb-1">Thử lại: ... - 9 627</label>
                            <input type="text" id="157-1-1-t1" class="w-full px-3 py-2 border-2 border-amber-300 rounded-xl font-bold text-center text-lg mb-2" placeholder="Nhập lại tổng vừa tính">
                            <label class="block text-amber-800 font-bold mb-1">Kết quả thử lại (bằng 8 549):</label>
                            <input type="text" id="157-1-1-t3" class="w-full px-3 py-2 border-2 border-amber-300 rounded-xl font-bold text-center text-lg" placeholder="8 549">
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 space-y-3">
                        <p class="font-bold text-emerald-900 text-lg">b) 35,71 - 29,4</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính:</label>
                            <input type="text" id="157-1-2" class="w-full px-3 py-2 border-2 border-gray-300 rounded-xl font-bold text-center text-lg" placeholder="Kết quả phép trừ">
                        </div>
                        <div class="pt-2 border-t border-emerald-200">
                            <label class="block text-emerald-800 font-bold mb-1">Thử lại: ... + 29,4</label>
                            <input type="text" id="157-1-2-t1" class="w-full px-3 py-2 border-2 border-emerald-300 rounded-xl font-bold text-center text-lg mb-2" placeholder="Hiệu vừa tính">
                            <label class="block text-emerald-800 font-bold mb-1">Kết quả thử lại (bằng 35,71):</label>
                            <input type="text" id="157-1-2-t3" class="w-full px-3 py-2 border-2 border-emerald-300 rounded-xl font-bold text-center text-lg" placeholder="35,71">
                        </div>
                    </div>

                    <!-- Câu c -->
                    <div class="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-200 space-y-3">
                        <p class="font-bold text-indigo-900 text-lg">c) 11/9 - 3/4</p>
                        <div>
                            <label class="block text-gray-600 font-medium mb-1">Tính (dạng a/b):</label>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="157-1-3-n" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Tử">
                                <span class="text-2xl font-bold">/</span>
                                <input type="text" id="157-1-3-d" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Mẫu">
                            </div>
                        </div>
                        <div class="pt-2 border-t border-indigo-200">
                            <label class="block text-indigo-800 font-bold mb-1">Thử lại (lấy Hiệu + 3/4):</label>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="157-1-3-tn" class="w-16 px-2 py-1 border-2 border-indigo-300 rounded-lg text-center font-bold" placeholder="Tử">
                                <span class="text-2xl font-bold">/</span>
                                <input type="text" id="157-1-3-td" class="w-16 px-2 py-1 border-2 border-indigo-300 rounded-lg text-center font-bold" placeholder="Mẫu">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-157-1" onclick="window.check_157_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2: Tính giá trị biểu thức -->
            <div class="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">2</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 2. Tính giá trị của biểu thức</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-blue-50/50 p-5 rounded-2xl border border-blue-200 space-y-3">
                        <p class="font-bold text-blue-900 text-lg">a) 175 - (59,3 + 35,7) - 24,5</p>
                        <div class="flex items-center gap-3">
                            <span class="font-bold text-gray-700">Đáp số:</span>
                            <input type="text" id="157-2-1" class="w-48 px-3 py-2 border-2 border-gray-300 rounded-xl font-bold text-center text-lg" placeholder="Nhập kết quả">
                        </div>
                    </div>

                    <div class="bg-purple-50/50 p-5 rounded-2xl border border-purple-200 space-y-3">
                        <p class="font-bold text-purple-900 text-lg">b) 13/18 + (7/6 - 7/12 - 1/4)</p>
                        <div class="flex items-center gap-3">
                            <span class="font-bold text-gray-700">Đáp số (dạng a/b):</span>
                            <div class="flex items-center gap-2">
                                <input type="text" id="157-2-2-n" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Tử">
                                <span class="text-2xl font-bold">/</span>
                                <input type="text" id="157-2-2-d" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Mẫu">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-157-2" onclick="window.check_157_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3: Chú Tư mua đồ nội thất -->
            <div class="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">3</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 3. Bài toán thực tế: Chú Tư mua ti vi, tủ kệ và loa</h3>
                </div>

                <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 space-y-4">
                    <p class="text-gray-800 text-lg leading-relaxed">
                        Khi chuyển về nhà mới, chú Tư mua một ti vi, một tủ kệ ti vi và một bộ loa thùng hết <span class="font-bold text-blue-700">17 100 000 đồng</span>. Biết rằng số tiền mua ti vi và bộ loa thùng là <span class="font-bold text-blue-700">13 600 000 đồng</span>, số tiền mua ti vi nhiều hơn số tiền mua bộ loa thùng là <span class="font-bold text-blue-700">4 200 000 đồng</span>.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div>
                            <label class="block text-emerald-900 font-bold mb-1">a) Giá tiền ti vi (đồng):</label>
                            <input type="text" id="157-3-1" class="w-full px-3 py-2 border-2 border-emerald-300 rounded-xl font-bold text-center text-lg" placeholder="Giá ti vi">
                        </div>
                        <div>
                            <label class="block text-emerald-900 font-bold mb-1">b) Giá tiền tủ kệ ti vi (đồng):</label>
                            <input type="text" id="157-3-2" class="w-full px-3 py-2 border-2 border-emerald-300 rounded-xl font-bold text-center text-lg" placeholder="Giá tủ kệ">
                        </div>
                        <div>
                            <label class="block text-emerald-900 font-bold mb-1">c) Giá tiền bộ loa (đồng):</label>
                            <input type="text" id="157-3-3" class="w-full px-3 py-2 border-2 border-emerald-300 rounded-xl font-bold text-center text-lg" placeholder="Giá loa">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-157-3" onclick="window.check_157_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4: Bánh chưng của Mai -->
            <div class="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">4</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 4. Giải bài toán</h3>
                </div>

                <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-200 space-y-4">
                    <p class="text-gray-800 text-lg leading-relaxed">
                        Buổi sáng, mẹ bóc một cái bánh chưng. Mai ăn <span class="font-bold text-blue-700">1/8</span> cái bánh chưng, bố ăn <span class="font-bold text-blue-700">1/4</span> cái bánh chưng. Hỏi còn lại bao nhiêu phần bánh chưng chưa ăn?
                    </p>

                    <div class="flex items-center gap-3 pt-2">
                        <span class="font-bold text-gray-700 text-lg">Đáp số (phân số dạng a/b):</span>
                        <div class="flex items-center gap-2">
                            <input type="text" id="157-4-n" class="w-16 px-2 py-1 border-2 border-rose-300 rounded-lg text-center font-bold text-lg" placeholder="Tử">
                            <span class="text-2xl font-bold">/</span>
                            <input type="text" id="157-4-d" class="w-16 px-2 py-1 border-2 border-rose-300 rounded-lg text-center font-bold text-lg" placeholder="Mẫu">
                        </div>
                        <span class="font-bold text-gray-700 text-lg">cái bánh chưng</span>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-157-4" onclick="window.check_157_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quiz: [
        {
            question: "Thứ tự thực hiện các phép tính trong biểu thức không có dấu ngoặc là:",
            options: ["Nhân và chia trước, cộng và trừ sau", "Cộng và trừ trước, nhân và chia sau", "Thực hiện từ phải sang trái", "Thực hiện phép tính nào trước cũng được"],
            answer: 0
        },
        {
            question: "Trong một biểu thức có dấu ngoặc, ta thực hiện phép tính như thế nào?",
            options: ["Trong ngoặc trước, ngoài ngoặc sau", "Ngoài ngoặc trước, trong ngoặc sau", "Chỉ tính phép tính trong ngoặc", "Tính từ trái sang phải bỏ qua dấu ngoặc"],
            answer: 0
        },
        {
            question: "Phép tính 1/2 + 1/4 có kết quả là:",
            options: ["3/4", "2/6", "1/8", "3/8"],
            answer: 0
        },
        {
            question: "Thử lại phép trừ a - b = c ta làm thế nào?",
            options: ["Lấy c + b", "Lấy a + b", "Lấy b - c", "Lấy a + c"],
            answer: 0
        },
        {
            question: "Giá trị của biểu thức (10 + 20) × 2 là:",
            options: ["60", "50", "40", "30"],
            answer: 0
        },
        {
            question: "Để tính nhanh 12,5 + 8,9 + 7,5 ta nhóm hai số nào?",
            options: ["(12,5 + 7,5) + 8,9", "(12,5 + 8,9) + 7,5", "(8,9 + 7,5) + 12,5", "Không nhóm được"],
            answer: 0
        },
        {
            question: "Biết x - 5,4 = 12,6. Giá trị của x là:",
            options: ["18", "7,2", "17,2", "18,2"],
            answer: 0
        },
        {
            question: "Kết quả phép tính 1 - 2/5 là:",
            options: ["3/5", "2/5", "1/5", "4/5"],
            answer: 0
        },
        {
            question: "Muốn tìm số bị trừ ta làm thế nào?",
            options: ["Lấy hiệu cộng với số trừ", "Lấy hiệu trừ đi số trừ", "Lấy số trừ trừ đi hiệu", "Lấy hiệu nhân với số trừ"],
            answer: 0
        },
        {
            question: "Tổng của 12,4 và 8,6 là:",
            options: ["21", "20", "21,1", "20,9"],
            answer: 0
        },
        {
            question: "Phép tính 5/6 - 1/3 có kết quả rút gọn là:",
            options: ["1/2", "4/3", "4/6", "2/3"],
            answer: 0
        },
        {
            question: "Kết quả của 0,5 + 0,25 + 0,75 là:",
            options: ["1,5", "1,25", "1,75", "2,0"],
            answer: 0
        },
        {
            question: "Nếu a + b = 100 và a = 35 thì b bằng:",
            options: ["65", "75", "55", "45"],
            answer: 0
        },
        {
            question: "Biểu thức a - b - c bằng biểu thức nào sau đây?",
            options: ["a - (b + c)", "a - (b - c)", "(a + b) - c", "a + b + c"],
            answer: 0
        },
        {
            question: "An có 50 000 đồng, An mua sách hết 30 000 đồng và mua bút hết 10 000 đồng. Số tiền An còn lại là:",
            options: ["10 000 đồng", "20 000 đồng", "15 000 đồng", "5 000 đồng"],
            answer: 0
        }
    ]
};

// Đăng ký global
window.lesson157 = lesson157;

// Tải logic kiểm tra
import './logic.js';

